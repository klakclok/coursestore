<template>
  <div>
    <div class="page-title">
      <h3>Курсы</h3>
    </div>
    <section>
      <div class="row">
        <CourseCreate
        :key="courses.length"
        />
        <CourseEdit
          :value="editingValue"
        />
      </div>
    </section>
    <section>
      <div class="row">
        <CourseList
          :courses="courses"
          @delete="deleteCourse"
          @edit="editCourse"
        />
      </div>
    </section>
  </div>
</template>

<script>
import CourseCreate from "@/components/admin/Courses/CourseCreate";
import CourseEdit from "@/components/admin/Courses/CourseEdit";
import CourseList from "@/components/admin/Courses/CourseList";

export default {
  name: "Courses",
  components: {
    CourseCreate, CourseEdit, CourseList
  },
  computed: {
    courses() {
      return this.$store.getters.getCourses || []
    }
  },
  data: () => ({
    editingValue: undefined,
  }),
  mounted() {
    M.updateTextFields()
    this.$store.dispatch('getCourses')
    this.$store.dispatch('getCategories')
  },
  methods: {
    deleteCourse(id) {
      this.$store.dispatch('deleteCourse', id)
      this.$store.dispatch('getCourses').then(() => {
      this.$store.dispatch('getCourses')
      })
    },
    editCourse(course) {
      this.editingValue = course
    }
  }
}
</script>

<style scoped>
@import '~materialize-css/dist/css/materialize.min.css';
@import '@/assets/styles/index.css';
</style>
