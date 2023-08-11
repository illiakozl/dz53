// Створюємо об'єкт для зберігання даних голосування
var voteData = {};

// Функція для обробки натискання на смайл
function vote(smiley) {
    if (!voteData[smiley]) {
        voteData[smiley] = 1;
    } else {
        voteData[smiley]++;
    }
    updateResults();
}

// Функція для оновлення результатів голосування на сторінці
function updateResults() {
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    // Проходимо по всім смайликам у voteData
    for (var smiley in voteData) {
        if (voteData.hasOwnProperty(smiley)) {
            var count = voteData[smiley];
            
            // Створюємо елемент <div> для смайлу та кількості голосів
            var resultDiv = document.createElement('div');
            resultDiv.className = 'result';

            var smileySpan = document.createElement('span');
            smileySpan.innerHTML = smiley;
            resultDiv.appendChild(smileySpan);

            var countSpan = document.createElement('span');
            countSpan.innerHTML = count;
            resultDiv.appendChild(countSpan);

            // Додаємо обробник події при натисканні на смайл
            resultDiv.addEventListener('click', (function(sm) {
                return function() {
                    vote(sm);
                };
            })(smiley));

            // Додаємо результат до контейнера
            resultsContainer.appendChild(resultDiv);
        }
    }
}

// Викликаємо функцію для ініціалізації результатів голосування
updateResults();
