// make a list to store all images
const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6Z1wtI_oJZGrDuXdN9wqFCAxE-6ZNXKjRLqpxosCbg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuRShCIwTUTRbP7pO1ZsxHZLz5edgXdUVpBc3hDSgAw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7V-RL6aT_H3wtfq3fagGn9dh_jnzyE5T_fYaKcQdtQw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ePM6ZoXav0SWeIt-qr0COlhDa1vhxwXdAhcOh5TZCg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFB7t1g_rEZ855m6luewgaOHvPAyPfjzCtnmlJWQvF0Q&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaoeOUoMF0MnaJMIrHgZIWf0xMsSj7YDrji68S7pJodw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sAYu2ewEaAaqRK7lLJMf6G9Rdw0kIT4rbsmqwZp0w&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoABblTdh9zNkIyP33b1g1a8YNWzvQHcxZ7kOG155LAw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDC9pEtRyEn7xXzSiKE1gO5kckTEIPwY-ihks3YKqu8w&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI16FiK3yS_CfFxsVrxNt2IhKzsnP10033a1sq1YsMLg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAHs7SC3i09dyNVkwQ8U9cFkkX-F-SOkMnGaAKJEt9g&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4C_dTJ9yOF9ABvV9cE9796x-45Lx19xZ8dcUFeNjmQ&s=10",
]

const photoFrame = document.getElementById("photo-frame")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const goBtn = document.getElementById("goBtn")
const dropdown = document.getElementById("dropdown")
let imageNum = 0

// define button click events
nextBtn.addEventListener("click", () => {
    imageNum = imageNum + 1

    // length - returns the total number of items in a list
    if(imageNum >= images.length)
    {
        imageNum = 0
    }

    photoFrame.src = images[imageNum]
})


prevBtn.addEventListener("click", () => {
    imageNum = imageNum - 1 

    // length - returns the total number of items in a list
    if(imageNum < 0)
    {
        imageNum = images.length - 1
    }

    photoFrame.src = images[imageNum]
})


goBtn.addEventListener("click",function () {
    const link = dropdown.value

    if(link == "")
    {
        alert("Please select a Scratch project first.")
        return
    }

    window.location.href = link
})