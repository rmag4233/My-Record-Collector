'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
// const store = require('./store')

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

const authHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  authHandlers
}
