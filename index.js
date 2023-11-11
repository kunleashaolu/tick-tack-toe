const box_1 = document.getElementById('box-1')
const box_2 = document.getElementById('box-2')
const box_3 = document.getElementById('box-3')
const box_4 = document.getElementById('box-4')
const box_5 = document.getElementById('box-5')
const box_6 = document.getElementById('box-6')
const box_7 = document.getElementById('box-7')
const box_8 = document.getElementById('box-8')
const box_9 = document.getElementById('box-9')

let square = Array(9).fill(null)
let currentMove = 0

function onBoxClick(boxElement) {
  // extract the box ID into a variable (convert from string to number)
  const boxId = Number(boxElement.ariaLabel)

  // return if box has been clicked
  if(square[boxId]) return

  let copySquare = square.slice()

  copySquare.splice(boxId, 1, currentMove % 2 === 0 ? 'X' : 'O')

  square = copySquare

  boxElement.innerHTML = currentMove % 2 === 0 ? 'X' : 'O'

  currentMove++

  console.log(square)
}











box_1.addEventListener('click', (e) => {onBoxClick(e.target)})
box_2.addEventListener('click', (e) => {onBoxClick(e.target)})
box_3.addEventListener('click', (e) => {onBoxClick(e.target)})
box_4.addEventListener('click', (e) => {onBoxClick(e.target)})
box_5.addEventListener('click', (e) => {onBoxClick(e.target)})
box_6.addEventListener('click', (e) => {onBoxClick(e.target)})
box_7.addEventListener('click', (e) => {onBoxClick(e.target)})
box_8.addEventListener('click', (e) => {onBoxClick(e.target)})
box_9.addEventListener('click', (e) => {onBoxClick(e.target)})
