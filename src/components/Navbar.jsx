import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul className="text-xl flex gap-7 my-4 justify-center">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/posts'}>Posts</Link></li>
                <li><Link href={'/users'}>Users</Link></li>

            </ul>
        </div>
    );
};

export default Navbar;
