import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'contact-us.component.html'
})

export class ContactUsComponent implements OnInit {
    contactUsForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.contactUsForm = this.fb.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required]],
            phone: '',
            message: ['', [Validators.required]]
        });
    }
}