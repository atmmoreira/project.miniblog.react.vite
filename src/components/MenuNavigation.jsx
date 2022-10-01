import { NavLink } from 'react-router-dom';

function MenuNavigation() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light' id='mainNav'>
        <div className='container px-4 px-lg-5'>
          <NavLink className='navbar-brand' to='/'>
            MiniBlog
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ms-auto py-4 py-lg-0'>
              <li className='nav-item'>
                <NavLink className='nav-link px-lg-3 py-3 py-lg-4' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <a className='nav-link px-lg-3 py-3 py-lg-4' href='about.html'>
                  Entrar
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link px-lg-3 py-3 py-lg-4' href='post.html'>
                  Cadastrar
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link px-lg-3 py-3 py-lg-4' href='post.html'>
                  Dashboard
                </a>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link px-lg-3 py-3 py-lg-4' to='contact'>
                  Contato
                </NavLink>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link px-lg-3 py-3 py-lg-4'
                  href='contact.html'
                >
                  Sair
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuNavigation;
