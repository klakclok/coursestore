<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Редактирование курса</h4>
      </div>

      <form @submit.prevent="onSubmit">
        <div class="input-field">
          <input
              @keyup.enter="onKeyup"
              id="category-edit"
              type="text"
              v-model.trim="course.category"
              :class="{invalid: !$v.course.category.required && $v.course.category.$dirty}"
          >
          <label for="category-edit">Категория</label>
          <span
              v-if="!$v.course.category.required && $v.course.category.$dirty"
              class="helper-text invalid"
          >
            Введите категорию
          </span>
        </div>

        <div class="input-field">
          <input
              @keyup.enter="onKeyup"
              id="title-edit"
              type="text"
              v-model.trim="course.title"
              :class="{invalid: !$v.course.title.required && $v.course.title.$dirty}"
          >
          <label for="title-edit">Название</label>
          <span
              v-if="!$v.course.title.required && $v.course.title.$dirty"
              class="helper-text invalid"
          >
            Введите название
          </span>
        </div>

        <div class="input-field">
          <input
              @keyup.enter="onKeyup"
              id="description-edit"
              type="text"
              v-model.trim="course.description"
              :class="{invalid: !$v.course.description.required && $v.course.description.$dirty}"
          >
          <label for="description-edit">Описание</label>
          <span
              v-if="!$v.course.description.required && $v.course.description.$dirty"
              class="helper-text invalid"
          >
            Введите описание
          </span>
        </div>

        <div class="input-field">
          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input name="imageFile" type="file" ref="fileEdit" @change="handleFileUpload">
            </div>
            <div class="file-path-wrapper">
              <input
                  class="file-path validate"
                  ref="pathEdit"
                  type="text"
                  placeholder="Загрузить изображение"
              >
            </div>
          </div>
        </div>

        <div class="input-field">
          <input
              @keyup.enter="onKeyup"
              id="price-edit"
              type="number"
              min="0"
              v-model="course.price"
              :class="{invalid: !$v.course.price.required && $v.course.price.$dirty}"
          >
          <label for="price-edit">Цена</label>
          <span
              v-if="!$v.course.price.required && $v.course.price.$dirty"
              class="helper-text invalid"
          >
            Введите цену
          </span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Обновить
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'

export default {
  name: "CourseEdit",
  props: {
    value: {
      type: Object
    }
  },
  data: () => ({
    course: {
      category: ' ',
      title: ' ',
      description: ' ',
      img: '',
      price: 0
    }
  }),
  validations: {
    course: {
      category: {required},
      title: {required},
      description: {required},
      price: {required}
    }
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      this.$store.dispatch('editCourse', this.course).then(() => {
        this.$store.dispatch('getCourses')
        this.course = {
          category: ' ',
          title: ' ',
          description: ' ',
          price: 0
        }

        this.$refs.fileEdit.value = ''
        this.$refs.pathEdit.value = ''

        this.$v.$reset()
      }).then(() => {
        this.$store.dispatch('getCourses')
      }).catch(err => {
        console.log(err)
      })
    },
    onKeyup() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      this.course.category = ' '
      this.course.title = ' '
      this.course.description = ' '
      this.$refs.fileCreate.value = ''
      this.$refs.pathCreate.value = ''
      this.course.price = 0
    },
    handleFileUpload() {
      this.course.img = this.$refs.fileEdit.files[0]
    },
  },
  watch: {
    value () {
      this.course = this.value
    }
  },
  mounted() {
    M.updateTextFields()
  }
}
</script>

<style scoped>

</style>
