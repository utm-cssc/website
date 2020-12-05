<template>
  <div class="markdown-body mb-5">
    <div class="flex justify-between items-center py-6">
      <div
        :class="{
          'order-md-last': !reversed,
          'justify-md-end': !reversed,
        }"
        class="w-full sm:w-1/2 px-8 py-8 sm:py-0"
      ></div>
      <div class="hidden sm:flex flex-col justify-end">
        <h3 v-if="title != ''" class="text-xl font-bold">
          {{ title }}
        </h3>
        <p
          class="desc"
          :class="{
            'text-md-right': reversed && !($mq == 'md') && !($mq == 'sm'),
          }"
        >
          {{ desc }}
        </p>
        <div
          :class="{
            'align-self-end': reversed,
            'left-padded-desc': reversed,
            'right-padded-desc': !reversed,
          }"
          class="mt-2"
        >
          <v-btn target="_blank" v-if="link" :href="link" color="primary" large>
            {{ button }}
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: String,
    reversed: {
      type: Boolean,
      default: false,
    },
    button: String,
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.feature-btn {
  background-color: #3273dc;
  border-color: transparent;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  text-align: left;
  border-radius: 8px;
}

.feature-btn:hover {
  background-color: #378dff;
}

.feature-img {
  width: 100%;
  border-radius: 16px;
  max-height: 250px;
}

.right-padded-desc {
  padding-right: 48px;
}

.left-padded-desc {
  padding-left: 48px;
}
</style>
