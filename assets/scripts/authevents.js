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

const onCloseSignUp = function () {
  event.preventDefault()
  $('#signInAfterSignUp').hide()
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
    $('#passwordChange').text('New and old passwords are the same. Please try again')
  } else {
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  }
}

const clearPassword = function () {
  event.preventDefault()
  $('#passwordChange').text('')
}

// const onGetAlbums = function (event) {
//   event.preventDefault()
//   api.getAlbums()
//     .then(ui.getAlbumsSuccess)
//     .catch(ui.onError)
//     .then(function (albums) {
//     })
// }

// below is the attempt to do the above through handlebars
const onGetAlbums = function (event) {
  event.preventDefault()
  $('#viewAlbums').text('')
  api.getAlbums()
    .then(ui.getAlbumsSuccess)
    .then(function () {
      $('.delete').on('click', deleteAlbum)
      $('.edit').on('click', editAlbum)
    })
    .catch(ui.getAlbumsError)
}

const onAddAlbum = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const title = data.album.title
  const artist = data.album.name
  const year = data.album.year
  const format = data.album.format
  const catalog = data.album.catalog
  api.addAlbum(title, artist, year, format, catalog)
    .then(ui.addAlbumSuccess)
    .catch(ui.addAlbumFailure)
}

const deleteAlbum = function (event) {
  event.preventDefault()
  const album = event.target
  const albumId = album.parentNode
  const albumParent = albumId.parentNode
  const thisID = albumParent.getAttribute('data-id')
  api.deleteAlbum(thisID)
    .then(ui.deleteAlbumSuccess)
    .catch(ui.deleteAlbumFailure)
}

const editAlbum = function () {
  event.preventDefault()
  const album = event.target
  const albumId = album.parentNode
  const albumParent = albumId.parentNode
  const thisID = albumParent.getAttribute('data-id')
  store.album = thisID
  $('#editAlbumModal').modal('show')
  api.getAlbum(thisID)
    .then(ui.getAlbumSuccess)
    .catch(ui.getAlbumsError)
    .then(function (album) {
    })
}

const onEditAlbum = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const title = data.editAlbum.title
  const artist = data.editAlbum.name
  const year = data.editAlbum.year
  const format = data.editAlbum.format
  const catalog = data.editAlbum.catalog
  api.editAlbum(title, artist, year, format, catalog)
    .then(ui.editAlbumSuccess)
    .catch(ui.editAlbumFailure)
}

const onSearchAlbums = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const artistSearch = data.searchAlbum.name
  ui.searchAlbum(artistSearch)
}

const authHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#signOut').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#get-albums').on('click', onGetAlbums)
  $('#adding-album').on('submit', onAddAlbum)
  $('#edit-album').on('submit', onEditAlbum)
  $('#addClose').on('click', onGetAlbums)
  $('#editClose').on('click', onGetAlbums)
  $('#passwordClose').on('click', clearPassword)
  $('#signClose').on('click', onCloseSignUp)
  $('#searching-albums').on('submit', onSearchAlbums)
}

module.exports = {
  authHandlers
}
