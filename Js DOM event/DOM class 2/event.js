document.getElementById('make-green').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

function magicBtn() {
    const magicLine = document.getElementById('magic-line');
    magicLine.innerText = 'Magic!! I am changed';

}

document.getElementById('magic-btn').addEventListener('click', function () {
    document.getElementById('magic-line').innerText = 'WOW!! Who Changed Me??';
});