

export type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach( () => {
    users = {
        '101': { id: 101, name: 'Nastassia'},
        '323232': { id: 323232, name: 'Natasha'},
        '1212': { id: 1212, name: 'Olga'},
        '1': { id: 1, name: 'Alesya'},
    }

})

test("should update corresponding user", () => {

    users['1'].name = 'Alesya'


    expect(users['1'].name).toEqual('Alesya');

})


test("should delete corresponding user", () => {

    delete users['1']


    expect(users['1']).toBeUndefined();

})