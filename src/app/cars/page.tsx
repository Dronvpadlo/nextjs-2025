import React from 'react';
import {getCars} from "@/app/services/api.service";
import CarComponent from "@/app/components/CarComponent";

const CarsPage = async () => {

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