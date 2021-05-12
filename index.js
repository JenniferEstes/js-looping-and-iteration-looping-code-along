const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names) {
    const arrayOfMessages = []
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`
        arrayOfMessages.push(message)
        console.log(message)
    }
    return arrayOfMessages;
}

function countDown() {
    let i = 0;
    while (i < 11) {
        console.log(i);
        i++;
    }
}



