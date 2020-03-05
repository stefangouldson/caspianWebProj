// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//* Client side functions

let username = document.getElementById('username-input')

let card = document.getElementById('info-card')

const fetchDetails = async () => {
    let response = await fetch(`/details?username=${username.value}`)
    let data = await response.json()
    console.table(data)

    if (data) {

        document.getElementById('welcome-user').style.display = "none"
        document.getElementById('signUp-cont').style.display = "none"
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

const submitForm = () => {
    document.getElementById("sign-up-form").submit();
    location.pathname = "/user"
  }