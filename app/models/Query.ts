import { Schema, model, models } from 'mongoose';

const querySchema = new Schema({
  queryText: String,
  response: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export const Query = models.Query || model('Query', querySchema);
