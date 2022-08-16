<template>
  <div>
    <div class="page-title">
      <h3>Курсы</h3>
    </div>
    <section>
      <div class="row">
        <CourseCreate/>
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
import CourseCreate from "@/components/admin/CourseCreate";
import CourseEdit from "@/components/admin/CourseEdit";
import CourseList from "@/components/admin/CourseList";

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
    this.$store.dispatch('getCourses')
    M.updateTextFields()
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
  },
  watch: {

  }
}
</script>

<style scoped>
@import '~materialize-css/dist/css/materialize.min.css';
@import '@/assets/styles/index.css';
</style>
