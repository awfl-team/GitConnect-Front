<template id="signin">
    <v-container fluid>
        <v-row align="center">
            <v-form ref="form" id="form-signin" v-model="valid" lazy-validation>
                <v-col cols="12">
                    <v-text-field
                        label="E-mail *"
                        :model="user.email"
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
                        label="Password *"
                        :model="user.password"
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
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import UserHelper from '../../helpers/UserHelper'
import { User } from '@/models/User'

@Component
export default class App extends Vue {
    $refs!: {
        form: HTMLFormElement
    }

    // Data property
    user = new User()
    valid = true

    emailRules(email: string): boolean | string {
        this.user.email = email
        return UserHelper.verifyUserMailFormat(email)
    }
    passwordRules(password: string): boolean | string {
        this.user.password = password
        return UserHelper.verifyPasswordOrConfirmPasswordFormat(password)
    }
    validateForm(): void {
        if (this.$refs.form.validate()) {
            this.submitForm()
        }
    }
    submitForm(): void {
        alert('FormIsSubmitted')
    }
}
</script>
