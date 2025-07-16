import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <Link href={'/'}>Home</Link> <br/>
            <Link href={'/about'}>About</Link> <br/>
            <Link href={'/contacts'}>Contacts</Link> <br/>
            <Link href={'/users'}>Users</Link> <br/>
        </div>
    );
};

export default MenuComponent;