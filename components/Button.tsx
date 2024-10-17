export interface TextButtonProps {
    description: string;
}

export function Button({description}: TextButtonProps) {
    return (
        <button className="bg-blue_primary p-4 shadow-sm hover:scale-[1.1] transition-all duration-700">
            <p className="text-white">{description}</p>
        </button>
    )
}