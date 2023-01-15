export class ScrollBar {
    constructor() {
        this.scrollTop = 0;
    }

    hideScroll() {
        document.body.classList.add('no-scroll');

        this.scrollTop = window.pageYOffset;
        document.body.style.position = 'fixed';

        if (this._hasScrollbar()) {
            document.body.style.width = `calc(100% - ${this._getScrollbarSize()}px)`;
        } else {
            document.body.style.width = '100%';
        }

        document.body.style.top = -this.scrollTop + 'px';
    }

    _getScrollbarSize() {
        let outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';

        document.body.appendChild(outer);

        let widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';

        let inner = document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);

        let widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);

        return widthNoScroll - widthWithScroll;
    }

    _hasScrollbar() {
        return document.body.scrollHeight > document.body.clientHeight;
    }

    showScroll() {
        document.body.classList.remove('no-scroll');

        document.body.removeAttribute('style');
        window.scroll(0, this.scrollTop);
    }
}
