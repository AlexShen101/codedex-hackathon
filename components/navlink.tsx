import Link from 'next/link';

export default function NavLink({ link, text }: { link: string; text: string }) {
  return (
    <Link
      href={link}
      className="hover:underline color-black font-semibold text-2xl"
    >
      {text}
    </Link>
  );
}