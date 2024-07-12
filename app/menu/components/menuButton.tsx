interface MenuButtonProps {
    label: string;
    onClick?: () => void;
}

export default function MenuButton({ label, onClick }: MenuButtonProps) {
    return (
        <button className="bg-black menu-button text-white px-4 py-2 rounded-full m-2 cursor-pointer shadow-custom" onClick={onClick}>
            {label}
        </button>
    );
}
