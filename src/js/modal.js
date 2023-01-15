import { ScrollBar } from './modules/scrollbar.js';
import { Validation } from './modules/validation.js';

const _scrollbar = new ScrollBar();
const _validation = new Validation();

class Modal {
    openModal(name) {
        let html = '';

        if(name != '') {
            html = document.querySelector(`#${name}-template`).innerHTML;
        }

        const modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-overlay');
        document.body.appendChild(modalOverlay);

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = html;

        document.body.appendChild(modalOverlay);
        modalOverlay.after(modal);

        let form = document.querySelector(`[name="${name}"]`);

        _scrollbar.hideScroll();

        if(form) {
            let rules = JSON.parse(form.dataset.rules);
            let messages = JSON.parse(form.dataset.messages);
    
            const params = {
                rules: rules,
                messages: messages
            }

            _validation.check(form, params);
        }

    }

    closeModal() {
        if(document.querySelector('.modal-overlay') != null && document.querySelector('.modal') != null) {
            document.querySelector('.modal-overlay').remove();
            document.querySelector('.modal').remove();
        }

        _scrollbar.showScroll();
    }
}

const _modal = new Modal();

document.querySelectorAll('[data-target="modal"]').forEach(modal => {
    modal.addEventListener('click', (e) => {
        e.preventDefault();
    
        let modalName = e.target.dataset.targetModal || '';
    
        _modal.openModal(modalName);
    
        document.querySelector('.modal__close').addEventListener('click', () => {
            _modal.closeModal();
        });
    
        document.addEventListener('keyup', (e) => {
            if(e.key == 'Escape') {
                _modal.closeModal();
            }
        });
    })
})