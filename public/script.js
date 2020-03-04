/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//removes the small button from the the screen when first loaded
document.getElementById('small-btn').style.display = "none"

//function to increase the size of the text
const enlarge = () => {

  document.getElementById('large-btn').style.display = "none"
  document.getElementById('small-btn').style.display = "flex"
  let arrP = document.getElementsByTagName("p")
  let arrH3 = document.getElementsByTagName('h3')
  let arrBox = document.getElementsByClassName('txt-box')

  for (i = 0; i < arrP.length; i++) {
    arrP[i].classList.add('scaleUp')
  }

  for (i = 0; i < arrH3.length; i++) {
    arrH3[i].classList.add('scaleUp')
  }

  for (i = 0; i < arrBox.length; i++) {
    arrBox[i].classList.add('enlargeBox')
  }
}

//function to reduce the size of the text
const reduce = () => {

  document.getElementById('large-btn').style.display = "flex"
  document.getElementById('small-btn').style.display = "none"
  let arrP = document.getElementsByTagName("p")
  let arrH3 = document.getElementsByTagName("h3")
  let arrBox = document.getElementsByClassName('txt-box')

  for (i = 0; i < arrP.length; i++) {
    arrP[i].classList.remove('scaleUp')
  }

  for (i = 0; i < arrH3.length; i++) {
    arrH3[i].classList.remove('scaleUp')
  }

  for (i = 0; i < arrBox.length; i++) {
    arrBox[i].classList.remove('enlargeBox')
  }
}

const navHome = ()=>{
  location.pathname="/"
}

const navInsur = () =>{
  location.pathname="/insurance"
}

const navUser = ()=>{
  location.pathname="/user"
}