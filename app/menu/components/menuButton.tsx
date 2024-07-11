interface MenuButtonProps {
    label: string;
    bgColor?: string;
}

export default function MenuButton({ label, bgColor = "bg-black" }: MenuButtonProps) {
    return (
        <div className={`${bgColor} menu-button text-white px-4 py-2 rounded-full m-2 cursor-pointer shadow-custom`}>
            {label}
        </div>
    );
}
