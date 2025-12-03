<template>
  <v-footer
    :color="$vuetify.theme.dark ? '#0d0d0d' : 'grey lighten-4'"
    class="mt-8 py-6"
    padless
  >
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <div class="d-flex align-center justify-center mb-3">
            <v-icon color="primary" size="28" class="mr-2"
              >mdi-filmstrip</v-icon
            >
            <span class="text-h6 font-weight-bold">
              <span class="primary--text">Stream</span>Flix
            </span>
          </div>

          <p class="text-body-2 grey--text mb-3">
            Your destination for movies and TV shows
          </p>

          <div class="mb-3">
            <v-btn
              v-for="(link, i) in links"
              :key="i"
              icon
              class="mx-1"
              :href="link.link"
              target="_blank"
            >
              <v-icon>{{ link.icon }}</v-icon>
            </v-btn>
          </div>

          <v-divider class="my-3"></v-divider>

          <p class="text-caption grey--text mb-0">
            © {{ new Date().getFullYear() }} StreamFlix. Created with ❤️ by
            Arjun.V
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "footer-component",
  components: {},
  data: () => ({
    links: [
      {
        name: "GitHub",
        link: "https://github.com/voidrlm",
        icon: "mdi-github",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/voidrlm",
        icon: "mdi-twitter",
      },
    ],
  }),

  methods: {},
};
</script>
