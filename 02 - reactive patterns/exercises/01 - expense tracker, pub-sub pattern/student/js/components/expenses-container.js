// This is the component for the big container that lays out the individual cards
// notice how the card component has not rendering logic, but this container component is whats responsible for taking unity cards, populating cards with data and rendering out the grid of cards

// we can call our component in the index w/ attributes (e.g. "expenses") and use
// Notice how at no point are we baking in expensese as a functional parapmeter

// The callbacks for whent eh component loads (connectedCallback()) and when specific attributes monitored (observedAttributes) are changed
// manually fire the rerender function but respond automatically to user interaction

class ExpenseContainer extends HTMLElement {
  constructor() {
    // define the styling, divs, class identifiers etc
    super();
    this.attachShadow({ mode: "open" });
    this.container = document.createElement("div");
    this.container.classList.add('expense-container');
    this.shadowRoot.appendChild(this.container);
    const style = document.createElement("style");
    style.textContent = `
    .expense-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 20px;
  box-sizing: border-box;
    }`;

    this.shadowRoot.appendChild(style);
  }

  static get observedAttributes() {
    // you've seen connectedCallback(); this tatic methoud defines which data to watch
    // returns an array of named attributes to watch for changes in
    // attributeChangedCallback(); will fire when any of these attributes change in calue
    return ['expenses'];
  }

  connectedCallback() {
    this.renderExpenses();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // This callback function fires whenever an observedAttribute changes in value
    if (name === 'expenses' && oldValue !== newValue) {
      this.renderExpenses();
    }
  }

  renderExpenses(){
    // initialise values
    this.container.innerHTML='';
    const expensesAttr = this.getAttribute("expenses");
    let expenses = [];

    try { // parse data from the expemses attribute
      expenses = JSON.parse(expensesAttr);
    } catch (e) {
      console.warn("Invalid expenses attribute:", e);
    }

    // if data parses to valid array, render out a card
    if (Array.isArray(expenses)) {
      expenses.forEach((exp) => {
        // notice how we don't have to import a card into this file!
        // we can just created a new html element for each card 
        // because we've defined the elemrnt and made it avaliable to the index.html
        const card = document.createElement("expense-card");
        // creat cards for each data item and add that card
        card.setAttribute("title", exp.title);
        card.setAttribute("category", exp.category);
        card.setAttribute("date", exp.date);
        card.setAttribute("amount", exp.amount);
        card.setAttribute("id", exp.id);
        this.container.appendChild(card);
      });
    }
  }
}

customElements.define("expense-container", ExpenseContainer);
