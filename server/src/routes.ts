import express, { Request, Response } from 'express';

import { createUserController } from './useCases/CreateUser';
import { createClassController } from './useCases/CreateClass';
import { listUsersController } from './useCases/ListUsers';
import { listClassesController } from './useCases/ListClasses';
import { createConnectionController } from './useCases/CreateConnection';
import { listConnectionsController } from './useCases/ListConnections';

const routes = express.Router();

// const classesController = new ClassesController();
// const connectionsController = new ConnectionsController();

// Users
routes.get('/users', (request: Request, response: Response) => {
  return listUsersController.handleGetAll(request,response);
});
routes.get('/users/:id', (request: Request, response: Response) => {
  return listUsersController.handleGetById(request,response);
});
routes.post('/users', (request: Request, response: Response) => {
  return createUserController.handleCreate(request, response);
});

// Classes
routes.get('/classes', (request: Request, response: Response) => {
  return listClassesController.handleGetAll(request,response);
});
routes.get('/classes/:id', (request: Request, response: Response) => {
  return listClassesController.handleGetById(request,response);
});
routes.post('/classes', (request: Request, response: Response) => {
  return createClassController.handleCreate(request, response);
});

// Connections
routes.get('/connections', (request: Request, response: Response) => {
  return listConnectionsController.handleGetTotal(request, response);
});
routes.post('/connections', (request: Request, response: Response) => {
  return createConnectionController.handleCreate(request, response);
});

// routes.get('/classes', classesController.index);
// routes.post('/classes', classesController.create);

export default routes;