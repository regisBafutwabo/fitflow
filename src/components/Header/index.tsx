import React from 'react';

import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

const Header = () => {
    const { userId } = auth();
    return (
        <header className="bg-white text-gray-800 p-4 flex justify-between items-center shadow-md">
            <h1 className="text-3xl font-bold">FitFlow</h1>
            {userId && <UserButton />}
        </header>
    );
};

export default Header;
