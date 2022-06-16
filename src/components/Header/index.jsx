import './style.css'

function Header() {
  return (
    <header className="header">
      <h1 className="header__heading">
        Bonjour <span className="header__heading__highlight">Thomas</span>
      </h1>
      <p className="header__subtitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </header>
  )
}

export default Header
