<template>
    <v-container fluid ma-0 pa-0>
        <v-card height="500" class="elevation-0">
            <v-layout justify-space-around>
                <v-flex md10 xs11>
                    <v-layout justify-space-around>
                        <v-flex md2 xs3 v-for="offer in offers" :key="offer.tag">
                            <v-card height="400" class="elevation-0">
                                <v-layout fill-height align-space-around column>
                                    <v-layout justify-center>
                                        <v-img contain max-width="100" max-height="30" :src="require('../assets/offerlogo.png')"></v-img>
                                        <span class="headline">{{offer.tag}}</span>
                                    </v-layout>
                                    <v-layout class="my-4" justify-center>
                                           <v-layout v-for="(offerImage, i) in offer.images" :key="i" >
                                               <v-img contain height="100" width="45" :src="offerImage"></v-img>
                                           </v-layout>
                                    </v-layout>
                                    <v-layout class="my-4" align-center column>
                                        <span v-for="(capability, i) in offer.capabilities" :key="i">{{capability}}</span>
                                    </v-layout>

                                    <v-btn class="mx-6 mt-6" outlined color="primary" rounded>Purchase</v-btn>
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
                    tag: 'Lite',
                    images: [
                        require('../assets/waterbottle.png')
                    ],
                    capabilities: ['Have cell.', 'Lorem ipsum pretium eros.', 'Iullamcorper tempor ante.'],
                    price: 0.50
                },
                {
                    tag: 'Pro',
                    images: [
                        require('../assets/waterbottle.png'),
                        require('../assets/waterbottle.png')
                    ],
                    capabilities: ['Have cell.', 'Lorem ipsum pretium eros.', 'Iullamcorper tempor ante.'],
                    price: 1.00
                },
                {
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
        })
    }
</script>

<style scoped>

</style>