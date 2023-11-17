const box_1 = document.getElementById('box-1')
const box_2 = document.getElementById('box-2')
const box_3 = document.getElementById('box-3')
const box_4 = document.getElementById('box-4')
const box_5 = document.getElementById('box-5')
const box_6 = document.getElementById('box-6')
const box_7 = document.getElementById('box-7')
const box_8 = document.getElementById('box-8')
const box_9 = document.getElementById('box-9')
const next_player = document.getElementById('next-player')
const winner_overlay = document.getElementById('winner-overlay')
const winner_text = document.getElementById('winner-text')
const reset_button = document.getElementById('reset-btn')
const restart_button = document.getElementById('restart-btn')
const replay_button = document.getElementById('replay-btn')
const o_score = document.getElementById('player-o-score')
const x_score = document.getElementById('player-x-score')

let squares = Array(9).fill(null)
let currentMove = 0
let scores = { x: 0, o: 0 }
let round = 1

function calculateWinner(_squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (_squares[a] && _squares[a] === _squares[b] && _squares[a] === _squares[c]) {
      round += 1
      return _squares[a]
    }
  }
  return null
}

function onBoxClick(boxElement) {
  // extract the box ID into a variable (convert from string to number)
  const boxId = Number(boxElement.ariaLabel)

  // return if box has been clicked
  if (squares[boxId]) return

  // make a copy of the orginal squares array
  let copySquares = squares.slice()

  // add item to array index using boxId as position
  copySquares.splice(boxId, 1, (currentMove + round) % 2 === 0 ? 'X' : 'O')

  squares = copySquares

  boxElement.innerHTML = (currentMove + round) % 2 === 0 ? 'X' : 'O'
  next_player.innerHTML = (currentMove + round) % 2 != 0 ? 'Next Player:  X' : 'Next Player:  O'

  currentMove += 1

  const winner = calculateWinner(squares)

  // check if all array indexes are filled
  const tiedGame = !squares.includes(null)

  if (winner) {
    winner_overlay.classList.remove('hidden')
    winner_text.innerHTML = winner

    let copyScores = winner === 'X' ? { ...scores, x: scores.x + 1 } : { ...scores, o: scores.o + 1 }
    scores = copyScores
  }

  // Check if round ends in a draw
  if (tiedGame && !winner) {
    round += 1
    next_player.innerHTML = 'This round ends in a draw'
  }
}

function restartGame() {
  squares = Array(9).fill(null)
  currentMove = 0

  box_1.innerHTML = ''
  box_2.innerHTML = ''
  box_3.innerHTML = ''
  box_4.innerHTML = ''
  box_5.innerHTML = ''
  box_6.innerHTML = ''
  box_7.innerHTML = ''
  box_8.innerHTML = ''
  box_9.innerHTML = ''
  o_score.innerHTML = scores.o
  x_score.innerHTML = scores.x
  next_player.innerHTML = `Next Player: ${round % 2 === 0 ? 'X' : 'O'}`
}

function replayGame() {
  restartGame()
  winner_overlay.classList.add('hidden')
}

function resetGame() {
  scores = { x: 0, o: 0 }
  round = 1
  restartGame()
}

box_1.addEventListener('click', (e) => onBoxClick(e.target))
box_2.addEventListener('click', (e) => onBoxClick(e.target))
box_3.addEventListener('click', (e) => onBoxClick(e.target))
box_4.addEventListener('click', (e) => onBoxClick(e.target))
box_5.addEventListener('click', (e) => onBoxClick(e.target))
box_6.addEventListener('click', (e) => onBoxClick(e.target))
box_7.addEventListener('click', (e) => onBoxClick(e.target))
box_8.addEventListener('click', (e) => onBoxClick(e.target))
box_9.addEventListener('click', (e) => onBoxClick(e.target))

replay_button.addEventListener('click', () => replayGame())
restart_button.addEventListener('click', () => restartGame())
reset_button.addEventListener('click', () => resetGame())
