
function addDeliveryData() {
    var deliveryInfo = document.querySelector('#delivery-schedule'); 
    var deliveryData = [
        "8:10 - АА124112ФВ - 5Т - Одежа",
        "9:20 - ВВ234234ГН - 3Т - Електроніка",
        "10:30 - СС345345ЛМ - 7Т - Іграшки",
        "11:40 - DD456789МП - 2Т - Канцелярія",
        "12:50 - ЕЕ567890ТР - 4Т - Косметика",
        "14:00 - ЖЖ678901ІО - 6Т - Будівельні матеріали",
        "15:10 - ЗЗ789012ПІ - 8Т - Електроприлади",
        "16:20 - ИИ890123РК - 3Т - Медикаменти",
        "17:30 - ІІ901234ХК - 7Т - Їжа"
    ];
    deliveryData.forEach(function (item) {
        var div = document.createElement('div');
        div.textContent = item;
        deliveryInfo.appendChild(div);
    });
}

function addDepartureData() {
    var departureInfo = document.querySelector('#shipment-schedule');

    var departureData = [
        "11:00 - АБ123456ЖІ - 6Т - Меблі",
        "12:30 - ГД234567КП - 4Т - Техніка",
        "14:00 - ЕЕ345678ОР - 8Т - Харчові товари",
        "15:30 - ЖЖ456789РХ - 5Т - Одяг",
        "17:00 - ЗЗ567890ІП - 7Т - Техніка",
        "18:30 - ИИ678901КМ - 3Т - Косметика",
        "20:00 - ІІ789012ТО - 9Т - Медикаменти",
        "21:30 - КК890123ЛІ - 2Т - Їжа",
        "23:00 - LL901234КП - 10Т - Канцелярія",
        "0:30 - MM012345ІО - 4Т - Спортивні товари"
    ];
    departureData.forEach(function (item) {
        var div = document.createElement('div');
        div.textContent = item;
        departureInfo.appendChild(div);
    });

}

function addWorkers() {
    var workerInfo = document.querySelector('#workers');

    var workerData = [
        "- Василь - робітник",
        "- Віталій - робітник",
        "- Олег - робітник",
        "- Ігор - робітник",
        "- Марія - робітник",
        "- Оксана - менеджер",
        "- Іван - менеджер",
        "- Наталія - менеджер",
        "- Петро - менеджер",
        "- Андрій - робітник"
    ];
    
    workerData.forEach(function (item) {
        var div = document.createElement('div');
        div.textContent = item;
        workerInfo.appendChild(div);
    });

}


addDeliveryData();
addDepartureData();
addWorkers();

setInterval(updateDateTime, 1000);


function updateDateTime() {
    var dateTimeElement = document.querySelector('#date-time');
    var currentDate = new Date();
    var formattedDateTime = currentDate.toLocaleString('uk-UA');
    dateTimeElement.textContent = formattedDateTime;
}

function buildTonChart() {
    var ctx = document.getElementById('ton-chart').getContext('2d');
    var hours = [];
    var tonsRemaining = [];
    var workerCapacity = 1.5; 

    for (var hour = 1; hour <= 10; hour++) {
        hours.push(hour);
        tonsRemaining.push(21 - (workerCapacity * hour)); 
    }

    var tonChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: hours,
            datasets: [{
                label: 'Кількість тон товару',
                data: tonsRemaining,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

buildTonChart();