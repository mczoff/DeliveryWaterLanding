<template>
  <v-app>
    <Appbar/>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Appbar from "./components/core/Appbar";

export default {
  name: 'App',
  components: {
      Appbar
  },
  data: () => ({
    //
  }),
};
</script>
