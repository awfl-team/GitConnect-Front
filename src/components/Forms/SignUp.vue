<template id="signup">
    <v-container fluid>
        <v-row align="center">
            <v-form ref="form" id="form-signup" lazy-validation>
                <v-col cols="12">
                    <v-text-field
                        label="E-mail *"
                        v-model="user.email"
                        :rules="[emailRules]"
                        :success="emailRules && !!user.email"
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
                        v-model="user.username"
                        :rules="[usernameRules]"
                        :success="usernameRules && !!user.username"
                        outlined
                        dark
                        required
                        autocomplete="off"
                    ></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field
                        label="Password *"
                        v-model="user.password"
                        :rules="[passwordRules]"
                        :success="passwordRules && !!user.password"
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
                        v-model="confirmPassword"
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
                    <v-checkbox
                        :rules="[isChecked => !!isChecked || 'You must agree to continue!']"
                        label="I understand that the given informations are only used to access to GitConnect's services"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12">
                    <div class="button-submit-container">
                        <button type="submit" class="btn btn-main" @click="validateForm">
                            Sign up
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
import { AxiosResponse } from 'axios'
import UserHelper from '@/helpers/UserHelper'
import User from '@/models/User'
import UserHttpService from '@/httpServices/UserHttpService'
import AuthHelper from '@/helpers/AuthHelper'

@Component
export default class SignUp extends Vue {
    $refs!: {
        form: HTMLFormElement
    }

    // Data property
    user: User = new User()
    confirmPassword = ''

    usernameRules(username: string): boolean | string {
        return UserHelper.verifyUserUsernameFormat(username)
    }

    emailRules(email: string): boolean | string {
        return UserHelper.verifyUserMailFormat(email)
    }

    passwordRules(password: string): boolean | string {
        return UserHelper.verifyPasswordOrConfirmPasswordFormat(password)
    }

    confirmPasswordRules(confirmPassword: string): boolean | string {
        return UserHelper.verifyPasswordOrConfirmPasswordFormat(confirmPassword)
    }

    passwordAndConfirmPasswordRules(): boolean | string {
        return UserHelper.verifyPasswordAndConfirmPassword(this.user.password, this.confirmPassword)
    }

    validateForm(): void {
        if (this.$refs.form.validate()) {
            this.submitForm()
        }
    }

    submitForm(): void {
        UserHttpService.signUp(this.user).then((response: AxiosResponse): void => {
            AuthHelper.setTokenInLocalStorage(response.data.token)
            console.log('You are sign up')
        })
    }
}
</script>
