<template>
  <div>
    <v-footer color="accent lighten-1" class="mt-5" padless app dense>
      <v-spacer />
      <strong class="mr-3">Created By Arjun.V </strong>
      <v-btn
        v-for="(link, i) in links"
        :key="i"
        color="white"
        text
        rounded
        :href="link.link"
        target="_blank"
      >
        {{ link.name }}
      </v-btn>
      <v-spacer />
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
