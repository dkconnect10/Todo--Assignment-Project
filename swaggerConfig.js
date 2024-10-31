// swaggerConfig.js
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      description: 'API documentation for Todo Assignment Project',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:2000',
        description: 'Local server',
      },
    ],
  },
  apis: ['./index.js'], // आपकी API route फाइल का path
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };
