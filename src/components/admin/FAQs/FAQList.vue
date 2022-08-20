<template>
  <div class="faq-list">

    <div class="faqs" v-if="value.length > 0">
      <div v-for="faq in value" class="faq">
        <div
            @click.stop="$emit('delete', faq.id)"
            class="delete-btn"
        ></div>
        <div
            @click.stop="$emit('edit', faq)"
            class="edit-btn"
        ></div>
        <h2 class="faq-question">{{ faq.title }}</h2>
        <p class="faq-answer">{{ faq.description }}</p>
      </div>
    </div>

    <h2 v-else style="color: black">
      Список FAQ пустой
    </h2>

  </div>
</template>

<script>
export default {
  name: "FAQList",
  props: {
    value: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>

.faqs {
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
}

.edit-btn {
  background-color: #ff8484;
  border-radius: 10px;
  padding: 6px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  right: 50px;
  top: 2px;
  display: none;
  position: absolute;
  content: url("@/assets/images/svg/edit-ico.svg");
  z-index: 2;
}

.faq:hover {
  > .delete-btn {
    display: inline;
  }

  > .edit-btn {
    display: inline;
  }
}

.faq {
  position: relative;
  overflow: hidden;
  width: 32.9%;
  min-width: 300px;
  background: #FFFEFB;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow-x: auto;

  &-question {
    margin: 30px 0 10px 0;
    padding: 0 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }

  &-answer {
    padding: 0 20px;
    height: 70px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

</style>
