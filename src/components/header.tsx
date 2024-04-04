import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header() {
    return (
        <header className='flex items-center gap-5 py-2'>
            <img src={nlwUniteIcon} alt="icone do evento nlw unite" />

            <nav className='flex items-center gap-5'>
                <a href="" className='font-medium text-sm text-zinc-300'>Eventos</a>
                <a href="" className='font-medium text-sm'>Participantes</a>
            </nav>
        </header>
    )
}