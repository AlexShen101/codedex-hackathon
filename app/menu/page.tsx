import { redirect } from "next/navigation";

export default async function Menu() {
  const categoriesUrl = `${process.env.STRAPI_API_URL}/menu-categories`;

  const categoriesRes = await fetch(categoriesUrl, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
    },
    cache: "no-store",
  });
  const categories = await categoriesRes.json();
  const firstCategory = categories.data[0].attributes.slug;

  console.log(categories);

  return redirect(`/menu/${firstCategory}`);
}
