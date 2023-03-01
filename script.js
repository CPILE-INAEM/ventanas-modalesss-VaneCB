const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
//const showModal = document.querySelectorAll(#botones)
const showModal = document.querySelectorAll('.show-modal')

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal)
  console.log(showModal)
}

//Lo mismo que con el for pero con un foreach
//showModal.forEach((btn)=> btn.addEventListener('click,openModal'))
console.log(showModal)
const closedModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

closeModal.addEventListener('click', closedModal)
overlay.addEventListener('click', closedModal)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closedModal()
  }
  e.stopPropagation()
})
