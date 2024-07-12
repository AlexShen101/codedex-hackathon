import MenuButton from "./menuButton";

interface MenuButtonsProps {
  categories: { id: number; title: string; slug: string; active: boolean }[];
}

// Renders the list of menu buttons for provided categories
export default function MenuButtons({ categories }: MenuButtonsProps) {
  return (
    <div className="flex justify-center flex-wrap">
      {categories.map((category) => (
        <MenuButton
          key={category.id}
          slug={category.slug}
          label={category.title}
          active={category.active}
        />
      ))}
    </div>
  );
}
