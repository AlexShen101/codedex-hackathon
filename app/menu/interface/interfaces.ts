import { Image } from "@/app/types/image";

export interface MenuItemPrice {
  id: number;
  attributes: {
    price: number;
    label: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
  };
}

export interface MenuItem {
  id: number;
  attributes: {
    name: string;
    description: string | null;
    image: Image;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    menu_item_prices: {
      data: MenuItemPrice[];
    };
  };
}

export interface Category {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    description: string | null;
    menu_items: {
      data: MenuItem[];
    };
  };
}

export interface Categories {
  data: Category[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
