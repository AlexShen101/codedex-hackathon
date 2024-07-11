import MenuItem from './menuItem';

const menuItems = [
    {
        imageSrc: "https://placehold.co/50x50",
        altText: "Matcha Latte",
        title: "Matcha Latte",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        prices: ["Hot $5.25", "Cold $5.75"]
    },
    {
        imageSrc: "https://placehold.co/50x50",
        altText: "Hot Chocolate",
        title: "Hot Chocolate",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        prices: ["Hot $5.00", "S'mores $5.50"]
    },
    {
        imageSrc: "https://placehold.co/50x50",
        altText: "Nutella Latte",
        title: "Nutella Latte",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        prices: ["Hot $5.25", "Cold $5.75"]
    },
    {
        imageSrc: "https://placehold.co/50x50",
        altText: "Chai",
        title: "Chai",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        prices: ["Hot $5.00", "Cold $5.50"]
    }
];

function MenuCarousel() {
    return (
        <div className="flex justify-center items-center">
            <button className="carousel-button bg-light-brown text-white rounded-full p-4 cursor-pointer mx-4">
                <i className="fas fa-chevron-left"></i>
            </button>
            <div className="grid grid-cols-2 gap-4">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
            <button className="carousel-button bg-light-brown text-white rounded-full p-4 cursor-pointer mx-4">
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
}

export default MenuCarousel;
