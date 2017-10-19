'use strict'

const store = require('./store')

const onSignUpLinkClick = function (event) {
  event.preventDefault()
  $('#sign-up').show()
  $('#sign-in').hide()
}

const onSignInLinkClick = function (event) {
  event.preventDefault()
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#signInModal').hide()
  $('#signUpModal').show()
  $('#messageContent').hide()
  $('#signInMessage').show()
}

const onSignUpModalLinkClink = function (event) {
  event.preventDefault()
  $('#sign-up').show()
  $('#sign-in').hide()
  $('#signUpModal').hide()
  $('#signInModal').show()
  $('#signInMessage').hide()
  $('#messageContent').show()
  $('#messageContent').text('')
}

const signUpSuccess = function (data) {
  $('#messageContent').text('You have signed up as ' + data.user.email + '. Sign in to start cataloging!')
  $('#signedOut').hide()
}

const signUpFailure = function () {
  $('#messageContent').text('This user may already exist. Please try again.')
}

const signInSuccess = function (data) {
  $('#messageContent').text('')
  $('#signInMessage').text('Signed in as ' + data.user.email)
  $('#sign-in').hide()
  $('#signUpLink').hide()
  $('#signOut').show()
  $('#changePassword').show()
  $('#signedOut').hide()
  $('#signUpModal').hide()
  store.user = data.user
}

const signInFailure = function () {
  $('#signInMessage').text('Please try signing in with a registered email and password.')
}

const signOutSuccess = function () {
  store.user = null
  $('#changePassword').hide()
  $('#signOut').hide()
  $('#signUpLink').show()
  $('#signedOut').show()
  $('#messageContent').text('')
  $('#signInMessage').text('')
  $('#messageContent').show()
  $('#signInMessage').show()
  $('#signUpModal').hide()
  $('#signInModal').show()
}

const signOutFailure = function () {
  $('#signedOut').text('Please try again.')
}

const changePasswordSuccess = function () {
  $('#passwordChange').text('Password has been successfully updated.')
}

const changePasswordFailure = function () {
  $('#passwordChange').text('Please try again.')
}

const uiHandlers = function () {
  $('#signUpLink').on('click', onSignUpLinkClick)
  $('#signInModal').on('click', onSignInLinkClick)
  $('#signUpModal').on('click', onSignUpModalLinkClink)
}

const getAlbumsSuccess = function (albums) {
  store.albums = albums
  const albumID = store.albums.albums[0].title
  $('#signedOut').show()
  $('#signedOut').text('Album 1 ID is ' + albumID)
}

module.exports = {
  uiHandlers,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  getAlbumsSuccess
}
