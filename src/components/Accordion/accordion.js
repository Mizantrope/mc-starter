// Accordion
const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener('click', (e) => {
        const item = e.target.parentNode;

        if(item.className.includes('_active')) {
            item.classList.remove('_active');
        }
        else {
            accordionItems.forEach(child => {
                child.classList.remove('_active');
            });
            item.classList.add('_active');
        }
    });
});