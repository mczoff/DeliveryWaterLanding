<template>
    <v-container fluid ma-0 pa-0>
        <v-card height="350" class="elevation-0">
            <v-layout align-center justify-space-around column>
                <v-img contain :src="require('../assets/cleaning.png')"></v-img>
                <v-layout justify-space-around>
                    <v-flex md5 xs7>
                        <v-layout align-center column>
                            <span class="accent--text headline my-5">70% of a person is water</span>
                            <span class="accent--text">Lorem ipsum pretium eros tlictu proin iullamcorper tempor ante, a fringilla lacus eget. Lorem ipsum pretium eros tlictu proin iullamcorper tempor ante, a fringilla lacus eget. Lorem ipsum pretium eros tlictu proin iullamcorper tempor ante, a fringilla lacus eget</span>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "WaterCleaningSection"
    }
</script>

<style scoped>

</style>