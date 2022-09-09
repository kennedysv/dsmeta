import logo from '../../assets/img/logo.svg'

import './styles.css'
function Header() {
    return(
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSmeta" />
            <h1>DsMeta</h1>
            <p>
                Desenvolvido por
                Kennedy Viana
            </p>

        </div>
    </header>
    )
  }
  
  export default Header