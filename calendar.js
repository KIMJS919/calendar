const date = new Date();

function Calendar() {
    date.setDate(1);
    const firstdayindex = date.getDay();
    const lastdayindex = new Date(date.getFullYear(), date.getMonth()+1,0).getDay();
    const nextdays = 7-lastdayindex-1;
    const month = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];
    const curmonth = document.querySelector('.curmonth span');
    const nummonth = date.getMonth()+1;

    let calmonth ="";

    if(nummonth < 10) {
        calmonth += `0${nummonth}`;
    } else {
        calmonth = nummonth;
    }
    const curday = document.querySelector('.curday');
    const monthday = document.querySelector('.days');

    const lastday = new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
    const prevlastday = new Date(date.getFullYear(), date.getMonth(),0).getDate();

    curmonth.innerHTML = month[date.getMonth()];
    curday.innerHTML = "2021-"+calmonth+"-"+new Date().getDate();

    let days = "";
    let cnt = 0;
    const arrdays = [];

    if(firstdayindex>0){
        for(x=firstdayindex; x>0; x--){
            if(cnt%7==0) { days += "<tr class='days'>"; }
            days += `<td class="prev-date">${prevlastday-x+1}</td>`;
            cnt++;
            if(cnt%7==0) { days += "</tr>"; }
            arrdays.push(prevlastday-x+1);
        };
    } else {
        for(x=7; x>0; x--){
            if(cnt%7==0) { days += "<tr class='days'>"; }
            days += `<td class="prev-date">${prevlastday-x+1}</td>`;
            cnt++;
            if(cnt%7==0) { days += "</tr>"; }
            arrdays.push(prevlastday-x+1);
        };
    }

    for(i=1; i<=lastday; i++) {
        if(cnt%7==0) { days += "<tr class='days'>"; }
        days += `<td id="eachday" tabindex="1">${i}</td>`;
        cnt++;
        if(cnt%7==0) { days += "</tr>"; }
        arrdays.push(i);
    }
    if(nextdays>0){
        for(y=1; y<=nextdays; y++) {
            if(cnt%7==0) { days += "<tr class='days'>"; }
            days += `<td id="eachday" class="next-date">${y}</td>`;
            cnt++
            if(cnt%7==0) { days += "</tr>"; }
            arrdays.push(y);
        };
    } else {
        for(y=1; y<=7; y++) {
            if(cnt%7==0) { days += "<tr class='days'>"; }
            days += `<td id="eachday" class="next-date">${y}</td>`;
            cnt++
            if(cnt%7==0) { days += "</tr>"; }
            arrdays.push(y);
        };
    }
    console.log(days);
    monthday.innerHTML = days;
    
    // const sunday = [arrdays[0],arrdays[7],arrdays[14],arrdays[21],arrdays[28],arrdays[35],arrdays[42]];
    // const saturday = [arrdays[6],arrdays[13],arrdays[20],arrdays[27],arrdays[34],arrdays[41]];
    // if(sunday.includes(document.getElementById('eachday').value)) {
    //     console.log(document.getElementById('eachday').value);
    // }
    // console.log(sunday);
    // console.log(saturday);
}

const lastBtn = document.getElementById('lastbtn');
const nextBtn = document.getElementById('nextbtn');

lastBtn.addEventListener('click', () => {
    date.setMonth(date.getMonth()-1);
    Calendar();
    console.log(date.getMonth());
});

nextBtn.addEventListener('click', () => {
    date.setMonth(date.getMonth()+1);
    Calendar();
    console.log(date.getMonth());
});

Calendar();