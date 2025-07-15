import type { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    children?: ReactNode;
    className?: string;
}

export function TableRow({ children, className, ...rest }: TableRowProps) {
    return (
        <tr {...rest} className={twMerge(`border-b border-white/10`, className)}>{children}</tr>
    );
}