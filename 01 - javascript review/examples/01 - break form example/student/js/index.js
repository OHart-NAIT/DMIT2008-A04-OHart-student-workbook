
// 1. Select both of the topic list and the new topic form.
let topicList = document.querySelector(".topics-list")
let newTopicForm = document.querySelector(".new-topic-form")

// 2. Add an event listener on the form and stop the event from propogating.
newTopicForm.addEventListener('submit', (event) => {

    event.preventDefault();

    // Get the value of the input from the "form.elements" in the event handler callback.
    let topicInput = event.target.elements["new-topic"];
    let newTopic = topicInput.value;

    // console.log(newTopic);

    // Validate the inputs to make sure the topic is not empty. We're using bootstrap in this project (the css is included in the html) and we're going to use the Server side validation technique to validate, this might seem complicated but let's break it down.

    // if the input value is empty we add the "is-invalid" class on the input. This is going to show the element with the "invalid-feedback" (see in the html)

    // the input is NOT empty then we remove the class "is-invalid" on the input. This hides the element with the "invalid-feedback" (see in the html)

    if (newTopic === "" || newTopic === " ") {
        topicInput.classList.add("is-invalid")
    } else {
        topicInput.classList.remove("is-invalid")
    }

    addTopicToPage(newTopic, topicList)
})

// Create a function named "addTopicToPage" that will take the topic name and the topic list element as a parameter.
const addTopicToPage = (topicName, topicList) => {

    // In the "addTopicToPage" function use a template string to create a new list item and add it to the page.

    // topicList.innerHTML = ""

    let topicListItem = `<li class="list-group-item">${topicName}</li>`
    

    topicList.innerHTML += topicListItem;
}

// Add some topics and test your application!





