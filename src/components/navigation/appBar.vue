<template>
  <v-app-bar
    :color="$vuetify.theme.dark ? '#0d0d0d' : '#FFFFFF'"
    app
    elevate-on-scroll
    elevation="0"
    height="64"
  >
    <div class="d-flex align-center">
      <v-icon color="primary" size="32" class="mr-2">mdi-filmstrip</v-icon>
      <span class="text-h5 font-weight-bold">
        <span class="primary--text">Stream</span>Flix
      </span>
    </div>

    <v-spacer></v-spacer>

    <v-chip
      v-if="$vuetify.breakpoint.mdAndUp"
      small
      outlined
      class="mr-2"
      @click="showClock = true"
      style="cursor: pointer"
    >
      <v-icon small left>mdi-clock-outline</v-icon>
      {{ dateTime.hours }}:{{ dateTime.minutes }} {{ dateTime.ampm }}
    </v-chip>

    <appBarMenu />

    <div v-if="showClock">
      <clockDialog
        :showClock="showClock"
        :dateTime="dateTime"
        @hideClock="showClock = false"
      />
    </div>
  </v-app-bar>
</template>

<script>
import clockDialog from "../clock/clockDialog.vue";
import appBarMenu from "./appBarMenu.vue";
export default {
  components: {
    appBarMenu,
    clockDialog,
  },
  data: () => ({
    showClock: false,
    dateTime: {
      hours: "--",
      minutes: "--",
      ampm: "",
    },
    timer: undefined,
  }),
  beforeMount() {
    if (localStorage.getItem("darkTheme") !== null) {
      this.$vuetify.theme.dark = JSON.parse(localStorage.getItem("darkTheme"));
    }
    if (localStorage.getItem("lightAccent")) {
      this.$vuetify.theme.themes.light.accent =
        localStorage.getItem("lightAccent");
    }
    if (localStorage.getItem("darkAccent")) {
      this.$vuetify.theme.themes.dark.accent =
        localStorage.getItem("darkAccent");
    }
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    setDateTime() {
      const date = new Date();
      this.dateTime = {
        hours: date.getHours() % 12,
        minutes: (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(),
        ampm: date.getHours() >= 12 ? "PM" : "AM",
        date: new Date().toDateString(),
      };
    },
  },
};
</script>
