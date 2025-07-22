import { QrCode } from '../qrCode';
import { Button } from '../button';
import { Modal } from '../modal/modal';
import { generateVCard } from '../../utils';

export class PersonShare {
    constructor(data) {
        this.data = data;
        this.el = this.createPersonShare();
    }

    createPersonShare() {
        const infoShare = document.createElement('div');
        infoShare.className = 'person_info-share';

        const modal = new Modal('share');
        modal.render(document.body);
        this.modal = modal.el;

        const vCardContent = generateVCard(this.data);
        const qrCode = new QrCode('person_info-share_img', 235, vCardContent.toString());
        qrCode.render(infoShare);

        const buttons = document.createElement('div');
        buttons.className = 'person_info-share_buttons';

        const shareButton = new Button('Поделиться', 'share', () => this.handleClickShare());
        shareButton.render(buttons);

        const downloadButton = new Button('Скачать', 'download', () => this.handleClickDownload());
        downloadButton.render(buttons);

        infoShare.append(buttons);
        return infoShare;
    }

    render(parent) {
        parent.append(this.el);
    }

    handleClickShare() {
        this.modal.classList.toggle('d-none');
    }

    handleClickDownload() {
        const vCardContent = generateVCard(this.data);
        const blob = new Blob([vCardContent.toString()], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'contact.vcf';

        a.click();

        URL.revokeObjectURL(url);
    }
}