import type {
  NextApiRequest,
  NextApiResponse,
} from 'next';
import {
  RegisterUserDto,
} from '@/application/auth';
import {
  ApiErrorMapper,
  ApiResponseSender,
  HttpMethodGuard,
  RequestIdResolver,
} from '@/core/backend';
import { consoleErrorHandler } from '@/core/logger';
import { PublicAuthCompositionRoot } from '@/infrastructure/auth';

const responseSender = new ApiResponseSender();
const requestIdResolver = new RequestIdResolver();
const httpMethodGuard = new HttpMethodGuard(responseSender);
const apiErrorMapper = new ApiErrorMapper();
const publicAuthCompositionRoot = new PublicAuthCompositionRoot();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestId = requestIdResolver.resolve(req);

  if (!httpMethodGuard.require(req, res, 'POST', requestId)) return;

  try {
    const input = RegisterUserDto.fromUnknown(req.body);
    const result = await publicAuthCompositionRoot
      .createRegisterUserUseCase()
      .execute(input);

    return responseSender.sendSuccess(res, result, 201);
  } catch (error) {
    const mappedError = apiErrorMapper.map(error);

    if (mappedError.statusCode >= 500) {
      consoleErrorHandler(error, 'publicAuthRegisterApiHandler');
    }

    return responseSender.sendError(res, { ...mappedError, requestId });
  }
}
