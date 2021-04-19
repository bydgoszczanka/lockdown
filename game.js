/*declaring variables that fetch elements from HTML code using element ids*/
const question = document.getElementById('question');
const answers = document.getElementById('options');
const moodStat = document.getElementById('mood');
const kidsStat = document.getElementById('kids');
const workStat = document.getElementById('work');
const suppliesStat = document.getElementById('supplies');
const universityStat = document.getElementById('university');

console.log('I donnot know what i am doing')

/*function starting the game*/
function startGame() {
    showTextNodes(1)
}
/*function getting questions from the list and passing it on to the HTML code to display*/
function showTextNodes (textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    question.innerText = textNode.text
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild)
    }

    textNode.options.forEach(option => {
        // answers.innerText = option.text
        // answers.addEventListener('click', () => selectOption(option))
        const button = document.createElement('p')
        button.innerText = option.text
        button.classList.add('btn-action')
        button.addEventListener('click', () => chooseOption(option))
        answers.appendChild(button)
    })
}
    

function chooseOption(option) {
    showTextNodes(option.nextQstn);
}

/*all questions and possible answers*/
const textNodes = [
    {
        id: 1,
        text: 'Your boss asked you to write a report for one of the customers for tomorrow as one of your colleagues went off sick and they are unable to complete it. This will require you to work longer today. However, your kids also have school assignment that they need to submit by the end of the day and they need your help. \n\nWhat do you do?',
        options: [
            {
                text: 'Write the report',
                kidsStat: 'Bad',
                workStat: 'Excellent',
                nextQstn: 2
            },
            {
                text: 'Help your kids with the homework assignment',
                kidsStat: 'Excellent',
                workStat: 'Bad',
                nextQstn: 3,
            }
        ]
    },
    {
        id: 2,
        text: 'You have a university assignment due and you need to study and conduct research. However, you have been feeling a bit down and you feel you could use some time to relax by taking a walk or watching a move. /n/nWhat do you do?',
        options: [
            {
                text: 'Work on your university assignment',
                moodStat: 'Bad',
                universityStat: 'Excellent',
                nextQstn: 4,
            },
            {
                text: 'Go for a long walk in the park',
                moodStat: 'Excellent',
                universityStat: 'Bad',
                nextQstn: 5,

            }
            
        ]
    },
    {
        id: 3,
        text: 'With the lockdown in place people have started to panic buy supplies. Some items like hand sanitizers, flour, pasta, toilet paper and tinned food are disappearing quickly from the shelves. Huge lines form in front of shops as people queue in, You feel you need to stock up on some supplies to, but at the same time you don’t want to waste your time waiting in lines. /n/nWhat do you do?',
        options: [
            {
                text: 'Stock up on supplies',
                suppliesStat: 'Excellent',
                moodStat: 'Bad',
                nextQstn: 6
            },
            {
                text: 'Stay home',
                suppliesStat: 'Bad',
                moodStat: 'Excellent',
                nextQstn: 7,
            }
        ]
    },
    {
        id: 4,
        text: 'Your kids have been asking to get a pet. You know that this will boost their moral, however you are also conscious that this will mean more responsibilities for you. /n/nWhat do you do?',
        options: [
            {
                text: 'Get a pet',
                kidsStat: 'Good',
                moodStat: 'Terrible',
            },
            {
                text: 'Do not get a pet',
                kidsStat: 'Terrible',
                moodStat: 'Good',
            }
        ]
    },
    {
        id: 5,
        text: 'You’ve been attending online lectures and tutorials for your university course. You’ve been struggling with some modules and you feel you need to attend live tutorials to understand the subject. However your kids are struggling with remote learning too and they ask if you could spend some more time with them to help. /n/nWhat do you do?',
        options: [
            {
                text: 'Spend time with your kids',
                kidsStat: 'Good',
                universityStat: 'Terrible',
            },
            {
                text: 'Attend live tutorials',
                kidsStat: 'Terrible',
                universityStat: 'Good',
            }
        ]
    },
    {
        id: 6,
        text: 'You have been struggling with remote working. With the kids being at home you feel that you need to leave your desk every few minutes to check up on them. On top of this the work has been extremely busy and deadlines for few projects that you’re responsible from are approaching. You feel that in order to cope with the workload you will need to work some extra hours. This means less time for yourself. /n/nWhat do you do?',
        options: [
            {
                text: 'Work extra hours to meet deadlines',
                moodStat: 'Terrible',
                workStat: 'Good',
            },
            {
                text: 'Stick to your working hours',
                moodStat: 'Good',
                workStat: 'Terrible',
            }
        ]
    },
    {
        id: 7,
        text: 'You have been running low on toilet paper and soap. A cashier in your local store told you that they are expecting a delivery today afternoon and advised to come around 3pm. However, at that time you have a very important client meeting that you have to attend. /n/nWhat do you do?',
        options: [
            {
                text: 'Go to store',
                suppliesStat: 'Good',
                workStat: 'Terrible'
            },
            {
                text: 'Attend meeting',
                suppliesStat: 'Terrible',
                workStat: 'Good',
            }
        ]
    },
    {
        id: 8,
        text: "Don't beat yourself up, it's just a game. /n/nLockdown has been difficult for everyone. /n/nRemember to look after yourself and your family. Stay safe. /n/nThank you for playing!"
    }
]

startGame()
