import React from 'react';
import {createCar, getCars} from "@/app/services/api.service";
import CarComponent from "@/app/components/CarComponent";

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}
const CarsPage = async ({searchParams}) => {

    const car = await searchParams;
    await createCar(car)
    const cars = await getCars()
    return (
        <div>


            {
                cars.map((car, index) => <CarComponent key={index} car={car}/> )
            }
        </div>
    );
};

export default CarsPage;