const nameInput = document.querySelector('#name-input')
const timeInput = document.querySelector('#time-input')
const saveBtn = document.querySelector('#save-btn')

saveBtn.addEventListener('click', () => {
  const name = nameInput.value
  const notificationTime = timeInput.value
  chrome.storage.sync.set({
    name,
    notificationTime,
  })
})

chrome.storage.sync.get(['name', 'notificationTime'], (res) => {
  nameInput.value = res.name ?? '???'
  timeInput.value = res.notificationTime ?? 1000
})

console.log('Hello from the options page!')
