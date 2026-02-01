const transactions = [
    { title: "MORTGAGE PAYMENT", date: "Jan 31, Bills", amount: "-$2,450.00", type: "neg" },
    { title: "SALARY DEPOSIT", date: "Jan 28, Bills", amount: "+$4,200.00", type: "pos" },
    { title: "APPLE COMPUTER INC", date: "Jan 20, Bills", amount: "-$1,299.00", type: "neg" },
    { title: "LUXURY HOTEL STAY", date: "Jan 18, Bills", amount: "-$850.50", type: "neg" },
    { title: "INVESTMENT DIVIDEND", date: "Jan 15, Bills", amount: "+$320.00", type: "pos" },
    { title: "AUTO INSURANCE", date: "Jan 07, Bills", amount: "-$215.00", type: "neg" },
    { title: "MONTHLY SAVINGS", date: "Jan 01, Bills", amount: "-$500.00", type: "neg" }
];

const listContainer = document.getElementById('transaction-list');

transactions.forEach(tx => {
    // We clean the string of $, commas, and signs to get the raw number
    const numericAmount = Math.abs(parseFloat(tx.amount.replace(/[$,+]/g, '')));
    
    // Safety check: Exclude if amount is 5500, 400, 55, or 4
    const isExcluded = [5500, 400, 55, 4].includes(numericAmount);

    if (!isExcluded) {
        const html = `
            <div class="transaction-item">
                <div class="tx-details">
                    <div class="tx-title" style="text-transform: uppercase; letter-spacing: 0.5px;">
                        ${tx.title}
                    </div>
                    <div class="tx-date" style="color: #888; font-size: 11px; margin-top: 4px;">
                        ${tx.date}
                    </div>
                </div>
                <div class="tx-amount ${tx.type === 'pos' ? 'positive' : ''}" 
                     style="font-weight: bold; font-size: 14px;">
                    ${tx.amount}
                </div>
            </div>
        `;
        listContainer.innerHTML += html;
    }
});