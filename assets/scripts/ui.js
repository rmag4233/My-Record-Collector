'use strict'

const onSignUpLinkClick = function (event) {
  event.preventDefault()
  $('#sign-up').show()
}

const signUpSuccess = function (data) {
  $('#messageContent').text('You have signed up as ' + data.user.email + '. Sign in to start cataloging!')
}

const signUpFailure = function () {
  $('#messageContent').text('This user may already exist. Please try again.')
}

const uiHandlers = function () {
  $('#signUp').on('click', onSignUpLinkClick)
}

module.exports = {
  uiHandlers,
  signUpSuccess,
  signUpFailure
}
