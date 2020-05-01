const createCharWraperNode = () => {
    let element = document.createElement("span")
    element.setAttribute("class", "char")

    return element
}

const requestFile = () => {
    requestFileName(document.getElementById("file_name_input"))
}

const requestFileName = (url) => {
    //XMLHttpRequest is depricated on the main thread.
    // let requested_file = new XMLHttpRequest();

    // requested_file.open("GET", url, false)
    // requested_file.onreadystatechange = function() {
    //     if (requested_file.readyState === 4) {
    //         if (requested_file.status === 200 || requested_file.status === 0) {
    //             let allText = requested_file.responseText
    //             console.log(allText)
    //         }
    //     }
    // }

    // requested_file.send(null)

    fetch(url)
    .then(data=>{return data.text()})
    .then(res=>{console.log(res)})
}

document.addEventListener('DOMContentLoaded', (event) => {
    const file_element = document.getElementById("file")

    let file_node = document.createTextNode("sup!")

    file_element.appendChild(file_node)
})