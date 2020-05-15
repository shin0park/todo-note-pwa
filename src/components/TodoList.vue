<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in this.todoItems" v-bind:key="todoItem.id" class="shadow">
        <span class="checkBtn" v-on:click="ItemComplete({todoItem, index})">
          <i class="fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"></i>
        </span>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'TodoList',
    created () {
      this.initialize()
    },
    methods: {
      async initialize () {
        await this.$store.dispatch('getTasks')
      },
      ...mapActions({
        removeTodo: 'removeOneItem',
        ItemComplete: 'completedOndItem'
      })
    },
    computed: {
      ...mapGetters({ todoItems: 'storedTodoItems' })
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .textCompleted {
    text-decoration: line-through;
    color: lightgray;
  }

  .checkBtnCompleted {
    color: gray;
  }
</style>
