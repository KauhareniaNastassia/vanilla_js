import {
    addNewBookToUser, addNewCompany,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, updateBook, updateCompany, updateCompanyTitle,
    upgradeUserLaptop, UserSkillsType,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from "./10_01";
import {user} from "../09/09_01";

/*function makeHairStyle(u: UserType, power:number) {
    const copy = {
        ...u,
        hair: u.hair/power
    }
    /!*copy.hair = u.hair / power*!/

    return copy
}*/

test('reference type test', () => {
    let user: UserType = {
        name: 'Nastassia',
        hair: 32,
        address: {
            city: 'Minsk',

        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Nastassia',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,

        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.hair).toBe(16)

})
test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Nastassia',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,

        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const  userCopy = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')

})
test('upgrade laptop', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nastassia',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,

        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const  userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)

})
test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nastassia',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,

        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const  userCopy = addNewBookToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
})
test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nastassia',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,

        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const  userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')


    /*expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)*/
})
/*
test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nastassia',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,

        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const  userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
*/
    /*expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)})*/

test('companies', () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'Nastassia',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [ {id: 1, title: 'Epam'}, {id: 2, title: 'IT'} ]
    }

    const  userCopy = addNewCompany(user, {id: 3, title:'Google'})

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[2]).toBe({id: 3, title:'Google'})


    /*expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)*/
})

test('update company title', () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'Nastassia',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [ {id: 1, title: 'Epam'}, {id: 2, title: 'IT'} ]
    }

    const  userCopy = updateCompanyTitle(user, 1, 'EPAM')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')


    /*expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)*/
})




/*test('update skills levels', () => {
    let userWithSkills: UserSkillsType = {
        name: 'Nastassia',
        address: {
            city: 'Minsk'},
        skills: [
            {title: 'css', level: 78},
            {title: 'html', level: 35},
            {title: 'js', level: 11},
        ]
    }
    const userCopy = updateSkills(userWithSkills, 11, 45)

    expect(userWithSkills).not.toBe(userCopy)
    expect(userWithSkills.address).toBe(userCopy.address)
    expect(userCopy.skills[2].level).toBe(45)
})*/






/*
test('update company', () => {
    let companies = {
        'Nastassia': [ {id: 1, title: 'Epam'}, {id: 2, title: 'IT'} ],
        'Olga': [{id: 2, title: 'IT'} ]
    }

    const copy =  updateCompany(companies, 'Nastassia', 1, 'EPAM')

    expect(copy['Nastassia']).not.toBe(companies['Nastassia'])
    expect(copy['Olga']).toBe(companies['Olga'])
    expect(copy['Nastassia'][0].title).toBe('EPAM')

    /!*expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)*!/
})*/
