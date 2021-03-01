<template>
  <v-card>
    <v-card-title> 테스트중이에요. </v-card-title>
    <v-card-text>
      <v-textarea v-model="text" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="getRootData"> getRootData </v-btn>
      <v-btn @click="getHelloData"> getHelloData </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      text: 'jsh',
    }
  },
  methods: {
    async getRootData() {
      const response = await this.$axios.get('/api')
      this.text = response.data.message
    },
    async getHelloData() {
      const response = await this.$axios.get('/api/hello')
      this.text = response.data.message
    },
  },
}
</script>