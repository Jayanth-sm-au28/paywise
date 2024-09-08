import { Schema, model, models } from 'mongoose';

const contentSchema = new Schema({
  url: String,
  extractedData: {
    text: String,
    images: [String],
    links: [String],
  },
});

export const Content = models.Content || model('Content', contentSchema);
