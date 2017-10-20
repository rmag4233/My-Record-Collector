'use strict'

const store = require('./store')
const showAlbumsTemplate = require('./templates/album-listing.handlebars')

const onSignUpLinkClick = function (event) {
  event.preventDefault()
  $('#sign-up').show()
  $('#sign-in').hide()
  $('#messageContent').text('')
}

const onSignInLinkClick = function (event) {
  event.preventDefault()
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#signInModal').hide()
  $('#signUpModal').show()
  $('#messageContent').hide()
  $('#signInMessage').show()
  const form = document.getElementById('sign-up')
  form.reset()
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
  $('#signUpSignIn').text('')
  const form = document.getElementById('sign-in')
  form.reset()
}

// const appendText = function () {
//   const txt1 = 'You have signed up as '
//   const txt2 = data.user.email
//   const txt3 = document.createElement("p")
//   $('#messageContent').append(txt1, txt2, txt3)
// }

const signUpSuccess = function (data) {
  $('#messageContent').text('You have signed up as ' + data.user.email + '. Sign in to start cataloging!')
  // appendText()
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
  $('#get-albums').show()
  $('#add-album').show()
  $('#userNameNav').show()
  store.user = data.user
  const user = store.user.email
  $('#userName').text('Signed in as ' + user)
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
  $('#viewAlbums').text('')
  $('#get-albums').hide()
  $('#add-album').hide()
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

// const getAlbumsSuccess = function (albums) {
//   store.albums = albums
//   const albumID = store.albums.albums[0].title
//   $('#signedOut').show()
//   $('#signedOut').text('Album 1 ID is ' + albumID)
// }

// below is the attempt to do the same as above with handlebars

const getAlbumsSuccess = function (albums) {
  const showAlbumsHtml = showAlbumsTemplate({ albums: albums.albums })
  $('#viewAlbums').show()
  $('#viewAlbums').append(showAlbumsHtml)
  $('#deletedAlbum').text('')
}

const getAlbumsFailure = function () {
  $('#viewAlbums').show()
  $('#viewAlbums').text('Ooops! Looks like there was an issue, please try again.')
}

const addAlbumSuccess = function (data) {
  $('#viewAlbums').text('')
  $('#addedAlbumMessage').show()
  $('#addedAlbumMessage').text('Nice, your new album has been added! Click view albums to see your updated collection!')
  const form = document.getElementById('adding-album')
  form.reset()
}

const addAlbumFailure = function () {
  $('#addedAlbumMessage').show()
  $('#addedAlbumMessage').text('Ooops! Looks like there was an issue, please try again.')
}

const hideAddedContent = function (event) {
  event.preventDefault()
  $('#addedAlbumMessage').text('')
}

const deleteAlbumSuccess = function () {
  $('#deletedAlbum').show()
  $('#deletedAlbum').text('Album has been removed from your collection. Hit "View Albums" to see your current record collection')
  $('#viewAlbums').text('')
}

const deleteAlbumFailure = function () {
  $('#deletedAlbum').show()
  $('#deletedAlbum').text('Ooops! Looks like there was an issue, please try again.')
}

const editAlbumSuccess = function () {
  $('#editedAlbumMessage').show()
  $('#editedAlbumMessage').text('Album has been updated. Hit "View Albums" to see your current record collection')
  $('#viewAlbums').text('')
  const form = document.getElementById('edit-album')
  form.reset()
}

const editAlbumFailure = function () {
  $('#editedAlbumMessage').show()
  $('#editedAlbumMessage').text('Ooops! Looks like there was an issue, please try again.')
}

const hideEditedContent = function (event) {
  event.preventDefault()
  $('#editedAlbumMessage').text('')
}

const uiHandlers = function () {
  $('#signUpLink').on('click', onSignUpLinkClick)
  $('#signInModal').on('click', onSignInLinkClick)
  $('#signUpModal').on('click', onSignUpModalLinkClink)
  $('#add-album').on('click', hideAddedContent)
  $('#editClose').on('click', hideEditedContent)
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
  getAlbumsSuccess,
  addAlbumSuccess,
  getAlbumsFailure,
  addAlbumFailure,
  deleteAlbumSuccess,
  editAlbumSuccess,
  editAlbumFailure,
  deleteAlbumFailure
}
