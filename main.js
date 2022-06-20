

window.addEventListener('load', () => {
    const header = document.getElementById('header')
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    const header_color = header.style.color

    input.addEventListener('input', () => {
        header.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value

        if (!task) {
            return;
        }

        input.value = ""

        header.style.color = header_color

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add("content");
        task_content_el.innerText = task;

        task_el.appendChild(task_content_el);

        const task_actions_el = document.createElement("div")
        task_el.appendChild(task_actions_el)
        task_actions_el.classList.add("actions")

        const task_delete_el = document.createElement("button")
        task_delete_el.classList.add("delete")
        task_delete_el.innerHTML = "DELETE"
        task_actions_el.appendChild(task_delete_el)

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el)
        })

        list_el.appendChild(task_el)
    })
})