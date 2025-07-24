import React from 'react';
import {type} from "node:os";

type Props = {
    searchParams: Promise<{
            [key: string]: string | string[] | undefined
        }>
}

const SubmitPage = async ({searchParams}) => {

    const awaitedSP = await searchParams;

    return (
        <div>
            Vpadlo Prod {awaitedSP.name}
        </div>
    );
};

export default SubmitPage;