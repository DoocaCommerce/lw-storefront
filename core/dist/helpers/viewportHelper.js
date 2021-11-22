var regexMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
function getSize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    return { width: width, height: height };
}
function widthGreaterThan(width) {
    return getSize().width >= width;
}
function widthLessThan(width) {
    return getSize().width <= width;
}
function heightGreaterhan(height) {
    return getSize().height >= height;
}
function heightLessThan(height) {
    return getSize().height <= height;
}
function isMobile() {
    return regexMobile.test(navigator.userAgent) && widthLessThan(1024);
}
export default { getSize: getSize, widthGreaterThan: widthGreaterThan, widthLessThan: widthLessThan, heightGreaterhan: heightGreaterhan, heightLessThan: heightLessThan, isMobile: isMobile };
//# sourceMappingURL=viewportHelper.js.map