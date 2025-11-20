<template>
  <v-app>
    <v-main>
      <appBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import appBar from "./components/navigation/appBar.vue";
export default {
  name: "App",
  components: {
    appBar,
  },
  data: () => ({}),
  beforeCreate() {},
};
</script>
