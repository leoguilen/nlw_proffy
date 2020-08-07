import express, { Request, Response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

import { createUserController } from './useCases/CreateUser';
import { listUsersController } from './useCases/ListUsers';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/users', (request: Request, response: Response) => {
  return listUsersController.handleGetAll(request,response);
});
routes.get('/users/:id', (request: Request, response: Response) => {
  return listUsersController.handleGetById(request,response);
});
routes.post('/users', (request: Request, response: Response) => {
  return createUserController.handleCreate(request, response);
});

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;