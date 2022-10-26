fetch("data.json")
    .then(data => data.json())
    .then(res => {

        const statsList = document.querySelector(".chart");
        const totalH2 = document.querySelector(".total-spent"); //$478.33
        const balanceH2 = document.querySelector(".balance-amount");

        let balance = 921.48;
        balanceH2.innerHTML = `$${balance}`;

        let totalSpent = res.reduce((sum, value) => (sum + value.amount), 0);
        totalH2.innerHTML = `$${totalSpent.toFixed(2)}`;

        for (let stat of res) {
            const barDayContainer = document.createElement('DIV');
            barDayContainer.classList.add('bar-day-container');
            statsList.appendChild(barDayContainer);

            const barContainer = document.createElement('DIV');
            barContainer.classList.add('bar-container');
            barDayContainer.appendChild(barContainer);

            const bar = document.createElement('DIV');
            barContainer.appendChild(bar);
            bar.classList.add('bar');
            bar.setAttribute("data-barStat", "$" + stat.amount);

            const dayDIV = document.createElement('DIV');
            dayDIV.classList.add('day');
            dayDIV.innerHTML = stat.day;
            barContainer.appendChild(dayDIV);

            bar.style.height = "100%";
            barHeight = stat.amount * 2;
            bar.style.height = barHeight + "%";
            
            if (barHeight > 100) {
                bar.style.height = 100 + "%";
            }
        }
    });

// <div class="msg">asd</div>