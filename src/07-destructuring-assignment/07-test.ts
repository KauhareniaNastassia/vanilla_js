import {getStreetsTitlesOfGovernmentBuildings} from "../05/05_2";
import {ManType} from "./07-component";

type lessonType = {
    title: string
}




let props: ManType

beforeEach(() =>{
    props = {
        name: "Nastassia",
        age: 28,
        lessons: [
            {title: '1'},
            {title: '2'},
        ],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})



{/*test.skip('', ()=> {
    let props = {

    }

   // const age = props.age
    //const lessons = props.lessons

    var {age,lessons } = props
    const {title} = props.address.street



    expect(age).toBe(28)
    expect(lessons.length).toBe(2)

    const a = props.age
    //const l = props.lessons

    expect(a).toBe(28)
    expect(l.length).toBe(3)
    expect(title).toBe("Nezavisimosti street")




})*/}



test("", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ...restLessons]=props.lessons

    //expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    expect(ls1.title).toBe('1')

    expect (restLessons.length).toBe(2)
    expect (restLessons[0].title).toBe('2')
})