let message = 'aabbbaccaa';

function isTransform(message, char) {
    let count = 0;
    for (let i = 0; i < message.length; i++) {
        if (message.slice(i, i+1) === char) {
            count ++;
        }
    }
    return alert(count + char);
}

function isFindChar(message) {
    for (let i = 0; i < message.length; i++) {
        let find;
        find = message.slice(i, i+1);
    }
}


alert(isTransform(message, isFindChar(message)));

