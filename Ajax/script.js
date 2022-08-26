// Actual api 

let cn = document.querySelector('#container')
function renderHtml(users) {
    users.forEach(function (el) {

        console.log(el)
        let html = `<div>
    <p>${el.id}</p>
    <p>${el.email}</p>
    <p>${el.first_name}</p>
    <p>${el.last_name}</p>
    <img src= "${el.avatar}">
    </div>`

        cn.insertAdjacentHTML('beforeEnd', html)
    });
}

function getData(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (response) {
            response.json().then(function (response) {
                let data = response.data
                renderHtml(data)
            })
        })
}

getData(2)

// renderHtml(data.data)