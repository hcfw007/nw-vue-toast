<template>
  <div class="container">
    <button @click="show({position: 'top center'})">show toast</button>
    <br>
    <label for="horizontal-position">horizontal position</label>
    <select id="horizontal-position" v-model="horizontalPosition">
      <option value="top">top</option>
      <option value="middle">middle</option>
      <option value="bottom">bottom</option>
    </select>
    <br>
    <label for="vertical-position">vertical position</label>
    <select id="vertical-position" v-model="verticalPosition">
      <option value="left">left</option>
      <option value="center">center</option>
      <option value="right">right</option>
    </select>
    <br>
    <label for="content">content</label>
    <input type="text" v-model="content">
    <br>
    <label for="customCss">custom css (in JSON)</label>
    <textarea name="" id="customCss" cols="30" rows="10" v-model="customCss"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      horizontalPosition: 'top',
      verticalPosition: 'center',
      content: 'Demo Toast',
      customCss: '{"font-size": "14px"}',
    }
  },
  methods: {
    show(str, options, type) {
      this.$toast(this.content, {
        position: this.horizontalPosition + ' ' + this.verticalPosition,
        customCss: JSON.parse(this.customCss)
      })
    }
  }
}
</script>

<style>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0%;
  right: 0;
  padding: 50px 50px;
}

button {
  padding: 15px;
  background-color: aquamarine;
  margin: 10px 30px;
  border-radius: 15px;
}
</style>


