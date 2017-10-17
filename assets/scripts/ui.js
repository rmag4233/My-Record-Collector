'use strict'

const store = require('./store')

const onSignUpLinkClick = function (event) {
  event.preventDefault()
  $('#sign-up').show()
}

const onSignInLinkClick = function (event) {
  event.preventDefault()
  $('#sign-in').show()
  $('#sign-up').hide()
}

const signUpSuccess = function (data) {
  $('#messageContent').text('You have signed up as ' + data.user.email + '. Sign in to start cataloging!')
}

const signUpFailure = function () {
  $('#messageContent').text('This user may already exist. Please try again.')
}

const signInSuccess = function (data) {
  $('#messageContent').text('')
  $('#signInMessage').text('Signed in as ' + data.user.email)
  store.user = data.user
}

const signInFailure = function () {
  $('#signInMessage').text('Please try signing in with a registered email and password.')
}

const uiHandlers = function () {
  $('#signUp').on('click', onSignUpLinkClick)
  $('#signInModal').on('click', onSignInLinkClick)
}

module.exports = {
  uiHandlers,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
