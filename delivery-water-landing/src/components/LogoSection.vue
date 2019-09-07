<template>
    <v-container fluid ma-0 pa-0>
        <v-card class="elevation-0" height="800">
            <v-layout fill-height align-center justify-space-around column>
                <span class="display-3 accent--text">Discover a new taste of water</span>
                <v-img max-height="500" contain :src="require('../assets/water.png')"></v-img>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "LogoSection"
    }
</script>

<style scoped>

</style>