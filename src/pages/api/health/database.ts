import type {
  NextApiRequest,
  NextApiResponse,
} from 'next';
import {
  ApiErrorMapper,
  ApiResponseSender,
  HttpMethodGuard,
  RequestIdResolver,
} from '@/core/backend';
import { consoleErrorHandler } from '@/core/logger';
import { DatabaseHealthCompositionRoot } from '@/infrastructure/postgres';

const responseSender = new ApiResponseSender();
const requestIdResolver = new RequestIdResolver();
const httpMethodGuard = new HttpMethodGuard(responseSender);
const apiErrorMapper = new ApiErrorMapper();
const databaseHealthCompositionRoot = new DatabaseHealthCompositionRoot();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestId = requestIdResolver.resolve(req);

  if (!httpMethodGuard.require(req, res, 'GET', requestId)) return;

  try {
    const result = await databaseHealthCompositionRoot
      .createCheckDatabaseHealthUseCase()
      .execute();

    return responseSender.sendSuccess(res, result);
  } catch (error) {
    const mappedError = apiErrorMapper.map(error);

    consoleErrorHandler(error, 'databaseHealthApiHandler');

    return responseSender.sendError(res, { ...mappedError, requestId });
  }
}
