"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function focusSection({ data }) {
    const element = document.querySelector(`[data-section-id="${data}"]`);
    let timerSectionFocused = null;
    if (element) {
        element.classList.add('section-focused');
        clearTimeout(timerSectionFocused);
        timerSectionFocused = setTimeout(() => {
            element.classList.remove('section-focused');
        }, 2000);
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop
        });
    }
}
exports.default = focusSection;
//# sourceMappingURL=focusSection.js.map