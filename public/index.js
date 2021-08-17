const baseURL = 'http://localhost:5050/'


const pickColor = () => {
    const body = {
        color: 'white'
    }
    axios.post(baseURL + 'color', body).then(res => {
        console.log(res.data)
    })
}

document.querySelector('.color-button').addEventListener('click', pickColor)