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

// EXTRA FOR FUN - update the total expense amount
const renderTotal = (expenses) => {

    let expenseText = document.getElementById("total-expenses");

    let newAmount = 0;
    let totalExpense = 0;


    expenses.forEach(
        (expense) => {
        
        newAmount = expense.amount;

        totalExpense += newAmount;

        // console.log(totalExpense);
        expenseText.innerHTML = totalExpense;
    });
}

// 4. Initial Render
renderExpenses(theExpenses)
renderTotal(theExpenses); // EXTRA


// 5. Handle Form Submit for Add/Edit
document.getElementById("expense-form-add").addEventListener("submit", (event) => {
    event.preventDefault();

    // Variable list
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const amount = parseFloat(document.getElementById("amount").value);

    // Add Expense Mode:
    if (document.getElementById("submiter").innerText === "Add Expense") {
        if (title && category && date && !isNaN(amount)) {
            const newExpense = {
                id: theExpenses.length +1,
                title,
                category,
                date,
                amount,
            };
            // to get this to show up, push it to the array of data then re-render the page
            theExpenses.push(newExpense);
            renderExpenses(theExpenses);

            // EXTRA
            renderTotal(theExpenses); 

            // this.reset(); // Reset the form to clear after submission - auses error for me
            document.getElementById("expense-form-add").reset(); // Reset the form to clear after submission - 
            
            
        } else {
            alert("Please fill in all fields correctly.");
        }
    } else {
        // Edit Expense Mode:
        // console.log("enter edit logic branch")

        const expenseId = parseInt(document.getElementById("expense-id").value);
        const expenseToEdit = theExpenses.find((expense)=> expense.id === expenseId);

        // console.log(expenseId)
        // console.log(expenseToEdit)

        if (expenseToEdit) {
            expenseToEdit.title = title;
            expenseToEdit.category = category;
            expenseToEdit.date = date;
            expenseToEdit.amount = amount;
            this.reset();
            renderExpenses(theExpenses);

            // EXTRA
            renderTotal(theExpenses); 

        }

    }

    
})

// 6. Handle live Search filtration (while you type)
document.getElementById("searchbox").addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredExpenses = theExpenses.filter(
        (expense) => expense.title.toLowerCase().includes(searchTerm)
    );
    renderExpenses(filteredExpenses);
})

// 7. Handle Edit/Delete Button Clicks  
// Alternatively you could add an event listener to every single card item but it becomes unfeasable when you have aton of items
expenseContainer.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete-btn")) {
        // console.log("delete")
        const expenseId = parseInt(event.target.id);
        const expenseIndex = theExpenses.findIndex((expense)=> expense.id === expenseId)

        if (expenseId != -1) {
            theExpenses.splice(expenseIndex,1);
            renderExpenses(theExpenses);

            // EXTRA
            renderTotal(theExpenses);

        }
        

    } else if (event.target.classList.contains("edit-btn")) {
        // console.log("edit")
        const expenseId = parseInt(event.target.id);
        const expenseToEdit = theExpenses.findIndex((expense)=> expense.id === expenseId)

        if (expenseToEdit) {
            document.getElementById("title").value = expenseToEdit.title;
            document.getElementById("category").value = expenseToEdit.category;
            document.getElementById("date").value = expenseToEdit.date;
            document.getElementById("amount").value = expenseToEdit.amount;

            document.getElementById("submiter").innerText = "Save Changes";
            // console.log(expenseToEdit)
        }        
    }
})

