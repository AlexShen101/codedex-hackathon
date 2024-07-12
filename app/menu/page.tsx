import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Menu({ children }: { children: ReactNode }) {
  // const [categories, setCategories] = useState<Category[] | null>(null);
  // const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const categoriesRes = await fetch(
    "http://localhost:3000/api/menu-categories"
  );
  const categories = await categoriesRes.json();
  const firstCategory = categories.data[0].attributes.slug;

  console.log(categories);

  return redirect(`/menu/${firstCategory}`);

  // const categoryTitles = categories.data.map((category: MenuCategory) => ({
  //   id: category.id,
  //   title: category.attributes.title,
  //   active: category === selectedCategory,
  // }));
}
