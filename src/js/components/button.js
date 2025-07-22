export class Button {
    constructor(title, type, handleClick) {
        this.data = { title, type };
        this.func = handleClick;
        this.el = this.createButton();

        this.el.addEventListener('click', handleClick);
    }

    createButton() {
        const buttonHTML = document.createElement('button');
        buttonHTML.classList = `btn-text primary filled ${this.data.type}_button`;
        buttonHTML.textContent = this.data.title;

        return buttonHTML;
    }

    render(parent) {
        parent.append(this.el);
    }
}