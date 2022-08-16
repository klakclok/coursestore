<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <form class="form" @submit.prevent="changeName">
      <div class="input-field">
        <input
            id="description"
            type="text"
            v-model="name"
            :class="{invalid: !$v.name.required && $v.name.$dirty}"
        >
        <label for="description">Имя</label>
        <span
            v-if="!$v.name.required && $v.name.$dirty"
            class="helper-text invalid"
        >
          Имя
        </span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import {required} from "vuelidate/lib/validators";

export default {
  name: "Profile",
  data: () => ({
    name: ''
  }),
  methods: {
    changeName () {
      this.$store.commit('changeName', this.name)
      this.name = ''
    }
  },
  validations: {
    name: {required},
  }
}
</script>

<style scoped>
@import '~materialize-css/dist/css/materialize.min.css';
@import '@/assets/styles/index.css';
</style>
