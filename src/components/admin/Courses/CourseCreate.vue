<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создание курса</h4>
      </div>

      <form @submit.prevent="onSubmit">

        <div class="input-field">
          <select ref="select" v-model="course.category">
            <option
              v-for="category in categories"
              :key="category.id"
            >
              {{ category.title }}
            </option>
          </select>
          <label>Выберите категорию</label>
        </div>

        <div class="input-field">
          <input
              @keyup.enter="onKeyup"
              id="title-create"
              type="text"
              v-model.trim="course.title"
              :class="{invalid: !$v.course.title.required && $v.course.title.$dirty}"
          >
          <label for="title-create">Название</label>
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
              id="description-create"
              type="text"
              v-model.trim="course.description"
              :class="{invalid: !$v.course.description.required && $v.course.description.$dirty}"
          >
          <label for="description-create">Описание</label>
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
              <input name="imageFile" type="file" ref="fileCreate" @change="handleFileUpload">
            </div>
            <div class="file-path-wrapper">
              <input
                  @keyup.enter="onKeyup"
                  class="file-path validate"
                  ref="pathCreate"
                  type="text"
                  placeholder="Загрузить изображение"
              >
            </div>
          </div>
        </div>

        <div class="input-field">
          <input
              @keyup.enter="onKeyup"
              id="price-create"
              type="number"
              min="0"
              v-model="course.price"
              :class="{invalid: !$v.course.price.required && $v.course.price.$dirty}"
          >
          <label for="price-create">Цена</label>
          <span
              v-if="!$v.course.price.required && $v.course.price.$dirty"
              class="helper-text invalid"
          >
            Введите цену
          </span>
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
import {required} from 'vuelidate/lib/validators'

export default {
  name: "CourseCreate",
  data() {
    return {
      course: {
        category: '',
        title: '',
        description: '',
        img: '',
        price: ''
      }
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories
    }
  },
  validations: {
    course: {
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

      this.$store.dispatch('createCourse', this.course).then(() => {
        this.$store.dispatch('getCategories')
        this.$store.dispatch('getCourses')
        this.course = {
          category: '',
          title: '',
          description: '',
          price: ''
        }
        this.$refs.fileCreate.value = ''
        this.$refs.pathCreate.value = ''
        this.$v.$reset()
      }).then(() => {
        this.$store.dispatch('getCategories')
        this.$store.dispatch('getCourses')
      }).catch(err => {
        console.log(err)
      })
    },
    onKeyup() {
      this.course.category = ''
      this.course.title = ''
      this.course.description = ''
      this.$refs.fileCreate.value = ''
      this.$refs.pathCreate.value = ''
      this.course.price = ''
    },
    handleFileUpload() {
      this.course.img = this.$refs.fileCreate.files[0]
    },
  },
  mounted(){
    M.FormSelect.init(this.$refs.select)
    M.updateTextFields()
  }
}
</script>

<style scoped>

</style>
