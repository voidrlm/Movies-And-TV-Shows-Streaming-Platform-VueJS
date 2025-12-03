<template>
  <div class="mb-4">
    <v-card-title
      v-if="movies.length !== 0"
      class="text-h6 font-weight-bold pb-0"
    >
      {{ title }}
    </v-card-title>
    <v-slide-group
      v-model="selected"
      class="pa-2"
      show-arrows
      v-if="movies.length !== 0"
    >
      <v-slide-item v-for="(movie, index) in movies" :key="index">
        <v-hover v-slot="{ hover }">
          <v-card
            class="ma-2 rounded-lg transition-swing"
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 12 : 2"
            height="280"
            width="180"
            @click="showPlayer(movie)"
            style="cursor: pointer; transition: all 0.3s ease"
          >
            <v-img
              :src="movie.img"
              height="220"
              class="white--text rounded-t-lg"
              gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.7)"
            >
              <v-chip
                x-small
                class="ma-2"
                :color="movie.type === 'tv' ? 'primary' : 'accent'"
              >
                {{ movie.type === "tv" ? "TV" : movie.year }}
              </v-chip>
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-1"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-text class="pa-2">
              <div class="text-subtitle-2 font-weight-medium text-truncate">
                {{ movie.title }}
              </div>
              <div class="text-caption grey--text">
                ⭐ {{ movie.rating }} • {{ movie.genre }}
              </div>
            </v-card-text>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute class="rounded-lg">
                <v-btn icon large>
                  <v-icon size="40">mdi-play-circle</v-icon>
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </v-hover>
      </v-slide-item>
    </v-slide-group>
    <videoPlayer
      v-if="showVideoPlayer"
      ref="videoPlayer"
      :showVideoPlayer="showVideoPlayer"
      :videoPlayerDetails="videoPlayerDetails"
      @closeVideoPlayer="showVideoPlayer = false"
    />
  </div>
</template>
<script>
import videoPlayer from "../videoPlayer/showVideoPlayer.vue";
export default {
  name: "movieSlides",
  props: { show: Boolean, movies: Array, title: String },
  data() {
    return { selected: null, showVideoPlayer: false, videoPlayerDetails: {} };
  },
  components: {
    videoPlayer,
  },
  computed: {},
  methods: {
    showPlayer(movie) {
      this.showVideoPlayer = true;
      this.videoPlayerDetails = movie;
    },
  },
};
</script>
<style scoped></style>
