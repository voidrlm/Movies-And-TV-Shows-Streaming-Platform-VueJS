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
        :src="movie.banner"
        @click="showPlayer(movie)"
      >
        <v-list-item
          ><v-list-item-content
            ><v-list-item-title>
              <v-chip class="text-h5 mt-2"
                >{{ movie.title }}{{ " (" + movie.year + ") / " }}
                <span class="subtitle-2 font-weight-regular">{{
                  movie.type === "tv" ? "TV Show" : "Movie"
                }}</span></v-chip
              ></v-list-item-title
            ><v-list-item-subtitle
              ><v-chip class="mt-2"
                >Director : {{ movie.director }}</v-chip
              ></v-list-item-subtitle
            ><v-list-item-subtitle>
              <v-chip class="mt-2"
                >Starring : {{ movie.maincast }}</v-chip
              ></v-list-item-subtitle
            ><v-list-item-subtitle>
              <v-chip class="mt-2"
                >Genre : {{ movie.genre }}</v-chip
              ></v-list-item-subtitle
            ></v-list-item-content
          ></v-list-item
        >
      </v-carousel-item>
    </v-carousel>
    <moviesSlides
      :show="trendingItems.length !== 0"
      :title="'Trending Now'"
      :movies="trendingItems"
    />
    <v-divider class="ma-3" />
    <moviesSlides
      :show="topRatedItems.length !== 0"
      :title="'Top Rated Films'"
      :movies="topRatedItems"
    />
    <moviesSlides
      :show="actionItems.length !== 0"
      :title="'Action Films'"
      :movies="actionItems"
    />
    <moviesSlides
      :show="comedyItems.length !== 0"
      :title="'Comedy Films'"
      :movies="comedyItems"
    />
    <moviesSlides
      :show="sciFiItems.length !== 0"
      :title="'Sci-Fi Films'"
      :movies="sciFiItems"
    />
    <moviesSlides
      :show="horrorItems.length !== 0"
      :title="'Horror Films'"
      :movies="horrorItems"
    />
    <moviesSlides
      :show="animatedItems.length !== 0"
      :title="'Animated Films'"
      :movies="animatedItems"
    />
    <videoPlayer
      v-if="showVideoPlayer"
      ref="videoPlayer"
      :showVideoPlayer="showVideoPlayer"
      :videoPlayerDetails="videoPlayerDetails"
      @closeVideoPlayer="showVideoPlayer = false"
    />
    <footerBar />
  </v-container>
</template>
<script>
import footerBar from "@/components/navigation/footer.vue";
import moviesSlides from "@/components/navigation/moviesSlides.vue";
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
    actionItems() {
      return this.movie.filter(function (movie) {
        return (
          movie.isFeatured !== true &&
          movie.isTrending !== true &&
          movie.genre === "Action"
        );
      });
    },
    sciFiItems() {
      return this.movie.filter(function (movie) {
        return (
          movie.isFeatured !== true &&
          movie.isTrending !== true &&
          movie.genre === "Sci-fi"
        );
      });
    },
    comedyItems() {
      return this.movie.filter(function (movie) {
        return (
          movie.isFeatured !== true &&
          movie.isTrending !== true &&
          movie.genre === "Comedy"
        );
      });
    },
    horrorItems() {
      return this.movie.filter(function (movie) {
        return (
          movie.isFeatured !== true &&
          movie.isTrending !== true &&
          movie.genre === "Horror"
        );
      });
    },
    animatedItems() {
      return this.movie.filter(function (movie) {
        return (
          movie.isFeatured !== true &&
          movie.isTrending !== true &&
          movie.genre === "Animated"
        );
      });
    },
  },
  components: {
    videoPlayer,
    moviesSlides,
    footerBar,
  },
  methods: {
    showPlayer(movie) {
      this.showVideoPlayer = true;
      this.videoPlayerDetails = movie;
    },
  },
};
</script>
