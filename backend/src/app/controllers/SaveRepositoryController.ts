import { Request, Response } from 'express';
import RepositoryModel from '../model/RepositoryModel';
import SaveRepositoryServices from '../services/SaveRepositoryServices';

export default class SaveRepositoryController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const response = await RepositoryModel.find();
      return res.status(201).json(response);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const response = await RepositoryModel.findById({ _id: id });
      return res.status(201).json(response);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { repository } = req.body;

      const _saveRepositoryServices = new SaveRepositoryServices();

      const responseRepository = await _saveRepositoryServices.execute({
        repository,
      });

      return res.status(201).json(responseRepository);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
