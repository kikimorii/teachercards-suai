import ERROR_IMG from './errorImg';

export class ErrorAlert {
    constructor() {
        this.el = this.createErrorAlert();
    }

    createErrorAlert() {
        const errorContainer = document.createElement('div');
        errorContainer.className = 'error_container';
        errorContainer.innerHTML = ERROR_IMG;

        return errorContainer;
    }

    render(parent) {
        parent.append(this.el)
    }
}