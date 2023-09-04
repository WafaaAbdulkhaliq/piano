var pianoButtons = document.querySelectorAll(".big");

for (let i = 0; i < pianoButtons.length; i++) {
    pianoButtons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.
        console.log(buttonInnerHTML);
        makeSound(buttonInnerHTML);

    });
}

document.addEventListener("keypress", function (event) {
    buttonAnimation(event.key)

    makeSound(event.key)
});

function makeSound(btn) {
    switch (btn) {

        case 'a':
            var note_a = new Audio("music/crash.mp3");
            // console.log(note_a)
            note_a.play();
            break;

        case 'b':
            var note_b = new Audio("music/tom-4.mp3");
            note_b.play();
            break;

        case 'c':
            var note_c = new Audio("music/snare.mp3");
            note_c.play();
            break;

        case 'd':
            var note_c = new Audio("music/snare.mp3");
            note_c.play();
            break;

        case 'e':
            var note_e = new Audio("music/tom-4.mp3");
            note_e.play();
            break;

        case 'f':
            var note_f = new Audio("music/crash.mp3");
            note_f.play();
            break;

        default: console.log(this.innerHTML);
            break;
    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed")

    setTimeout(function () { activeButton.classList.remove("pressed"); }, 100)
}

