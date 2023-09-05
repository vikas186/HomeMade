const app = require('./app');
const{PORT} = require('./utility/config');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'homeMade API',
      version: '1.0.0',
      description: 'CRUD API with Mongodb documention',
    },
    components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use('/api/', require('./routes/users.routes'))
app.use('/api/', require('./routes/category.routes'))
app.use('/api/', require('./routes/location.routes'))
app.use('/api/', require('./routes/product.routes'))

app.listen(PORT,()=> console.log(`Server is running on ${PORT} `))
