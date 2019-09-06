<template>
    <v-container>
      <v-card height="500" class="elevation-0">
          <v-layout justify-center>
              <span class="headline my-5">Customer reviews</span>
          </v-layout>
          <v-layout align-space-around column>
              <v-layout justify-center>
                  <v-flex md4 xs8>
                      <v-carousel
                              hide-delimiter-background
                              show-arrows-on-hover
                              cycle
                              delimiter-icon="mdi-minus"
                              next-icon="mdi-chevron-right"
                              prev-icon="mdi-chevron-left"
                              height="300">
                          <v-carousel-item
                              v-for="(slide, i) in slides"
                              :key="i"
                          >
                             <v-container>
                                 <v-layout align-center justify-space-around fill-height column>
                                     <v-img max-width="200" max-height="55" :src="slide.logo"></v-img>
                                     <v-layout justify-space-around>
                                         <v-flex xs8>
                                             <v-layout column>
                                                 <span class="my-5">{{slide.text}}</span>
                                                 <br>
                                                 <span class="mt-3 title">{{slide.name}}</span>
                                                 <br>
                                                 <a :href="slide.ref">{{slide.refText}}</a>
                                             </v-layout>
                                         </v-flex>
                                     </v-layout>
                                 </v-layout>
                             </v-container>
                          </v-carousel-item>
                      </v-carousel>
                  </v-flex>
              </v-layout>
          </v-layout>
      </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "ClientSections",
        data () {
            return {
                slides: [
                    {
                        logo: require('../assets/companies/google.png'),
                        text: 'Lorem ipsum pretium eros tlictu proin iullamcorper tempor ante, a fringilla lacus eget',
                        name: 'De Lia Mo Chun',
                        refText: 'CEO of Google',
                        ref: ''
                    },
                    {
                        logo: require('../assets/companies/acne.png'),
                        text: 'Lorem ipsum pretium eros tlictu proin iullamcorper tempor ante, a fringilla lacus eget',
                        name: 'Jonas Subcky',
                        refText: 'CEO of ACNE',
                        ref: ''
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>