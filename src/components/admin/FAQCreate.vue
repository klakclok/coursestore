<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создание FAQ</h4>
      </div>

      <form class="form" @submit.prevent="onSubmit">

        <div class="input-field">
          <input
              @keyup.enter="onKeyup"
              id="question-create"
              type="text"
              v-model.trim="faq.title"
              :class="{invalid: !$v.faq.title.required && $v.faq.title.$dirty}"
          >
          <label for="question-create">Вопрос</label>
          <span
              v-if="!$v.faq.title.required && $v.faq.title.$dirty"
              class="helper-text invalid">Поле не может быть пустым</span>
        </div>

        <div class="input-field">
          <input
              @keyup.enter="onKeyup"
              id="answer-create"
              type="text"
              v-model.trim="faq.description"
              :class="{invalid: !$v.faq.description.required && $v.faq.description.$dirty}"
          >
          <label for="answer-create">Ответ</label>
          <span
              v-if="!$v.faq.description.required && $v.faq.description.$dirty"
              class="helper-text invalid">Поле не может быть пустым</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Создать
          <i class="material-icons right">send</i>
        </button>

      </form>
    </div>
  </div>
</template>

<script>
import {required} from "vuelidate/lib/validators";

export default {
  name: "FAQCreate",
  data: () => ({
    faq: {
      title: '',
      description: '',
    }
  }),
  validations: {
    faq: {
      title: {required},
      description: {required},
    }
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      this.$store.dispatch('createFAQ', this.faq).then(() => {
        this.$store.dispatch('getFAQ')
        this.faq = {
          title: '',
          description: '',
        }
        this.$v.$reset()
      }).then(() => {
        this.$store.dispatch('getFAQ')
      }).catch(err => {
        console.log(err)
      })
    },
    onKeyup() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      this.faq.title = ''
      this.faq.description = ''
    }
  }
}
</script>

<style scoped>

</style>
