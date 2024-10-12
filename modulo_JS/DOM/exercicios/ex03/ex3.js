
const ulAlvo = document.querySelector(".alvo ul")
const ulOriginal = document.querySelector(".original ul")

const li = document.createElement('li')
li.textContent = 'item 2'
ulAlvo.appendChild(li)

ulAlvo.insertBefore(ulOriginal.lastElementChild, ulAlvo.firstElementChild)

ulAlvo.children[0].textContent = 'item 0'

const ulClone = ulOriginal.cloneNode(true)
ulAlvo.firstElementChild.appendChild(ulClone)

ulClone.removeChild(ulClone.lastElementChild)

ulOriginal.innerHTML = " "