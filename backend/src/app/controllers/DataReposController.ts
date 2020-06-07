import { Request, Response } from 'express';
import DataReposServices from '../services/DataReposServices';

export default class DataReposController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { username, page } = req.body;

      const _dataReposServices = new DataReposServices();

      const responseRepos = await _dataReposServices.execute({ username, page });

      return res.status(201).json(responseRepos);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
