export const usersObj = {
    '0': 'Nastassia',
    '1': 'Natasha',
    '2': 'Olga',
    '3': 'Alesya',
}

export type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': { id: 101, name: 'Nastassia'},
    '323232': { id: 323232, name: 'Natasha'},
    '1212': { id: 1212, name: 'Olga'},
    '1': { id: 1, name: 'Alesya'},
}

var user = { id: 100500, name: "Igor"}
users[user.id] = user

delete users[user.id]
users[user.id].name = 'Vitya'





export const usersArray = [
    { id: 101, name: 'Nastassia'},
    { id: 323232, name: 'Natasha'},
    { id: 1212, name: 'Olga'},
    { id: 1, name: 'Alesya'},
]

//var userCopy = [...usersArray.filter(), user]