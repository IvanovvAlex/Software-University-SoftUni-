function printCards(cards) {
    let result = cards.reduce((acc, val) => {
        let face = val.slice(0, -1);
        let suit = val.slice(-1);

        try {
            let card = createCard(face, suit);
            return acc += ' ' + card;
        } catch (error) {
            console.log(`Invalid card: ${val}`)

            acc = '';
        };

    }, '');

    console.log(result);

    function createCard(face, suit) {

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const suitToString = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };

        if (!validFaces.includes(face) || !Object.keys(suitToString).includes(suit)) {
            throw new Error;
        }

        return {
            face,
            suit,
            toString() {
                return `${face}${suitToString[suit]}`;
            }
        }
    }

}

printCards(['AS', '10D', 'KH', '2C']);
printCards(['5S', '3D', 'QD', '1C']);