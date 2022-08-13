const designWidth = 360

const rootValue = 16

// export const rem = (px) => (px / rootValue).toFixed(5) + 'rem'

export const flexible = (options = { maxWidth: 540 }) => {
  const { maxWidth = Infinity, detectHairlines = false } = options || {}

  const docEl = document.documentElement
  const dpr = window.devicePixelRatio || 1

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    // console.log(123);
    const rootFontSize = (Math.min(maxWidth, docEl.clientWidth) / designWidth) * rootValue
    docEl.style.fontSize = rootFontSize + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    console.log(123);
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (detectHairlines && dpr >= 2) {
    const fakeBody = document.createElement('body')
    const testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}
