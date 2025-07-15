import type { ReactNode, TdHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
    className?: string
    children?: ReactNode
}

export function TableCell({ children, className, ...rest }: TableCellProps) {
    return (
        <td {...rest} className={twMerge("py-3 px-4 text-sm text-zinc-300", className)}>
            {children}
        </td>
    );
}