<template>
    <v-container fluid ma-0 pa-0>
        <v-app-bar app elevate-on-scroll>
            <v-layout justify-space-around>
                <v-flex md8 xs10>
                    <v-layout align-center justify-space-around>
                        <v-flex md4>
                            <v-img max-width="150" max-height="38" :src="require('../../assets/logo.png')"></v-img>
                        </v-flex>

                        <v-flex md8>
                            <v-layout align-center justify-end>
                                <div class="hidden-sm-and-down">
                                    <v-btn to="#watertypes" class="mx-1" color="primary" text>
                                        Types of water
                                    </v-btn>
                                    <v-btn to="#specification" class="mx-1" color="primary" text>
                                        Specification
                                    </v-btn>
                                    <v-btn to="#customers" class="mx-1" color="primary" text>
                                        Customers
                                    </v-btn>
                                </div>

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
                                            <v-btn @click="basketClick" v-on="on" class="ml-3 my-1" small color="primary" icon>
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
                                                                <span class="overline">{{order.price}}$</span>
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
                                                            <span class="accent--text overline">{{ordersSum}}$</span>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                                <v-flex>
                                                    <v-layout justify-center>
                                                        <v-btn @click.stop="buyDialog = true" outlined color="primary" rounded class="mt-4 mb-1">
                                                            Checkout
                                                        </v-btn>
                                                    </v-layout>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-menu>
                                <v-btn small icon @click="helpDialog = true" class="mx-3">
                                    <v-icon class="primary--text">mdi-help</v-icon>
                                </v-btn>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-app-bar>
        <v-layout justify="center">
            <v-dialog v-model="buyDialog" max-width="600px">
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
                                            label="First name*"
                                            required
                                            v-model="order.firstName"
                                    >
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs3>
                                    <v-text-field
                                            label="Middle name*"
                                            required
                                            v-model="order.middleName"
                                    >
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs3>
                                    <v-text-field
                                            label="Last name*"
                                            required
                                            v-model="order.lastName"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout class="mt-4" justify-space-around>
                                <v-flex xs5>
                                    <v-text-field
                                            label="Email"
                                            v-model="order.email"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs5>
                                    <v-text-field
                                            label="Phone"
                                            v-model="order.phone"
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
                                            v-model="order.features"
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
                                                    <v-layout class="my-4"  justify-center>
                                                        <v-layout justify-center align-center>
                                                            <v-img v-for="(orderImage, i) in order.images" :key="i"  contain height="50" width="23" :src="orderImage"></v-img>
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
                                                        <span class="overline">{{order.price}}$</span>
                                                    </v-layout>
                                                </v-flex>
                                            </v-layout>
                                            <v-divider/>
                                        </v-flex>
                                        <v-layout class="mt-2" align-center justify-space-around>
                                            <v-flex xs4>
                                                <span class="accent--text ">Total:</span>
                                            </v-flex>
                                            <v-flex xs4>
                                            </v-flex>
                                            <v-flex xs3>
                                                <span class="accent--text overline">{{ordersSum}}$</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                            <v-layout column align-start class="mt-5" justify-start>
                                <v-checkbox class="ml-8" v-model="checkboxPolicy">
                                    <template v-slot:label>
                                        <div>
                                            I agree with WaterTM policy and undertake to comply
                                        </div>
                                    </template>
                                </v-checkbox>
                                <v-checkbox class="ml-8" v-model="checkboxLetter">
                                    <template v-slot:label>
                                        <div>
                                            I want to receive news from WaterTM
                                        </div>
                                    </template>
                                </v-checkbox>
                            </v-layout>
                            <v-layout align-center class="mt-5" justify-space-around>
                                <v-btn class="mt-4 mb-1" @click.stop="buyDialog = false" outlined color="primary" rounded>
                                    Cancel
                                </v-btn>

                                <v-btn class="mt-4 mb-1 primary" @click="buyWater" color="white" text rounded>
                                    Accept
                                </v-btn>
                            </v-layout>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-dialog>
            <v-dialog v-model="helpDialog" max-width="600px">
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
                                        <span class="headline">Support Blank</span>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                            <v-layout class="mt-4" justify-space-around>
                                <v-flex xs8>
                                    <v-text-field
                                            label="First name*"
                                            required
                                            v-model="question.name"
                                    >
                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout class="mt-4" justify-space-around>
                                <v-flex xs5>
                                    <v-text-field
                                            label="Email*"
                                            v-model="question.email"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs5>
                                    <v-text-field
                                            label="Phone*"
                                            v-model="question.phone"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout class="mt-4" justify-space-around>
                                <v-flex xs11>
                                    <v-textarea
                                            label="Question"
                                            v-model="question.text"
                                            counter
                                            outlined
                                            full-width
                                            single-line
                                    >
                                    </v-textarea>
                                </v-flex>
                            </v-layout>
                            <v-layout align-center class="mt-5" justify-space-around>
                                <v-btn class="mt-4 mb-1" @click.stop="dialog = false" outlined color="primary" rounded>
                                    Cancel
                                </v-btn>

                                <v-btn class="mt-4 mb-1 primary" @click="sendQuestion" color="white" text rounded>
                                    Send
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
            question: {
                name: '',
                email: '',
                phone: '',
                text: ''
            },
            order: {
                firstName: "",
                middleName: "",
                lastName: "",
                email: "",
                phone: "",
                features: []
            },
            checkboxPolicy: false,
            checkboxLetter: true,
            showMenu: false,
            helpDialog: false,
            buyDialog: false,
        }),
        methods: {
            basketClick() {
                if (this.orderCount <= 0)
                {
                    this.$store.dispatch('setWarningMessage', 'Basket empty! Select products on bottom the page.')
                    this.$store.dispatch('changeWarning', true);
                }
            },
            buyNowClick() {
                if (this.orderCount <= 0)
                {
                    this.$router.push('#goods')
                    return;
                }

                this.showMenu = true;
            },
            async buyWater() {
                await this.$store.dispatch('sendOrder',  {
                    firstName: this.order.firstName,
                    middleName: this.order.middleName,
                    lastName: this.order.lastName,
                    email: this.order.email,
                    phone: this.order.phone,
                    features: this.order.features,
                    goods: this.$store.getters.orders
                })

                this.buyDialog = false;
            },
            async sendQuestion() {
                await this.$store.dispatch('sendQuestion', this.question)
                this.helpDialog = false;
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