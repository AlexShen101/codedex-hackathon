import { MenuCategory as MenuCategoryType } from "@/app/types/menu";
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
  const categoriesUrl = `${process.env.STRAPI_API_URL}/menu-categories`;

  const categoriesRes = await fetch(categoriesUrl, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
    },
    cache: "no-store",
  });
  const categories = await categoriesRes.json();

  const categoryTitles = categories.data.map((category: MenuCategoryType) => ({
    id: category.id,
    title: category.attributes.title,
    slug: category.attributes.slug,
    active: category.attributes.slug === params.category,
  }));

  const category = params.category;

  let menuDataUrl;
  if (category)
    menuDataUrl = `${process.env.STRAPI_API_URL}/menu-categories?populate[menu_items][populate][0]=menu_item_prices&filters[slug]=${category}`;
  else
    menuDataUrl = `${process.env.STRAPI_API_URL}/menu-categories?populate[menu_items][populate][0]=menu_item_prices`;

  const menuDataRes = await fetch(menuDataUrl, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
    },
    cache: "no-store",
  });

  const menuData = (await menuDataRes.json()) as { data: MenuCategoryType[] };

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
        {/* <div className="relative w-[1200px] h-[400px]"> */}
        <div className="relative w-full h-[400px]">
          <div className="w-full h-full absolute top-0">
            {model && <ModelViewer style={{ zIndex: 200 }} src={model} />}
            <div
              style={
                {
                  // perspective: "1000px",
                }
              }
              className="absolute w-full h-full top-12 pointer-events-none"
            >
              <div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(rgba(22,18,20,0) 0%, rgba(22,18,20,0) 50%, rgba(22,18,20,0.1))",
                  //   transform: "rotateX(45deg)",
                  zIndex: 100,
                }}
              ></div>
            </div>
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
