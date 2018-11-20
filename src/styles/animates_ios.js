const animates = {
  pulling(d, opts) {

    const { threshold, elMain, elControl, theme } = opts

    let p = d / threshold
    if (p > 1) p = 1
    else p = p * p * p

    const spinnerCls = Math.floor(p * 12)
    if (opts.spinnerCls !== spinnerCls) {
      const removeClass = `pull-to-refresh__spinner--s${opts.spinnerCls}`
      const addClass = `pull-to-refresh__spinner--s${spinnerCls}`
      if (opts.spinnerCls) elControl.classList.remove(removeClass)
      if (spinnerCls) elControl.classList.add(addClass)
      opts.spinnerCls = spinnerCls
    }

    const y = d / 2.5
    elMain.style.transform = y ? `translate3d(0, ${y}px, 0)` : ''
  },

  refreshing({ elMain, threshold }) {
    elMain.style.transition = 'transform 0.2s'
    elMain.style.transform = `translate3d(0, ${threshold / 2.5}px, 0)`
  },

  aborting(opts) {
    return new Promise(resolve => {
      const { elMain, elControl, theme } = opts

      let n = opts.spinnerCls
      opts.spinnerCls = null
      if (n) {
        const timer = setInterval(() => {
          const operationClass = `pull-to-refresh__spinner--s${n}`
          elControl.classList.remove(operationClass)
          if (--n === 0) clearInterval(timer)
          else elControl.classList.add(operationClass)
        }, 300 / n)
      }

      if (elMain.style.transform) {
        elMain.style.transition = 'transform 0.3s'
        elMain.style.transform = 'translate3d(0, 0, 0)'
        elMain.addEventListener('transitionend', () => {
          elMain.style.transition = ''
          resolve()
        })
      } else {
        resolve()
      }
    })
  },

  restoring(opts) {
    return new Promise(resolve => {
      const { elMain, elControl, spinnerCls, theme } = opts
      const operationClass = `pull-to-refresh__spinner--s${spinnerCls}`
      if (spinnerCls) elControl.classList.remove(operationClass)
      opts.spinnerCls = null
      elMain.style.transition = 'transform 0.3s'
      elMain.style.transform = 'translate3d(0, 0, 0)'
      elMain.addEventListener('transitionend', () => {
        elMain.style.transition = ''
        resolve()
      })
    })
  }
}

export default animates
