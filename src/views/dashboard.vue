<template>
  <v-container fluid class="pa-0 pa-md-4">
    <!-- Hero Carousel -->
    <v-carousel
      :show-arrows="$vuetify.breakpoint.mdAndUp"
      :height="$vuetify.breakpoint.xsOnly ? '350' : '500'"
      class="rounded-0 rounded-md-xl elevation-8"
      cycle
      interval="5000"
      hide-delimiter-background
      delimiter-icon="mdi-circle-small"
    >
      <v-carousel-item
        v-for="(movie, i) in featured"
        :key="i"
        :src="movie.banner"
        @click="showPlayer(movie)"
        style="cursor: pointer"
      >
        <div
          class="fill-height"
          style="
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.9) 0%,
              rgba(0, 0, 0, 0.3) 50%,
              transparent 100%
            );
          "
        >
          <v-container class="fill-height" fluid>
            <v-row align="end" class="pb-8 pb-md-12 px-4">
              <v-col cols="12" md="8">
                <v-chip
                  small
                  class="mb-2"
                  :color="movie.type === 'tv' ? 'primary' : 'accent'"
                >
                  {{ movie.type === "tv" ? "📺 TV Show" : "🎬 Movie" }}
                </v-chip>
                <h1
                  class="text-h4 text-md-h2 font-weight-bold white--text mb-2"
                >
                  {{ movie.title }}
                </h1>
                <p class="text-subtitle-1 white--text mb-3">
                  {{ movie.year }} • {{ movie.genre }} • ⭐ {{ movie.rating }}/5
                </p>
                <p
                  class="text-body-2 grey--text text--lighten-1 mb-4"
                  v-if="$vuetify.breakpoint.mdAndUp"
                >
                  <strong>Director:</strong> {{ movie.director }} &nbsp;|&nbsp;
                  <strong>Cast:</strong> {{ movie.maincast }}
                </p>
                <v-btn
                  rounded
                  color="primary"
                  class="mr-2"
                  @click.stop="showPlayer(movie)"
                >
                  <v-icon left>mdi-play</v-icon> Watch Trailer
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-carousel-item>
    </v-carousel>
    <!-- Content Sections -->
    <div class="px-2 px-md-4 mt-6">
      <moviesSlides
        :show="trendingItems.length !== 0"
        :title="'🔥 Trending Now'"
        :movies="trendingItems"
        :icon="'mdi-fire'"
      />

      <moviesSlides
        :show="tvShowItems.length !== 0"
        :title="'📺 TV Shows'"
        :movies="tvShowItems"
      />

      <moviesSlides
        :show="topRatedItems.length !== 0"
        :title="'⭐ Top Rated'"
        :movies="topRatedItems"
      />

      <moviesSlides
        :show="actionItems.length !== 0"
        :title="'💥 Action'"
        :movies="actionItems"
      />

      <moviesSlides
        :show="sciFiItems.length !== 0"
        :title="'🚀 Sci-Fi'"
        :movies="sciFiItems"
      />

      <moviesSlides
        :show="comedyItems.length !== 0"
        :title="'😂 Comedy'"
        :movies="comedyItems"
      />

      <moviesSlides
        :show="horrorItems.length !== 0"
        :title="'👻 Horror'"
        :movies="horrorItems"
      />

      <moviesSlides
        :show="animatedItems.length !== 0"
        :title="'🎨 Animated'"
        :movies="animatedItems"
      />

      <moviesSlides
        :show="dramaItems.length !== 0"
        :title="'🎭 Drama'"
        :movies="dramaItems"
      />
    </div>
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
    tvShowItems() {
      return this.movie.filter(function (movie) {
        return movie.type === "tv";
      });
    },
    dramaItems() {
      return this.movie.filter(function (movie) {
        return (
          movie.isFeatured !== true &&
          movie.isTrending !== true &&
          movie.genre === "Drama"
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
