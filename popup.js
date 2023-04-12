const timeElement = document.getElementById('time')
const nameElement = document.getElementById('name')
const timerElement = document.getElementById('timer')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

// chrome.action.setBadgeText(
//   {
//     text: 'TIME',
//   },
//   () => {
//     console.log('Finished setting badge text.')
//   }
// )

const updateTimeElements = () => {
  chrome.storage.local.get(['timer'], (res) => {
    const time = res.timer ?? 0
    timerElement.textContent = `The timer is at: ${time} seconds`
  })
  const currentTime = new Date().toLocaleTimeString()
  timeElement.textContent = `The time is: ${currentTime}`
}

updateTimeElements()
setInterval(updateTimeElements, 1000)

chrome.storage.sync.get(['name'], (res) => {
  const name = res.name ?? '???'
  nameElement.textContent = `Your name is ${
    name[0].toUpperCase() + name.slice(1, name.length)
  }`
})

startBtn.addEventListener('click', () => {
  chrome.storage.local.set({
    isRunning: true,
  })
})

stopBtn.addEventListener('click', () => {
  chrome.storage.local.set({
    isRunning: false,
  })
})

resetBtn.addEventListener('click', () => {
  chrome.storage.local.set({
    timer: 0,
    isRunning: false,
  })
})
// console.log(this)
