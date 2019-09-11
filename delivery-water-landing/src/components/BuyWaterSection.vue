<template>
    <v-container fluid ma-0 pa-0 id="goods">
        <v-card class="py-12 elevation-0">
            <v-layout justify-space-around>
                <v-flex md6 xs10 sm11>
                    <v-layout row wrap justify-space-around>
                        <v-flex v-for="offer in offers" :key="offer.tag">
                            <v-card height="400" class="elevation-0">
                                <v-layout fill-height align-space-around column>
                                    <v-layout justify-center>
                                        <v-img contain max-width="100" max-height="30" :src="require('../assets/offerlogo.png')"></v-img>
                                        <span class="headline accent--text">{{offer.tag}}</span>
                                    </v-layout>
                                    <v-layout class="my-4" justify-space-around>
                                        <v-flex xs8>
                                            <v-layout>
                                                <v-img  v-for="(offerImage, i) in offer.images" :key="i" contain height="100" width="45" :src="offerImage"></v-img>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout class="my-4" align-center column>
                                        <span class="accent--text" v-for="(capability, i) in offer.capabilities" :key="i">{{capability}}</span>
                                    </v-layout>

                                   <v-layout justify-center>
                                       <v-btn @click="addOrderToBasket(offer)" class="mx-6 mt-6" outlined color="primary" rounded>Purchase</v-btn>
                                   </v-layout>
                                    <v-layout justify-center align-center>
                                        <span class="overline">from {{offer.price}}$</span>
                                    </v-layout>
                                </v-layout>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "BuyWaterSection",
        data: () => ({
            offers: [
                {
                    id: 0,
                    tag: 'Lite',
                    images: [
                        require('../assets/waterbottle.png')
                    ],
                    capabilities: ['Have cell.', 'Lorem ipsum pretium eros.', 'Iullamcorper tempor ante.'],
                    price: 0.50
                },
                {
                    id: 1,
                    tag: 'Pro',
                    images: [
                        require('../assets/waterbottle.png'),
                        require('../assets/waterbottle.png')
                    ],
                    capabilities: ['Have cell.', 'Lorem ipsum pretium eros.', 'Iullamcorper tempor ante.'],
                    price: 1.00
                },
                {
                    id: 2,
                    tag: 'Team',
                    images: [
                        require('../assets/waterbottle.png'),
                        require('../assets/waterbottle.png'),
                        require('../assets/waterbottle.png')
                    ],
                    capabilities: ['Have cell.', 'Lorem ipsum pretium eros.', 'Iullamcorper tempor ante.'],
                    price: 2.99
                }
            ]
        }),
        methods: {
            addOrderToBasket(offer) {
                this.$store.dispatch('addOrder', offer)
            }
        }
    }
</script>

<style scoped>

</style>