<template>
    <div class="todo">
        <todo-header></todo-header>
        <todo-list></todo-list>
    </div>
</template>

<script>
    import TodoHeader from '../components/TodoHeader'
    import TodoList from '../components/TodoList'
    import {fireApp} from '../firebase.js'

    const auth = fireApp.auth();
    export default {
        name: 'Todo',
        components: {
            TodoHeader,
            TodoList
        },
    }
</script>
<style scoped>
    body {
        margin-left: auto;
        margin-top: auto;
        text-align: center;
        background-color: beige;
    }

    input {
        border-style: groove;
        width: 150px;
    }

    button {
        border-style: groove;
    }

    .shadow {
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
    }
    .todo{
        margin: 50px 40px 40px 40px;
    }
</style>
