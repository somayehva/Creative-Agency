const toggleEl = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggleEl.addEventListener('click', () => {
  toggleEl.classList.toggle('active')
  navigation.classList.toggle('active')
})
