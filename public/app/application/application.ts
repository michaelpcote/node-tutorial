export class Application {

    constructor(
        public parentFirstName = '',
        public parentLastName = '',
        public parentEmail = '',
        public parentPhone = '',
        public childFirstName = '',
        public childLastName = '',
        public classes : {
            classId: string,
            className: string,
            classWeek: string
        },
        public gradeLevel? : string,
        public peronsalStatement? : string        
        ) { }
}
