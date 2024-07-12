import { MenuItem } from '../interface/interfaces'

// Renders a mneu item box with the name, description, and prices
export default function MenuItemBox({ id, attributes }: MenuItem) {
  const { name, description, menu_item_prices } = attributes;
  const altText = `${name} image`;

  // Extracting prices from menu_item_prices
  const price_data = menu_item_prices.data.map(price => {
    return {
      price: price.attributes.price,
      label: price.attributes.label
    }
  });

  return (
    <div className="menu-item bg-black text-white rounded-xl p-4 m-4 flex items-center space-x-8 w-[500px]">
      <img src={""} alt={altText} className="w-24 h-24" />
      <div>
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="border-t-2 border-green w-16 my-2"></div>
        <p className="text-sm mb-4">{description}</p>
      </div>
      <div className="flex space-x-8">
        {price_data.map((price_item, index) => (
          <>
            <p className="font-bold" key={index}>{price_item.label}</p>
            <p key={index}>{price_item.price}</p>
          </>
        ))}
      </div>
    </div>
  );
}
