import * as mongoose from 'mongoose';
import { IAuthorViewModel } from '../../../shared/viewModels';
import { Types } from 'mongoose';
import { ObjectId } from 'mongodb';
interface IAuthorEntity extends IAuthorViewModel, mongoose.Document { }
mongoose.model('Author', new mongoose.Schema({
  name: String,
}));

export const AuthorRepository = mongoose.model<IAuthorEntity>('Author');

