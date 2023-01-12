<template>
  <div>
    <v-card-title v-if="movies.length !== 0" class="mb-n5">{{
      title
    }}</v-card-title>
    <v-slide-group
      v-model="selected"
      class="pa-4 mb-n3"
      center-active
      show-arrows
      v-if="movies.length !== 0"
    >
      <v-slide-item
        v-for="(movie, index) in movies"
        :key="index"
        class="elevation-0"
      >
        <v-card
          class="ma-5"
          height="200"
          width="150"
          @click="showPlayer(movie)"
        >
          <v-img
            :src="movie.img"
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
          </v-img>
        </v-card>
      </v-slide-item> </v-slide-group
    ><videoPlayer
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
  name: "movie-slides",
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
