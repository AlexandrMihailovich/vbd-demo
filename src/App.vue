<template>
  <v-app light>
    <v-toolbar app>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn @click="dialogs.create = true" flat>Create Node</v-btn>
        <v-btn @click="dialogs.edit = true" :disabled="model.currentItem.it !== 'node'" flat>Edit Node</v-btn>
        <v-btn @click="dialogs.port = true" :disabled="model.currentItem.it !== 'node'" flat>Create Port</v-btn>
        <v-btn @click="dialogs.export = true" flat>Export/Import</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container ref="container">
        <diagram :model="model" :width="width"></diagram>
      </v-container>
    </v-content>
    <v-footer app>
      <span>selected id:</span><span>{{model.currentItem.id}}</span>

      <span>selected type:</span><span>{{model.currentItem.it}}</span>
    </v-footer>
    <create-node :model="model" :open="dialogs"></create-node>
    <edit-node :model="model" :open="dialogs"></edit-node>
    <create-port :node="model.currentItem" :open="dialogs"></create-port>
    <export :model="model" :open="dialogs"></export>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
import 'vue-block-diagram/dist/Diagram.css'
import Diagram from 'vue-block-diagram'
import CreateNode from './components/CreateNode'
import CreatePort from './components/CreatePort'
import EditNode from './components/EditNode'
import Export from './components/Export'

export default {
  name: 'App',
  data () {
    const diagramModel = new Diagram.Model()
    //diagramModel.deserialize('{"nodes":[{"id":281,"color":"#f44336","it":"node","title":"Red","x":488,"y":331,"_width":202,"minWidth":59,"height":70,"ports":[{"id":811,"color":"#000000","it":"port","type":"in","name":"IN","node":281,"y":0,"showName":false}],"deletable":true,"content":"This is node color is red"},{"id":989,"color":"#ff9800","it":"node","title":"Orange","x":485,"y":91,"_width":124,"minWidth":81.51666641235352,"height":-5,"ports":[{"id":90,"color":"#000000","it":"port","type":"in","name":"IN","node":989,"y":0,"showName":false}],"deletable":true,"content":"This orange"},{"id":696,"color":"#1867c0","it":"node","title":"Blue","x":118,"y":197,"_width":182,"minWidth":61.20000076293945,"height":118,"ports":[{"id":628,"color":"#000000","it":"port","type":"out","name":"Yes","node":696,"y":0,"showName":true},{"id":383,"color":"#000000","it":"port","type":"out","name":"No","node":696,"y":20,"showName":true}],"deletable":true,"content":"Blue color node"}],"links":[{"id":213,"color":"#000000","it":"link","from":{"node":696,"port":628},"to":{"node":989,"port":90},"positionFrom":{"x":310,"y":261},"positionTo":{"x":495,"y":155},"points":[]},{"id":727,"color":"#000000","it":"link","from":{"node":696,"port":383},"to":{"node":281,"port":811},"positionFrom":{"x":310,"y":281},"positionTo":{"x":498,"y":395},"points":[]}]}')

    return {
      model: diagramModel,
      newNode: '',
      newInput: '',
      newOutput: '',
      selectedLink: {},
      currentNode: {},
      width: 1137,
      dialogs: {
        create: false,
        port: false,
        edit: false,
        export: false
      }
    }
  },
  updated: function () {
    let element = this.$refs.container
    let style = window.getComputedStyle(element)
    this.width = element.offsetWidth - parseInt(style.getPropertyValue('padding-right')) - parseInt(style.getPropertyValue('padding-left'))
  },
  components: { Export, EditNode, CreatePort, CreateNode, Diagram }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
