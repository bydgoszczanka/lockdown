/* WebDevSimplified course used for reference https://github.com/WebDevSimplified/JavaScript-Text-Adventure */
/*declaring variables that fetch elements from HTML code using element ids*/
const question = document.getElementById('question');
const answers = document.getElementById('options');
const moodStat = document.getElementById('mood');
const kidsStat = document.getElementById('kids');
const workStat = document.getElementById('work');
const suppliesStat = document.getElementById('supplies');
const universityStat = document.getElementById('university');
const gameOver = document.getElementById('endGame');

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
        const button = document.createElement('p')
        button.innerText = option.text
        button.classList.add('btn-action')
        button.addEventListener('click', () => chooseOption(option))
        answers.appendChild(button)
    });
}
    

function chooseOption(option) {
    showTextNodes(option.nextQstn);
    moodStat.innerHTML = option.moodStat;
    universityStat.innerHTML = option.universityStat;
    suppliesStat.innerHTML = option.suppliesStat;
    kidsStat.innerHTML = option.kidsStat;
    workStat.innerHTML = option.workStat;

    //adding game over header to end pages
    if (option.nextQstn >= 8) {
        gameOver.classList.remove('gameOver');
    } else {
        gameOver.classList.add('gameOver');
    }

    //changing mood stat colours
    if (option.moodStat == 'Bad') {
        moodStat.className = 'bad'
    } else if (option.moodStat == 'Excellent') {
        moodStat.className = 'excellent'
    } else if (option.moodStat == 'Terrible') {
        moodStat.className = 'terrible'
    } else {
        moodStat.className = 'stat'
    }

    //changing kids stat colours
    if (option.kidsStat == 'Bad') {
        kidsStat.className = 'bad'
    } else if (option.kidsStat == 'Excellent') {
        kidsStat.className = 'excellent'
    } else if (option.kidsStat == 'Terrible') {
        kidsStat.className = 'terrible'
    } else {
        kidsStat.className = 'stat'
    }

    //changing university stat colours
    if (option.universityStat == 'Bad') {
        universityStat.className = 'bad'
    } else if (option.universityStat == 'Excellent') {
        universityStat.className = 'excellent'
    } else if (option.universityStat == 'Terrible') {
        universityStat.className = 'terrible'
    } else {
        universityStat.className = 'stat'
    }

    //changing work stat colours
    if (option.workStat == 'Bad') {
        workStat.className = 'bad'
    } else if (option.workStat == 'Excellent') {
        workStat.className = 'excellent'
    } else if (option.workStat == 'Terrible') {
        workStat.className = 'terrible'
    } else {
        workStat.className = 'stat'
    }

    //changing supplies stat colours
    if (option.suppliesStat == 'Bad') {
        suppliesStat.className = 'bad'
    } else if (option.suppliesStat == 'Excellent') {
        suppliesStat.className = 'excellent'
    } else if (option.suppliesStat == 'Terrible') {
        suppliesStat.className = 'terrible'
    } else {
        suppliesStat.className = 'stat'
    }
}

