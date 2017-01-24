import { IClass } from './class';

export class ClassDataService {
    iclass: IClass[] = [];

    setClass(classs: IClass[]) {
        this.iclass = classs;
    }

    getClass() {
        return this.iclass;
    }
}