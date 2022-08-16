<template>
  <div class="course">
    <div
        @click.stop="$emit('delete', course.id)"
        class="delete-btn"
    ></div>
    <div
        @click.stop="$emit('edit', course)"
        class="edit-btn"
    ></div>
    <span class="course-category">{{ course.category }}</span>

    <img
        v-if="course.head_img && course.head_img.img && course.head_img.img.path"
        class="course-image"
        :src="this.$store.getters.getHost + course.head_img.img.path"
        :alt="course.title"
    >
    <h2 class="course-title">{{ course.title }}</h2>
    <p class="course-description">{{ course.description }}</p>
    <p class="course-price">{{ course.price }} <span>руб.</span></p>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  props: {
    course: {
      type: Object,
    }
  }
}
</script>

<style lang="scss" scoped>

.course-image {
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
  border-radius: 10px;
  width: 340px;
  height: 200px;
  min-height: 200px;
  object-fit: cover;
}

.delete-btn {
  display: none;
  position: absolute;
  cursor: pointer;
  content: url("@/assets/images/svg/delete-ico.svg");
  z-index: 2;
}

.edit-btn {
  background-color: #ff8484;
  border-radius: 10px;
  padding: 6px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  left: 50px;
  top: 2px;
  display: none;
  position: absolute;
  content: url("@/assets/images/svg/edit-ico.svg");
  z-index: 2;
}

.course:hover {
  > .delete-btn {
    display: inline;
  }

  > .edit-btn {
    display: inline;
  }
}

.course {
  position: relative;
  overflow: hidden;
  width: 340px;
  height: 430px;
  background: #FFFEFB;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &-category {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: #007385;
    border-radius: 5px;
    padding: 5px;
    font-weight: 500;
    font-size: 0.9em;
    line-height: 1em;
    color: white;
    z-index: 1;
  }

  &-title {
    margin: 10px 0;
    padding: 0 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &-description {
    padding: 0 20px;
    width: 340px;
    height: 90px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &-price {
    padding: 0 20px;
    position: absolute;
    bottom: 10px;
    white-space: nowrap;
  }

}

</style>
