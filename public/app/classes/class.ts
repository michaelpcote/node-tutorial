/* Defines the product entity */
export interface IClass {
    classId: number,
    className: string,
    classDescription: string,
    gradeLevel: {
        second: {
            weeksAvailable: number[]
        },
        fifth: {
            weeksAvailable: number[]
        },
        nineth: {
            weeksAvailable: number[]
        }
    }
}

