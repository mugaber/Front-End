/**
 * @HISTORY
 * this api let us control the history of the browser goning backward or forward
 */

/**
 * @forward --- @back
 */

const handleGoForward = () => {
  history.forward()
}

const handleGoBackward = () => {
  history.back()
}

/**
 * @go
 */

const goForwardXTimes = x => {
  if (x <= 0) return console.log('only + values are allowed')
  history.go(x)
}

const goBackwardXTimes = x => {
  if (x >= 0) return console.log('only - values are allowed')
  history.go(x)
}

/**
 * @length
 */

const getHistoryLength = () => {
  console.log(history.length)
}

/**
 * @pushState
 * this will programatically change the url to /url and add state to it
 */

const pushHistoryState = () => {
  history.pushState({ key: 'value' }, '', '/browser')
}

pushHistoryState()

const getHistoryState = () => {
  console.log(history.state)
}

getHistoryState()
