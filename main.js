var app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: "Fare la spesa",
                done: true,
            },
            {
                text: "Workout",
                done: true,
            },
            {
                text: "Studiare",
                done: true,
            },
            {
                text: "Aggiustare il lavello",
                done: true,
            },
        ],
        newToDo: "",

    },
    methods: {
        addToDo() {
            if (this.newToDo !== " ") {
                newToDo = {
                    text: this.newToDo,
                    done: true,
                }
                this.todos.push(newToDo);
                this.newToDo = "";
            }
        },
        removeToDo(index) {
            this.todos.splice(index, 1);
        }
    }
})