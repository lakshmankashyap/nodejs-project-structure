import * as mongoose from 'mongoose';
import { IBookViewModel } from '../../../shared/viewModels';
import { Types } from 'mongoose';
import { ObjectId } from 'mongodb';
interface IBookEntity extends IBookViewModel, mongoose.Document { }
mongoose.model('Book', new mongoose.Schema({
  title: String,
  description: String,
  img: String,
  text: String,
  status: Boolean,
  author: [mongoose.Schema.Types.ObjectId]
}));

export const BookRepository = mongoose.model<IBookEntity>('Book');

