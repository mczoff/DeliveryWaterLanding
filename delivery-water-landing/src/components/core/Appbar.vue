<template>
    <div>
        <v-app-bar
                app
                elevate-on-scroll>

                <v-layout justify-space-around>
                    <v-flex md2 xs2>
                        <v-img max-width="150" max-height="38" :src="require('../../assets/logo.png')"></v-img>
                    </v-flex>

                    <v-flex md4 xs7>
                        <v-layout justify-space-around>
                            <v-btn class="mx-1" color="primary" text>
                                Types of water
                            </v-btn>
                            <v-btn class="mx-1" color="primary" text>
                                Specification
                            </v-btn>
                            <v-btn class="mx-1" color="primary" text>
                                Contact
                            </v-btn>
                            <v-btn class="mx-1 primary" color="white" text rounded>
                                Buy now
                            </v-btn>
                            <v-btn class="ml-3 my-1" small color="primary"  icon>
                                <v-icon>mdi-basket</v-icon>
                            </v-btn>
                        </v-layout>
                    </v-flex>
                </v-layout>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "Appbar"
    }
</script>

<style scoped>

</style>