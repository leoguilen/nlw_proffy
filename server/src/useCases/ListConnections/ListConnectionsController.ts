import { Request, Response } from 'express';
import { ListConnectionsUseCase } from './ListConnectionsUseCase';

export class ListConnectionsController {
  constructor(
        private listConnectionsUseCase: ListConnectionsUseCase
  ) {}

  async handleGetTotal(request: Request, response: Response): Promise<Response> {
    try {
      const total = await this.listConnectionsUseCase.getTotal();
      return response.status(200).json({ total });

    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.' 
      }); 
    }
  }
}