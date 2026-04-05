export default function BlogContent({ content }: any) {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  return content?.map((block: any, index: number) => {
    if (block.type === "paragraph") {
      const text = block.children?.map((child: any) => child.text).join("");
      if (!text) return null;

      return (
        <p key={index} className="mb-4 text-gray-700">
          {text}
        </p>
      );
    }

    if (block.type === "image") {
      let imageUrl = block.image?.url;

      if (!imageUrl) return null;

      if (!imageUrl.startsWith("http")) {
        imageUrl = `${BASE_URL}${imageUrl}`;
      }

      return (
        <img
          key={index}
          src={imageUrl}
          alt="blog"
          className="my-6 rounded-lg w-full"
        />
      );
    }

    return null;
  });
}
