import {IUser} from "@/models/IUser";

export const getUsers = async ():Promise<IUser[]> =>  {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
}