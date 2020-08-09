import { Request, Response } from 'express';

import { ListClassesUseCase } from './ListClassesUseCase';

export class ListClassesController {
  constructor(
        private listClassesUseCase: ListClassesUseCase
  ) {}

  async handleGetAll(request: Request, response: Response): Promise<Response> {
    try {
      const classes = await this.listClassesUseCase.getAll();
      return response.status(200).json(classes);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.' 
      }); 
    }
  }

  async handleGetById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const classObj = await this.listClassesUseCase.getById(id);

      if(!classObj)
        return response.sendStatus(404);

      return response.status(200).json(classObj);
            
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.' 
      });
    }
  }
}