"use client";

import { useState } from "react";
import { MenuItem as MenuItemType } from "../interface/interfaces";
import MenuItemBox from "./menuItem";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

interface MenuCarouselProps {
  menuItems: MenuItemType[];
}

// Renders the MenuCarousel Component (the 4 menu items + buttons)
function MenuCarousel({ menuItems }: MenuCarouselProps) {
  // currentIndex keeps track of the current items to display
  const [currentIndex, setCurrentIndex] = useState(0);

  // handle the display of the next set of items
  const nextItems = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % menuItems.length);
  };

  // handle the display of the previous set of items
  const prevItems = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 4;
      // Loop back to the end if the new index is less than 0
      return newIndex < 0 ? menuItems.length + newIndex : newIndex;
    });
  };

  // use currentIndex to determine which items to display
  const displayedItems = menuItems
    .slice(currentIndex, currentIndex + 4)
    .concat(
      menuItems.slice(0, Math.max(0, currentIndex + 4 - menuItems.length))
    );

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={prevItems}
        className="carousel-button bg-light-brown hover:bg-dark-brown text-white rounded-full p-4 cursor-pointer mx-4"
      >
        <FaChevronLeft />
      </button>
      <div className="grid grid-cols-2 gap-4">
        {displayedItems.map((item, index) => (
          <MenuItemBox key={item.id} {...item} />
        ))}
      </div>
      <button
        onClick={nextItems}
        className="carousel-button bg-light-brown hover:bg-dark-brown text-white rounded-full p-4 cursor-pointer mx-4"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default MenuCarousel;
