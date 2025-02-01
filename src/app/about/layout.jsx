import Link from 'next/link';
import React from 'react';

const Aboutlayout = ({ children }) => {
    return (
        <div>
            <ul className="text-2xl flex gap-7 my-4 justify-center">
                <li><Link href={'/about/mission'}>Mission</Link></li>
                <li><Link href={'/'}>Vission</Link></li>
            </ul>

            <hr />
            <div className='mx-auto w-[90%]'>
            {children}
            </div>
        </div>
    );
};

export default Aboutlayout;
