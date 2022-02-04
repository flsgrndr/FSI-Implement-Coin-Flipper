let numberOfHeads = 0
let numberOfTails = 0
let headsPercentage = 0
let tailsPercentage = 0
let totalFlips = numberOfHeads + numberOfTails

let images = [
    {
        imagePath: './assets/images/penny-heads.jpg',
        side: 'heads',
        message: 'You flipped heads!'
    },
    {
        imagePath: './assets/images/penny-tails.jpg',
        side: 'tails',
        message: 'You flipped tails!'
    }
]

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('flip').addEventListener('click', function(){

        let randomImage = images[Math.floor(Math.random() * images.length)]

        document.getElementById('penny-img').src = randomImage.imagePath
        document.querySelector('.message-container').textContent = randomImage.message

        if(randomImage.side === 'heads') {

            numberOfHeads ++
            document.getElementById('heads').textContent = numberOfHeads

        } else {

            numberOfTails ++
            document.getElementById('tails').textContent = numberOfTails

        }

        totalFlips++

        headsPercentage = Math.round(numberOfHeads / totalFlips * 100)
        tailsPercentage = Math.round(numberOfTails / totalFlips * 100)

        document.getElementById('heads-percent').textContent = headsPercentage + '%'
        document.getElementById('tails-percent').textContent = tailsPercentage + '%'

    })

    document.getElementById('clear').addEventListener('click', function(){

        numberOfHeads = 0
        numberOfTails = 0
        headsPercentage = 0
        tailsPercentage = 0
        totalFlips = 0
        
        document.getElementById('heads').textContent = 0
        document.getElementById('tails').textContent = 0
        document.getElementById('heads-percent').textContent = 0 + '%'
        document.getElementById('tails-percent').textContent = 0 + '%'
        
    })

})