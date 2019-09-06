<template>
    <v-container fluid ma-0 pa-0>
        <v-card height="250" class="elevation-0">
            <v-layout fill-height align-center>
                    <v-layout justify-end>
                        <span>2 oxygen atoms</span>
                    </v-layout>

                    <v-flex md3 xs6>
                        <v-img :src="require('../assets/structure.png')"></v-img>
                    </v-flex>

                    <v-layout>
                        <span>1 hydrogen atoms</span>
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