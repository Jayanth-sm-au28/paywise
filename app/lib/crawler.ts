import * as cheerio from 'cheerio';
import axios from 'axios';
import { Content } from '../models/Content';

export const crawlWebsite = async (url: string) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const extractedData = {
    text: $('body').text(),
    links: $('a').map((i, link) => $(link).attr('href')).get(),
    images: $('img').map((i, img) => $(img).attr('src')).get(),
  };
  await Content.create({ url, extractedData });
  return extractedData;
};
