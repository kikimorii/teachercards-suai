export class PersonContacts {
    constructor(telephones, emails, website) {
        this.contacts = { telephones, emails, website };
        this.el = this.createPersonContacts();
    }

    createPersonContacts() {
        const contactsHTML = document.createElement('div');
        contactsHTML.className = 'person_contacts';

        for (let elem in this.contacts) {
            let personContactsLink;
            if (elem == 'telephones' && this.contacts?.telephones) {
                personContactsLink = document.createElement('a');
                personContactsLink.className = 'person_contacts-link';
                const personLink = this.contacts[elem].find((elem) => elem.type == "WORK");
                if (personLink) {
                    personContactsLink.href = `tel:${personLink.number}`;
                } else {
                    personContactsLink.href = `tel:${this.contacts[elem][0].number}`;
                }
                personContactsLink.textContent = "Телефон";
            } else if (elem == 'emails' && this.contacts?.emails) {
                personContactsLink = document.createElement('a');
                personContactsLink.className = 'person_contacts-link';
                const personLink = this.contacts[elem].find((elem) => elem.type == "WORK");
                if (personLink) {
                    personContactsLink.href = `mailto:${personLink.address}`;
                } else {
                    personContactsLink.href = `mailto:${this.contacts[elem][0].address}`;
                }
                personContactsLink.textContent = "Почта";
            } else if (elem == 'website' && this.contacts?.website) {
                personContactsLink = document.createElement('a');
                personContactsLink.className = 'person_contacts-link';
                personContactsLink.href = `${this.contacts[elem]}`;
                personContactsLink.textContent = "Сайт";
            }

            if (personContactsLink) {
                contactsHTML.append(personContactsLink);
            }
        }

        return contactsHTML;
    }

    render(parent) {
        parent.append(this.el);
    }
}