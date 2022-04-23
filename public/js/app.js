console.log('Client side js folder is loaded!')

const searchForm = document.querySelector('form')
const locationInput = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')

searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = locationInput.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`/weather?address=${location}`).then(response => {        
        response.json().then(data => {
                if (data.error) {
                    messageOne.textContent = data.error;
                } else {
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast
                }
            }
        )
    })

})
