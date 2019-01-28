import * as mongoose from 'mongoose';
import { IBookViewModel } from '../../../shared/viewModels';
interface IBookEntity extends IBookViewModel, mongoose.Document { }
mongoose.model('Book', new mongoose.Schema({
  title: String,
  description: String,
  img: String,
  text: String,
  status: Boolean,
  author: Array({id: String})
}));

export const BookRepository = mongoose.model<IBookEntity>('Book');

