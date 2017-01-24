import { Application } from './application';

export class ApplicationDataService {
    application: Application;

    setApplication(application: Application): void {
        this.application = application;
    }

    getApplication(): Application {
        return this.application;
    }
}