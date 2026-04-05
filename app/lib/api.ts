const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getBlogs() {
  const res = await fetch(`${BASE_URL}/api/blogs?populate=*`);
  const json = await res.json();

  // flatten manually
  return json.data.map((item: any) => ({
    id: item.id,
    ...item, // if already flat
  }));
}

export async function getBlogBySlug(slug: string) {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(
    `${BASE_URL}/api/blogs?filters[slug]=${slug}&populate=*`
  );

  const json = await res.json();

  console.log("API RESPONSE:", json);

  return json.data?.[0] || null;
}