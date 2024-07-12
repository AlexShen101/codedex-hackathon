import { MenuCategory } from "@/app/types/menu";
import { DM_Serif_Display } from "next/font/google";
import HeroSection from "../components/heroSection";
import MenuButtons from "../components/menuButtons";
import MenuItemBox from "../components/menuItem";
import ModelViewer from "../components/modelViewer";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
});

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

  const menuItems = menuData.data[0].attributes.menu_items;

  const models = {
    boba: "/models/boba.glb",
    "hot-bites": "/models/french-fries.glb",
    "specialty-drinks": "/models/latte.glb",
    "beer-and-wine": "/models/wine.glb",
    "sandwiches-and-salads": "/models/avocado-toast.glb",
  };

  const model = models[params.category];

  return (
    <div className="text-center bg-white text-black">
      <HeroSection />

      <h2 className={`${dmSerifDisplay.className} text-4xl my-12 font-bold`}>
        Menu
      </h2>

      <MenuButtons
        categories={categoryTitles}
        // onCategoryChange={handleCategoryChange}
      />

      <div className="py-8 w-full flex flex-col items-center">
        <div className="relative w-[600px] h-[400px]">
          <div className="w-full h-full absolute top-0">
            {model && <ModelViewer src={model} />}
            {/* <div
              className="absolute w-full h-full top-0 pointer-events-none"
              style={{
                background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))",
                transform: "rotateX(45deg)",
                perspective: "240px",
              }}
            ></div> */}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {menuItems.data.map((menuItem) => {
            return <MenuItemBox key={menuItem.id} menuItem={menuItem} />;
          })}
        </div>
      </div>
    </div>
  );
}
