function App() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light' id='mainNav'>
        <div className='container px-4 px-lg-5'>
          <a className='navbar-brand' href='index.html'>
            MiniBlog
          </a>
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
                <a className='nav-link px-lg-3 py-3 py-lg-4' href='index.html'>
                  Home
                </a>
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
                <a
                  className='nav-link px-lg-3 py-3 py-lg-4'
                  href='contact.html'
                >
                  Sobre
                </a>
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

      <header
        className='masthead'
        style={{ backgroundImage: 'url("../src/assets/img/home-bg.jpg")' }}
      >
        <div className='container position-relative px-4 px-lg-5'>
          <div className='row gx-4 gx-lg-5 justify-content-center'>
            <div className='col-md-10 col-lg-8 col-xl-7'>
              <div className='site-heading'>
                <h1>Mini Blog</h1>
                <span className='subheading'>
                  A MiniBlog Using React, Vite and Firebase.
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='container px-4 px-lg-5'>
        <div className='row gx-4 gx-lg-5 justify-content-center'>
          <form className='col-7'>
            <div className='form-floating input-group mb-3'>
              <input
                className='form-control'
                type='text'
                placeholder='Pesquisar'
                required
              />
              <button className='btn btn-primary text-uppercase' type='submit'>
                Pesquisar
              </button>
            </div>
          </form>
          <div className='col-md-10 col-lg-8 col-xl-7'>
            <div className='post-preview'>
              <div className='row'>
                <div className='col-4'>
                  <img
                    src='../src/assets/img/post-bg.jpg'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-8'>
                  <a href='post.html'>
                    <h2 className='post-title'>
                      Man must explore, and this is exploration at its greatest
                    </h2>
                    <h3 className='post-subtitle'>
                      Problems look mighty small from 150 miles up
                    </h3>
                  </a>
                  <small className='post-meta'>
                    Posted by <a href='#!'>Start Bootstrap</a> on September 24,
                    2022
                  </small>
                </div>
              </div>
            </div>

            <hr className='my-4' />

            <div className='d-flex justify-content-end mb-4'>
              <a className='btn btn-primary text-uppercase' href='#!'>
                Antigos →
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className='border-top'>
        <div className='container px-4 px-lg-5'>
          <div className='row gx-4 gx-lg-5 justify-content-center'>
            <div className='col-md-10 col-lg-8 col-xl-7'>
              <ul className='list-inline text-center'>
                <li className='list-inline-item'>
                  <a href='#!'>
                    <span className='fa-stack fa-lg'>
                      <i className='fas fa-circle fa-stack-2x'></i>
                      <i className='fab fa-twitter fa-stack-1x fa-inverse'></i>
                    </span>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#!'>
                    <span className='fa-stack fa-lg'>
                      <i className='fas fa-circle fa-stack-2x'></i>
                      <i className='fab fa-facebook-f fa-stack-1x fa-inverse'></i>
                    </span>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#!'>
                    <span className='fa-stack fa-lg'>
                      <i className='fas fa-circle fa-stack-2x'></i>
                      <i className='fab fa-github fa-stack-1x fa-inverse'></i>
                    </span>
                  </a>
                </li>
              </ul>
              <div className='small text-center text-muted fst-italic'>
                Copyright &copy; MiniBlog with Vite, React and Firebase - 2022
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
