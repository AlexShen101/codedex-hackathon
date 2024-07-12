export type MenuCategory = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    menu_items: {
      data: MenuItem[];
    };
  };
};

export type MenuItemPrice = {
  id: number;
  attributes: {
    price: number;
    label: string;
    slug: string;
  };
};

export type MenuItem = {
  id: number;
  attributes: {
    name: string;
    description: string;
    slug: string;
    menu_item_prices: MenuItemPrice[];
  };
};
