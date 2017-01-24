import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Application } from './application';
import { IClass } from '../classes/class';
import { ClassService } from '../classes/class.service';
import { ApplicationService } from './application.service';
import { ApplicationDataService } from './application-data.service';

@Component({
    moduleId: module.id,
    templateUrl: 'application.component.html'
})

export class ApplicationComponent implements OnInit {
    applicationForm: FormGroup;
    errorMessage: string;
    classes: IClass[];
    gradeLevels = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    weeks = [['1', '2', '3', '4', '5', '6']];

    private sub = Subscription;

    get classArray(): FormArray{
        return <FormArray>this.applicationForm.get('classArray');
    }

    get child(): FormArray{
        return <FormArray>this.applicationForm.get('child');
    }

    constructor(private fb: FormBuilder,
        private _router: Router,
        private classService: ClassService,
        private applicationService: ApplicationService,
        private applicationDataService: ApplicationDataService) {}

    ngOnInit(): void {
        this.applicationForm = this.fb.group({
            parentFirstName: ['', [Validators.required]],
            parentLastName: ['', [Validators.required]],
            parentEmail: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+")]],
            parentPhone: ['', [Validators.required]],
            child: this.fb.array([ this.buildChild() ]),
            classArray: this.fb.array([ this.buildClasses() ])            
        });


        this.classService.getClasses()
            .subscribe(
                classes => this.classes = classes,
                error => this.errorMessage = <any>error
            );
    }

    buildChild(): FormGroup {
        return this.fb.group({
            childFirstName: ['', [Validators.required]],
            childLastName: ['', [Validators.required]],
            personalStatement: ['', Validators.required]
        })
    }

    addChild(): void {
        this.child.push(this.buildChild());
    }

    removeChild(index: number): void {
        const control = <FormArray>this.applicationForm.controls['child'];
        control.removeAt(index);
    }

    buildClasses(): FormGroup {
        return this.fb.group({
            classWeek: ['', Validators.required],
            classId: ['', Validators.required],
            gradeLevel: ['', Validators.required]
        });
    }

    addClass(): void {
        this.weeks.push(['1', '2', '3', '4', '5', '6']);        
        this.classArray.push(this.buildClasses());
    }

    removeClass(index: number): void {
        this.weeks.splice(index,1);
        const control = <FormArray>this.applicationForm.controls['classArray'];
        control.removeAt(index);
    }

    selectionMade(index: number) {
        var i = 0,
            length = this.classes.length,
            level,
            classId;
        if( this.applicationForm.value.classArray[index].classId !== '' && this.applicationForm.value.classArray[index].gradeLevel !== '') {
            level = this.gradeLevel(this.applicationForm.value.classArray[index].gradeLevel);
            classId = this.applicationForm.value.classArray[index].classId;
            for(i; i < length; i++) {
                if( this.classes[i].classId === classId) {
                    this.weeks[index] = this.classes[i].gradeLevel[level].weeksAvailable;
                }
            }
        }
    }



    submit(): void {
        this.applicationDataService.setApplication(this.applicationForm.value);
        this.applicationService.submitApplication(this.applicationForm.value)
            .subscribe();
        console.log(this.applicationForm);
        console.log('Saved: ' + JSON.stringify(this.applicationForm.value));
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
}