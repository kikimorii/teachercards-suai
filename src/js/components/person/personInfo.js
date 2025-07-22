import { PersonShare } from "./personShare";
import { PersonInfoText } from "./personInfoText";

export class PersonInfo {
    constructor(data) {
        this.data = data;
        this.el = this.createPersonInfo();
    }

    createPersonInfo() {
        const infoHTML = document.createElement('div');
        infoHTML.className = 'person_info';

        const infoShare = new PersonShare(this.data);
        infoShare.render(infoHTML);

        const infoText = new PersonInfoText(this.data.title, this.data.location, this.data.socials);
        infoText.render(infoHTML);

        this.infoShare = infoShare.el;
        this.infoText = infoText.el;
        return infoHTML;
    }

    render(parent) {
        parent.append(this.el)
    }
}