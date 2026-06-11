import crypto from 'crypto';

export class PasswordHasherService {
  private static readonly algorithm = 'scrypt';

  private static readonly keyLength = 64;

  hash(password: string): string {
    const salt = crypto.randomBytes(16).toString('base64url');
    const derivedKey = crypto.scryptSync(password, salt, PasswordHasherService.keyLength);

    return `${ PasswordHasherService.algorithm }$${ salt }$${ derivedKey.toString('base64url') }`;
  }

  verify(password: string, storedHash: string): boolean {
    const [algorithm, salt, hash] = storedHash.split('$');

    if (algorithm !== PasswordHasherService.algorithm || !salt || !hash) {
      return false;
    }

    const derivedKey = crypto.scryptSync(password, salt, PasswordHasherService.keyLength);
    const storedKey = Buffer.from(hash, 'base64url');

    return (
      derivedKey.length === storedKey.length
      && crypto.timingSafeEqual(derivedKey, storedKey)
    );
  }
}
