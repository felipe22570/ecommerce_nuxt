<template>
  <div>
    <NavbarVue />
    <Nuxt />
  </div>
</template>

<script>
import NavbarVue from "~/components/Navbar.vue";
export default { components: { NavbarVue } };
</script>

<style lang="sass">
$color-pack: false

@import '~vuetify/src/styles/main.sass'
</style>
