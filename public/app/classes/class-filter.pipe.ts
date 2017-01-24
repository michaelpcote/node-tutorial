import { PipeTransform, Pipe } from '@angular/core';

import { IClass } from './class';

@Pipe({
    name: 'classFilter'
})
export class ClassFilterPipe implements PipeTransform {
    
    transform(value: IClass[], filterBy: number) {
        if(filterBy) {
            filterBy = filterBy.valueOf();
            var maxGrade = this.gradeLevel(filterBy);
        }
        return filterBy ? value.filter((classs: IClass) =>
        this.classAvailable(maxGrade, classs)) : value;
    }

    private gradeLevel(level: number) {
        if( level <= 2 ) {
            return "second";
        } else if ( level <= 5 ) {
            return "fifth";
        } else {
            return "nineth";
        }
    }

    private classAvailable(level: string, classs: IClass) {
        if(classs.gradeLevel[level].weeksAvailable.length !== 0) {
            return true;
        } else {
            return false;
        }
    }
}