<template id="signin">
    <v-container fluid>
        <v-row align="center">
            <v-form ref="form" id="form-signin" lazy-validation>
                <v-col cols="12">
                    <v-text-field
                        label="E-mail / Username *"
                        :model="user.email"
                        required
                        outlined
                        dark
                        type="email"
                        autocomplete="off"
                    ></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field
                        label="Password *"
                        :model="user.password"
                        type="password"
                        outlined
                        dark
                        required
                        autocomplete="off"
                    ></v-text-field>
                </v-col>

                <v-col cols="12">
                    <div class="button-submit-container">
                        <button type="submit" v-on:click="submitForm" class="btn btn-main">
                            Sign in
                        </button>
                    </div>
                </v-col>
            </v-form>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import User from '@/models/User'

@Component
export default class SignIn extends Vue {
    // Data property
    user = new User()

    submitForm(): void {
        alert('FormIsSubmitted')
    }
}
</script>
