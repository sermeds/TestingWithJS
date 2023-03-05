let id = 1;
const DATA = [
    {
        question: 'Какое направление вам больше нравится?',
        answers: [
            {
                id: id++,
                value: 'IT',
                type: 'radio'
            },
            {
                id: id++,
                value: 'Творчество',
                type: 'radio'
            }
        ]
    },
    {
        question: 'Хотели бы вы создавать компьютерные игры?',
        answers: [
            {
                id: id++,
                value: 'Да',
                type: 'radio'
            },
            {
                id: id++,
                value: 'Нет',
                type: 'radio'
            }
        ]
    },
    {
        question: 'Вы бы хотели разрабатывать программы самостоятельно или управлять командой?',
        answers: [
            {
                id: id++,
                value: 'Самостоятельно',
                type: 'radio'
            },
            {
                id: id++,
                value: 'Управлять командой',
                type: 'radio'
            }
        ]
    },
    {
        question: 'Вы любите искать ошибки в разных приложениях?',
        answers: [
            {
                id: id++,
                value: 'Да',
                type: 'radio'
            },
            {
                id: id++,
                value: 'Нет',
                type: 'radio'
            }
        ]
    },
    {
        question: 'Вы бы хотели следить за состоянием целой сети компьютеров?',
        answers: [
            {
                id: id++,
                value: 'Да',
                type: 'radio'
            },
            {
                id: id++,
                value: 'Нет',
                type: 'radio'
            }
        ]
    },
    {
        question: 'Выберите утверждение(-ия) соответствующие вам:',
        answers: [
            {
                id: id++,
                value: 'Я бы хотел попробовать себя во многих областях IT',
                type: 'checkbox'
            },
            {
                id: id++,
                value: 'Управлять IT проектами - это мое желание',
                type: 'checkbox'
            },
            {
                id: id++,
                value: 'Я легко помогу другому человеку, если у него завис компьютер',
                type: 'checkbox'
            },
            {
                id: id++,
                value: 'Я не успокоюсь, пока не найду все возможные ошибки в работе приложения',
                type: 'checkbox'
            }
        ]
    },
    {
        question: 'Какую форму обучения предпочитаете?',
        answers: [
            {
                id: id++,
                value: 'Очная',
                type: 'radio',
            },
            {
                id: id++,
                value: 'Заочная',
                type: 'radio'
            }
        ]
    },
    {
        question: 'Какие экзамены на ЕГЭ собираетесь сдавать?',
        answers: [
            {
                id: id++,
                value: 'Обществознание',
                type: 'checkbox'
            },
            {
                id: id++,
                value: 'История',
                type: 'checkbox'
            },
            {
                id: id++,
                value: 'Литература',
                type: 'checkbox'
            },
            {
                id: id++,
                value: 'Информатика',
                type: 'checkbox'
            }
        ]
    },
    {
        question: 'Нравится ли вам рисовать?',
        answers: [
            {
                id: id++,
                value: 'Да',
                type: 'radio'
            },
            {
                id: id++,
                value: 'Нет',
                type: 'radio'
            }
        ]
    },
    {
        question: 'Хотели бы монтировать видеоролики?',
        answers: [
            {
                id: id++,
                value: 'Да',
                type: 'radio'
            },
            {
                id: id++,
                value: 'Нет',
                type: 'radio'
            }
        ]
    },
    {
        question: 'Хотели бы создать рекламный проект?',
        answers: [
            {
                id: id++,
                value: 'Да',
                type: 'radio'
            },
            {
                id: id++,
                value: 'Нет',
                type: 'radio'
            }
        ]
    },
    {
        question: 'Какие экзамены на ЕГЭ собираетесь сдавать?',
        answers: [
            {
                id: id++,
                value: 'Дизайн - это мое второе имя',
                type: 'checkbox'
            },
            {
                id: id++,
                value: 'Я бы смог продать вам эту ручку',
                type: 'checkbox'
            },
            {
                id: id++,
                value: 'Главной звездой в кадре должен(-на) быть я',
                type: 'checkbox'
            },
            {
                id: id++,
                value: 'Видеоролики - лучшее, что придумало человечество',
                type: 'checkbox'
            },
            {
                id: id++,
                value: 'Придумать необычную вещь? Это ко мне',
                type: 'checkbox'
            }
        ]
    },
    {
        question: 'Какую форму обучения предпочитаете?',
        answers: [
            {
                id: id++,
                value: 'Очная',
                type: 'radio'
            },
            {
                id: id++,
                value: 'Заочная',
                type: 'radio'
            },
            {
                id: id++,
                value: 'Очно-заочная',
                type: 'radio'
            }
        ]
    }
]
const RES = [
    {
        title: 'информационные системы и технологии',
        text: 'Вам подходят различные сферы IT. На этом профиле вы сможете попробовать почти все. Игры, рисование, моделирование, искусственный интеллект, нейронные сети - все это изучают студенты данного направления.'
    },
    {
        title: 'прикладная информатика',
        text: 'Вы уже нашли ошибки в этом тесте? Просто вам прекрасно подходит именно эта сфера IT. Но данное направление не заканчивается на тестировании, вы сможете окунуться в IT мир с головой.'
    },
    {
        title: 'программная инженерия - ',
        text: 'Думаю, вы прекрасно сможете управлять командой. Но никто не отменял личные профессиональные навыки - все это вы сможете изучить на данном направлении.'
    },
    {
        title: 'информатика и вычислительная техника',
        text: 'Я точно знаю, что вы с компьютером на одной волне. Вы сможете научиться полностью управлять данным венцом технологий и не только.'
    },
    {
        title: 'дизайн',
        text: 'Я сразу понял, что вы сможете придать прекрасный внешний вид любому предмету, будь он виртуальный или реальный.'
    },
    {
        title: 'телевидение',
        text: 'Снимать, обрабатывать или может вести телепередачу? Все это вы сможете попробовать на данном направлении'
    },
    {
        title: 'реклама и связи с общественностью',
        text: 'Надоела скучная реклама? Я думаю, у вас получиться исправить это. На этом направлении вы научитесь придумывать, создавать и продвигать собственные проекты, но это далеко не все.'
    }
]

