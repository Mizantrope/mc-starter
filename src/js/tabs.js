const tabsItems = document.querySelectorAll('[data-tab="item"]');
const tabsContent = document.querySelectorAll('[data-tab="content"]');

tabsItems.forEach((tabItem, tabIndex) => {
    tabItem.addEventListener('click', (e) => {
        tabsItems.forEach(child => child.classList.remove('_active'));
        tabItem.classList.add('_active');
        tabsContent.forEach((child, index) => {
            child.classList.remove('_active');

            if(tabIndex == index) {
                child.classList.add('_active');
            }
        });
    });
})