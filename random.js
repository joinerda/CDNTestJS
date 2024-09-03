module.exports = (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.status(200).json({ number: randomNumber });
};
