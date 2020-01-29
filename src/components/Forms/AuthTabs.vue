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

<script>
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'

export default {
    name: 'AuthTabs',
    components: { SignIn, SignUp }
}
</script>
