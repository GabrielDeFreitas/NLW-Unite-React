import type { ReactNode, ThHTMLAttributes } from "react";

interface TableHeaderProps extends ThHTMLAttributes<HTMLTableCellElement> {
    children?: ReactNode
}

export function TableHeader({ children, ...rest }: TableHeaderProps) {
    return (
        <th {...rest} className="py-3 px-4 text-sm font-semibold text-left">
            {children}
        </th>
    );
}