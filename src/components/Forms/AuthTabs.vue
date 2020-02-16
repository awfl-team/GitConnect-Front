<template>
    <v-tabs centered grow class="auth-tabs">
        <v-tab href="#signup">Sign up</v-tab>
        <v-tab-item value="signup">
            <sign-up />
        </v-tab-item>
        <v-tab href="#signin">Sign in</v-tab>
        <v-tab-item value="signin">
            <sign-in />
        </v-tab-item>
    </v-tabs>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'

@Component({
    components: {
        SignIn,
        SignUp
    }
})
export default class AuthTabs extends Vue {}
</script>
