import { Router } from 'express';
import DataReposController from '../app/controllers/DataReposController';
import SaveRepositoryController from '../app/controllers/SaveRepositoryController';

//instances
const routes = Router();
const _dataReposServices = new DataReposController();
const _saveRepositoryController = new SaveRepositoryController();

//Routes
routes.post('/repos', _dataReposServices.create);
routes.post('/create', _saveRepositoryController.create);
routes.get('/repos', _saveRepositoryController.index);
routes.get('/repos/:id', _saveRepositoryController.show);

export default routes;
