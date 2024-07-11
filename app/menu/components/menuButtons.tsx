import MenuButton from './menuButton';

export default function MenuButtons() {
    return (
        <div className="py-8">
            <h2 className="text-4xl font-bold">Menu</h2>
            <div className="flex justify-center flex-wrap">
                <MenuButton label="coffee" />
                <MenuButton label="specialty drinks" />
                <MenuButton label="boba" />
                <MenuButton label="beer & wine" />
                <MenuButton label="hot bites" />
                <MenuButton label="sandwiches & salads" />
            </div>
        </div>
    );
}