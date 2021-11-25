function focusSection(_a) {
    var data = _a.data;
    var element = document.querySelector("[data-section-id=\"" + data + "\"]");
    var timerSectionFocused = null;
    if (element) {
        element.classList.add('section-focused');
        clearTimeout(timerSectionFocused);
        timerSectionFocused = setTimeout(function () {
            element.classList.remove('section-focused');
        }, 2000);
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop
        });
    }
}
export default focusSection;
