const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const hamburgerBtn = document.getElementById('hamburger-btn');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');

tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

hamburgerBtn.addEventListener('click', navToggle);

function onTabClick(e) {
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-myPurple',
            'border-b-4',
            'md:border-b-0',
        );
    });

    panels.forEach((panel) => panel.classList.add('hidden'));

    e.target.classList.add('border-myPurple', 'border-b-4');
    const classString = e.target.getAttribute('data-target');
    document
        .getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden');
}

function navToggle() {
    hamburgerBtn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}

menuLinks.forEach((link) => {
    link.onclick = () => {
        hamburgerBtn.classList.toggle('open');
        menu.classList.toggle('flex');
        menu.classList.toggle('hidden');
    };
});
