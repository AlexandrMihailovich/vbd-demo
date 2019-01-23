<template>
    <v-layout row justify-center>
        <v-dialog v-model="open.export" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Create Node</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-textarea v-model="jsonData" label="JSON"></v-textarea>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="open.export = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="save">Import</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
  name: 'Export',
  props: {
    model: {
      required: true
    },
    open: {
      required: true
    }
  },
  data () {
    return {
      jsonData: ''
    }
  },
  methods: {
    save () {
      this.model._model.links = []
      this.model._model.nodes = []
      this.model.deserialize(this.jsonData)
      this.open.export = false
    }
  },
  watch: {
    'open.export': function () {
      this.jsonData = this.model.serialize()
    }
  }
}
</script>

<style scoped>

</style>
