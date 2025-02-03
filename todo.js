submit.addEventListener("click", (e) => {
    e.preventDefault()
    let titlee = title.value
    let cann = can.value
    localStorage.setItem("todo", JSON.stringify([titlee, cann]))
    console.log(e)
})

delet.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("todo")
})
