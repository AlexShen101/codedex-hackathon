import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = `${process.env.STRAPI_API_URL}/menu-categories`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
    },
    cache: "no-store",
  });
  const data = await res.json();
  return Response.json(data);
}
