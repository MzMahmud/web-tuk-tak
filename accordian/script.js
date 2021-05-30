document.querySelectorAll('.accordion-title').forEach(accordionTitle => {
    accordionTitle.addEventListener('click', toggleActiveClass);
});

function toggleActiveClass(event) {
    const accordionTitle = event.target;
    const accordionItem = accordionTitle.parentNode;
    const accordionBody = accordionItem.querySelector('.accordion-body');

    accordionTitle.classList.toggle('active-title');

    if (accordionTitle.classList.contains('active-title')) {
        accordionBody.style.maxHeight = `${accordionBody.scrollHeight}px`;
        // emmit custom event
        accordionItem.dispatchEvent(accordionActiveEvent);
    } else {
        accordionBody.style.maxHeight = `0px`;
        // emmit custom event
        accordionItem.dispatchEvent(accordionDectiveEvent);
    }
}

// custom events
const accordionActiveEvent = new Event('accordionActivated');
const accordionDectiveEvent = new Event('accordionDeactivated');

document.querySelectorAll('.accordion-item').forEach(accordionItem => {
    // listen for custom event
    accordionItem.addEventListener('accordionActivated', event => {
        console.log('accordionActivated');
        console.log(event.target);
    });

    // listen for custom event
    accordionItem.addEventListener('accordionDeactivated', event => {
        console.log('accordionDeactivated');
        console.log(event.target);
    });
});