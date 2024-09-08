import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  name: String,
  queries: [{ type: Schema.Types.ObjectId, ref: 'Query' }],
});

export const User = models.User || model('User', userSchema);
