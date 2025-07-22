export class PersonInfoText {
    constructor(post, location, socials) {
        this.data = { post, location, socials };
        this.el = this.createInfoText();
    }

    createInfoText() {
        const infoText = document.createElement('div');
        infoText.className = 'person_info-text';

        const infoList = document.createElement('ul');
        infoList.className = 'person_info-text_list';

        for (let elem in this.data) {

            if (this.data[elem] && elem !== 'socials') {
                const infoListItem = document.createElement('li');

                infoListItem.classList = elem;
                infoListItem.textContent = this.data[elem];
                infoList.append(infoListItem);
            }

            if (elem === 'socials') {
                const socials = this.data[elem];
                const socialUrls = {
                    telegram: 'telegram.me',
                    vk: 'vk.com',
                    ok: 'ok.ru',
                };

                socials.forEach((social) => {
                    if (social.type.toLowerCase() in socialUrls) {
                        const infoListItem = document.createElement('li');
                    
                        infoListItem.classList = social.type.toLowerCase();

                        const infoListItemLink = document.createElement('a');
                        infoListItemLink.href = `https://${socialUrls[social.type.toLowerCase()]}/${social.userID}`;
                        infoListItemLink.textContent = social.userID;
                        infoListItem.append(infoListItemLink);

                        infoList.append(infoListItem);
                    }
                })
            }
        }




        infoText.append(infoList);

        return infoText;
    }

    render(parent) {
        parent.append(this.el);
    }
}