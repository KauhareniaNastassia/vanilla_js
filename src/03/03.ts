import {student, StudentType} from "../02/02";
import {GovernmentBuildingType, HouseType} from "../02/02_02";

debugger


export const sum = (a: number, b: number) => {
    return a + b
}

export function  sum2(a: number, b: number) {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}


export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}


export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}


export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}


export const addMoneyToBudget = (buildings: GovernmentBuildingType, budget: number) => {
    return buildings.budget +=budget;
}


export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (buildings: GovernmentBuildingType, staffCountToFire: number) => {
    return buildings.staffCount -= staffCountToFire;
}


export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    return building.staffCount += staffCountToHire;
}