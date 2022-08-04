const url="http://localhost:5500/api"
const newUser = {
    name: 'Gabriela',
    avatar: 'https://pixabay.com/images/search/nature/',
    city: 'Rio do Sul'
}

const UpdateUser = {
    name: 'Olivia',
    avatar: 'https://pixabay.com/images/search/nature/',
    city: 'Recife'
}

function getUser(){
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
getUser()

function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
addNewUser()

// function updateUser() {
// axios.put(`${url}/2`, UpdateUser)
// .then(response => {
//     alert(JSON.stringify(response.data))
// })
// .catch(error => console.log(error))
// }
// updateUser()

// function deleteUser() {
//     axios.delete(`${url}/1`)
//     .then(response => {
//         alert(JSON.stringify(response.data))
//     })
//     .catch(error => console.log(error))
// }
// deleteUser()


function getOneUser() {
    axios.get(`${url}/2`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
getOneUser()