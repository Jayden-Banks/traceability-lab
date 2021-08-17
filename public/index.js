
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