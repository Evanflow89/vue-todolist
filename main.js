var app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: "Fare la spesa",
                done: false,
            },
            {
                text: "Workout",
                done: false,
            },
            {
                text: "Studiare",
                done: false,
            },
            {
                text: "Aggiustare il lavello",
                done: false,
            },
        ],
        newToDo: "",

    },
    methods: {
        addToDo() {
            if (this.newToDo !== " ") {
                newToDo = {
                    text: this.newToDo,
                    done: false,
                }
                this.todos.push(newToDo);
                this.newToDo = "";
            }
        },
        removeToDo(index) {
            this.todos.splice(index, 1);
        },
        toDoDone(index) {
            if (this.todos[index].done === false) {
                this.todos[index].done = true;
            } else {
                this.todos[index].done = false;
            }
        },
    }
})