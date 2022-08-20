<template>
  <div>
    <div class="page-title">
      <h3>FAQ</h3>
    </div>

    <section>
      <div class="row">
        <FAQCreate/>
        <FAQEdit
            :value="editingValue"
        />
      </div>
    </section>
    <section>
      <div class="row">
        <FAQList
            :value="faqs"
            @delete="deleteFAQ"
            @edit="editFAQ"
        />
      </div>
    </section>

  </div>
</template>

<script>
import FAQCreate from "@/components/admin/FAQs/FAQCreate";
import FAQEdit from "@/components/admin/FAQs/FAQEdit";
import FAQList from "@/components/admin/FAQs/FAQList";

export default {
  name: "FAQ",
  components: {
    FAQCreate, FAQList, FAQEdit
  },
  data: () => ({
    editingValue: undefined
  }),
  computed: {
    faqs() {
      return this.$store.getters.getFAQ
    }
  },
  methods: {
    deleteFAQ(id) {
      this.$store.dispatch('deleteFAQ', id)
      this.$store.dispatch('getFAQ').then(() => {
        this.$store.dispatch('getFAQ')
      })
    },
    editFAQ(faq) {
      this.editingValue = faq
    }
  },
  mounted() {
    this.$store.dispatch('getFAQ')
    M.updateTextFields()
  }

}
</script>

<style scoped>
@import '~materialize-css/dist/css/materialize.min.css';
@import '@/assets/styles/index.css';
</style>
