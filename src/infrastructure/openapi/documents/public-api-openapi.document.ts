type OpenApiSchema = Record<string, unknown>;

export class PublicApiOpenApiDocument {
  build(): OpenApiSchema {
    return {
      openapi: '3.1.0',
      info: {
        title: 'Muputun API',
        version: '0.1.0',
        description: 'Documentacion local de endpoints backend en pages/api.',
      },
      servers: [
        {
          url: '/',
          description: 'Servidor actual',
        },
      ],
      tags: [
        {
          name: 'Public Auth',
          description: 'Autenticacion publica de usuarios.',
        },
        {
          name: 'Health',
          description: 'Health checks backend.',
        },
        {
          name: 'Email',
          description: 'Endpoints de contacto por correo.',
        },
      ],
      paths: {
        '/api/public-auth/login': {
          post: {
            tags: ['Public Auth'],
            summary: 'Login de usuario',
            operationId: 'publicAuthLogin',
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/LoginRequest',
                  },
                },
              },
            },
            responses: {
              200: {
                description: 'Sesion iniciada.',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/AuthSuccessResponse',
                    },
                  },
                },
              },
              400: {
                $ref: '#/components/responses/AuthInputInvalid',
              },
              401: {
                $ref: '#/components/responses/AuthCredentialsInvalid',
              },
              405: {
                $ref: '#/components/responses/MethodNotAllowed',
              },
              500: {
                $ref: '#/components/responses/InternalServerError',
              },
            },
          },
        },
        '/api/public-auth/register': {
          post: {
            tags: ['Public Auth'],
            summary: 'Registro de usuario',
            operationId: 'publicAuthRegister',
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/RegisterRequest',
                  },
                },
              },
            },
            responses: {
              201: {
                description: 'Usuario registrado.',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/AuthSuccessResponse',
                    },
                  },
                },
              },
              400: {
                $ref: '#/components/responses/AuthInputInvalid',
              },
              405: {
                $ref: '#/components/responses/MethodNotAllowed',
              },
              500: {
                $ref: '#/components/responses/InternalServerError',
              },
            },
          },
        },
        '/api/public-auth/renew-token': {
          post: {
            tags: ['Public Auth'],
            summary: 'Renovar access token',
            operationId: 'publicAuthRenewToken',
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/RenewTokenRequest',
                  },
                },
              },
            },
            responses: {
              200: {
                description: 'Token renovado.',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/AuthSuccessResponse',
                    },
                  },
                },
              },
              400: {
                $ref: '#/components/responses/AuthInputInvalid',
              },
              401: {
                $ref: '#/components/responses/AuthTokenInvalid',
              },
              405: {
                $ref: '#/components/responses/MethodNotAllowed',
              },
              500: {
                $ref: '#/components/responses/InternalServerError',
              },
            },
          },
        },
        '/api/health/database': {
          get: {
            tags: ['Health'],
            summary: 'Health check de Postgres',
            operationId: 'databaseHealth',
            responses: {
              200: {
                description: 'Conexion a Postgres saludable.',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/DatabaseHealthSuccessResponse',
                    },
                  },
                },
              },
              405: {
                $ref: '#/components/responses/MethodNotAllowed',
              },
              500: {
                $ref: '#/components/responses/InternalServerError',
              },
            },
          },
        },
        '/api/email/contact': {
          post: {
            tags: ['Email'],
            summary: 'Enviar mensaje de contacto',
            operationId: 'sendContactEmail',
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ContactMessageRequest',
                  },
                },
              },
            },
            responses: {
              200: {
                description: 'Mensaje enviado.',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/ContactMessageSuccessResponse',
                    },
                  },
                },
              },
              400: {
                description: 'Metodo invalido segun implementacion actual.',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/LegacyErrorResponse',
                    },
                  },
                },
              },
              500: {
                description: 'Error enviando correo.',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/LegacyErrorResponse',
                    },
                  },
                },
              },
            },
          },
        },
      },
      components: {
        responses: this.buildResponses(),
        schemas: this.buildSchemas(),
      },
    };
  }

  private buildResponses(): OpenApiSchema {
    return {
      AuthInputInvalid: {
        description: 'Input de autenticacion invalido.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ApiErrorResponse',
            },
          },
        },
      },
      AuthCredentialsInvalid: {
        description: 'Credenciales invalidas.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ApiErrorResponse',
            },
          },
        },
      },
      AuthTokenInvalid: {
        description: 'Token invalido o expirado.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ApiErrorResponse',
            },
          },
        },
      },
      MethodNotAllowed: {
        description: 'Metodo HTTP no permitido.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ApiErrorResponse',
            },
          },
        },
      },
      InternalServerError: {
        description: 'Error interno no controlado.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ApiErrorResponse',
            },
          },
        },
      },
    };
  }

  private buildSchemas(): OpenApiSchema {
    return {
      LoginRequest: {
        type: 'object',
        required: ['email', 'password'],
        additionalProperties: false,
        properties: {
          email: {
            type: 'string',
            format: 'email',
            example: 'admin@muputun.cl',
          },
          password: {
            type: 'string',
            format: 'password',
            minLength: 6,
            maxLength: 128,
            example: 'secret123',
          },
        },
      },
      RegisterRequest: {
        type: 'object',
        required: ['displayName', 'email', 'password'],
        additionalProperties: false,
        properties: {
          displayName: {
            type: 'string',
            maxLength: 80,
            example: 'Usuario Muputun',
          },
          email: {
            type: 'string',
            format: 'email',
            example: 'cliente@muputun.cl',
          },
          password: {
            type: 'string',
            format: 'password',
            minLength: 6,
            maxLength: 128,
            example: 'secret123',
          },
        },
      },
      RenewTokenRequest: {
        type: 'object',
        required: ['token'],
        additionalProperties: false,
        properties: {
          token: {
            type: 'string',
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.payload.signature',
          },
        },
      },
      ContactMessageRequest: {
        type: 'object',
        required: ['name', 'lastName', 'emailAddress', 'subject', 'message'],
        additionalProperties: false,
        properties: {
          name: {
            type: 'string',
            example: 'Camilo',
          },
          lastName: {
            type: 'string',
            example: 'Perez',
          },
          emailAddress: {
            type: 'string',
            format: 'email',
            example: 'camilo@example.com',
          },
          subject: {
            type: 'string',
            example: 'Consulta comercial',
          },
          message: {
            type: 'string',
            example: 'Necesito informacion sobre productos GNSS.',
          },
        },
      },
      AuthUser: {
        type: 'object',
        required: ['id', 'email', 'displayName', 'roles'],
        properties: {
          id: {
            type: 'string',
          },
          email: {
            type: 'string',
            format: 'email',
          },
          displayName: {
            type: 'string',
          },
          roles: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['customer', 'admin'],
            },
          },
        },
      },
      AccessToken: {
        type: 'object',
        required: ['token', 'expiresAt'],
        properties: {
          token: {
            type: 'string',
          },
          expiresAt: {
            type: 'number',
            description: 'Unix timestamp en milisegundos.',
          },
        },
      },
      AuthResult: {
        type: 'object',
        required: ['user', 'accessToken'],
        properties: {
          user: {
            $ref: '#/components/schemas/AuthUser',
          },
          accessToken: {
            $ref: '#/components/schemas/AccessToken',
          },
        },
      },
      DatabaseHealth: {
        type: 'object',
        required: ['databaseName', 'isHealthy', 'checkedAt', 'userName'],
        properties: {
          databaseName: {
            type: 'string',
            example: 'muputun_dev',
          },
          isHealthy: {
            type: 'boolean',
            example: true,
          },
          checkedAt: {
            type: 'string',
            format: 'date-time',
          },
          userName: {
            type: 'string',
            example: 'muputun',
          },
        },
      },
      ApiSuccessResponse: {
        type: 'object',
        required: ['ok', 'data', 'meta'],
        properties: {
          ok: {
            type: 'boolean',
            const: true,
          },
          data: {
            type: 'object',
          },
          meta: {
            type: 'object',
          },
        },
      },
      AuthSuccessResponse: {
        allOf: [
          {
            $ref: '#/components/schemas/ApiSuccessResponse',
          },
          {
            type: 'object',
            properties: {
              data: {
                $ref: '#/components/schemas/AuthResult',
              },
            },
          },
        ],
      },
      DatabaseHealthSuccessResponse: {
        allOf: [
          {
            $ref: '#/components/schemas/ApiSuccessResponse',
          },
          {
            type: 'object',
            properties: {
              data: {
                $ref: '#/components/schemas/DatabaseHealth',
              },
            },
          },
        ],
      },
      ContactMessageSuccessResponse: {
        type: 'object',
        required: ['ok', 'message'],
        properties: {
          ok: {
            type: 'boolean',
            example: true,
          },
          message: {
            type: 'string',
            example: 'Mensaje enviado con exito',
          },
        },
      },
      ApiErrorResponse: {
        type: 'object',
        required: ['ok', 'code', 'message', 'requestId'],
        properties: {
          ok: {
            type: 'boolean',
            const: false,
          },
          code: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
          requestId: {
            type: 'string',
          },
        },
      },
      LegacyErrorResponse: {
        type: 'object',
        required: ['ok', 'message'],
        properties: {
          ok: {
            type: 'boolean',
            example: false,
          },
          message: {
            type: 'string',
          },
        },
      },
    };
  }
}
