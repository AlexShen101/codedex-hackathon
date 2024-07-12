import { DM_Serif_Display } from "next/font/google";
import { MenuItem } from "../interface/interfaces";

// function to format price in cents to a user friendly string
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

// Renders a menu item box with the name, description, and prices
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

  console.dir(menuItem);

  const imageUrl = menuItem.attributes.image
    ? process.env.NODE_ENV === "development" ||
      typeof process.env.NODE_ENV === "undefined"
      ? `${process.env.STRAPI_BASE_URL}${
          menuItem.attributes?.image?.data?.attributes?.url || ""
        }`
      : menuItem.attributes?.image?.data?.attributes?.url || ""
    : "";

  return (
    <div className="menu-item text-left bg-black text-white rounded p-4 flex items-center w-[500px] min-h-[200px] hover:shadow-lg hover:scale-[1.02] transition duration-[0.2s]">
      <div className="min-w-[100px] flex justify-center mx-4">
        {menuItem.attributes?.image?.data?.attributes?.url && (
          <img
            src={imageUrl}
            alt={altText}
            className="w-24 h-24 object-contain"
          />
        )}
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div className="flex flex-col gap-2">
          <h1 className={`${dmSerifDisplay.className} text-3xl font-bold`}>
            {name}
          </h1>
          {/* <div className="border-t-2 border-crispy-green w-full my-2"></div> */}
          <p className="text-sm mb-4 text-beige font-semibold border-l-2 border-beige pl-2">
            {description}
          </p>
        </div>
        <div className="flex space-x-8 items-end">
          {price_data.map((price_item, index) => (
            <div key={index} className="flex flex-col">
              <span className="font-bold text-lg leading-tight" key={index}>
                {price_item.label}
              </span>
              <span className="text-beige font-semibold">
                {formatPrice(price_item.price)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
