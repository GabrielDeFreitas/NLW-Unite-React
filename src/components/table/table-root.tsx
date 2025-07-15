import type { ReactNode, TableHTMLAttributes } from "react"

interface TableRootProps extends TableHTMLAttributes<HTMLTableElement> {
    children: ReactNode
}

export function TableRoot({ children, ...rest }: TableRootProps) {
    return (
        <div className="border border-white/10 rounded-lg w-full overflow-x-auto">
            <table {...rest} className="w-full">{children}</table>
        </div>
    )
}