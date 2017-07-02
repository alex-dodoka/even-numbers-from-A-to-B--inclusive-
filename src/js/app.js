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

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            arrOfEvenNumber.push(i);
        }
    }

    if (arrOfEvenNumber[0] === 0) {
        arrOfEvenNumber.splice(0, 1);
    }


    printHtml(arrOfEvenNumber.join(','));
}


function printHtml(result) {
    $('#place-for-print').html(result)
}