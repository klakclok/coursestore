<template>
  <div class="app-main-layout">

    <Navbar
      @click="isOpen = !isOpen"
    />

    <Sidebar
      v-model="isOpen"
    />

    <main class="app-content" :class="{full: !isOpen}">

      <div class="app-page">
        <router-view/>
      </div>

    </main>

  </div>
</template>

<script>
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/admin/Navbar";
import messages from "@/utils/messages";

export default {
  name: "MainLayout",
  data: () => ({
    name: '',
    isOpen: true
  }),
  components: {
    Navbar, Sidebar
  },
  methods: {
    changeName(newName) {
      this.$store.commit('changeName', newName)
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    error (fbError) {
      this.$error(messages[fbError.code] || 'Что-то пошло не так!!!')
    }
  },
  mounted () {
    this.$router.push('/admin')
  }
}
</script>

<style scoped>

</style>
