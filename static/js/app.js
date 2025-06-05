
//assign the id task form into a javascript variable. Let is something we assign a variable to
//But constant is not. So here the element "taskForm" becomes a variable
//learn how to send information to the local storage using javascrip
let taskForm = document.getElementById('task-form');


//listen to a submit event for the form.


taskForm.addEventListener('submit', (event) => {
    let task_list = []
    //prevent the default html form submission    why do we have to prevent it from default?
    event.preventDefault();


    //convert the html form to javascript form

    const htmlForm = new FormData(taskForm)

    //convert Js form to Js object.

    const jsFormObj = Object.fromEntries(htmlForm)
    console.log(jsFormObj)

    //creat or get data in localstorage
    //get the database
    let task_list = localStorage.getItem('task_list')

    if (!task_list) {
        console.log('no task list created')
        task_list = localStorage.setItem('task_list'{})
    }
    alert('form submitted')

})