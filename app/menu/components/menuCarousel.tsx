import MenuItemBox from './menuItem';
import { MenuItem as MenuItemType } from '../interface/interfaces';

interface MenuCarouselProps {
  menuItems: MenuItemType[];
}

function MenuCarousel({ menuItems }: MenuCarouselProps) {
  return (
    <div className="flex justify-center items-center">
      <button className="carousel-button bg-light-brown text-white rounded-full p-4 cursor-pointer mx-4">
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="grid grid-cols-2 gap-4">
        {menuItems.map((item, index) => (
          <MenuItemBox key={index} {...item} />
        ))}
      </div>
      <button className="carousel-button bg-light-brown text-white rounded-full p-4 cursor-pointer mx-4">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default MenuCarousel;
