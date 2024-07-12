export async function fetchStrapiImage(url: string) {
  if (url.substring(0, 1) !== "/") url = `/${url}`;
  return await fetch(`${process.env.STRAPI_BASE_URL}${url}`);
}
