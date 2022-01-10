import { SwaggerConfig } from '../configurations';
import swaggerJSDoc, { Options, SwaggerDefinition } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Router } from 'express';
import { BasicAuth } from '../middlewares/BasicAuth';

const swaggerDefinition: SwaggerDefinition = {
  openapi: SwaggerConfig.OPENAPI_VERSION,
  info: {
    title: SwaggerConfig.SWAGGER_TITLE,
    version: SwaggerConfig.API_VERSION,
  },
  servers: [
    {
      url: SwaggerConfig.SERVER_URL,
      description: SwaggerConfig.SERVER_DESCRIPTION,
    },
  ],
};

const jsdocOptions: Options = {
  swaggerDefinition,
  apis: ['./**/*.ts'],
};

// TODO: find types for that
const swaggerSpec = swaggerJSDoc(jsdocOptions);

export const Swagger: Router = Router();

Swagger.use(
  SwaggerConfig.DOCS_ENDPOINT,
  BasicAuth,
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec),
);
