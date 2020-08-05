import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

import { createUserController } from './useCases/CreateUser';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/users', createUserController.handle);

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;