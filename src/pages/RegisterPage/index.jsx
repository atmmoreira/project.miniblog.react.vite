import { useState, useEffect } from 'react';

function index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');

    const user = {
      name,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError('Senhas precisam ser iguais!');
      return;
    }

    console.log(user);
  };

  return (
    <>
      <div className='container px-4 px-lg-5'>
        <div className='row gx-4 gx-lg-5 justify-content-center'>
          <h1 className='text-center mb-3'>Registre-se</h1>
          <small className="alert alert-danger w-50 text-center">{error}</small>
          <form className='col-xl-7 col-sm-10' onSubmit={handleSubmit}>
            <div className='form-floating input-group mb-3'>
              <input
                className='form-control'
                type='text'
                placeholder='Nome'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='form-floating input-group mb-3'>
              <input
                className='form-control'
                type='text'
                placeholder='Email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='form-floating input-group mb-3'>
              <input
                className='form-control'
                type='password'
                placeholder='Senha'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='form-floating input-group mb-3'>
              <input
                className='form-control'
                type='password'
                placeholder='Confirmar Senha'
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              className='btn btn-primary w-100 text-uppercase mb-5'
              type='submit'
            >
              Registrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default index;
