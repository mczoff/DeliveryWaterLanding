<template>
    <v-container fluid ma-0 pa-0>
        <v-app-bar app elevate-on-scroll>
            <v-layout justify-space-around>
                <v-flex md2 xs2>
                    <v-img max-width="150" max-height="38" :src="require('../../assets/logo.png')"></v-img>
                </v-flex>

                <v-flex md4 xs7>
                    <v-layout justify-space-around>
                        <v-btn to="#watertypes" class="mx-1" color="primary" text>
                            Types of water
                        </v-btn>
                        <v-btn to="#specification" class="mx-1" color="primary" text>
                            Specification
                        </v-btn>
                        <v-btn to="#customers" class="mx-1" color="primary" text>
                            Customers
                        </v-btn>
                        <v-btn @click="buyNowClick" class="mx-1 primary" color="white" text rounded>
                            Buy now
                        </v-btn>

                        <v-menu
                                v-model="showMenu"
                                offset-y
                                bottom
                        >
                            <template v-slot:activator="{ on }">
                                <v-badge overlap>
                                    <template v-if="orderCount > 0" v-slot:badge>{{orderCount}}</template>
                                    <v-btn v-on="on" class="ml-3 my-1" small color="primary" icon>
                                        <v-icon>mdi-basket</v-icon>
                                    </v-btn>
                                </v-badge>
                            </template>
                            <v-card v-if="orderCount > 0" width="250">
                                <v-container>
                                    <v-layout column>
                                        <v-flex  v-for="order in orders"
                                                 :key="order.id">
                                            <v-layout align-center justify-space-around>
                                                <v-flex xs4>
                                                    <v-layout class="my-4" justify-center>
                                                        <v-layout align-center v-for="(orderImage, i) in order.images" :key="i" >
                                                            <v-img contain height="50" width="23" :src="orderImage"></v-img>
                                                        </v-layout>
                                                    </v-layout>
                                                </v-flex>
                                                <v-flex xs3>
                                                    <v-layout>
                                                        <span class="accent--text">{{order.tag}}</span>
                                                    </v-layout>
                                                </v-flex>
                                                <v-flex xs2>
                                                    <v-layout>
                                                        <span class="overline">{{order.price}}</span>
                                                    </v-layout>
                                                </v-flex>
                                                <v-flex xs1>
                                                    <v-layout>
                                                        <v-btn @click="deleteOrder(order)" icon small>
                                                            <v-icon class="primary--text">mdi-delete</v-icon>
                                                        </v-btn>
                                                    </v-layout>
                                                </v-flex>
                                            </v-layout>
                                            <v-divider/>
                                        </v-flex>
                                        <v-flex>
                                           <v-layout class="mt-2" align-center justify-space-around>
                                               <v-flex xs4>
                                                   <span class="accent--text ">Total:</span>
                                               </v-flex>
                                               <v-flex xs1>
                                               </v-flex>
                                               <v-flex xs3>
                                                   <span class="accent--text overline">{{ordersSum}}</span>
                                               </v-flex>
                                           </v-layout>
                                        </v-flex>
                                        <v-flex>
                                            <v-layout justify-center>
                                                <v-btn @click.stop="dialog = true" outlined color="primary" rounded class="mt-4 mb-1">
                                                    Checkout
                                                </v-btn>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-menu>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-app-bar>
        <v-layout justify="center">
            <v-dialog v-model="dialog" max-width="600px">
                <v-card>
                    <v-container>
                        <v-layout column>
                            <v-layout class="my-4">
                                <v-flex xs6>
                                    <v-layout justify-center>
                                        <v-img max-width="150" max-height="38" :src="require('../../assets/logo.png')"></v-img>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs6>
                                    <v-layout justify-center>
                                        <span class="headline">Customer Blank</span>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                            <v-layout class="mt-4" justify-space-around>
                                <v-flex xs3>
                                    <v-text-field
                                        label="Legal first name*"
                                        required
                                    >
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs3>
                                    <v-text-field
                                        label="Legal middle name*"
                                        required
                                    >
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs3>
                                    <v-text-field
                                        label="Legal last name*"
                                        required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout class="mt-4" justify-space-around>
                               <v-flex xs5>
                                   <v-text-field
                                       label="Email*"
                                   ></v-text-field>
                               </v-flex>
                                <v-flex xs5>
                                    <v-text-field
                                        label="Phone*"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout class="mt-4" justify-space-around>
                                <v-flex xs5>
                                    <v-select
                                        :items="['0-17', '18-29', '30-54', '54+']"
                                        label="Age*"
                                        required
                                    ></v-select>
                                </v-flex>
                                <v-flex xs5>
                                    <v-autocomplete
                                        :items="['Girl driver', 'A lot of little bottles']"
                                        label="Delivery features"
                                        multiple
                                    ></v-autocomplete>
                                </v-flex>
                            </v-layout>
                            <v-layout justify-center>
                                <v-flex xs11>
                                    <v-layout column>
                                        <v-divider/>
                                            <v-flex  v-for="order in orders"
                                                     :key="order.id">
                                                <v-layout align-center justify-space-around>
                                                    <v-flex xs4>
                                                        <v-layout class="my-4" justify-center>
                                                            <v-layout align-center v-for="(orderImage, i) in order.images" :key="i" >
                                                                <v-img contain height="50" width="23" :src="orderImage"></v-img>
                                                            </v-layout>
                                                        </v-layout>
                                                    </v-flex>
                                                    <v-flex xs4>
                                                        <v-layout>
                                                            <span class="accent--text">{{order.tag}}</span>
                                                        </v-layout>
                                                    </v-flex>
                                                    <v-flex xs3>
                                                        <v-layout>
                                                            <span class="overline">{{order.price}}</span>
                                                        </v-layout>
                                                    </v-flex>
                                                </v-layout>
                                                <v-divider/>
                                            </v-flex>
                                        <v-divider/>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                            <v-layout align-center class="mt-5 mx-auto" justify-start>
                                <v-checkbox v-model="checkbox">
                                    <template v-slot:label>
                                        <div>
                                            I agree with WaterTM policy and undertake to comply
                                        </div>
                                    </template>
                                </v-checkbox>
                            </v-layout>
                            <v-layout align-center class="mt-5" justify-space-around>
                                <v-btn @click.stop="dialog = false" outlined color="primary" rounded class="mt-4 mb-1">
                                    Cancel
                                </v-btn>

                                <v-btn @click="" class="mx-1 primary" color="white" text rounded>
                                    Accept
                                </v-btn>
                            </v-layout>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-dialog>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Appbar",
        data: () => ({
            showMenu: false,
            dialog: false,
        }),
        methods: {
            buyNowClick() {
                if (this.orderCount <= 0)
                {
                    this.$router.push('#goods')
                    return;
                }

                this.showMenu = true;
            },
            deleteOrder(order) {
                this.$store.dispatch('deleteOrder', order)
            }
        },
        computed: {
            orderCount() {
                return this.$store.getters.orders.length;
            },
            orders() {
                return this.$store.getters.orders;
            },
            ordersSum() {
                if(this.orderCount <= 0)
                    return 0.0;

                return this.$store.getters.orders.map(function (item) {
                    return item.price;
                }).reduce(function(a, b) {
                    return a + b;
                })
            }
        }
    }
</script>

<style scoped>

</style>