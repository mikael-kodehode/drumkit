const drum = document.querySelector("#root")


const sounds = []
const drums = []
const keys = [" ","a", "w", "d", "k", "o", "p", "Enter"]

fetch("src/audio.json")
  .then(res => res.json())
  .then(data => {
    data.sounds.forEach(e => sounds.push(new Audio(e.url)))
    data.sounds.forEach(e => drums.push(e.sound))
  })
function createDiv() {
  let div = document.createElement("div")
  let color = Math.floor(Math.random()*16777215).toString(16);
  let height = Math.floor(Math.random()*document.body.clientHeight)
  let width = Math.floor(Math.random()*document.body.clientWidth)
  let pxHeight = Math.floor(Math.random()*200)
  let pxWidth = Math.floor(Math.random()*200)
  let border = Math.floor(Math.random()*50)+1
  let rotate = Math.floor(Math.random()*360)
  div.classList.add("particle")
  div.style.background = `#${color}`
  div.style.top = `${height}px`
  div.style.left = `${width}px`
  div.style.height = `${pxHeight}px`
  div.style.width = `${pxWidth}px`
  div.style.borderRadius =  `${border}%`
  div.style.transform = `rotate(${rotate}deg)`
  return div
}
document.body.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    drum.innerHTML = ""
  }
  else if (e.target.nodeName === "DIV") {
    let element = e.target.style.background = `hsl(${Math.floor(Math.random()*360)},${Math.floor(Math.random()*101)}%,${Math.floor(Math.random()*101)}%)`
  }
})

document.body.addEventListener("keydown", e => {
  sounds[keys.indexOf(e.key)].load()
  sounds[keys.indexOf(e.key)].play()
  drum.append(createDiv())
})
