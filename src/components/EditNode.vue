<template>
    <v-layout row justify-center>
        <v-dialog v-model="open.edit" persistent max-width="600px" :disabled="model.currentItem.it !== 'node'">
            <v-card>
                <v-card-title>
                    <span class="headline">Edit Node {{model.currentItem.title}}#{{model.currentItem.id}}</span>
                </v-card-title>
                <v-card-text>
                    <v-tabs color="cyan" dark slider-color="yellow">
                        <v-tab key="1" ripple>Node</v-tab>
                        <v-tab key="2" ripple>Ports</v-tab>
                        <v-tab-item key="1">
                            <v-card flat>
                                <v-card-text>
                                    <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12>
                                                <v-text-field v-model="model.currentItem.title" label="Title" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12>
                                                <v-textarea v-model="model.currentItem.content" label="Content"></v-textarea>
                                            </v-flex>
                                            <v-flex xs12>
                                                <v-radio-group v-model="model.currentItem.color" row>
                                                    <v-radio label="Blue" value="#1867c0" color="#1867c0"></v-radio>
                                                    <v-radio label="Red" value="#f44336" color="#f44336"></v-radio>
                                                    <v-radio label="Orange" value="#ff9800" color="#ff9800"></v-radio>
                                                </v-radio-group>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item key="2">
                            <v-card flat>
                                <v-card-text>
                                    <v-list>
                                        <v-list-tile
                                                v-for="port in model.currentItem.ports"
                                        :key="port.id">
                                            <v-list-tile-action>{{port.type}}</v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-text-field v-model="port.title" label="Title" single-line solo></v-text-field>
                                            </v-list-tile-content>
                                            <v-switch
                                                    color="primary"
                                                    label="Show title"
                                                    v-model="port.showName"
                                            ></v-switch>
                                            <v-btn icon ripple @click="model.deletePort(port)">
                                                <v-icon color="red lighten-1">close</v-icon>
                                            </v-btn>
                                        </v-list-tile>
                                    </v-list>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="open.edit = false">End Edit</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
  name: 'EditNode',
  props: {
    model: {
      required: true
    },
    open: {
      required: true
    }
  }
}
</script>

<style scoped>

</style>
