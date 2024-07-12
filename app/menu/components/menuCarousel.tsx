import MenuItemBox from './menuItem';
import { MenuItem as MenuItemType } from '../interface/interfaces';
import { useState } from 'react';

interface MenuCarouselProps {
  menuItems: MenuItemType[];
}

function MenuCarousel({ menuItems }: MenuCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItems = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % menuItems.length);
  };

  const prevItems = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 4;
      return newIndex < 0 ? menuItems.length + newIndex : newIndex;
    });
  };

  const displayedItems = menuItems.slice(currentIndex, currentIndex + 4).concat(
    menuItems.slice(0, Math.max(0, (currentIndex + 4) - menuItems.length))
  );

  return (
    <div className="flex justify-center items-center">
      <button onClick={prevItems} className="carousel-button bg-light-brown hover:bg-dark-brown text-white rounded-full p-4 cursor-pointer mx-4">
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="grid grid-cols-2 gap-4">
        {displayedItems.map((item, index) => (
          <MenuItemBox key={item.id} {...item} />
        ))}
      </div>
      <button onClick={nextItems} className="carousel-button bg-light-brown hover:bg-dark-brown text-white rounded-full p-4 cursor-pointer mx-4">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default MenuCarousel;
