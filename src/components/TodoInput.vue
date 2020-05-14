<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem">
    <span class="addContainer" v-on:click="addTodoItem">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고
        <span>
          <i class="closeModalBtn fas fa-times" @click="showModal=false"></i>
        </span>
      </h3>
      <div slot="body">할 일을 입력하세요.</div>
    </Modal>
  </div>
</template>

<script>
  import Modal from './common/Modal'

  export default {
    data() {
      return {
        newTodoItem: "",
        showModal: false
      }
    },
    methods: {
      async addTodoItem() {
        console.log(this.newTodoItem);
        //저장 로직
        //나중에 db연동
        if (this.newTodoItem !== '') {
          const text = this.newTodoItem.trim();
          await this.$store.dispatch('addOneItem', text);
          await this.$store.dispatch('getTasks');
          this.clearInput();
        } else {
          this.showModal = !this.showModal;
        }
      },
      clearInput() {
        this.newTodoItem = '';
      }
    },
    components: {
      Modal
    }
  }
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 15px;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #FFC133, #FFC133);
    display: block;
    width: 30px;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }

  .closeModalBtn {
    color: red;
  }
</style>
