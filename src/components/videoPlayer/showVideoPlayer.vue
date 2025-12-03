<template>
  <v-dialog
    :value="showVideoPlayer"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <v-card tile class="overflow-y-auto">
      <!-- Header -->
      <v-toolbar flat color="transparent" class="px-2">
        <v-btn icon @click="closePlayer">
          <v-icon size="28">mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title class="font-weight-bold">
          {{ videoPlayerDetails.title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-chip
          small
          :color="videoPlayerDetails.type === 'tv' ? 'primary' : 'accent'"
        >
          {{ videoPlayerDetails.type === "tv" ? "TV Show" : "Movie" }}
        </v-chip>
      </v-toolbar>

      <v-container fluid class="pa-0 pa-md-4">
        <!-- Video Player -->
        <v-responsive :aspect-ratio="16 / 9" class="mx-auto" max-width="1200">
          <v-progress-linear
            v-if="!isVideoReady"
            indeterminate
            color="primary"
            class="position-absolute"
            style="z-index: 1"
          ></v-progress-linear>
          <iframe
            @load="isVideoReady = true"
            id="video"
            width="100%"
            height="100%"
            :src="
              'https://www.youtube.com/embed/' +
              videoPlayerDetails.link +
              '?autoplay=1'
            "
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="position: absolute; top: 0; left: 0"
          ></iframe>
        </v-responsive>

        <!-- Movie Details -->
        <v-row class="mt-4 px-4" justify="center">
          <v-col cols="12" md="10" lg="8">
            <h1 class="text-h4 font-weight-bold mb-2">
              {{ videoPlayerDetails.title }}
              <span class="text-h6 grey--text"
                >({{ videoPlayerDetails.year }})</span
              >
            </h1>

            <div class="d-flex flex-wrap align-center mb-4">
              <v-chip small class="mr-2 mb-2" color="amber" text-color="black">
                <v-icon small left>mdi-star</v-icon>
                {{ videoPlayerDetails.rating }}/5
              </v-chip>
              <v-chip small class="mr-2 mb-2" outlined>
                {{ videoPlayerDetails.genre }}
              </v-chip>
              <v-chip small class="mb-2" outlined>
                {{ videoPlayerDetails.year }}
              </v-chip>
            </div>

            <v-divider class="mb-4"></v-divider>

            <v-row>
              <v-col cols="12" sm="6">
                <div class="mb-3">
                  <span class="text-overline grey--text">Director</span>
                  <p class="text-body-1 mb-0">
                    {{ videoPlayerDetails.director }}
                  </p>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="mb-3">
                  <span class="text-overline grey--text">Starring</span>
                  <p class="text-body-1 mb-0">
                    {{ videoPlayerDetails.maincast }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Similar Movies -->
        <div class="mt-4 px-2">
          <movie-Slides
            :show="similiarMovies.length !== 0"
            :title="'🎬 Similar Titles'"
            :movies="similiarMovies"
          />
        </div>
      </v-container>
    </v-card>
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
  methods: {
    closePlayer() {
      this.$emit("closeVideoPlayer");
      this.isVideoReady = false;
    },
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
};
</script>
<style scoped></style>
