import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link'

export function Header() {
    return (
        <header className='flex items-center gap-5 py-2'>
            <img src={nlwUniteIcon} alt="icone do evento nlw unite" />

            <nav className='flex items-center gap-5'>
                <NavLink title="Eventos" href='/eventos'>Eventos</NavLink>
                <NavLink title="Particpantes" href='/participantes'>Participantes</NavLink>
            </nav>
        </header>
    )
}