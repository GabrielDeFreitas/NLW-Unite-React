import type { ButtonHTMLAttributes, ElementType } from "react"
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType
    className?: string;
}

export function IconButton({ icon: Icon, className, ...rest }: IconButtonProps) {
    return (
        <button {...rest} className={twMerge(`cursor-pointer bg-white/10 border border-white/10 rounded-md p-1.5 hover:opacity-50 disabled:cursor-not-allowed disabled:bg-white/5`, className)}>
            <Icon className="size-4" />
        </button>
    )
}