<template>
    <v-footer height="75" color="primary">
       <v-container fluid pa-0 ma-0>
           <v-layout justify-center column>
               <v-flex>
                   <v-layout justify-space-between>
                       <v-flex xs4>
                           <v-layout justify-center>
                               <v-img max-width="150" max-height="35" :src="require('../../assets/inlogo.png')" contain></v-img>
                           </v-layout>
                       </v-flex>
                       <v-flex class="hidden-sm-and-down" xs4>
                           <v-layout justify-center justify-space-around>
                               <v-btn text class="white--text" v-for="(link, i) in links" :key="i">
                                   {{link.text}}
                               </v-btn>
                           </v-layout>
                       </v-flex>
                       <v-flex xs4>
                           <v-layout justify-center>
                               <v-btn class="mx-2" color="white" v-for="(contact, i) in contacts" :key="i" icon>
                                   <v-icon>{{contact.icon}}</v-icon>
                               </v-btn>
                           </v-layout>
                       </v-flex>
                   </v-layout>
               </v-flex>
           </v-layout>
       </v-container>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            links: [
                {
                    text: 'About',
                    url: ''
                },
                {
                    text: 'Outlets',
                    url: ''
                },
                {
                    text: 'Terms of use',
                    url: ''
                }
            ],
            contacts: [
                {
                    icon: 'mdi-facebook',
                    url: ''
                },
                {
                    icon: 'mdi-twitter',
                    url: ''
                },
                {
                    icon: 'mdi-instagram',
                    url: ''
                }
            ]
        })
    }
</script>

<style scoped>

</style>