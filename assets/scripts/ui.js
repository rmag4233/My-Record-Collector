'use strict'

const onSignUpLinkClick = function (event) {
  event.preventDefault()
  $('#sign-up').show()
  console.log('this should work')
}

const uiHandlers = function () {
  $('#signUp').on('click', onSignUpLinkClick)
}

module.exports = {
  uiHandlers
}
