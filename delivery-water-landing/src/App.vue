<template>
    <v-app>
        <Appbar/>
        <v-content>
            <router-view/>
            <Footer/>
        </v-content>

        <div class="text-center">
            <v-snackbar
                    color="primary"
                    v-model="warning"
                    :timeout="10000"
                    top
            >
                {{warningText}}
                <v-btn
                        color="white"
                        text
                        @click="warning = false"
                >
                    Close
                </v-btn>
            </v-snackbar>
        </div>
    </v-app>
</template>

<script>
import Appbar from "./components/core/Appbar";
import Footer from "./components/core/Footer";

export default {
    name: 'App',
    components: {
        Appbar,
        Footer
    },
    computed: {
        warning: {
            get() {
                return this.$store.getters.warning;
            },
            set(value) {
                this.$store.dispatch('changeWarning', value)
            }
        },
        warningText() {
            return this.$store.getters.warningText;
        },
    }
};
</script>
