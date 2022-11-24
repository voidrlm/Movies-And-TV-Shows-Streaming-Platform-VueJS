<template>
  <v-dialog
    :value="showVideoPlayer"
    persistent
    max-width="400"
    content-class="rounded-xl"
    :overlay-opacity="0.8"
  >
    <v-card class="mx-auto">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="videoPlayerDetails.img"
      >
        <v-card-title
          >{{ videoPlayerDetails.title
          }}{{ " (" + videoPlayerDetails.year + ") / " }}
          <span class="subtitle-2 font-weight-regular">{{
            videoPlayerDetails.type === "tv" ? "TV Show" : "Movie"
          }}</span></v-card-title
        >
      </v-img>

      <v-card-text class="text--primary">
        <v-card-subtitle class="pb-0">
          Director : {{ videoPlayerDetails.director }}
        </v-card-subtitle>
        <v-card-subtitle class="pb-0">
          Starring : {{ videoPlayerDetails.maincast }}</v-card-subtitle
        ><v-card-subtitle class="pb-0">
          Genre : {{ videoPlayerDetails.genre }}
        </v-card-subtitle>
      </v-card-text>

      <v-card-actions class="justify-center pa-4 mt-n3">
        <v-btn
          color="accent"
          class="rounded-xl px-4"
          elevation="0"
          @click.stop="$emit('closeVideoPlayer')"
        >
          Close
        </v-btn>
        <v-btn color="accent" class="rounded-xl px-4 ml-3" elevation="0">
          Play <v-icon>mdi-play</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "video-component",
  props: { showVideoPlayer: Boolean, videoPlayerDetails: Object },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style scoped></style>
