<template>
  <v-dialog :value="showVideoPlayer" fullscreen
    ><v-card tile>
      <v-toolbar dense>
        <v-toolbar-title
          >{{ videoPlayerDetails.title
          }}{{ " (" + videoPlayerDetails.year + ") " }}</v-toolbar-title
        >

        <v-spacer></v-spacer>

        <v-btn
          elevation="0"
          icon
          @click="
            $emit('closeVideoPlayer');
            isVideoReady = false;
          "
        >
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text>
        <v-progress-linear
          v-if="!isVideoReady"
          indeterminate
          color="accent"
        ></v-progress-linear>
        <iframe
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
      </v-card-text>
      <div class="mx-5">
        <movie-Slides
          :show="similiarMovies.length !== 0"
          :title="'Similiar Movies'"
          :movies="similiarMovies"
        /></div
    ></v-card>
  </v-dialog>
</template>

<script>
import { movie } from "../../resources/moviesDatabase";
import movieSlides from "../navigation/moviesSlides.vue";
export default {
  name: "video-component",
  props: {
    showVideoPlayer: Boolean,
    videoPlayerDetails: Object,
  },
  data() {
    return {
      movie,
      isVideoReady: false,
      similiarMovies: [],
    };
  },
  components: {
    movieSlides: movieSlides,
  },
  beforeUpdate() {
    let self = this;
    this.similiarMovies = this.movie.filter(function (movie) {
      return (
        movie.genre === self.videoPlayerDetails.genre &&
        movie.title !== self.videoPlayerDetails.title &&
        movie.year !== self.videoPlayerDetails.year
      );
    });
  },
  methods: {},
};
</script>
<style scoped></style>
