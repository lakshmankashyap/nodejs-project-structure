import * as mongoose from 'mongoose';
import { IOrderViewModel } from '../../../shared/viewModels';
interface IOrderEntity extends IOrderViewModel, mongoose.Document { }
mongoose.model('Order', new mongoose.Schema({
  title: String,
  product_id: String,
  status: String,

}));

export const OrderRepository = mongoose.model<IOrderEntity>('Order');

