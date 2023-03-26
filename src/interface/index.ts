export interface Course {
    id: string,
    name: string,
    pricePerMonth: number,
    lessons: number,
    available?: boolean,
    studentPerClass: number,
}



