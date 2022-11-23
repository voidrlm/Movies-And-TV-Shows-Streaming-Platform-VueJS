<template>
  <v-app>
    <v-main
      ><appBar v-if="$router.currentRoute.path !== '/'" /> <router-view />
    </v-main>
  </v-app>
</template>

<script>
import appBar from "./components/navigation/appBar.vue";
import { initializeSession } from "./services/sessionManagement";
export default {
  name: "App",
  components: {
    appBar,
  },
  data: () => ({
    //
  }),
  beforeCreate() {
    initializeSession();
  },
};
</script>
