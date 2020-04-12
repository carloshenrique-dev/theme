const sunMoonContainer = document.querySelector('.sun-moon-container')

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark')
  const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
  sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
})

function funcao() {
  var x = document.getElementById("button");
  if (x.innerText === "Dark") {
    x.innerText = "Light";    
  } else {
    x.innerText = "Dark";     
  }
}


