import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';
import Menu from './Menu';

export default function Hero() {
  const [mode, setMode] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  function handleModalLogin(close: boolean) {
    if (close === true) {
      setLogin(false);
    } else {
      return;
    }
  }

  function handleModalRegister(close: boolean) {
    if (close === true) {
      setRegister(false);
    } else {
      return;
    }
  }

  return (
    <div>
      <div className='flex flex-col items-center gap-4'>
          <a className='' href="/">
            <img className='size-16' src="/mushroom.jpg" alt="mushroom manga online" />
          </a >
          <div className='pr-5'>
            <form className='flex gap-4' action="">
              <button><i className="fa-solid fa-magnifying-glass"></i></button>
              <input type="text" className='border border-black bg-[#E3C3AA] hover:bg-slate-200 focus:border-[#E65222] duration-300 focus:outline outline-[#930C10]' placeholder='search me...'/>
            </form>
          </div>
          <div className='flex content-between gap-4'>
            <button className='border border-black hover:bg-[#C28C12] duration-200' onClick={() => setLogin(!login)}>
              log in
            </button>
            <button className='border border-black hover:bg-[#C28C12] duration-200' onClick={() => setRegister(!register)}>
              register
            </button>
            <button className='hover:bg-[#C28C12] duration-200' onClick={() => setMode(!mode)}>
              {mode ? <i className="fa-regular fa-sun"></i> : <i className="fa-regular fa-moon"></i>}
            </button>
          </div>
          {login && <Login close={handleModalLogin}/>}
          {register && <Register close={handleModalRegister}/>}
          <div className=''>
            
          <Menu />
          </div>
      </div>
    </div>
  );
}
