<template>
  <v-container fluid>
    <v-carousel
      :show-arrows="false"
      :height="$vuetify.breakpoint.xsOnly ? '330' : '400'"
      class="rounded-xl"
    >
      <v-carousel-item
        v-for="(movie, i) in featured"
        :key="i"
        :src="movie.img"
        @click="showPlayer(movie)"
      >
        <v-list-item
          ><v-list-item-content>
            <v-list-item-title class="text-h5"
              >{{ movie.title }}{{ " (" + movie.year + ") / " }}
              <span class="subtitle-2 font-weight-regular">{{
                movie.type === "tv" ? "TV Show" : "Movie"
              }}</span>
            </v-list-item-title>
            <v-list-item-subtitle
              >Director : {{ movie.director }}</v-list-item-subtitle
            >
            <v-list-item-subtitle
              >Starring : {{ movie.maincast }}</v-list-item-subtitle
            ><v-list-item-subtitle
              >Genre : {{ movie.genre }}</v-list-item-subtitle
            ></v-list-item-content
          ></v-list-item
        ></v-carousel-item
      >
    </v-carousel>
    <v-card-title v-if="trendingItems.length !== 0" class="mb-n5"
      >Trending Films</v-card-title
    >
    <v-slide-group
      v-model="trending"
      class="pa-4 mb-n3"
      center-active
      show-arrows
      v-if="trendingItems.length !== 0"
    >
      <v-slide-item
        v-for="(trendingMovie, index) in trendingItems"
        :key="index"
      >
        <v-card
          class="ma-2"
          height="200"
          width="150"
          @click="showPlayer(trendingMovie)"
        >
          <v-img
            :src="trendingMovie.img"
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
          </v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <v-card-title v-if="topRatedItems.length !== 0" class="mb-n5"
      >Top Rated Films</v-card-title
    >
    <v-slide-group
      v-model="trending"
      class="pa-4 mb-n3"
      center-active
      show-arrows
      v-if="topRatedItems.length !== 0"
    >
      <v-slide-item
        v-for="(topRatedMovie, index) in topRatedItems"
        :key="index"
      >
        <v-card
          class="ma-2"
          height="210"
          width="150"
          @click="showPlayer(topRatedMovie)"
        >
          <v-img
            :src="topRatedMovie.img"
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
          </v-img>
        </v-card>
      </v-slide-item> </v-slide-group
    ><videoPlayer
      ref="videoPlayer"
      :showVideoPlayer="showVideoPlayer"
      :videoPlayerDetails="videoPlayerDetails"
      @closeVideoPlayer="showVideoPlayer = false"
    />
  </v-container>
</template>
<script>
import videoPlayer from "../components/videoPlayer/showVideoPlayer.vue";
import { movie } from "../resources/moviesDatabase";
export default {
  name: "dashboard-component",
  data: () => ({
    movie,
    trending: null,
    topRated: null,
    tvshows: null,
    action: null,
    comedy: null,
    horror: null,
    romance: null,
    documentary: null,
    showVideoPlayer: false,
    videoPlayerDetails: {},
  }),
  computed: {
    featured() {
      return this.movie.filter(function (movie) {
        return movie.isFeatured;
      });
    },
    trendingItems() {
      return this.movie.filter(function (movie) {
        return movie.isTrending;
      });
    },
    topRatedItems() {
      return this.movie.filter(function (movie) {
        return (
          movie.isFeatured !== true &&
          movie.isTrending !== true &&
          movie.rating >= 4.5
        );
      });
    },
  },
  components: {
    videoPlayer,
  },
  methods: {
    showPlayer(movie) {
      this.showVideoPlayer = true;
      this.videoPlayerDetails = movie;
      this.$refs.videoPlayer.isVideoReady = false;
    },
  },
};
</script>
