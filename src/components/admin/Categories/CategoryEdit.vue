<template>
  <div class="col s12 m6">

    <div class="page-subtitle">
      <h4>Редактирование категории</h4>
    </div>

    <form class="form" @submit.prevent="onSubmit">

      <div class="input-field">
        <input
          @keyup.enter="onKeyup"
          id="category-edit"
          type="text"
          v-model.trim="category.title"
          :class="{invalid: !$v.category.title.required && $v.category.title.$dirty}"
        >
        <label for="category-edit">Категория</label>
        <span
          v-if="!$v.category.title.required && $v.category.title.$dirty"
          class="helper-text invalid">Поле не может быть пустым</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>

    </form>

  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'CategoryEdit',
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
      category: {
        title: ' '
      }
    }
  },
  validations: {
    category: {
      title: {required}
    }
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      this.$store.dispatch('editCategory', this.category).then(() => {
        this.$store.dispatch('getCategories')
        this.category.title = ' '
        this.$v.$reset()
      }).then(() => {
        this.$store.dispatch('getCategories')
      }).catch(err => {
        console.log(err)
      })
    },

    onKeyup() {
      this.category.title = ' '
    }
  },
  watch: {
    value () {
      this.category = this.value
    }
  }
}
</script>

<style scoped>

</style>
