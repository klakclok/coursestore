<template>
  <div class="course-list">

    <div class="courses" v-if="courses.length > 0">
        <transition-group name="list" tag="div">
            <CourseItem
            v-for="course in courses"
            :key="course.id"
            :course="course"
            @delete="$emit('delete', course.id)"
            @edit="$emit('edit', course)"
            class="list-item"
        />
        </transition-group>

    </div>
    <h2 v-else style="color: black">
      Список курсов пустой
    </h2>

  </div>
</template>

<script>
import CourseItem from "@/components/admin/CourseItem";

export default {
  name: "CourseList",
  components: {
    CourseItem
  },
  props: {
    courses: {
      type: Array
    }
  }
}
</script>

<style scoped>

.list{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
    transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
