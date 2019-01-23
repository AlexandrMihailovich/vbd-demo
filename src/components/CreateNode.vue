<template>
    <v-layout row justify-center>
        <v-dialog v-model="open.create" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Create Node</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field v-model="title" label="Title" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-textarea v-model="content" label="Content"></v-textarea>
                            </v-flex>
                            <v-flex xs12>
                                <v-radio-group v-model="color" row>
                                    <v-radio label="Blue" value="#1867c0" color="#1867c0"></v-radio>
                                    <v-radio label="Red" value="#f44336" color="#f44336"></v-radio>
                                    <v-radio label="Orange" value="#ff9800" color="#ff9800"></v-radio>
                                </v-radio-group>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="open.create = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="save">Create</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
  name: 'CreateNode',
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
      title: '',
      content: '',
      color: '#1867c0'
    }
  },
  methods: {
    save () {
      let node = this.model.addNode(this.title, 300, 200, 72, 100)
      node.content = this.content
      node.color = this.color
      this.open.create = false
      this.title = ''
      this.content = ''
    }
  }
}
</script>
