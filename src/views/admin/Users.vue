<template>
  <div>
    <div class="page-title">
      <h3>Пользователи</h3>
    </div>

    <section>
      <div class="row">
        <form class="form" @submit.prevent="onSubmit">

          <div class="input-field">
            <input
              @keyup.enter="onKeyup"
              id="users"
              type="number"
              min="0"
              v-model.trim="users"
              :class="{invalid: !$v.users.required && $v.users.$dirty}"
            >
            <label for="users">Количество пользователей</label>
            <span
              v-if="!$v.users.required && $v.users.$dirty"
              class="helper-text invalid">Поле не может быть пустым</span>
          </div>

          <button class="btn waves-effect waves-light" type="submit">
            Обновить
            <i class="material-icons right">send</i>
          </button>

        </form>
        <h4>Количество пользователей: {{ getUsers[0].users || 'Нет данных в базе'}}</h4>
      </div>
    </section>

  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Users',
  data() {
    return {
      users: ''
    }
  },
  computed: {
    getUsers() {
      return this.$store.getters.getUsers
    }
  },
  validations: {
    users: {required}
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      this.$store.dispatch('updateUsers', this.users).then(() => {
        this.$store.dispatch('getUsers')
        this.users = ''
        this.$v.$reset()
      }).then(() => {
        this.$store.dispatch('getUsers')
      }).catch(err => {
        console.log(err)
      })
    },
    onKeyup() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      this.users = ''
    }
  },
  mounted () {
    this.$store.dispatch('getUsers')
  }
}
</script>

<style scoped>
@import '~materialize-css/dist/css/materialize.min.css';
@import '@/assets/styles/index.css';
</style>
