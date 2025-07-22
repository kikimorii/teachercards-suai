import { PersonLeft } from "./personLeft";
import { PersonInfo } from "./personInfo";
import { QrCode } from "../qrCode";
import { generateVCard } from "../../utils";

export class Person {
    constructor(JSON) {
        this.data = JSON;
        this.el = this.createPerson();
        this.switched = false;
        this.gap = 0;
    }

    createPerson() {
        const personWrapper = document.createElement('div');
        personWrapper.className = 'person_wrapper';

        const personLeft = new PersonLeft(this.data);
        const personInfo = new PersonInfo(this.data);

        personLeft.render(personWrapper);
        personInfo.render(personWrapper);

        this.personLeft = personLeft;
        this.personInfo = personInfo;

        const switchButtonBack = document.createElement('button');
        switchButtonBack.classList = 'person_button-back d-none';
        switchButtonBack.textContent = 'Обратно к визитке';
        this.switchBack = switchButtonBack;

        personWrapper.append(this.switchBack);

        this.personLeft.switchButton.addEventListener('click', () => this.handleClick());
        this.switchBack.addEventListener('click', () => this.handleClick());

        return personWrapper;
    }

    render(parent) {
        parent.append(this.el);
    }

    handleClick() {
        this.personLeft.contacts.classList.toggle('d-none');
        this.personLeft.titleImg.classList.toggle('d-none');

        if (!this.personLeft?.titleQR) {
            const vCardContent = generateVCard(this.data);
            this.personLeft.titleQR = new QrCode('person_title-qr', document.querySelector('#person').offsetWidth - 60, vCardContent.toString());
            this.personLeft.titleQR.render(this.personLeft.personTitle);
        } else {
            this.personLeft.titleQR.el.classList.toggle('d-none');
        }

        if (this.el.style.gap != "0px") {
            this.gap = this.el.style.gap;
            this.el.style.gap = "0px";
        } else {
            this.el.style.gap = this.gap;
        }

        this.personInfo.el.classList.toggle('background_inherit');
        this.personInfo.infoShare.style.display = this.personInfo.infoShare.style.display == "flex" ? "none" : "flex";
        this.personInfo.infoText.classList.toggle('d-none');
        this.switchBack.classList.toggle('d-none');
    }
}