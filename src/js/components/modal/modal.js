import { TG_SVG, VK_SVG } from "../../utils";

export class Modal {
    constructor(type) {
        this.type = type;
        this.el = this.createModalWindow();
    }
    createModalWindow() {
        const modalBackground = document.createElement('div');
        modalBackground.classList = 'modal_background d-none';
        const modal = document.createElement('div');
        modal.className = 'modal';

        modalBackground.append(modal);

        modalBackground.addEventListener('click', (elem) => {
            if (elem.target === modalBackground) {
                this.el.classList.toggle('d-none')
            }
        });

        switch (this.type) {
            case 'share':
                this.createShareModalWindow(modal);
                break;
        }

        return modalBackground;
    }

    createShareModalWindow(parent) {
        const modalTitlle = document.createElement('p');
        modalTitlle.className = 'modal-title';
        modalTitlle.textContent = 'Поделиться визиткой';

        const shareButton = document.createElement('button');
        shareButton.className = 'modal-button_link';
        shareButton.textContent = window.location;

        const shareAlert = document.createElement('span');
        shareAlert.classList = 'modal_alert d-none';
        shareAlert.textContent = 'Ссылка скопирована в буфер обмена'

        shareButton.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location);
            if (shareAlert.classList.contains("d-none")) {
                shareAlert.classList.toggle("d-none");
                setTimeout(() => shareAlert.classList.toggle("d-none"), 2000);
            }
        });

        const shareButtons = document.createElement('div');
        shareButtons.className = 'modal-share_buttons';

        const shareVKButton = document.createElement('a');
        shareVKButton.target = "_blank";
        shareVKButton.href = `https://vk.com/share.php?${window.location}`;
        shareVKButton.innerHTML = VK_SVG;

        const shareTGButton = document.createElement('a');
        shareTGButton.target = "_blank";
        shareTGButton.href = `https://t.me/share/url?url=${window.location}`;
        shareTGButton.innerHTML = TG_SVG;

        shareButtons.append(shareVKButton, shareTGButton);

        parent.append(modalTitlle, shareButton, shareAlert, shareButtons);
    }

    render(parent) {
        parent.prepend(this.el);
    }
}