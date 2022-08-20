<template>
  <div class="category-list">

    <div class="categories" v-if="value.length > 0">
      <div v-for="category in value" class="category">
        <div
          @click.stop="$emit('delete', category.id)"
          class="delete-btn"
        ></div>
        <div
          @click.stop="$emit('edit', category)"
          class="edit-btn"
        ></div>
        <h2 class="category-text">{{ category.title }}</h2>
      </div>
    </div>

    <h2 v-else style="color: black">
      Список категорий пустой
    </h2>

  </div>
</template>

<script>
export default {
  name: 'CategoryList',
  props: {
    value: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.delete-btn {
  display: none;
  position: absolute;
  right: 2px;
  cursor: pointer;
  content: url("@/assets/images/svg/delete-ico.svg");
  z-index: 2;
  width: 31px;
  height: 31px;
}

.edit-btn {
  background-color: #ff8484;
  border-radius: 8px;
  padding: 4px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  right: 37px;
  top: 2px;
  display: none;
  position: absolute;
  content: url("@/assets/images/svg/edit-ico.svg");
  z-index: 2;
}

.category:hover {
  > .delete-btn {
    display: inline;
  }

  > .edit-btn {
    display: inline;
  }
}

.category {
  position: relative;
  overflow: hidden;
  min-width: 200px;
  background: #FFFEFB;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow-x: auto;

  &-text {
    margin: 30px 0 10px 0;
    padding: 0 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }
}

</style>
