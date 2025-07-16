import React, {FC} from 'react';
import {Metadata} from "next";
import {metadata} from "@/app/(public)/users/layout";

type Props = {
    params: {id:string}
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'User number: ' + id
    }};
const UserPage:FC<Props> = async ({params}) => {
    const {id} = await params;


    return (
        <div>
            User page {id}
        </div>
    );
};

export default UserPage;