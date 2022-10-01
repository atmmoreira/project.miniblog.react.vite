function index() {
  return (
    <>
      <div className='container px-4 px-lg-5'>
        <div className='row gx-4 gx-lg-5 justify-content-center'>
          <form className='col-12 col-md-7'>
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
    </>
  );
}
export default index;
