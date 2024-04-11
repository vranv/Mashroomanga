import { useState } from 'react'

interface LoginProps {
    close: (isClosed: boolean) => void;
}

export default function Login({close}: LoginProps) {
    const [closed, setClosed] = useState<boolean>(false);
    const [forgorPassword, setForgorPassword] = useState<boolean>(false);

    function closing() {
        close(!closed);
    }
    return (
        <div>
            <div className='fixed flex inset-0 w-screen h-screen m-auto items-center justify-center bg-[#CDC0A0] '>
                <form action="" className='flex flex-col'>
                    <button onClick={closing} className=' fixed top-0 right-0 mt-5 mr-5 hover:bg-[#DE0F09] duration-300'>
                        close
                    </button>
                    <h2 className='text-center'>LOG IN</h2>
                    <input className='text-center border border-black bg-[#E3C3AA] hover:bg-slate-200 duration-300 invalid:border-red-500 outline-[#E65222] focus:outline-dotted mt-1' type="text" placeholder='username'/>
                    <input className='text-center border border-black bg-[#E3C3AA] hover:bg-slate-200 duration-300 invalid:border-red-500 outline-[#E65222] focus:outline-dotted mt-1' type="text" placeholder='password'/>
                    <input className='text-center border border-black bg-[#E3C3AA] hover:bg-slate-200 duration-300 invalid:border-red-500 outline-[#E65222] focus:outline-dotted mt-1' type="text" placeholder='captcha'/>
                    <button className='bg-[#CDC0A0] mt-5 hover:bg-[#DE0F09] duration-300'>sign in</button>
                    <button className='text-xs mt-6 hover:bg-green-400 duration-300' onClick={() => setForgorPassword(!forgorPassword)}>memmories of my password</button>
                </form>
            </div>
        </div>
    )
}
