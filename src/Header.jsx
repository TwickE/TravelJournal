import headerIcon from './assets/header-icon.svg'
import './index.css'

export default function Header() {

    return (
        <header>
            <img src={headerIcon} alt="header icon" />
            <p>My Travel Journal</p>
        </header>
    )
}