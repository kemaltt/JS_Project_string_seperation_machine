let radioDavor = document.getElementById('radio-davor')
let radioDanach = document.getElementById('radio-danach')
let resultVorderer = document.getElementById('output-vorderer')
let resultHinterer = document.getElementById('output-hinterer')



const absenden = () => {
    let zeichenkette = document.getElementById('input-text').value
        // console.log(zeichenkette);
    let trennungsPosition = document.getElementById('input-text2').value
    let indexTrennunsPosition = zeichenkette.indexOf(trennungsPosition);
    let vordererTeil;
    let hintererTeil;


    if (indexTrennunsPosition !== -1) {
        if (radioDavor.checked) {
            vordererTeil = zeichenkette.slice(0, indexTrennunsPosition)
            hintererTeil = zeichenkette.slice(indexTrennunsPosition)
        } else {
            vordererTeil = zeichenkette.slice(0, indexTrennunsPosition + trennungsPosition.length)
            hintererTeil = zeichenkette.slice(indexTrennunsPosition + trennungsPosition.length)
        }
    } else if (radioDanach.checked) {
        vordererTeil = 'Fehler!!!'
        hintererTeil = zeichenkette;
    }

    // console.log(vordererTeil);
    // console.log(hintererTeil);
    resultVorderer.innerHTML = vordererTeil;
    resultHinterer.innerHTML = hintererTeil;

}