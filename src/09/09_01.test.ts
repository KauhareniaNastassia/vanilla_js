export {}

function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: {title: string}

}

/*test("big reference type test", () => {

    let user: UserType = {
        name: 'Nastassia',
        age: 28,
    }
    increaseAge(user);

    expect(user.age).toBe(29)

    const superman: UserType = user
    superman.age = 1000;

    expect(user.age).toBe(1000)


})*/

test("array test", () => {

    let users = [
        {
            name: 'Nastassia',
            age: 28,
        },
        {
            name: 'Lena',
            age: 27,
        }
    ]

    let admins = users
    admins.push({name: 'Dima', age: 30})

    expect(users[2]).toEqual({name: 'Dima', age: 30})

})

/*test("value type test", () => {

    let usersCount = 100

    let adminsCount = usersCount

    let adminsCount = usersCount + 1  //let adminsCount = 100+1
})*/


test("reference type test", () => {

    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Nastassia',
        age: 28,
        address: address
    }

    let addr = user.address
    let user2: UserType = {
        name: 'Olga',
        age: 28,
        address: address
    }

   address.title = 'Gomel'


    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Brest')


})


test("reference type array test", () => {

    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Nastassia',
        age: 28,
        address: address
    }

    let user2: UserType = {
        name: 'Olga',
        age: 28,
        address: address
    }

    const users = [user, user2, {name: 'Kate', age: 18, address: address}]

   const admins = [user, user2]

    admins[0].name = 'Anastassia'


    expect(admins[0].name).toBe('Anastassia')
    expect(user.name).toBe('Nastassia')


})


test("sort array test", () => {
    const letters = ['c', 'f', 'g', 't']

    letters.sort()

    expect(letters).toEqual(['c', 'f', 'g', 't'])
});