/*all questions and possible answers*/
const textNodes = [
    {
        id: 1,
        text: 'Your boss asked you to write a report for one of the customers for tomorrow as one of your colleagues went off sick and they are unable to complete it. This will require you to work longer today. However, your kids also have school assignment that they need to submit by the end of the day and they need your help. \n\nWhat do you do?',
        message: '',
        options: [
            {
                text: 'Write the report',
                moodStat: 'Good',
                universityStat: 'Good',
                suppliesStat: 'Good',
                kidsStat: 'Bad',
                workStat: 'Excellent',
                nextQstn: 2
            },
            {
                text: 'Help your kids with the homework assignment',
                moodStat: 'Good',
                universityStat: 'Good',
                suppliesStat: 'Good',
                kidsStat: 'Excellent',
                workStat: 'Bad',
                nextQstn: 3,
            }
        ]
    },
    {
        id: 2,
        text: 'You have a university assignment due and you need to study and conduct research. However, you have been feeling a bit down and you feel you could use some time to relax by taking a walk or watching a move. \n\nWhat do you do?',
        message: '',
        options: [
            {
                text: 'Work on your university assignment',
                workStat: 'Excellent',
                kidsStat: 'Bad',
                suppliesStat: 'Good',
                moodStat: 'Bad',
                universityStat: 'Excellent',
                nextQstn: 4,
            },
            {
                text: 'Go for a long walk in the park',
                workStat: 'Excellent',
                kidsStat: 'Bad',
                suppliesStat: 'Good',
                moodStat: 'Excellent',
                universityStat: 'Bad',
                nextQstn: 5,

            }
            
        ]
    },
    {
        id: 3,
        text: 'With the lockdown in place people have started to panic buy supplies. Some items like hand sanitizers, flour, pasta, toilet paper and tinned food are disappearing quickly from the shelves. Huge lines form in front of shops as people queue in, You feel you need to stock up on some supplies to, but at the same time you don’t want to waste your time waiting in lines. \n\nWhat do you do?',
        message: '',
        options: [
            {
                text: 'Stock up on supplies',
                workStat: 'Bad',
                universityStat: 'Good',
                kidsStat: 'Excellent',
                suppliesStat: 'Excellent',
                moodStat: 'Bad',
                nextQstn: 6
            },
            {
                text: 'Stay home',
                workStat: 'Bad',
                universityStat: 'Good',
                kidsStat: 'Excellent',
                suppliesStat: 'Bad',
                moodStat: 'Excellent',
                nextQstn: 7,
            }
        ]
    },
    {
        id: 4,
        text: 'Your kids have been asking to get a pet. You know that this will boost their moral, however you are also conscious that this will mean more responsibilities for you. \n\nWhat do you do?',
        message: '',
        
        options: [
            {
                text: 'Get a pet',
                moodStat: 'Terrible',
                workStat: 'Excellent',
                universityStat: 'Excellent',
                suppliesStat: 'Good',
                kidsStat: 'Good',
                nextQstn: 10,
            },
            {
                text: 'Do not get a pet',
                kidsStat: 'Terrible',
                workStat: 'Excellent',
                universityStat: 'Excellent',
                suppliesStat: 'Good',
                moodStat: 'Good',
                nextQstn: 11,
            }
        ]
    },
    {
        id: 5,
        text: 'You’ve been attending online lectures and tutorials for your university course. You’ve been struggling with some modules and you feel you need to attend live tutorials to understand the subject. However your kids are struggling with remote learning too and they ask if you could spend some more time with them to help. \n\nWhat do you do?',
        message: '',
        
        options: [
            {
                text: 'Spend time with your kids',
                universityStat: 'Terrible',
                workStat: 'Excellent',
                moodStat: 'Excellent',
                suppliesStat: 'Good',
                kidsStat: 'Good',
                nextQstn: 12,
            },
            {
                text: 'Attend live tutorials',
                kidsStat: 'Terrible',
                workStat: 'Excellent',
                moodStat: 'Excellent',
                suppliesStat: 'Good',
                universityStat: 'Good',
                nextQstn: 13,
            }
        ]
    },
    {
        id: 6,
        text: 'You have been struggling with remote working. With the kids being at home you feel that you need to leave your desk every few minutes to check up on them. On top of this the work has been extremely busy and deadlines for few projects that you’re responsible from are approaching. You feel that in order to cope with the workload you will need to work some extra hours. This means less time for yourself. \n\nWhat do you do?',
        message: '',
        options: [
            {
                text: 'Work extra hours to meet deadlines',
                moodStat: 'Terrible',
                kidsStat: 'Excellent',
                universityStat: 'Good',
                suppliesStat: 'Excellent',
                workStat: 'Good',
                nextQstn: 8,
            },
            {
                text: 'Stick to your working hours',
                workStat: 'Excellent',
                kidsStat: 'Terrible',
                universityStat: 'Good',
                suppliesStat: 'Excellent',
                moodStat: 'Good',
                nextQstn: 9,
            }
        ]
    },
    {
        id: 7,
        text: 'You have been running low on toilet paper and soap. A cashier in your local store told you that they are expecting a delivery today afternoon and advised to come around 3pm. However, at that time you have a very important client meeting that you have to attend. \n\nWhat do you do?',
        message: '',
        options: [
            {
                text: 'Go to store',
                workStat: 'Terrible',
                moodStat: 'Excellent',
                kidsStat: 'Excellent',
                universityStat: 'Good',
                suppliesStat: 'Good',
                nextQstn: 14,
            },
            {
                text: 'Attend meeting',
                suppliesStat: 'Terrible',
                moodStat: 'Excellent',
                kidsStat: 'Excellent',
                universityStat: 'Good',
                workStat: 'Good',
                nextQstn: 15,
            }
        ]
    },
    {
        id: 8,
        message: 'GAME OVER',
        text: "You've taken upon yourself too many responsibilities. \n\nDon't beat yourself up, it's just a game. \n\nLockdown has been difficult for everyone. Remember to look after yourself and your family. Stay safe. \n\nThank you for playing!",
        options: [
            {
                text: 'PLAY AGAIN',
                moodStat: 'Good',
                universityStat: 'Good',
                suppliesStat: 'Good',
                kidsStat: 'Good',
                workStat: 'Good',
                nextQstn: 1
            }
        ]
    },
    {
        id: 9,
        message: 'GAME OVER',
        text: "You haven't been productive enough at work.\n\nDon't beat yourself up, it's just a game. \n\nLockdown has been difficult for everyone. Remember to look after yourself and your family. Stay safe. \n\nThank you for playing!",
        options: [
            {
                text: 'PLAY AGAIN',
                moodStat: 'Good',
                universityStat: 'Good',
                suppliesStat: 'Good',
                kidsStat: 'Good',
                workStat: 'Good',
                nextQstn: 1
            }
        ]
    },
    {
        id: 10,
        message: 'GAME OVER',
        text: "You've been looking after everyone but yourself. \n\nDon't beat yourself up, it's just a game. \n\nLockdown has been difficult for everyone. Remember to look after yourself and your family. Stay safe. \n\nThank you for playing!",
        options: [
            {
                text: 'PLAY AGAIN',
                moodStat: 'Good',
                universityStat: 'Good',
                suppliesStat: 'Good',
                kidsStat: 'Good',
                workStat: 'Good',
                nextQstn: 1
            }
        ]
    },
    {
        id: 11,
        message: 'GAME OVER',
        text: "Restrictions and limited social life has been very difficlut for children. \n\nDon't beat yourself up, it's just a game. \n\nLockdown has been difficult for everyone. Remember to look after yourself and your family. Stay safe. \n\nThank you for playing!",
        options: [
            {
                text: 'PLAY AGAIN',
                moodStat: 'Good',
                universityStat: 'Good',
                suppliesStat: 'Good',
                kidsStat: 'Good',
                workStat: 'Good',
                nextQstn: 1
            }
        ]
    },
    {
        id: 12,
        message: 'GAME OVER',
        text: "It's difficult to juggle multiple responsibilities. Studying while working and parenting has been more than you could take. \n\nDon't beat yourself up, it's just a game. \n\nLockdown has been difficult for everyone. Remember to look after yourself and your family. Stay safe. \n\nThank you for playing!",
        options: [
            {
                text: 'PLAY AGAIN',
                moodStat: 'Good',
                universityStat: 'Good',
                suppliesStat: 'Good',
                kidsStat: 'Good',
                workStat: 'Good',
                nextQstn: 1
            }
        ]
        
    },
    {
        id: 13,
        message: 'GAME OVER',
        text: "With so many responsibilities it sometimes feels impossible to be a good parent. \n\nDon't beat yourself up, it's just a game. \n\nLockdown has been difficult for everyone. Remember to look after yourself and your family. Stay safe. \n\nThank you for playing!",
        options: [
            {
                text: 'PLAY AGAIN',
                moodStat: 'Good',
                universityStat: 'Good',
                suppliesStat: 'Good',
                kidsStat: 'Good',
                workStat: 'Good',
                nextQstn: 1
            }
        ]
    },
    {
        id: 14,
        message: 'GAME OVER',
        text: "Homeschooling seems like a full time job during lockdown and it seems impossible to work two shifts at the same time. \n\nDon't beat yourself up, it's just a game. \n\nLockdown has been difficult for everyone. Remember to look after yourself and your family. Stay safe. \n\nThank you for playing!",
        options: [
            {
                text: 'PLAY AGAIN',
                moodStat: 'Good',
                universityStat: 'Good',
                suppliesStat: 'Good',
                kidsStat: 'Good',
                workStat: 'Good',
                nextQstn: 1
            }
        ]
    },
    {
        id: 15,
        message: 'GAME OVER',
        text: "Panic buying has created a true chaos, with all other responsibilities spending long times in queues seems like a waste of precious time. \n\nDon't beat yourself up, it's just a game. \n\nLockdown has been difficult for everyone. Remember to look after yourself and your family. Stay safe. \n\nThank you for playing!",
        options: [
            {
                text: 'PLAY AGAIN',
                moodStat: 'Good',
                universityStat: 'Good',
                suppliesStat: 'Good',
                kidsStat: 'Good',
                workStat: 'Good',
                nextQstn: 1
            }
        ]
        
    }
]

startGame()
