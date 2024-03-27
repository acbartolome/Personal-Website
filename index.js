const message1 = "This is the basic JavaScript that I have included for my website.";

const message2 = "I do not know much JavaScript yet but I will add more to this section later on"

console.log(`${message1} ${message2}`)

const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})

setTimeout(() => {
    window.location.href = window.location.origin
  }, 5000)
