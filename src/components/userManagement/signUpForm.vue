<template>
  <v-card dark>
    <v-card-title class="justify-center py-8"
      >Sign up with your email address</v-card-title
    >
    <v-card-text>
      <v-form
        ref="signUpForm"
        v-model="valid"
        lazy-validation
        class="px-8 mt-3"
      >
        <v-text-field
          type="mail"
          prepend-inner-icon="mdi-mail"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          solo-inverted
          rounded
          color="black"
        ></v-text-field>
        <v-text-field
          type="name"
          prepend-inner-icon="mdi-account"
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Profile Name"
          required
          solo-inverted
          rounded
          color="black"
        ></v-text-field>
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-key"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          v-model="password"
          :rules="passwordRules"
          label="Create a password"
          required
          solo-inverted
          rounded
          color="black"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-form>
      <v-card-actions class="justify-center pb-5 mt-n2">
        <v-btn
          rounded
          color="accent"
          @click="goToLoginPage"
          dark
          elevation="0"
          class="mr-5 px-4"
          :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
        >
          Cancel
        </v-btn>
        <v-btn
          rounded
          color="accent"
          @click="createUser"
          dark
          elevation="0 px-4"
          :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
        >
          Sign up
        </v-btn>
      </v-card-actions></v-card-text
    >
  </v-card>
</template>
<script>
// Dummy sign-up form: does not persist users, only validates input
export default {
  name: "sign-up-component",
  props: {},
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    showPassword: false,
    password: "",
    passwordRules: [
      (value) => !!value || "Password is required.",
      (value) => (value && value.length >= 8) || "Minimum 8 characters",
    ],
    // Dummy user database for demonstration only
    userDatabase: [
      { name: "demo", mail: "demo@example.com" },
      { name: "test", mail: "test@example.com" },
    ],
  }),
  computed: {},
  methods: {
    isUserValid() {
      // Only checks against hardcoded dummy users
      if (
        this.userDatabase.some((user) => user.name === this.name) ||
        this.userDatabase.some((user) => user.mail === this.email)
      ) {
        return false;
      } else {
        return true;
      }
    },
    goToLoginPage() {
      this.$refs.signUpForm.resetValidation();
      this.$refs.signUpForm.reset();
      this.$emit("closeForm");
    },
    createUser() {
      if (this.$refs.signUpForm.validate()) {
        if (this.isUserValid()) {
          // In a real app, user would be added to backend or localStorage
          this.goToLoginPage();
          this.$vuetify.toast &&
            this.$vuetify.toast.success("Account created (dummy)");
          alert("Account created (dummy)");
        } else {
          this.$vuetify.toast &&
            this.$vuetify.toast.error("Username/Email already exists.");
          alert("Username/Email already exists.");
        }
      }
    },
  },
};
</script>
