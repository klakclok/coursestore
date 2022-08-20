<template>
  <div>

    <div class="page-title">
      <h3>Категории</h3>
    </div>

    <section>
      <div class="row">
        <CategoryCreate/>
        <CategoryEdit
          :value="editingValue"
        />
      </div>
    </section>
    <section>
      <div class="row">
        <CategoryList
          :value="categories"
          @delete="deleteCategory"
          @edit="editCategory"
        />
      </div>
    </section>

  </div>
</template>

<script>
import CategoryCreate from '@/components/admin/Categories/CategoryCreate'
import CategoryEdit from '@/components/admin/Categories/CategoryEdit'
import CategoryList from '@/components/admin/Categories/CategoryList'

export default {
  name: 'Category',
  components: {
    CategoryEdit, CategoryCreate, CategoryList
  },
  data() {
    return {
      editingValue: undefined
    }
  },
  computed: {
    categories() {
      return [...this.$store.getters.getCategories]
    }
  },
  methods: {
    deleteCategory(id) {
      this.$store.dispatch('deleteCategory', id)
      this.$store.dispatch('getCategories').then(() => {
        this.$store.dispatch('getCategories')
      })
    },
    editCategory(category) {
      this.editingValue = category
    }
  },
  mounted() {
    this.$store.dispatch('getCategories')
    M.updateTextFields()
  }
}
</script>

<style scoped>
@import '~materialize-css/dist/css/materialize.min.css';
@import '@/assets/styles/index.css';
</style>
