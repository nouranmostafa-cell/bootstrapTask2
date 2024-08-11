/* let scrollPos = 0;
const mainNav = document.getElementById('navbar2');

if (mainNav) {
    const headerHeight = mainNav.clientHeight;

    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;

        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove('is-visible');
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
} else {
    console.error("Element with ID 'navbar2' not found.");
}
 */