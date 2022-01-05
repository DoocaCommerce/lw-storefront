const regexMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

function getSize() {
  const width = window.innerWidth
  const height = window.innerHeight

  return { width, height }
}

function widthGreaterThan(width) {
  return getSize().width >= width
}

function widthLessThan(width) {
  return getSize().width <= width
}

function heightGreaterhan(height) {
  return getSize().height >= height
}

function heightLessThan(height) {
  return getSize().height <= height
}

function isMobile() {
  return regexMobile.test(navigator.userAgent) && widthLessThan(1024)
}

export default { getSize, widthGreaterThan, widthLessThan, heightGreaterhan, heightLessThan, isMobile }
