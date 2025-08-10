import {getCars} from "@/app/services/api.service";
import React from "react";
import {ICarResponse} from "@/app/models/iCar";

type Props = {
    car: ICarResponse
}
const CarComponent = async ({car}) => {
    const cars = await getCars();
    return (
        <div>
            <div>ID: {car.id}</div>
            <div>Brand: {car.brand}.</div>
            <div>Price: {car.price}.</div>
            <div>Year: {car.year}</div>
            <hr/>
        </div>
    )
};

export default CarComponent;
