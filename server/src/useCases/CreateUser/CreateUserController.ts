import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ){}
  
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, avatar, whatsapp, bio } = request.body;
    
    try {
      await this.createUserUseCase.execute({
        name,
        avatar,
        whatsapp,
        bio
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.' 
      });
    }
  }    
}