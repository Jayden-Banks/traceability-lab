//const { default: axios } = require("axios")


//const baseUrl = 'http://localhost:5050/'


const pickColor = () => {
    const body = {
        color: 'white'
    }
    axios.post('/color', body).then(res => {
        console.log(res.data)
        document.querySelector('h2').textContent = res.data
})
}

document.querySelector('.color-button').addEventListener('click', pickColor)