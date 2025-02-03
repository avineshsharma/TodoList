submit.addEventListener("click", (e) => {
    e.preventDefault()
    let titlee = title.value
    let cann = can.value
    localStorage.setItem("todo", JSON.stringify([titlee, cann]))
    console.log(e)
    toodo.innerHTML = `
     <h1>${titlee}</h1>
     <p>${cann}</p>`
    title.value = ""
    can.value = ""
})

delet.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("todo")
    toodo.innerHTML = ""
})
