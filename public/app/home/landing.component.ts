import{ Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'landing.component.html'
})

export class LandingComponent {
    getMyStyles() {
        let myStyles = {
            'background-image': 'url(\'/images/background-arch-dark.jpg\')'
        }
    }
}