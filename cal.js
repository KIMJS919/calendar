document.addEventListener('DOMContentLoaded', (event) => {
    const date = new Date();

    function Calendar() {
        date.setDate(1);
        const firstDayIndex = date.getDay();
        const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        const nextDays = 7 - lastDayIndex - 1;
        const monthNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        const curMonthElem = document.querySelector('.monthname');
//        const curDayElem = document.querySelector('.curday');
        const monthDaysElem = document.querySelector('.days');

        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();
        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
        const prevLastDay = new Date(currentYear, currentMonth, 0).getDate();

        let calMonth = (currentMonth + 1).toString().padStart(2, '0');
        curMonthElem.innerHTML = monthNames[currentMonth];
//        curDayElem.innerHTML = `${currentYear}-${calMonth}-${new Date().getDate()}`;

        let days = "";
        let cnt = 0;
        const arrDays = [];

        const today = new Date();
        const isToday = (day, month, year) => day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

        // Function to generate day cells
        const generateDayCells = (start, end, className, month, year) => {
            for (let i = start; i <= end; i++) {
                if (cnt % 7 === 0) { days += "<tr class='days'>"; }
                const todayClass = isToday(i, month, year) ? 'today' : '';
                days += `<td class="${className} ${todayClass}">${i}</td>`;
                cnt++;
                if (cnt % 7 === 0) { days += "</tr>"; }
                arrDays.push(i);
            }
        };

        // Previous month's days
        generateDayCells(prevLastDay - firstDayIndex + 1, prevLastDay, 'prev-date', currentMonth - 1, currentYear);

        // Current month's days
        generateDayCells(1, lastDay, '', currentMonth, currentYear);

        // Next month's days
        generateDayCells(1, nextDays, 'next-date', currentMonth + 1, currentYear);

        monthDaysElem.innerHTML = days;
    }

    const lastBtn = document.getElementById('lastbtn');
    const nextBtn = document.getElementById('nextbtn');

    lastBtn.addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        Calendar();
    });

    nextBtn.addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        Calendar();
    });

    Calendar();
});