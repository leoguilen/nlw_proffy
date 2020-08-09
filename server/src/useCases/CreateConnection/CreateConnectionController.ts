import { Request, Response } from 'express';
import { CreateConnectionUseCase } from './CreateConnectionUseCase';

export class CreateConnectionController {
  constructor(
        private createConnectionUseCase: CreateConnectionUseCase
  ) {}

  async handleCreate(request: Request, response: Response): Promise<Response> {
    const { userId } = request.body;

    try {
      await this.createConnectionUseCase.create({ userId });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.' 
      });  
    }
  }
}