import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Despesa } from './despesa.entity';

export class DespesaController {
  public async list(req: Request, res: Response) {

    const despesas = await  await AppDataSource.manager.find(Despesa)

    res.status(200).json({ dados: despesas });
  }
}
