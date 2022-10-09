var sounds = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/snare.mp3",
    k: "sounds/crash.mp3",
    l: "sounds/kick-bass.mp3"
};

document.addEventListener("keydown", function(event) {
    if (sounds.hasOwnProperty(event.key)) {
        (new Audio(sounds[event.key])).play();
    }
    var activeButton = document.querySelector("." + event.key);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
})

for (let i in document.querySelectorAll(".drum")) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}


function handleClick(Event){
    (new Audio(sounds[this.innerText])).play();
}
