interface MenuItemProps {
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
    prices: string[];
}

export default function MenuItem({ imageSrc, altText, title, description, prices }: MenuItemProps) {
    return (
        <div className="menu-item bg-black text-white rounded-md p-4 m-4 w-[300px]">
            <img src={imageSrc} alt={altText} className="w-12 h-12" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p>{description}</p>
            {prices.map(price => <p key={price}>{price}</p>)}
        </div>
    );
}
