<template>
    <v-snackbar
        v-model="snackBarDetails.isActive"
        :multi-line="true"
        :bottom="true"
        :timeout="4000"
    >
        <span :class="`${snackBarDetails.color}--text`">{{ this.snackBarDetails.message }}</span>
        <v-btn :color="snackBarDetails.color" text @click="snackBarDetails.isActive = false">
            Close
        </v-btn>
    </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { SnackBarType } from '@/types/SnackBarType'

@Component()
export default class Snackbar extends Vue {
    // DataBinding
    @Prop({ required: true, default: false }) snackBarDetails: SnackBarType
}
</script>
