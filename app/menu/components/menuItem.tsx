import { MenuItem } from '../interface/interfaces'

export default function MenuItemBox({ id, attributes }: MenuItem) {
  const { name, description, menu_item_prices } = attributes;
  const altText = `${name} image`;
  const prices = menu_item_prices.data.map(price => price.attributes.price);

  return (
    <div className="menu-item bg-black text-white rounded-md p-4 m-4 w-[300px]">
      <img src={""} alt={altText} className="w-12 h-12" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{description}</p>
      {prices.map((price, index) => (
        <p key={index}>{price}</p>
      ))}
    </div>
  );
}
