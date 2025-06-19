const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

btn.addEventListener('click', navToggle);

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
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}
