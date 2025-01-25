document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("barkButton")
    button.addEventListener("click", Clicked)
    function Clicked() {
        var randNum = Math.floor((Math.random() * 4) + 1)
        randNum = "B" + randNum
        console.log(randNum)

        var randSound = document.getElementById(randNum)
        randSound.play()
}
})
