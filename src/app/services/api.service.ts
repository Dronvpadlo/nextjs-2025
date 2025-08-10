import {ICarRequest, ICarResponse} from "@/app/models/iCar";


export const getCars = async ():Promise<ICarResponse[]> => {

    return await fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then(value => value.json())
}

export const createCar = async (car: ICarRequest): Promise<ICarResponse> => {
    const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
};