import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";


export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map( b => b.address.street.title )
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map( b => b.address.street.title )
}


export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}



export const createMessages1 = (houses: Array<HouseType>) => {
    let callbackfn = (h: HouseType) => {
        return `Hello guys from ${h.address.street.title}`
    }

    callbackfn(houses[0])

    return houses.map(callbackfn)
}