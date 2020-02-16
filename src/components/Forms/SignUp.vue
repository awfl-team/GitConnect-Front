<template id="signup">
    <v-container fluid>
        <v-row align="center">
            <v-form ref="form" id="form-signup" @submit.prevent="validateAndSubmitFormIfIsValid">
                <v-col cols="12">
                    <v-text-field
                        label="E-mail *"
                        v-model="user.email"
                        @change="validateField('email')"
                        :error-messages="!emailValidation.isValid ? emailValidation.message : ''"
                        :success-messages="emailValidation.isValid ? emailValidation.message : ''"
                        :hint="getFieldHint('email')"
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
                        :hint="getFieldHint('username')"
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
                        @keyup="validateField('password')"
                        :error-messages="
                            !passwordValidation.isValid ? passwordValidation.message : ''
                        "
                        :success="passwordValidation.isValid"
                        :success-messages="
                            passwordValidation.isValid ? passwordValidation.message : ''
                        "
                        :hint="getFieldHint('password')"
                        :append-icon="passwordTextShouldBeVisible ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="passwordTextShouldBeVisible ? 'text' : 'password'"
                        @click:append="showPasswordText"
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
                        @keyup="validateField('password')"
                        :error-messages="
                            !passwordValidation.isValid ? passwordValidation.message : ''
                        "
                        :success-messages="
                            passwordValidation.isValid ? passwordValidation.message : ''
                        "
                        :hint="getFieldHint('confirmPassword')"
                        :append-icon="passwordTextShouldBeVisible ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="passwordTextShouldBeVisible ? 'text' : 'password'"
                        @click:append="showPasswordText"
                        outlined
                        dark
                        required
                        autocomplete="off"
                    ></v-text-field>
                </v-col>

                <v-col cols="12">
                    <div class="button-submit-container">
                        <button type="submit" class="btn btn-main" :disabled="requestIsPending">
                            <span v-if="!requestIsPending">Sign up</span>
                            <v-progress-circular
                                indeterminate
                                color="primary"
                                :size="25"
                                v-else
                            ></v-progress-circular>
                        </button>
                    </div>
                </v-col>
            </v-form>
        </v-row>
        <snackbar v-bind:snackBarDetails="snackBarDetails" />
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { AxiosResponse } from 'axios'
import User from '@/models/User'
import UserHttpService from '@/httpServices/UserHttpService'
import UserHelper from '@/helpers/UserHelper'
import { FieldValidation } from '@/types/FieldValidation'
import Snackbar from '../UI/Snackbar.vue'
import SnackBarDetails from '@/models/SnackBarDetails'

@Component({
    components: { Snackbar }
})
export default class SignUp extends Vue {
    // Data property
    user: User = new User()
    formIsValid = false
    requestIsPending = false
    passwordTextShouldBeVisible = false
    usernameValidation: FieldValidation = { isValid: false, message: '' }
    emailValidation: FieldValidation = { isValid: false, message: '' }
    passwordValidation: FieldValidation = { isValid: false, message: '' }
    snackBarDetails: SnackBarDetails = { isActive: false }

    // Methods
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

    getFieldHint(fieldName: string): string {
        return UserHelper.getFieldHintByType(fieldName)
    }

    showPasswordText(): void {
        this.passwordTextShouldBeVisible = !this.passwordTextShouldBeVisible
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
            this.requestIsPending = true
            UserHttpService.register(this.user)
                .then((response: AxiosResponse): void => {
                    this.snackBarDetails = {
                        isActive: true,
                        message: response.statusText,
                        color: 'error'
                    }
                })
                .catch((error: AxiosResponse): void => {
                    this.snackBarDetails = {
                        isActive: true,
                        message: error.statusText,
                        color: 'error'
                    }
                })
                .finally((): void => {
                    this.requestIsPending = false
                })
        }
    }
}
</script>
