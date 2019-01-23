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
    diagramModel.deserialize('{"nodes":[{"id":391,"color":"#f44336","it":"node","title":"Red node","x":393,"y":40,"_width":117,"minWidth":100,"_height":104,"ports":[{"id":222,"color":"#000000","it":"port","title":"In port","type":"in","node":391,"y":0,"showName":true}],"deletable":true,"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ","inCount":1,"outCount":0},{"id":873,"color":"#1867c0","it":"node","title":"Super node","x":94,"y":144,"_width":139,"minWidth":100,"_height":154,"ports":[{"id":39,"color":"#000000","it":"port","title":"one","type":"out","node":873,"y":0,"showName":true},{"id":684,"color":"#000000","it":"port","title":"two","type":"out","node":873,"y":20,"showName":true}],"deletable":true,"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","inCount":0,"outCount":2},{"id":72,"color":"#1867c0","it":"node","title":"Content free","x":355,"y":315,"_width":160,"minWidth":100,"_height":87,"ports":[{"id":372,"color":"#000000","it":"port","title":"out","type":"out","node":72,"y":0,"showName":true},{"id":553,"color":"#000000","it":"port","title":"in","type":"in","node":72,"y":0,"showName":true}],"deletable":true,"content":"","inCount":1,"outCount":1},{"id":519,"color":"#ff9800","it":"node","title":"Node","x":629,"y":196,"_width":153,"minWidth":100,"_height":162,"ports":[{"id":430,"color":"#000000","it":"port","title":"in","type":"in","node":519,"y":0,"showName":false}],"deletable":true,"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","inCount":1,"outCount":0}],"links":[{"id":446,"color":"#000000","it":"link","title":"Untitled","from":{"node":72,"port":372},"to":{"node":519,"port":430},"positionFrom":{"x":525,"y":379},"positionTo":{"x":639,"y":260},"points":[]},{"id":498,"color":"#000000","it":"link","title":"Untitled","from":{"node":873,"port":39},"to":{"node":391,"port":222},"positionFrom":{"x":243,"y":208},"positionTo":{"x":403,"y":104},"points":[]},{"id":917,"color":"#000000","it":"link","title":"Untitled","from":{"node":873,"port":684},"to":{"node":72,"port":553},"positionFrom":{"x":243,"y":228},"positionTo":{"x":365,"y":379},"points":[]}]}')

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
