function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  const img = document.querySelector("#perfil img")

  if(html.classList.contains("light")) {
    img.setAttribute("src", './assets/RAK.jpg')
  } else {
    img.setAttribute('src','./assets/Avatar.png')
  }
  if(html.classList.contains("light")) {
    img.style.border = "2px solid grey"
  } else {
      img.style.border = "none"
  }
}