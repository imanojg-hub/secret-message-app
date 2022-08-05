const { hash } = window.location
const message = atob(hash.replace('#', ''))

const cardDisplay = document.querySelector('.card-body')
const messageDisplay = document.querySelector('.message')
const cardHeader = document.querySelector('.card-header')

if (message) {
  messageDisplay.classList.remove('d-none')
  cardDisplay.classList.add('d-none')
  cardHeader.classList.add('d-none')
  document.querySelector('h1').innerHTML = `" ${message} "`
}
const btn = document.querySelector('.btn')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const cardDisplay = document.querySelector('.card-body')
  const cardFooter = document.querySelector('.linkText')
  const cardHeader = document.querySelector('.card-header')
  const shareText = document.querySelector('.share-text')

  // stylings

  cardDisplay.style.display = 'none'

  cardHeader.style.borderStyle = 'none'

  cardFooter.classList.remove('d-none')
  cardFooter.classList.add('d-block')
  cardFooter.style.padding = '30px 0'

  shareText.classList.add('h5', 'mb-4')

  // input validation

  const input = document.getElementById('user-input')
  const encrypted = btoa(input.value)

  const encryptedInput = document.getElementById('encrypted-input')
  encryptedInput.value = `${window.location}#${encrypted}`
  encryptedInput.select()

  form.reset()
})
