import React, { useState } from 'react'

export default function Menu() {
    
    const [hided, setHided] = useState<boolean>(false);

    return (
        <div className='flex flex-col'>
            <button className='border border-black hover:bg-[#C28C12]' onClick={() => setHided(!hided)}>
                menu
            </button>
            {hided && 
                <div className='flex flex-col space-y-1'>
                    <a className='border border-black hover:bg-[#C28C12] mt-1' href="">mangroom online</a>
                    <a className='border border-black hover:bg-[#C28C12]' href="">latest mangroom</a>
                    <a className='border border-black hover:bg-[#C28C12]' href="">friest mangroom</a>
                    <a className='border border-black hover:bg-[#C28C12]' href="">freshiest</a>
                </div>
            }
        </div>
    )
}
