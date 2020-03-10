// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//* Client side functions



let username = document.getElementById('username-input')
let card = document.getElementById('info-card')

const fetchDetails = async () => {
  localStorage.clear
//alert("DEVELOPER NOTE: If nothing appears, this is likely due to the remote database being down as I have used a free version which deletes your database when it is inactive for a while")
  let response = await fetch(`/details?username=${username.value}`)
  let data = await response.json()
  console.table(data)

  if (data) {

    document.getElementById('welcome-user').style.display = "none"
    document.getElementById('signUp-cont').style.display = "none"
    card.style.height = "fit-content"

    localStorage.setItem('user_balance', data.balance)
    localStorage.setItem('user_id', data.user_id)

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
    bal.innerHTML = "Balance: £" + data.balance
    card.appendChild(bal)

    if (data.name) {

      let ins = document.createElement('h4')
      ins.setAttribute("id","insurType")
      ins.innerHTML = "Current Insurance: " + data.name
      card.appendChild(ins)

    }

    else {
      let ins = document.createElement('h4')
      ins.innerHTML = "Current Insurance: Null"
      card.appendChild(ins)
    }

    insuranceContainer.style.display = "flex";

    fetchInsurance()
    window.scrollTo(0, 0)

  }

  else {
    alert("Error, username not recognised")
  }
}

const submitForm = () => {
  document.getElementById("sign-up-form").submit();
  location.pathname = "/user"
}

let insuranceContainer = document.getElementById('insurance-cont')
insuranceContainer.style.display = "none"

const fetchInsurance = async () => {
  let response = await fetch("/fetchInsurances")
  let data = await response.json()
  console.table(data)

  let title = document.createElement('h4')
  title.innerHTML = "Insurances"
  insuranceContainer.appendChild(title)
  title.classList.add('sub-title')
  title.style.fontWeight = "bolder"
  title.style.textDecoration = "underline"

  for (i = 0; i < data.length; i++) {

    let insurCard = document.createElement('div')
    insurCard.classList.add('insurCard')
    insuranceContainer.appendChild(insurCard)

    let name = document.createElement('h4')
    name.innerHTML = "Name: " + data[i].name
    insurCard.appendChild(name)
    name.style.width = '25%'

    let type = document.createElement('h4')
    type.innerHTML = "Type: " + data[i].type
    insurCard.appendChild(type)
    type.style.width = '25%'

    let cost = document.createElement('h4')
    cost.innerHTML = "Cost: £" + data[i].cost
    insurCard.appendChild(cost)
    cost.style.width = '25%'

    let buy = document.createElement('button')
    buy.innerHTML = "Buy"
    insurCard.appendChild(buy)
    buy.style.width = '10%';

    buy.setAttribute("btnCost", data[i].cost)
    buy.setAttribute("btnID", data[i].id)
    buy.setAttribute("name", data[i].name)

    let btnID = buy.getAttribute('btnID')
    let btnBal = parseInt(buy.getAttribute('btnCost'))
    let userID = localStorage.getItem("user_id")
    let userBal = parseInt(localStorage.getItem('user_balance'))
    let insName = buy.getAttribute('name')

    buy.addEventListener('click', async () => {
      console.log("UserBal is "+userBal)
      console.log("btn bal is "+btnBal)

      if (userBal >= btnBal){
        console.log('buying from button')
        let response = await fetch(`/buy?userID=${userID}&insuranceID=${btnID}`,{method:"POST"})
        let data = await response
        console.log(data)
        let ins = document.getElementById('insurType')
        ins.innerHTML = "Current Insurance: " + insName
      }
      else{alert("You can't afford this")}
    })
  }

}
