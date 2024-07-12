import { DM_Serif_Display } from "next/font/google";
import { MenuItem } from "../interface/interfaces";

const formatPrice = (price: number) => {
  const priceString = price.toString();
  return `$${priceString.substring(
    0,
    priceString.length - 2
  )}.${priceString.substring(priceString.length - 2)}`;
};

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
});

// Renders a mneu item box with the name, description, and prices
export default function MenuItemBox({ menuItem }: { menuItem: MenuItem }) {
  const { name, description, menu_item_prices } = menuItem.attributes;
  const altText = `${name} image`;

  // Extracting prices from menu_item_prices
  const price_data = menu_item_prices.data.map((price) => {
    return {
      price: price.attributes.price,
      label: price.attributes.label,
    };
  });

  const imageUrl = `${process.env.STRAPI_BASE_URL}/uploads/`;

  return (
    <div className="menu-item bg-black text-white rounded p-4 m-4 flex items-center space-x-8 w-[500px]">
      <img src={""} alt={altText} className="w-24 h-24" />
      <div className="flex flex-col flex-grow">
        <h1 className={`${dmSerifDisplay.className} text-3xl font-bold`}>
          {name}
        </h1>
        {/* <div className="border-t-2 border-crispy-green w-full my-2"></div> */}
        <p className="text-sm mb-4 text-beige font-semibold">{description}</p>
        <div className="flex space-x-8">
          {price_data.map((price_item, index) => (
            <div className="flex flex-col">
              <p className="font-bold" key={index}>
                {price_item.label}
              </p>
              <p key={index}>{formatPrice(price_item.price)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
