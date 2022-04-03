const nameInput = document.getElementById('name-input')
const timeInput = document.getElementById('time-input')
const saveButton = document.getElementById('save-button')

saveButton.addEventListener('click', () => {
  const name = nameInput.value
  const notificationTime = timeInput.value
  const params = {}
  name && (params.name = name)
  notificationTime && (params.notificationTime = notificationTime)
  chrome.storage.sync.set(params, () => {
    console.log(`Name is set to ${name}`)
  })
})

chrome.storage.sync.get(
  ['name', 'notificationTime'],
  ({ name, notificationTime }) => {
    nameInput.value = name ?? '???'
    timeInput.value = notificationTime ?? 100
  }
)
