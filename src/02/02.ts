type CityType1 = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityType1
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}



export const student: StudentType = {
    name: "Nastassia",
    age: 28,
    isActive: false,
    address:{
        streetTitle: "Kosmonavtov",
        city:{
            title: "Minsk",
            countryTitle: "Belarus",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}

console.log(student.name)
console.log(student.age)
console.log(student.address.city)
console.log(student.technologies[2].title)
