import React from 'react';
import {getUsers} from "@/services/api.service";
import Link from "next/link";

const UsersPage = async () => {
    const users = await getUsers();

    return (
        <div>
            UsersPage
            {users.map((user, index)=> <div key={index}>
                <Link href={'/users/' + user.id.toString()}>{user.id}. {user.name}</Link>
            </div>)}
        </div>
    );
};

export default UsersPage;