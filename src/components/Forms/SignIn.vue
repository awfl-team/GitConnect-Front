<template id="signin">
    <v-container fluid>
        <v-row align="center">
            <v-form ref="form" id="form-signin" v-model="valid" lazy-validation>
                <v-col cols="12">
                    <v-text-field
                        label="E-mail *"
                        :model="email"
                        :rules="[emailRules]"
                        :success="emailRules && !!email"
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
                        :model="password"
                        :rules="[passwordRules]"
                        :success="passwordRules && !!password"
                        type="password"
                        outlined
                        dark
                        required
                        autocomplete="off"
                    ></v-text-field>
                </v-col>

                <v-col cols="12">
                    <div class="button-submit-container">
                        <button type="submit" v-on:click="validateForm" class="btn btn-main">
                            Sign in
                        </button>
                    </div>
                </v-col>
            </v-form>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import UserHelper from '../../helpers/UserHelper'

export default {
    name: 'SignIn',
    data: () => ({
        email: null,
        password: null,
        valid: true
    }),
    methods: {
        emailRules(email: string): boolean | string {
            this.email = email
            return UserHelper.verifyUserMailFormat(email)
        },
        passwordRules(password: string): boolean | string {
            this.password = password
            return UserHelper.verifyPasswordOrConfirmPasswordFormat(password)
        },
        validateForm(): void {
            if (this.$refs.form.validate()) {
                this.submitForm()
            }

            return
        },
        submitForm(): void {
            alert('FormIsSubmitted')
            return
        }
    }
}
</script>
