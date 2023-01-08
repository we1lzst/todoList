let task = document.querySelector('.add-task');
let person = document.querySelector('.add');

function addPerson() {
    person.addEventListener('click', () => {
        let block = document.createElement('a');
        let text = document.querySelector('.nav').value;
        block.textContent = text
        block.classList = 'person';
        document.body.children[0].children[0].children[0].children[0].children[0].append(block);
        document.querySelector('.nav').value = '';
    })
}
addPerson();

function addTask() {
    task.addEventListener('click', () => {
        let block = document.createElement("div");
        let text = document.querySelector('.tasks-input').value;
        console.log(text)
        block.classList = 'ts';
        block.textContent = text;
        document.body.children[0].children[0].children[0].children[0].children[1].children[1].append(block)
        document.querySelector('.tasks-input').value = '';
    })
}
addTask();
