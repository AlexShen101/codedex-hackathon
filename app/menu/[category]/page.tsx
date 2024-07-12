import { MenuCategory } from "@/app/types/menu";
import HeroSection from "../components/heroSection";
import MenuButtons from "../components/menuButtons";
import MenuItemBox from "../components/menuItem";

export default async function MenuCategory({
  params,
}: {
  params: { category: string };
}) {
  const categoriesRes = await fetch(
    "http://localhost:3000/api/menu-categories"
  );
  const categories = await categoriesRes.json();

  const categoryTitles = categories.data.map((category: MenuCategory) => ({
    id: category.id,
    title: category.attributes.title,
    slug: category.attributes.slug,
    active: category.attributes.slug === params.category,
  }));

  const menuDataRes = await fetch(
    `http://localhost:3000/api/menu-items?category=${params.category}`
  );
  const menuData = (await menuDataRes.json()) as { data: MenuCategory[] };

  console.log(menuData);

  const menuItems = menuData.data[0].attributes.menu_items;

  return (
    <div className="text-center bg-white text-black">
      <HeroSection />
      <MenuButtons
        categories={categoryTitles}
        // onCategoryChange={handleCategoryChange}
      />

      <div className="py-8">
        <div className="bg-gray-300 p-8 inline-block">
          <img src="https://placehold.co/150x150" alt="3D image" />
        </div>
        <div className="flex flex-col">
          {menuItems.data.map((menuItem) => {
            return <MenuItemBox menuItem={menuItem} />;
          })}
        </div>
      </div>
    </div>
  );
}
