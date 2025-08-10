import {ICarResponse} from "@/app/models/iCar";


export const getCars = async ():Promise<ICarResponse[]> => {

    return await fetch('http://185.69.152.209/carsAPI/v1/cars')
        .then(value => value.json())
}