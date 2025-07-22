import { formatName } from "../utils";

export class Breadcrumb {
    constructor(name) {
        this.name = name;
        this.el = this.createBreadcrumb();
    }

    createBreadcrumb() {
        const breadcrumbHTML = document.createElement('ol');
        breadcrumbHTML.className = 'breadcrumb';
        const linkToHomeItem = document.createElement('li');
        linkToHomeItem.className = 'breadcrumb-item';
        const linkToHomeLink = document.createElement('a');
        linkToHomeLink.textContent = 'ГУАП';
        linkToHomeLink.href = '#';
        linkToHomeItem.append(linkToHomeLink);

        const linkToParentItem = document.createElement('li');
        linkToParentItem.className = 'breadcrumb-item';
        const linkToParentLink = document.createElement('a');
        linkToParentLink.textContent = 'Сотрудники';
        linkToParentLink.href = '#';
        linkToParentItem.append(linkToParentLink);

        const nameItem = document.createElement('li');
        nameItem.classList = 'breadcrumb-item active';
        nameItem.textContent = formatName(this.name);

        breadcrumbHTML.append(linkToHomeItem, linkToParentItem, nameItem);

        return breadcrumbHTML;
    }

    render(parent) {
        parent.appendChild(this.el);
    }
}