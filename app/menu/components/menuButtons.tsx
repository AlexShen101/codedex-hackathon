import MenuButton from './menuButton';

interface MenuButtonsProps {
    categories: { id: number, title: string }[];
    onCategoryChange: (id: number) => void;
}

export default function MenuButtons({ categories, onCategoryChange }: MenuButtonsProps) {
    return (
        <div className="py-8">
            <h2 className="text-4xl font-bold">Menu</h2>
            <div className="flex justify-center flex-wrap">
                {categories.map(category => (
                    <MenuButton key={category.id} label={category.title} onClick={() => onCategoryChange(category.id)} />
                ))}
            </div>
        </div>
    );
}
