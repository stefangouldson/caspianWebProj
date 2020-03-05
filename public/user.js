//* Client side functions

let username = document.getElementById('username-input')

let card = document.getElementById('info-card')

const fetchDetails = async () => {
    let response = await fetch(`/details?username=${username.value}`)
    let data = await response.json()
    console.table(data)

    if (data) {

        document.getElementById('welcome-user').style.display = "none"
        card.style.height = "90vh"

        let userName = document.createElement('h4')
        userName.innerHTML = "Username: " + data.username
        card.appendChild(userName)

        let firstName = document.createElement('h4')
        firstName.innerHTML = "First Name: " + data.first_name
        card.appendChild(firstName)

        let lastName = document.createElement('h4')
        lastName.innerHTML = "Last Name: " + data.last_name
        card.appendChild(lastName)

        let bal = document.createElement('h4')
        bal.innerHTML = "Balance: " + data.balance
        card.appendChild(bal)

    }

    else {
        alert("Error, username not recognised")
    }
}
