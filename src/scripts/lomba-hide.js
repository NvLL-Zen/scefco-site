let elements = [
    document.getElementById("lomba1"),
    document.getElementById("lomba2"),
    document.getElementById("lomba3"),
    document.getElementById("lomba4"),
    document.getElementById("lomba5"),
    document.getElementById("lomba6")
]

const toggleZoom = (selectedElement, option) => {
    if (option === "0") {
        selectedElement.style.width = "90vw"
        selectedElement.style.height = "80vh"
        selectedElement.backgroundColor = "red"
    } else {
        selectedElement.style.width = "30vw"
        selectedElement.style.height = "40vh"
        selectedElement.backgroundColor = "white"
    }
}

for (let j = 1; j < 7; j++){
    let currentElement = document.getElementById(`lomba${j}`)
    currentElement.addEventListener("click", function() {
        if (currentElement.style.zIndex === "") {
            console.log("Triggered")
            currentElement.style.zIndex = "1"
            toggleZoom(currentElement, "0")
        }
        else {
            currentElement.style.zIndex = ""
            toggleZoom(currentElement, "1")
        }
    })
}






