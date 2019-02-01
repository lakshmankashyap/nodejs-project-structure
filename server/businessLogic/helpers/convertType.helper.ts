import * as mongoose from 'mongoose';

export class ConvertTypeHelper {
    constructor() { }

    public toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}