const form = document.getElementById('form');
const questions = document.getElementById('questions');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnSubmit = document.getElementById('btn-submit');
const btnStart = document.getElementById('btn-start');

let ind;
// ИФСТ, ПИНФ, ПИНЖ, ИВЧТ, ДИЗН, ТЛВД, РКЛМ
const profiles = [0, 0, 0, 0, 0, 0, 0];

const renderQuestions = (index) => {
    ind = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
                <li class="mb-2">
                    <label class="form-check-label">
                        <input class="answer-input form-check-input" type=${answer.type} name=${index} value=${answer.id}>
                        ${answer.value}
                    </label>
                </li>
        `)
        .join('');

    questions.innerHTML = `
        <div class="questions-item d-flex flex-column align-items-center">
            <div class="questions-item__question text-center d-flex flex-column align-items-center mb-3">${DATA[index].question}</div>
            <ul class="questions-item__answers p-0 d-flex flex-column align-items-start mb-4">${renderAnswers()}</ul>
        </div>
    `;
};

const renderResults = () => {
    let maxIndex = profiles.indexOf(Math.max.apply(Math, profiles));
    results.innerHTML = `
        <h2 class="text-center text-uppercase">${RES[maxIndex].title}</h2>
        <p class="text-center">${RES[maxIndex].text}</p>
    `;
};

const processingResults = () => {
    let answer = document.getElementsByClassName("answer-input");
    console.log(ind);
    switch (ind) {
        case(0):
            if (answer[1].checked) ind = 7;
            break;
        case(1):
            if (answer[0].checked) profiles[0] += 2;
            else profiles[0]--;
            break;
        case(2):
            if (answer[0].checked) {
                profiles[0]++;
                profiles[1]++
            } else profiles[2] += 2;
            break;
        case(3):
            if (answer[0].checked) profiles[1] += 2;
            else profiles[1]--;
            break;
        case(4):
            if (answer[0].checked) profiles[3] += 2;
            else profiles[3]--;
            break;
        case(5):
            if (answer[0].checked) profiles[0] += 2;
            if (answer[1].checked) profiles[2] += 2;
            if (answer[2].checked) profiles[3] += 2;
            if (answer[3].checked) profiles[1] += 2;
            break;
        case(6):
            if (answer[1].checked) {
                profiles[0]++;
                profiles[3]++;
            }
            break;
        case(7):
            if (answer[2].checked) {
                profiles[4]++;
                profiles[5]++;
            }
            if (answer[3].checked) profiles[6] += 2;
            break;
        case(8):
            if (answer[0].checked) profiles[4] += 2;
            else profiles[4]--;
            break;
        case(9):
            if (answer[0].checked) {
                profiles[5] += 2;
                profiles[6]++;
            } else profiles[5]--;
            break;
        case(10):
            if (answer[0].checked) profiles[6] += 2;
            else profiles[6]--;
            break;
        case(11):
            if (answer[0].checked) profiles[4] += 2;
            if (answer[1].checked) profiles[6] += 2;
            if (answer[2].checked) profiles[5] += 2;
            if (answer[3].checked) {
                profiles[5] += 2;
                profiles[6]++;
            }
            if (answer[3].checked) {
                profiles[4] += 2;
                profiles[6]++;
            }
            break;
        case(12):
            if (answer[1].checked) profiles[6] += 2;
            if (answer[2].checked) profiles[4] += 2;
            break;
    }
    console.log(profiles);
    renderQuestions(ind + 1);
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    btnStart.classList.add("btn-start--hidden");
    btnNext.classList.add('btn-next--visible');
    renderQuestions(0);
});

form.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        btnNext.disabled = false;
        btnSubmit.disabled = false;
    }
});

form.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        event.preventDefault();
        if (DATA.length === ind + 2 || ind + 1 === 6) {
            btnSubmit.classList.add('btn-submit--visible');
            btnNext.classList.remove('btn-next--visible');
            btnSubmit.disabled = true;
        }
        btnNext.disabled = true;
        processingResults();
        // renderQuestions(ind + 1);
    }

    if (event.target.classList.contains('btn-submit')) {
        event.preventDefault();
        questions.classList.add('questions--hidden');
        results.classList.add('results--visible');
        btnSubmit.classList.remove('btn-submit--visible');

        renderResults();
    }
});

const arr = [1, 1, 5, 7, 0];
let maxArr = arr.indexOf(Math.max.apply(Math, arr));
console.log(maxArr);
console.log(arr[maxArr]);
