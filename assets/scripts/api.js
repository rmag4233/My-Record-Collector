'use strict'

const config = require('./config.js')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAlbums = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/albums',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addAlbum = function (title, artist, year, format, catalog) {
  return $.ajax({
    url: config.apiOrigin + '/albums',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'album': {
        'title': title,
        'artist_name': artist,
        'year_released': year,
        'format': format,
        'catalog_number': catalog
      }
    }
  })
}

const deleteAlbum = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/albums/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getAlbums,
  addAlbum,
  deleteAlbum
}
