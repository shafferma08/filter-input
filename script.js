function isValid(filename) {
    if (filename.includes('.../')) {
        console.log('Invalid filename');
    } else {
        console.log('Valid filename');
    }
}