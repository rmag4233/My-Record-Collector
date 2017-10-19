'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  if (data.credentials.password !== data.credentials.password_confirmation) {
    $('#messageContent').text('Password and password confirmation do not match.')
  } else {
    $('#signUpEmail').val('')
    $('#signUpPassword').val('')
    $('#signUpPasswordConf').val('')
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  }
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  $('#passwordChange').text('')
  $('#signInEmail').val('')
  $('#signInPassword').val('')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  $('#changeOld').val('')
  $('#changeNew').val('')
  if (store.user === undefined || null) {
    $('#passwordChange').text('You must sign in before you can change your password.')
  } else if (data.passwords.old.length === 0) {
    $('#passwordChange').text('Please enter your current password.')
  } else if (data.passwords.new.length === 0) {
    $('#passwordChange').text('Please enter a new password.')
  } else if (data.passwords.new === data.passwords.old) {
    $('#passwordChange').text('New and old passwords are the same.')
  } else {
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  }
}

const onGetAlbums = function (event) {
  event.preventDefault()
  api.getAlbums()
    .then(ui.getAlbumsSuccess)
    .catch(ui.onError)
    .then(function (albums) {
    })
}

const onAddAlbum = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const title = data.album.title
  const artist = data.album.artist
  const year = data.album.year
  const format = data.album.format
  const catalog = data.album.catalog
  api.addAlbum(title, artist, year, format, catalog)
    .then(ui.addAlbumSuccess)
    .catch(ui.addAlbumError)
}

const authHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#signOut').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#get-albums').on('click', onGetAlbums)
  $('#adding-album').on('submit', onAddAlbum)
}

module.exports = {
  authHandlers
}
