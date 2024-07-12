import { Image } from "./image";

export type Game = {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    thumbnail: Image;
  };
};
