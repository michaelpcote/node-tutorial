import { Component, OnInit } from '@angular/core';
import { ClassService } from './class.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'class.component.html'
})

export class ClassComponent implements OnInit {
    classes: {};
    errorMessage: string;
    classForm: FormGroup;
    gradeLevels = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    constructor(private classService: ClassService,
                private fb: FormBuilder) {

    }

    ngOnInit(): void {
        this.classForm = this.fb.group({
            gradeLevel: '',
            weeksAvailable: ''
        });
        this.classService.getClasses()
            .subscribe(
                classes => this.classes = classes,
                error => this.errorMessage = <any>error
            )
    }
}