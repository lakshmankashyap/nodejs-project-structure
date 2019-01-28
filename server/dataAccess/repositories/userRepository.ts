import * as mongoose from 'mongoose';
import { IUserViewModel } from '../../../shared/viewModels';
interface IUserEntity extends IUserViewModel, mongoose.Document { }
mongoose.model('User', new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  status: Boolean,
  roleType: Number
}));

export const UserRepository = mongoose.model<IUserEntity>('User');

