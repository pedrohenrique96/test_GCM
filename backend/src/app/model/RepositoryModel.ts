import { Schema, model } from 'mongoose';

const RepositoryModel = new Schema({
  name: String,
  html_url: String,
  contributors: [],
  pulls: [],
});

export default model('Repository', RepositoryModel);
