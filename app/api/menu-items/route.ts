import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");

  let url;
  if (category)
    url = `${process.env.STRAPI_API_URL}/menu-categories?populate[menu_items][populate][0]=menu_item_prices&filters[slug]=${category}`;
  else
    url = `${process.env.STRAPI_API_URL}/menu-categories?populate[menu_items][populate][0]=menu_item_prices`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
    },
    cache: "no-store",
  });
  const data = await res.json();
  return Response.json(data);
}
