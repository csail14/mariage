function Navbar() {
  return (
    <div className="App">
      <header class="header">
        <div class="header-wrap">
          <div class="logo plain logo-left">
            <div class="site-title">
              <a href="/" title="Go to Home">
                Camille & Hakim
              </a>
            </div>
          </div>

          <nav id="nav" role="navigation">
            <div class="table">
              <div class="table-cell">
                <ul id="menu-menu-1">
                  <li class="menu-item">
                    <a href="/">Accueil</a>
                  </li>
                  <li class="menu-item">
                    <a href="/programme">Programme</a>
                  </li>
                  <li class="menu-item">
                    <a href="/hebergement">Hébergement</a>
                  </li>
                  <li class="menu-item">
                    <a href="/location">Comment m'y rendre ?</a>
                  </li>
                  <li class="menu-item">
                    <a href="/hebergement">Liste de mariage</a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="https://docs.google.com/forms/d/1X8ucvsn4vourY4t8z0ShQtSRorpH9NifVxrYSYa2ArE/prefill"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Répondre
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
