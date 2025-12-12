let totalSpent = 0;

function addExpense() {
    const desc = document.getElementById("desc").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (!desc || isNaN(amount)) {
        alert("Please enter both description and amount!");
        return;
    }

    totalSpent += amount;
    document.getElementById("total").innerText = totalSpent;

    const li = document.createElement("li");
    li.textContent = `${desc}: ${amount} RWF`;

    document.getElementById("list").appendChild(li);

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}
