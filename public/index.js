
//const baseUrl = 'http://localhost:5050/'
const baseUrl = 'https://traceability-lab21.herokuapp.com'


const pickColor = () => {
    const body = {
        color: 'white'
    }
    axios.post(baseUrl + 'color', body).then(res => {
        console.log(res.data)
    })
}

document.querySelector('.color-button').addEventListener('click', pickColor)