//Instruction On expense-tracker-code-explained.md
// 1. Tmport data from file
import theExpenses from "./expense-data.js";

// 2. Get Container Element that our cards will be nested in
const expenseContainer = document.getElementById("expense-container");

// 3. renderExpenses(expenses)
const renderExpenses = (expenses) => {
    expenseContainer.innerHTML = "";

    expenses.forEach(
        (expense) => {
        expenseContainer.innerHTML += `
        <div class="card" id="${expense.id}">
              <div class="header">
                <div>
                  <div class="title">${expense.title}</div>
                  <div class="meta category">${expense.category}</div>
                </div>
                <div class="amount">${expense.amount}</div>
              </div>
              <div class="meta date">${expense.date}</div>
              <div class="actions">
                <button class="edit-btn" id="${expense.id}">Edit</button>
                <button class="delete-btn" id="${expense.id}">Delete</button>
              </div>
            </div>`
    });
}
// 4. Initial Render
renderExpenses(theExpenses)

// 5. Handle Form Submit for Add/Edit
document.getElementById("expense-form-add").addEventListener("submit", (event) => {
    event.preventDefault();

    // Variable list
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const amount = parseFloat(document.getElementById("amount").value);

    // Add Expense Mode:

    // Edit Expense Mode:
})

// 6. Handle Search

// 7. Handle Edit/Delete Button Clicks
