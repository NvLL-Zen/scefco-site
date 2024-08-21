const lomba1 = document.getElementById("lomba1")
const lomba2 = document.getElementById("lomba2")
const lomba3 = document.getElementById("lomba3")
const lomba4 = document.getElementById("lomba4")
const lomba5 = document.getElementById("lomba5")
const lomba6 = document.getElementById("lomba6")

let elementList = [lomba1, lomba2, lomba3, lomba4, lomba5, lomba6]
const lombaGrid = document.getElementById("lomba-grid")
const mainHtml = document.querySelector("html")

// option 0 for hide, option 1 for display
const toggleDisplay = (elementExcept, option) => {
    if (option === 0) {
        option = "none"
        lombaGrid.style.gridTemplateRows = "80vh"
        lombaGrid.style.gridTemplateColumns = "90vw"
        elementExcept.style.width = "90vw"
        elementExcept.style.height = "80vh"
        mainHtml.style.overflowY = "hidden"
    } else if (option === 1) {
        option = "flex"
        lombaGrid.style.gridTemplateRows = "40vh 40vh"
        lombaGrid.style.gridTemplateColumns = "30vw 30vw 30vw"
        elementExcept.style.width = "30vw"
        elementExcept.style.height = "40vh"
        mainHtml.style.overflowY = "scroll"
    }
    for (let j = 0; j < 6; j++) {
        if ( elementExcept.id == elementList[j].id) {
            continue
        }
        console.log("Hided", elementList[j])
        elementList[j].style.display = option
    }
}


for (let i = 0; i < 6; i++){
    let currentElement = elementList[i]
    currentElement.addEventListener("click", function() {
        if (currentElement.style.backgroundColor === "white") {
            currentElement.style.backgroundColor = "#FCFCFC"
            toggleDisplay(currentElement, 0)
        }
        else {
            currentElement.style.backgroundColor = "white"
            toggleDisplay(currentElement, 1)
        }
    })
}