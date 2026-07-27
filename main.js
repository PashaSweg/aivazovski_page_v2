document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.getElementById('toggler-id');
    const links = document.querySelectorAll('.mobile-navigation-link');
    const closeBtn = document.querySelector('.mobile-navigation-close');

    // Функция закрытия меню
    const closeMenu = () => {
        if (toggler) {
            toggler.checked = false;
        }
    };

    // Закрываем при клике по ссылкам
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Закрываем при клике по крестику
});