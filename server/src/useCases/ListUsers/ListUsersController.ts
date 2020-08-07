import { ListUsersUseCase } from './ListUsersUseCase';

import { Request, Response } from 'express';

export class ListUsersController {
  constructor(
        private listUsersUseCase: ListUsersUseCase
  ) {}

  async handleGetAll(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.listUsersUseCase.getAll();
      return response.status(200).json(users);    
    
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.' 
      });
    }
  }

  async handleGetById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    
    try {
      const user = await this.listUsersUseCase.getById(Number(id));
      
      if(!user) 
        return response.sendStatus(404);
      
      return response.status(200).json(user);        
    
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.' 
      });
    }
  }
}