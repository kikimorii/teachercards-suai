import QrCreator from "qr-creator";

export class QrCode {
    constructor(className, size, content) {
        this.el = document.createElement('div');
        this.el.classList = className;
        QrCreator.render({
            text: content,
            radius: 0.0,
            ecLevel: 'L',
            fill: '#005AAA',
            background: null,
            size: size
        }, this.el);
    }

    render(parent) {
        parent.prepend(this.el);
    }
}