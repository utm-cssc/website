<template>
  <div class="mb-5">
    <div class="row d-flex align-items-center">
      <div
        class="col-md-5 col-lg-4 d-flex justify-content-start"
        :class="{
          'order-md-last': !reversed,
          'justify-content-md-end': !reversed,
          'px-5': $mq == 'sm'
        }"
      >
        <img class="feature-img" :src="imgSrc" />
      </div>
      <div
        class="col-md-7 col-lg-8 d-flex justify-content-center flex-column text-container"
        :class="{
          'px-5': $mq == 'sm',
          'align-items-md-end': reversed,
          'left-padded-desc': reversed,
          'right-padded-desc': !reversed
        }"
      >
        <h3 v-if="title != ''" class="feature-title">
          {{ title }}
        </h3>
        <p
          class="desc"
          :class="{
            'text-md-right': reversed && !($mq == 'md') && !($mq == 'sm')
          }"
        >
          {{ desc }}
        </p>
        <div>
          <b-btn v-if="link" :href="link" class="py-2 px-3 feature-btn">{{
            button
          }}</b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    title: {
      type: String,
      default: ''
    },
    desc: String,
    reversed: {
      type: Boolean,
      default: false
    },
    button: String,
    link: {
      type: String,
      default: ''
    }
  }
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
}

.desc {
  font-weight: 300;
  line-height: 1.75rem;
  opacity: 0.9;
  font-size: 24px;
  margin-top: 0;
}

.feature-title {
  font-weight: 600;
  line-height: 1.25;
  font-size: 42px;
  color: var(--color-text-dark);
}

.right-padded-desc {
  padding-right: 48px;
}

.left-padded-desc {
  padding-left: 48px;
}

@media screen and (max-width: 768px) {
  .feature-title {
    font-size: 32px;
  }

  .desc {
    font-size: 20px;
  }
}
</style>
