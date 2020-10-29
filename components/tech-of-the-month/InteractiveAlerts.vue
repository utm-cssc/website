<template>
    <div class="fixed-bottom" style="left: 25%; width: 50%;">
        <v-alert
        v-model="alertStatus"
        border="left"
        close-text="Close Alert"
        dark
        style="background-color: #009b68;"
        transition="scale-transition"
        >
        <span style="white-space: pre;"> {{ alertMessage }} </span>
            <span v-if="alertRecieveInput">
                <v-col class="shrink">
                    <v-btn
                    small
                    style="background-color: white; color: black;"
                    @click="$emit('update:alertStatus', !alertStatus); alertYesFunction()"
                    >
                    Yes
                    </v-btn>
                    <v-btn
                    small
                    style="background-color: white; color: black;"
                    @click="$emit('update:alertStatus', !alertStatus); alertNoFunction()"
                    >
                    No
                    </v-btn>
                </v-col>
            </span>
        </v-alert>
    </div>
</template>
<script>
export default {
  props: {
    alertStatus: {
      type: Boolean,
      default: false
    },
    alertMessage :{
        type: String,
        default: ""
    },
    alertRecieveInput: {
      type: Boolean,
      default: false
    },
    alertYesFunction: {
      type: Function,
      default: () =>  true
    },
    alertNoFunction: {
      type: Function,
      default: () =>  true
    }
  }
}
</script>