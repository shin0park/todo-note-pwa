<template>
    <div class="flex-container">
        <div class="row">
            <v-card>
                <v-toolbar
                        card
                        color="purple lighten-3"
                        dark>
                    <v-toolbar-title>{{actionText}}</v-toolbar-title>
                </v-toolbar>
                <v-form>
                    <v-text-field
                            v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            class="flex-item"
                            required
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                    ></v-text-field>
                    <v-text-field
                            v-model="password"
                            class="flex-item"
                            :append-icon="show1 ? 'visibility' : 'visibility_off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            label="Password"
                            hint="최소 8문자 이상을 입력하세요"
                            counter
                            @click:append="show1 = !show1"
                    ></v-text-field>
                    <div class="flex-item">
                        <v-btn flat small v-if="actionButton==='Login'" @click="goToRegister()" color="primary">
                            Register
                        </v-btn>
                        <v-btn flat small v-if="actionButton==='Register'" @click="goToLogin()" color="primary">Sign
                            In
                        </v-btn>
                    </div>
                    <div class="flex-item">
                        <v-btn @click="submitAction()">{{actionButton}}</v-btn>
                        <v-btn @click="clear">clear</v-btn>
                    </div>
                </v-form>
            </v-card>
        </div>
    </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
  import { fireApp } from '../firebase'

  const auth = fireApp.auth()

  export default {
    name: 'Login',
    mixins: [validationMixin],

    validations: {
      email: {
        required,
        email
      },
    },

    data: () => ({
      actionText: 'Login',
      actionButton: 'Login',
      email: '',
      user: null,
      show1: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || '최소 8문자',
        emailMatch: () => ('The email and password you entered don\'t match')
      }
    }),

    mounted () {
      this.isUserLoggedIn()
        .then(() => {
          this.goTo()
          this.$root.$emit('USER_LOGGED', true)
        })
        .catch(() => {
        })

    },

    computed: {
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('잘못된 이메일의 형태입니다.')
        !this.$v.email.required && errors.push('이메일을 입력하세요.')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      isUserLoggedIn () {
        return new Promise(
          (resolve, reject) => {
            auth.onAuthStateChanged(function (user) {
              if (user) {
                this.user = user
                resolve(user)
              } else {
                reject(user)
              }
            })
          }
        )
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
      },
      goToLogin () {
        this.actionText = 'Login'
        this.actionButton = 'Login'
      },
      goToRegister () {
        this.actionText = 'Register'
        this.actionButton = 'Register'
      },
      goTo () {
        this.$root.$emit('USER_LOGGED', true)
        this.$router.push('/dashboard')
      },
      signInUser (email, password) {
        auth.signInWithEmailAndPassword(email, password)
          .then(
            () => {
              this.goTo()
            }
          )
          .catch(
            (error) => {
              console.log('Something happened.', error)
            }
          )
      },
      signUpUser (email, password) {
        auth.createUserWithEmailAndPassword(email, password)
          .then(
            (user) => {
              console.log('User registered.', user)
              this.goToLogin()
            }
          )
          .catch(
            (error) => {
              console.log('Something happened.', error)
            }
          )
      },
      submitAction () {
        switch (this.actionText) {
          case 'Login':
            this.signInUser(this.email, this.password)
            break
          case 'Register':
            this.signUpUser(this.email, this.password)
            break
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html, body {
        height: 100%;
    }

    body {
        margin: 0;
    }

    .flex-container {
        height: 100%;
        padding: 0;
        margin: 0;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .row {
        width: 95%;
    }

    .flex-item {
        width: 90%;
        margin: 5%;
        text-align: center;
    }
</style>
