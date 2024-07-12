'use client';

import { useEffect, useState } from "react";
import HeroSection from "./components/heroSection";
import MenuButtons from "./components/menuButtons";
import MenuCarousel from "./components/menuCarousel";
import { Category } from "./interface/interfaces";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:3000/api/menu-items");
  const data = await response.json();
  return data;
}

export default function MenuClient() {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const { data, error, isLoading } = useSWR("/api/menu-items", fetcher)

  useEffect(() => {
    if (data) {
      setCategories(data.data);
      setSelectedCategory(data.data[0]);
    }
  }, [data])

  if (isLoading) return <div>Loading...</div>
  if (!categories) return <div>Loading...2</div>
  
  const handleCategoryChange = (id: number) => {
    const category = categories.find(category => category.id === id);
    if (!category) {
      console.error(`Category with id ${id} not found`);
    } else {
      setSelectedCategory(category);
    }
  };

  const categoryTitles = categories.map(category => ({
    id: category.id,
    title: category.attributes.title
  }));

  const menuItems = selectedCategory ? selectedCategory.attributes.menu_items.data : [];

  return (
    <div className="text-center bg-white text-black">
      <HeroSection />
      <MenuButtons categories={categoryTitles} onCategoryChange={handleCategoryChange} />
      <div className="py-8">
        <div className="bg-gray-300 p-8 inline-block">
          <img src="https://placehold.co/150x150" alt="3D image" />
        </div>
      </div>
      <MenuCarousel menuItems={menuItems} />
    </div>
  );
}
