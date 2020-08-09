import { Request, Response } from 'express';
import { CreateClassUseCase } from './CreateClassUseCase';

export class CreateClassController {
  constructor(private createClassUseCase: CreateClassUseCase) {}

  async handleCreate(request: Request, response: Response): Promise<Response> {
    const { subject, cost, userId } = request.body;

    try {
      await this.createClassUseCase.create({
        subject,
        cost,
        userId,
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
