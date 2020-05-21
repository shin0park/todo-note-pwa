<template>
    <div>
        <div class="inputBox shadow">
            <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem">
            <span class="addContainer" v-on:click="addTodoItem"><i class="fas fa-plus addBtn"></i></span>
            <Modal v-if="showModal" @close="showModal = false">
                <h3 slot="header">경고
                    <span><i class="closeModalBtn fas fa-times" @click="showModal=false"></i></span>
                </h3>
                <div slot="body">할 일을 입력하세요.</div>
            </Modal>
        </div>
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
    import {mapGetters, mapActions} from 'vuex'
    import {fireApp} from '../firebase.js'
    import Modal from './common/Modal'

    const auth = fireApp.auth();
    export default {
        name: 'TodoList',
        data: () => ({
            user: null,
            newTodoItem: '',
            showModal: false
        }),
        created() {
            this.isUserLoggedIn()
                .then(
                    (user) => {
                        this.user = user;
                        this.$store.commit('setUser', {user: user});
                        this.$root.$emit('USER_LOGGED', true);
                        this.initialize()
                    }
                )
                .catch(
                    () => {
                        this.$router.push('/login');
                    }
                );
        },
        methods: {
            async initialize() {
                await this.$store.dispatch('getTasks')
            },
            isUserLoggedIn() {
                return new Promise(
                    (resolve, reject) => {
                        auth.onAuthStateChanged(function (user) {
                            if (user) {
                                resolve(user);
                            } else {
                                reject(user);
                            }
                        })
                    }
                );
            },
            async addTodoItem() {
                if (this.newTodoItem !== '') {
                    const text = this.newTodoItem.trim()
                    await this.$store.dispatch('addOneItem', text)
                    await this.$store.dispatch('getTasks')
                    this.clearInput()
                } else {
                    this.showModal = !this.showModal
                }
            },
            clearInput() {
                this.newTodoItem = ''
            },
            ...mapActions({
                removeTodo: 'removeOneItem',
                ItemComplete: 'completedOndItem'
            })
        },
        components: {
            Modal
        },
        computed: {
            ...mapGetters({
                todoItems: 'storedTodoItems',
                user: 'loginedUser'
            })
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
        margin-left: 10px;
        color: white;
        vertical-align: middle;
    }

    .closeModalBtn {
        color: red;
    }

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
