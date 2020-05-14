<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>

<script>
  import TodoHeader from "./components/TodoHeader";
  import TodoInput from "./components/TodoInput";
  import TodoList from "./components/TodoList";

  export default {
    components: {
      //컴포넌트 태그명 : 컴포넌트 내용
      TodoHeader,
      TodoInput,
      TodoList
    }
  }
</script>

<style>
  body {
    text-align: center;
    background-color: beige;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
