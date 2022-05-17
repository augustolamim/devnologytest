import { Router } from 'express';

//Controllers
import ApiController from './app/controllers/ApiController';

//swagger api documentation
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

const routes = new Router();

// / route
routes.get('/', (req, res) => {
    res.json({ message: 'Api de teste Devnology' })
  })

//Api routes
routes.get('/api', ApiController.index);

//Api documentation
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


export default routes;
