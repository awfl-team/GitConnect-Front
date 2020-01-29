<template id="signup">
    <v-container fluid>
        <v-row align="center">
            <v-form ref="form" id="form-signup" v-model="valid" lazy-validation>
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
                        label="Username *"
                        :model="username"
                        :rules="[usernameRules]"
                        :success="usernameRules && !!username"
                        outlined
                        dark
                        required
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
                    <v-text-field
                        label="Confirm password *"
                        :model="confirmPassword"
                        :rules="[confirmPasswordRules, passwordAndConfirmPasswordRules]"
                        :success="
                            confirmPasswordRules &&
                                passwordAndConfirmPasswordRules &&
                                !!confirmPassword
                        "
                        outlined
                        dark
                        type="password"
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
    name: 'SignUp',
    data: () => ({
        username: null,
        email: null,
        password: null,
        confirmPassword: null,
        valid: true
    }),
    methods: {
        usernameRules(username): boolean | string {
            this.username = username
            return UserHelper.verifyUserUsernameFormat(username)
        },
        emailRules(email): boolean | string {
            this.email = email
            return UserHelper.verifyUserMailFormat(email)
        },
        passwordRules(password): boolean | string {
            this.password = password
            return UserHelper.verifyPasswordOrConfirmPasswordFormat(password)
        },
        confirmPasswordRules(confirmPassword): boolean | string {
            this.confirmPassword = confirmPassword
            return UserHelper.verifyPasswordOrConfirmPasswordFormat(confirmPassword)
        },
        passwordAndConfirmPasswordRules(): boolean | string {
            return UserHelper.verifyPasswordAndConfirmPassword(this.password, this.confirmPassword)
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
