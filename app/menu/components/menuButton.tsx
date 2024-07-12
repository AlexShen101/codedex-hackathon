interface MenuButtonProps {
    label: string;
    active: boolean;
    onClick?: () => void;
}

export default function MenuButton({ label, active, onClick }: MenuButtonProps) {
    let color = active ? "bg-light-brown hover:bg-dark-brown" : "bg-black hover:bg-gray-700";

    return (
        <button className={`${color} menu-button text-white px-4 py-2 rounded-full m-2 cursor-pointer shadow-custom duration-200`} onClick={onClick}>
            {label}
        </button>
    );
}
