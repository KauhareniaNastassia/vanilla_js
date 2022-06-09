export const ages = [18, 20, 22, 1, 100, 98, 14];

const predicate = (age: number ) =>{
    return age>98
}
const oldAges = [100] // >98



export type CourseType = {
    title: string,
    price: number


}
const courses = [
    {title: 'css', price: 110},
    {title: 'js', price: 200},
    {title: 'react', price: 150},
]
const cheapPredicate = (courses: CourseType) => {
    return courses.price>160
}

const cheapCourses = [
        {title: 'css', price: 110},
        {title: 'react', price: 150},
]
