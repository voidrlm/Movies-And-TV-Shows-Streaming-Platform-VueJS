<template>
  <div>
    <v-footer color="accent lighten-1" class="mt-5" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          color="white"
          text
          rounded
          class="my-2"
          :href="link.link"
          target="_blank"
        >
          {{ link.name }}
        </v-btn>
        <v-col class="accent lighten-2 py-5 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Created By Arjun.V</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "footer-component",
  components: {},
  data: () => ({
    links: [
      { name: "GitHub", link: "https://github.com/voidrlm" },
      { name: "Twitter", link: "https://twitter.com/voidrlm" },
    ],
  }),

  methods: {},
};
</script>
