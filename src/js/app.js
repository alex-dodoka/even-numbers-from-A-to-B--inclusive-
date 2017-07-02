const arrOfEvenNumber = [];

function getReult() {
    let a = parseInt($('#A').val());
    let b = parseInt($('#B').val());

    if (a > b) {
        alert(`A <=B`);
    } else if (a < 1) {
        alert(`A >= 1`);
    } else if (b > 30000) {
        alert(`B <=30000`);
    }

}