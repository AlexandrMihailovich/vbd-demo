<template>
    <v-layout row justify-center>
        <v-dialog v-model="open.port" persistent max-width="600px" :disabled="node.it !== 'node'">
            <v-card>
                <v-card-title>
                    <span class="headline">Create Port for {{node.title}}#{{node.id}}</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field v-model="title" label="Title" required></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-radio-group v-model="type" :mandatory="false">
                                    <div slot="label">Select port type</div>
                                    <v-radio label="In" value="in"></v-radio>
                                    <v-radio label="Out" value="out"></v-radio>
                                </v-radio-group>
                            </v-flex>
                            <v-flex xs6>
                                <v-switch
                                        color="primary"
                                        label="Show title"
                                        v-model="showTitle"
                                ></v-switch>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-container fluid>

                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="open.port = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="save">Create</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
  name: 'CreatePort',
  props: {
    node: {
      required: true
    },
    open: {
      required: true
    }
  },
  data: () => ({
    title: '',
    type: 'in',
    showTitle: false
  }),
  methods: {
    save () {
      if (this.node.it !== 'node') { return false }
      if (this.type === 'in') { this.node.addInPort(this.title).showName = this.showTitle } else { this.node.addOutPort(this.title).showName = this.showTitle }
      this.open.port = false
      this.title = ''
    }
  }
}
</script>
