'use strict'

const store = require('./store')
const showAlbumsTemplate = require('./templates/album-listing.handlebars')
const searchAlbumsTemplate = require('./templates/search-album-listing.handlebars')

const onSignUpLinkClick = function (event) {
  event.preventDefault()
  $('#sign-up').show()
  $('#sign-in').hide()
  $('#signInModal').show()
  $('#signUpModal').hide()
  $('#messageContent').text('')
  $('#signInMessage').text('')
}

const onPasswordChangeLink = function (event) {
  event.preventDefault()
  $('#passwordChange').text('')
}

const onSignInLinkClick = function (event) {
  event.preventDefault()
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#signInModal').hide()
  $('#signUpModal').show()
  $('#messageContent').hide()
  $('#signInAfterSignUp').hide()
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
  $('#signInMessage').text('')
  $('#signInAfterSignUp').hide()
  const form = document.getElementById('sign-in')
  form.reset()
}

const signUpSuccess = function (data) {
  $('#messageContent').text('You have signed up as ' + data.user.email)
  $('#signedOut').hide()
  $('#signInMessage').text('')
  $('#signInModal').hide()
  $('#signInAfterSignUp').show()
}

const signUpFailure = function () {
  $('#messageContent').text('This user may already exist. Please try again.')
}

const signInSuccess = function (data) {
  $('#messageContent').text('')
  $('#signInAfterSignUp').hide()
  $('#signInMessage').show()
  $('#signInMessage').text('Signed in as ' + data.user.email)
  $('#sign-in').hide()
  $('#signUpLink').hide()
  $('#signOut').show()
  $('#changePassword').show()
  $('#signedOut').hide()
  $('#signUpModal').hide()
  $('#get-albums').show()
  $('#add-album').show()
  $('#search-albums').show()
  $('#userNameNav').show()
  store.user = data.user
  const user = store.user.email
  $('#userNameNav').text('Signed in as ' + user)
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
  $('#myAlbums').text('')
  $('#get-albums').hide()
  $('#add-album').hide()
  $('#search-albums').hide()
  $('#userNameNav').hide()
  $('#deletedAlbum').text('')
  $('#searching-albums').hide()
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
  store.albums = albums
  const showAlbumsHtml = showAlbumsTemplate({ albums: albums.albums })
  $('#myAlbums').show()
  howManyAlbums()
  $('#viewAlbums').show()
  $('#viewAlbums').append(showAlbumsHtml)
  $('#deletedAlbum').hide()
  $('#searching-albums').show()
}

const searchAlbum = function (artistSearch) {
  const searchAlbumArray = []
  for (let i = 0; i < store.albums.albums.length; i++) {
    if (store.albums.albums[i].artist_name.toUpperCase() === artistSearch.toUpperCase()) {
      searchAlbumArray.push(store.albums.albums[i])
    }
  } const showAlbumsHtml = searchAlbumsTemplate({ albums: searchAlbumArray })
  $('#viewAlbums').text('')
  $('#viewAlbums').append(showAlbumsHtml)
  if (searchAlbumArray.length === 1) {
    $('#myAlbums').text('You Have ' + searchAlbumArray.length + ' Record by ' + artistSearch + ' In Your Collection (please hit "View My Albums" to edit or delete):')
  } else {
    $('#myAlbums').text('You Have ' + searchAlbumArray.length + ' Records by ' + artistSearch + ' In Your Collection (please hit "View My Albums" to edit or delete):')
  }
  const form = document.getElementById('searching-albums')
  form.reset()
}

const howManyAlbums = function () {
  if (store.albums.albums.length === 1) {
    $('#myAlbums').text('You Have ' + store.albums.albums.length + ' Record In Your Collection:')
  } else {
    $('#myAlbums').text('You Have ' + store.albums.albums.length + ' Records In Your Collection:')
  }
}

const getAlbumsFailure = function () {
  $('#viewAlbums').show()
  $('#viewAlbums').text('Ooops! Looks like there was an issue, please try again.')
}

const addAlbumSuccess = function (data) {
  $('#viewAlbums').text('')
  $('#myAlbums').text('')
  $('#addedAlbumMessage').show()
  $('#addedAlbumMessage').text('Nice, your new album has been added! Close this window to see your updated record collection')
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
  $('#deletedAlbum').text('Album has been removed from your collection. Click "View Albums" to see your updated record collection')
  $('#viewAlbums').text('')
  $('#myAlbums').text('')
  $('#searching-albums').hide()
}

const deleteAlbumFailure = function () {
  $('#deletedAlbum').show()
  $('#deletedAlbum').text('Ooops! Looks like there was an issue, please try again.')
}

const editAlbumSuccess = function () {
  $('#editedAlbumMessage').show()
  $('#editedAlbumMessage').text('Album has been updated. Close this window to see your updated record collection')
  $('#viewAlbums').text('')
  $('#myAlbums').text('')
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

const getAlbumSuccess = function (album) {
  const albumInput = $('#editAlbumTitle')
  albumInput.val(album.album.title)
  const artistInput = $('#editArtistName')
  artistInput.val(album.album.artist_name)
  const yearInput = $('#editYearReleased')
  yearInput.val(album.album.year_released)
  const formatInput = $('#editFormat')
  formatInput.val(album.album.format)
  const catalogInput = $('#editCatalogNum')
  catalogInput.val(album.album.catalog_number)
}

const uiHandlers = function () {
  $('#signUpLink').on('click', onSignUpLinkClick)
  $('#signInModal').on('click', onSignInLinkClick)
  $('#signUpModal').on('click', onSignUpModalLinkClink)
  $('#add-album').on('click', hideAddedContent)
  $('#editClose').on('click', hideEditedContent)
  $('#signInAfterSignUp').on('click', onSignInLinkClick)
  $('#changePassword').on('click', onPasswordChangeLink)
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
  deleteAlbumFailure,
  getAlbumSuccess,
  searchAlbum
}
