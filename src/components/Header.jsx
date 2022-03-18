import ZapRecallLogo from '../assets/logo.svg'

export default function Header() {
    return (
        <header>
            <img src={ZapRecallLogo} alt="logo" />
            <h1>ZapRecall</h1>
        </header>
    )
}