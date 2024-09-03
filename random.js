function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return JSON.stringify({ number: randomNumber });
}
