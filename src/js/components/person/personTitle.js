import { formatName, QR_SVG } from "../../utils";
import { QrCode } from "../qrCode";

export class PersonTitle {
    constructor(photo, name) {
        this.photoUrl = photo;
        this.name = name;
        this.el = this.createPersonTitle();
    }

    createPersonTitle() {
        const personTitle = document.createElement('div');
        personTitle.className = 'person_title';

        const personImgWrapper = document.createElement('div');
        personImgWrapper.className = 'person_title-img_wrapper';
        this.titleImg = personImgWrapper;

        const personImg = document.createElement('img');
        personImg.src = this.photoUrl;
        personImg.className = 'person_title-img';
        personImg.alt = `${this.name.lastname} ${this.name.firstname}`.trim();

        const switchContentButton = document.createElement('button');
        switchContentButton.className = 'person_title-img_button';
        switchContentButton.id = 'switchContentButton';
        switchContentButton.innerHTML = QR_SVG;

        this.switchButton = switchContentButton;

        const personTitleName = document.createElement('h5');
        personTitleName.className = 'person_title-text';
        personTitleName.textContent = formatName(this.name);

        personTitle.append(personImgWrapper, personTitleName);
        personImgWrapper.append(personImg, switchContentButton);
        return personTitle;
    }

    render(parent) {
        parent.append(this.el);
    }
}