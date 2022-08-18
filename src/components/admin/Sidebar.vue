<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  name: "Sidebar",
  data () {
    return {
      links: [
        {title: 'Курсы', url: '/admin', exact: true},
        {title: 'FAQ', url: '/faq'},
        {title: 'Профиль', url: '/profile'},
        {title: 'Заявки', url:'/claims'},
        {title: 'Пользователи', url:'/users'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
