import { Router } from 'express';

//Controllers
import ApiController from './app/controllers/ApiController';

//swagger api documentation
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

const routes = new Router();

//Api routes
routes.get('/api', ApiController.index);

//Api documentation
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


export default routes;