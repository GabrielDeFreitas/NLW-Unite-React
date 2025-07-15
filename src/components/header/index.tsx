import nlwUniteIcon from '../../assets/nlw-unite-icon.svg'
import { NavLink } from '../nav-link'

export function Header() {
    return (
        <div className='flex items-center gap-5 py-2'>
            <img src={nlwUniteIcon} />
            <nav className='flex items-center gap-5'>
                <NavLink text='Eventos' href='/eventos' />
                <NavLink text='Participantes' href='/participantes' />
            </nav>
        </div>
    )
}