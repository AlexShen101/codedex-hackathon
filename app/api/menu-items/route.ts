export async function GET(request: Request) {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/menu-categories?populate[menu_items][populate][0]=menu_item_prices`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
      },
    }
  );
  const data = await res.json();
  return Response.json(data);
}
