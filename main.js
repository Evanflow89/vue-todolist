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
                this.todos.push(this.newToDo);
                this.newToDo = "";
            }
        },
    }
})