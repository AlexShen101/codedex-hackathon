import { redirect } from "next/navigation";

export default async function Menu() {
  const categoriesRes = await fetch(
    `${process.env.NEXT_API_URL}/api/menu-categories`
  );
  const categories = await categoriesRes.json();
  const firstCategory = categories.data[0].attributes.slug;

  console.log(categories);

  return redirect(`/menu/${firstCategory}`);
}
