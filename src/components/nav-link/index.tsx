import type { AnchorHTMLAttributes } from "react";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string
}

export function NavLink({ text, ...rest }: NavLinkProps) {
    return <a {...rest} className='font-medium text-sm'>{text}</a>
}