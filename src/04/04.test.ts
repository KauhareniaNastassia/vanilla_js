import {ages, CourseType} from "./04";

export {}

test ("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 98, 14];


    const oldAges = ages.filter((age: number ) => age > 98);


    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})




test ("should take courses cheaper 160", () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'js', price: 200},
        {title: 'react', price: 150}
]

    const cheapCourses = courses.filter(course => course.price<160);


    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe(("css"));
    expect(cheapCourses[1].title).toBe(("react"));
})


test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Salt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]


    const completedTasks = tasks.filter( task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)

})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Salt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]


    const uncompletedTasks = tasks.filter( task => task.isDone === false) // (task => !task.isDone) таск равно не таск из дан

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)

})