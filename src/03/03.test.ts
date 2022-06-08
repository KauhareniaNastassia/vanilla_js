import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
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
    }}
)


test("new tech skill should be added to student", ()=>{
    expect(student.technologies.length).toBe(3)

    addSkill(student, "JS");

    expect(student.technologies.length). toBe(4);
    expect(student.technologies[3].title).toBe("JS")
})


test("student should be made active", ()=>{
    expect(student.isActive).toBe(false)

    makeStudentActive(student); //тут только стьюдент потому что мы писали сначала тест, а потом по нему функцию

    expect(student.isActive). toBe(true);
})

test("does student live in city", ()=>{
    doesStudentLiveIn(student, "Moscow");

    let result1 = doesStudentLiveIn(student, "Moscow")
    let result2 = doesStudentLiveIn(student, "Minsk")

    expect(result1). toBe(false);
    expect(result2). toBe(true);
})