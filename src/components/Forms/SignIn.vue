<template id="signin">
    <v-container fluid>
        <v-row align="center">
            <v-form ref="form" id="form-signin" @submit="validateAndSubmitFormIfIsValid">
                <v-col cols="12">
                    <v-text-field
                        label="E-mail / Username *"
                        v-model="login"
                        @change="validateField('login')"
                        :error-messages="!loginValidation.isValid ? loginValidation.message : ''"
                        :hint="getFieldHint('login')"
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
                        v-model="password"
                        @change="validateField('password')"
                        :error-messages="
                            !passwordValidation.isValid ? passwordValidation.message : ''
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
                    <div class="button-submit-container">
                        <button type="submit" class="btn btn-main" :disabled="requestIsPending">
                            <span v-if="!requestIsPending">Sign in</span>
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
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { AxiosResponse } from 'axios'
import UserHelper from '@/helpers/UserHelper'
import { FieldValidation } from '@/types/FieldValidation'
import UserHttpService from '@/httpServices/UserHttpService'

@Component
export default class SignIn extends Vue {
    // Data property
    login = ''
    password = ''
    loginValidation: FieldValidation = { isValid: false, message: '' }
    passwordValidation: FieldValidation = { isValid: false, message: '' }
    formIsValid = false
    passwordTextShouldBeVisible = false
    requestIsPending = false

    validateField(fieldName: string): void {
        switch (fieldName) {
            case 'login':
                this.loginValidation = UserHelper.verifyLoginIsRequired(this.login)
                break
            case 'password':
                this.passwordValidation = UserHelper.verifyPasswordIsRequired(this.password)
                break
        }
    }

    showPasswordText(): void {
        this.passwordTextShouldBeVisible = !this.passwordTextShouldBeVisible
    }

    getFieldHint(fieldName: string): string {
        return UserHelper.getFieldHintByType(fieldName)
    }

    validateAndSubmitFormIfIsValid(): void {
        this.loginValidation = UserHelper.verifyLoginIsRequired(this.login)
        this.passwordValidation = UserHelper.verifyPasswordIsRequired(this.password)

        if (this.loginValidation.isValid && this.passwordValidation.isValid) {
            this.formIsValid = true
            this.submitForm()
        }
    }

    submitForm(): void {
        if (this.formIsValid) {
            this.requestIsPending = true
            UserHttpService.login(this.login, this.password)
                .then((response: AxiosResponse): void => {
                    console.log('success')
                })
                .catch((): void => {
                    console.log('error')
                })
                .finally((): void => {
                    this.requestIsPending = false
                })
        }
    }
}
</script>
