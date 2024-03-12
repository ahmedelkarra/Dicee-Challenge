let user1 = Math.floor(Math.random() * 6) + 1
let user2 = Math.floor(Math.random() * 6) + 1

let imgUser1 = document.querySelector('img.img1').src = `images/dice${user1}.png`
let imgUser2 = document.querySelector('img.img2').src = `images/dice${user2}.png`

let flag = `<img src="flag-48.png" style="width: 100px;">`

if (user1 == user2) {
    document.querySelector("h1").innerHTML = "Drawn"
}
else if (user1 < user2) {
    document.querySelector("h1").innerHTML = ` Player 2 Won ${flag} `
}
else if (user1 > user2) {
    document.querySelector("h1").innerHTML = ` ${flag} Player 1 Won `
} 