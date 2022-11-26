<template>
  <v-dialog :value="showVideoPlayer" fullscreen
    ><v-card tile>
      <v-toolbar dense>
        <v-btn
          elevation="0"
          icon
          @click="
            $emit('closeVideoPlayer');
            isVideoReady = false;
          "
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-toolbar-title class="ml-n5"
          >{{ videoPlayerDetails.title
          }}{{ " (" + videoPlayerDetails.year + ") " }}</v-toolbar-title
        >

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text
        ><v-progress-linear
          v-if="!isVideoReady"
          indeterminate
          color="accent"
        ></v-progress-linear>
        <br /><iframe
          @load="isVideoReady = true"
          id="video"
          width="100%"
          height="300"
          :src="'https://www.youtube.com/embed/' + videoPlayerDetails.link"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <v-card-subtitle class="pb-0">
          Director : {{ videoPlayerDetails.director }}
        </v-card-subtitle>
        <v-card-subtitle class="pb-0">
          Starring : {{ videoPlayerDetails.maincast }}</v-card-subtitle
        ><v-card-subtitle class="pb-0">
          Genre : {{ videoPlayerDetails.genre }}
        </v-card-subtitle>
      </v-card-text></v-card
    >
  </v-dialog>
</template>

<script>
export default {
  name: "video-component",
  props: { showVideoPlayer: Boolean, videoPlayerDetails: Object },
  data() {
    return { isVideoReady: false };
  },
  computed: {},
  methods: {},
};
</script>
<style scoped></style>
