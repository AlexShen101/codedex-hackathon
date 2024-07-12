export async function GET(request: Request) {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/game-categories?populate[games][populate][0]=thumbnail`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
      },
    }
  );
  const data = await res.json();
  return Response.json(data);
}
