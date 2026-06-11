export class InvalidAuthInputError extends Error {
  constructor(message = 'Input de autenticación inválido.') {
    super(message);
    this.name = 'InvalidAuthInputError';
  }
}

export class InvalidEmailAddressError extends InvalidAuthInputError {
  constructor() {
    super('El correo no es válido.');
    this.name = 'InvalidEmailAddressError';
  }
}

export class InvalidPasswordError extends InvalidAuthInputError {
  constructor() {
    super('La contraseña no cumple el largo permitido.');
    this.name = 'InvalidPasswordError';
  }
}

export class InvalidDisplayNameError extends InvalidAuthInputError {
  constructor() {
    super('El nombre no es válido.');
    this.name = 'InvalidDisplayNameError';
  }
}

export class AuthEmailAlreadyRegisteredError extends InvalidAuthInputError {
  constructor() {
    super('El correo ya está registrado.');
    this.name = 'AuthEmailAlreadyRegisteredError';
  }
}

export class InvalidCredentialsError extends Error {
  constructor() {
    super('Credenciales inválidas.');
    this.name = 'InvalidCredentialsError';
  }
}

export class InvalidAuthTokenError extends Error {
  constructor() {
    super('Token de autenticación inválido.');
    this.name = 'InvalidAuthTokenError';
  }
}
