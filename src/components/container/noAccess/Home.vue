<template>
  <div class="container">
    <div class="box" @scroll="onScolling">
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
      <ul class="li">123</ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      axiosState: false
    }
  },
  methods: {
    onScolling(e) {
      const fullSroll = e.target.scrollHeight
      const nowScroll = e.target.scrollTop
      
      if((fullSroll - nowScroll) < (fullSroll / 2) && !this.axiosState) {
        console.log("axios호출해")
        console.log(fullSroll);
        console.log(nowScroll)
        this.axiosState = true
        setTimeout(() => {
          this.axiosState = false
        }, 5000);

      }
    }
  }
}
</script>

<style scoped>
h1 {
  color: #fff;
}
body {
  height: 100vh;
}

/* .container {
  height: 1000vh;
  border: 1px solid green;
}

.box {
  border: 1px solid red;
  height: 300px;
  overflow: scroll;
} */
</style>