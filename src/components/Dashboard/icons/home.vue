<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 23 23">
    <g id="house" transform="translate(1 0.991)">
      <g id="Group_9" data-name="Group 9" transform="translate(-1 -0.991)">
        <path id="Path_70" data-name="Path 70" d="M21.686,8.842,11.244-.651l-.1-.091a.958.958,0,0,0-.223-.152l-.011,0a.959.959,0,0,0-.821,0l-.011,0a.958.958,0,0,0-.223.152l-.1.089L-.687,8.842A.958.958,0,0,0-.751,10.2.958.958,0,0,0,.6,10.26l.314-.285V21.051a.958.958,0,0,0,.958.958h17.25a.958.958,0,0,0,.958-.958V9.975l.314.285a.958.958,0,0,0,1.289-1.418ZM8.583,20.092v-5.75a1.917,1.917,0,1,1,3.833,0v5.75Zm9.583,0H14.333v-5.75a3.833,3.833,0,1,0-7.667,0v5.75H2.833V8.232L10.5,1.263l7.667,6.97Z" transform="translate(1 0.991)" fill="#2594bc"/>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
