import { useState } from 'react'

interface RegisterProps {
    close: (isClosed: boolean) => void;
}

export default function Register({close}: RegisterProps) {
    const [closed, setClosed] = useState<boolean>(false);
    function closing() {
        close(!closed)
    }
    return (
        <div>
            <div className='fixed flex inset-0 w-screen h-screen m-auto items-center justify-center bg-[#CDC0A0] '>
                <form action="" className='flex flex-col'>
                    <button onClick={closing} className='fixed top-0 right-0 mr-5 mt-5 hover:bg-[#E50E0C] duration-300'>
                        close
                    </button>
                    <h2 className='text-center'>REGISTER</h2>
                    <input className='border border-black bg-[#E3C3AA] hover:bg-slate-200 duration-300 invalid:border-red-500 outline-[#E65222] focus:outline-dotted mt-1' type="text" placeholder='username'/>
                    <input className='border border-black bg-[#E3C3AA] hover:bg-slate-200 duration-300 invalid:border-red-500 outline-[#E65222] focus:outline-dotted mt-1' type="text" placeholder='password'/>
                    <input className='border border-black bg-[#E3C3AA] hover:bg-slate-200 duration-300 invalid:border-red-500 outline-[#E65222] focus:outline-dotted mt-1' type="text" placeholder='display name'/>
                    <input className='border border-black bg-[#E3C3AA] hover:bg-slate-200 duration-300 invalid:border-red-500 outline-[#E65222] focus:outline-dotted mt-1' type="text" placeholder='email'/>
                    <input className='border border-black bg-[#E3C3AA] hover:bg-slate-200 duration-300 invalid:border-red-500 outline-[#E65222] focus:outline-dotted mt-1' type="text" placeholder='captcha'/>
                    <button className='bg-[#CDC0A0] hover:bg-[#E50E0C] mt-5 duration-300'>sign in</button>
            </form>
            </div>
        </div>
    )
}
