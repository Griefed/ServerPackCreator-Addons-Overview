<template>
  <q-page>
    <div class="row q-pa-md flex-center window-width">
      <q-card :style="this.$q.dark.isActive ?
                'border-bottom: #C0FFEE 3px solid; max-width: 90%;' :
                'border-bottom: #325358 3px solid; max-width: 90%;'"
      >
        <q-list bordered class="rounded-borders">
          <q-item-label
            header
            :class="this.$q.platform.is.mobile ? 'text-weight-bolder text-h6' : 'text-weight-bolder text-h5'"
            :style="this.$q.platform.is.mobile ? 'font-size: 18px;' : ''"
          >
            Curated list of plugins/addons for ServerPackCreator:

            <q-btn
              icon="info"
              class="q-mr-xs right"
              dense
              flat
              @click="viewInfo()">
            </q-btn>
          </q-item-label>

          <q-separator/>

          <q-item v-for="addon in addons" v-bind:key="addon" :class=
            "this.$q.dark.isActive ?
              (addon.index % 2 ? 'item-dark' : 'item-dark-alternative') :
              (addon.index % 2 ? 'item' : 'item-alternative')"
          >
            <q-item-section top>

              <q-item-label lines="1">
                <span class="text-weight-bolder">[{{addon.owner}}/{{addon.name}}]</span>
                <span class="text-grey-8"> - {{ addon.type }}</span>
                <span class="text-grey-8"> - {{ addon.branch }}</span>
              </q-item-label>

              <q-item-label caption lines="10">
                {{ addon.description }}
              </q-item-label>

            </q-item-section>

            <q-item-section top side class="flex-center">
              <div class="q-gutter-xs">
                <q-btn size="lg" type="a" :href="addon.releasesLink" target="_blank" flat dense round icon="save" />
                <q-btn size="lg" flat dense round icon="open_in_new" />
              </div>
            </q-item-section>

            <q-separator/>

          </q-item>

        </q-list>

      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent,ref } from "vue";

export default defineComponent({
  name: "AddonIndex",
  setup() {
    return {
      addons: {
        serverpackcreatorexampleaddon: {
          index: 1,
          name: 'ServerPackCreatorExampleAddon',
          owner: 'Griefed',
          type: 'GitHub',
          branch: 'main',
          description: 'An example addon for ServerPackCreator for use in version 3.x.x.',
          releasesLink: 'https://github.com/Griefed/ServerPackCreatorExampleAddon/releases/latest',
          repositoryLink: 'https://github.com/Griefed/ServerPackCreatorExampleAddon/releases'
        },
        serverpackcreatorexampleaddonalternativedeclaration: {
          index: 2,
          name: 'ServerPackCreatorExampleAddon',
          owner: 'Griefed',
          type: 'GitHub',
          branch: 'alternativeExtensionDeclaration',
          description: 'An example addon for ServerPackCreator for use in version 3.x.x. This example shows a different approach to the extension declaration and class structure.',
          releasesLink: 'https://github.com/Griefed/ServerPackCreatorExampleAddon/releases/latest',
          repositoryLink: 'https://github.com/Griefed/ServerPackCreatorExampleAddon/tree/alternativeExtensionDeclaration'
        },
        serverpackcreatorexampleaddontetris: {
          index: 3,
          name: 'ServerPackCreatorExampleAddon',
          owner: 'Griefed',
          type: 'GitHub',
          branch: 'tetris',
          description: 'An example addon for ServerPackCreator for use in version 3.x.x. This plugin adds a single simple tab containing but a single button. "Press Play On Tape". Upon pressing said button, you can play Tetris in a new windows! Playing Tetris whilst a server pack is generating? Yes please!',
          releasesLink: 'https://github.com/Griefed/ServerPackCreatorExampleAddon/releases/latest',
          repositoryLink: 'https://github.com/Griefed/ServerPackCreatorExampleAddon/tree/tetris'
        },
      }
    }
  },
  methods: {
    viewInfo() {
      this.$q.notify({
        timeout: 0,
        icon: 'info',
        color: 'primary',
        position: 'center',
        multiLine: true,
        html: true,
        message:
          '<b style="font-size: 20px;">How to get your own addon into this list:</b><br><br>' +
          'If you have written your own addon or plugin for ' +
          'ServerPackCreator and you would like to see it added here, please open an issue over at ServerPackCreator' +
          'on GitHub, using the <a style="color: #c0ffee" href="">Documentation</a> template.<br>' +
          '<br>' +
          'For an addon to be accepted, you must at least provide:<br>' +
          '<ul>' +
          '<li>The name of the repository, and therefore the addon.</li>' +
          '<li>The owner of the repository, and therefore the addon.</li>' +
          '<li>The branch of the repository where the main code resides in.</li>' +
          '<li>A description of the plugin or addon.</li>' +
          '</ul>',
        actions: [
          { label: 'OK', color: 'white'}
        ]
      })
    }
  }
});
</script>

<style>
.right {
  position: absolute;
  right: 0px;
  padding-right: 10px;
}

.item {
  background-color: whitesmoke;
}
.item-alternative {
  background-color: white;
}

.item-dark {
  background-color: black;
}
.item-dark-alternative {
  background-color: #1D1D1D;
}
</style>
