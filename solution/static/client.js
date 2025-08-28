document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('urlForm')
    const longUrlInput = document.getElementById('longUrlInput')
    const shortUrlLink = document.getElementById('shortUrlLink')
    const copyButton = document.getElementById('copyButton')
    const messageBox = document.getElementById('messageBox')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const url = longUrlInput.value
        fetch('/shorten', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        })
        .then(response => response.text())
        .then(shortUrl => {
            shortUrlLink.href = shortUrl
            shortUrlLink.textContent = shortUrl
            resultContainer.classList.remove('hidden')
        })
        .catch(error => {
            messageBox.textContent = 'Error: ' + error.message
        })
    })

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(shortUrlLink.href)
        messageBox.textContent = 'Copied to clipboard'
    })
})