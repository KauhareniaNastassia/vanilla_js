export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopTyp = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopTyp
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithCompaniesType = UserType & {
    companies: Array<{ id: number, title: string }>
}




export type UserSkillsType =  {
    name: string,
    address: {city: string},
    skills: Array<{ title: string,
        level: number }>,
}


/*export type SkillsType = {
    title: string,
    level: number
}*/



export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    /*copy.hair = u.hair / power*/

    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    /*copy.hair = u.hair / power*/

    /*copy.address = {...copy.address, city: city }*/
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBookToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {

    return {
        ...u,
        books: [...u.books, newBook]
    }

}


export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {

    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

/*export function updateSkills(u: UserSkillsType, oldSkill:number, newSkill:number) {
    return {
        ...u,
        skills: {
            ...u.skills,
            u.skills.level.map(l => l === oldSkill ? newSkill : l)
        }
    }


}*/

export function addNewCompany(u: UserWithLaptopType & UserWithCompaniesType, newCompany: { id: number, title: string } ) {
/*let newCompany = {id: 3, title: 'Google'}*/
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}

export const updateCompanyTitle = (u:UserWithCompaniesType, companyForUpdate: number, newTitle: string) => {

    return {
        ...u,
        companies: u.companies.map(c => {
            if (c.id === companyForUpdate) {
                return { ...c, title:newTitle}
            } else return  c
        })
    }
}

export const updateCompany = ( companies: { [key: string]: {id: number, title: string } },
                               userName: string,
                               companyId: number,
                               newTitle: string) => {
let companyCopy = {...companies}
    /*companyCopy[userName] = companyCopy[userName].map( c => c.id === companyId ? {...c, title: newTitle} : c)
*/
    return {
        ...companies
    }
}