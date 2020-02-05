<template id="signup">
    <v-container fluid>
        <v-row align="center">
            <v-form ref="form" id="form-signup" @submit="validateAndSubmitFormIfIsValid">
                <v-col cols="12">
                    <v-text-field
                        label="E-mail *"
                        v-model="user.email"
                        @change="validateField('email')"
                        :error-messages="!emailValidation.isValid ? emailValidation.message : ''"
                        :success-messages="emailValidation.isValid ? emailValidation.message : ''"
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
                        @change="validateField('username')"
                        :error-messages="
                            !usernameValidation.isValid ? usernameValidation.message : ''
                        "
                        :success-messages="
                            usernameValidation.isValid ? usernameValidation.message : ''
                        "
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
                        @change="validateField('password')"
                        :error-messages="
                            !passwordValidation.isValid ? passwordValidation.message : ''
                        "
                        :success="passwordValidation.isValid"
                        :success-messages="
                            passwordValidation.isValid ? passwordValidation.message : ''
                        "
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
                        v-model="user.confirmPassword"
                        @change="validateField('password')"
                        :error-messages="
                            !passwordValidation.isValid ? passwordValidation.message : ''
                        "
                        :success-messages="
                            passwordValidation.isValid ? passwordValidation.message : ''
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
                        <button type="submit" class="btn btn-main">
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
import User from '@/models/User'
import UserHttpService from '@/httpServices/UserHttpService'
import AuthHelper from '@/helpers/AuthHelper'
import UserHelper from '@/helpers/UserHelper'
import { FieldValidation } from '@/types/FieldValidation'

@Component
export default class SignUp extends Vue {
    // Data property
    user: User = new User()
    formIsValid = false
    usernameValidation: FieldValidation = { isValid: false, message: '' }
    emailValidation: FieldValidation = { isValid: false, message: '' }
    passwordValidation: FieldValidation = { isValid: false, message: '' }

    validateField(fieldName: string): void {
        switch (fieldName) {
            case 'username':
                this.usernameValidation = UserHelper.verifyUsernameFormat(this.user.username)
                break
            case 'email':
                this.emailValidation = UserHelper.verifyEmailFormat(this.user.email)
                break
            case 'password':
                this.passwordValidation = UserHelper.verifyPasswordFormat(
                    this.user.password,
                    this.user.confirmPassword
                )
                break
        }
    }

    validateAndSubmitFormIfIsValid(): void {
        this.usernameValidation = UserHelper.verifyUsernameFormat(this.user.username)
        this.emailValidation = UserHelper.verifyEmailFormat(this.user.email)
        this.passwordValidation = UserHelper.verifyPasswordFormat(
            this.user.password,
            this.user.confirmPassword
        )

        if (
            this.usernameValidation.isValid &&
            this.passwordValidation.isValid &&
            this.emailValidation.isValid
        ) {
            this.formIsValid = true
            this.submitForm()
        }
    }

    submitForm(): void {
        if (this.formIsValid) {
            UserHttpService.register(this.user)
                .then((response: AxiosResponse): void => {
                    AuthHelper.setTokenInLocalStorage(response.data.token)
                })
                .catch((): void => {
                    console.log('error')
                })
        }
    }
}
</script>
