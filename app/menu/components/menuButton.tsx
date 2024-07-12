import Link from "next/link";

interface MenuButtonProps {
  label: string;
  slug: string;
  active: boolean;
}

export default function MenuButton({ label, slug, active }: MenuButtonProps) {
  let color = active
    ? "bg-light-brown hover:bg-dark-brown"
    : "bg-black hover:bg-gray-700";

  return (
    <Link
      scroll={false}
      href={`/menu/${slug}`}
      className={`${color} menu-button text-white px-4 py-2 rounded-full m-2 cursor-pointer shadow-custom duration-200`}
    >
      {label}
    </Link>
  );
}
