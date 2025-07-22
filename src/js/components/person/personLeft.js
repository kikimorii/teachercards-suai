import { PersonTitle } from "./personTitle";
import { PersonContacts } from "./personContacts";

export class PersonLeft {
    constructor(JSON) {
        this.data = JSON;
        this.el = this.createPersonLeft();
    }

    createPersonLeft() {
        const personLeft = document.createElement('div');
        personLeft.className = 'person_left';
        const personTitle = new PersonTitle(this.data.photo, this.data.name);
        personTitle.render(personLeft);

        const personContacts = new PersonContacts(this.data.telephones, this.data.emails, this.data.url);
        personContacts.render(personLeft);

        this.personTitle = personTitle.el;
        this.switchButton = personTitle.switchButton;
        this.titleImg = personTitle.titleImg;
        this.contacts = personContacts.el;


        return personLeft;
    }

    render(parent) {
        parent.append(this.el);
    }
}