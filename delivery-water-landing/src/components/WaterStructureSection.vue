<template>
    <v-container fluid ma-0 pa-0>
        <v-card class="elevation-0 pt-5 pb-12">
            <v-layout column>
                <v-layout fill-height align-center>
                    <v-flex xs4>
                        <v-layout justify-end>
                            <span class="accent--text overline">2 oxygen atoms</span>
                        </v-layout>
                    </v-flex>

                    <v-flex xs4>
                        <v-layout justify-end>
                            <v-img :src="require('../assets/structure.png')"></v-img>
                        </v-layout>
                    </v-flex>

                    <v-flex xs4>
                        <v-layout>
                            <span class="accent--text overline">1 hydrogen atoms</span>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout justify-center>
                    <v-btn class="my-12" outlined color="primary" rounded>Find more</v-btn>
                </v-layout>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "WaterStructureSection"
    }
</script>

<style scoped>

</style>