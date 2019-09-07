<template>
    <v-container fluid ma-0 pa-0 id="watertypes">
        <v-card height="550"  class="elevation-0">
            <v-layout justify-end column>
                <v-layout row wrap justify-space-around>
                    <v-flex class="ma-5" v-for="tile in tiles" :key="tile.header" md3 xs5>
                        <v-layout justify-space-between>
                            <v-flex xs3>
                                <v-layout fill-height align-center>
                                    <v-img contain :src="tile.logo"></v-img>
                                </v-layout>
                            </v-flex>
                            <v-flex xs7>
                                <span class="title accent--text">{{tile.header}}</span>
                                <br>
                                <span class="accent--text">{{tile.text}}</span>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout justify-center>
                    <v-btn class="ma-12 primary" color="white" text rounded>
                        Compare now
                    </v-btn>
                </v-layout>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "TypesOfWaterSection",
        data: () => ({
            tiles: [
                {
                    logo: require('../assets/watertypes/washing.png'),
                    header: 'Wash clothes',
                    text: 'Lorem ipsum pretium eros tlictu proin iullamcorper tempor ante, a fringilla lacus eget'
                },
                {
                    logo: require('../assets/watertypes/cooking.png'),
                    header: 'Cook, boil and etc.',
                    text: 'Lorem ipsum pretium eros tlictu proin iullamcorper tempor ante, a fringilla lacus eget'
                },
                {
                    logo: require('../assets/watertypes/cleaning.png'),
                    header: 'Brush your teeth or shower',
                    text: 'Lorem ipsum pretium eros tlictu proin iullamcorper tempor ante, a fringilla lacus eget'
                }
            ]
        })
    }
</script>

<style scoped>

</style>