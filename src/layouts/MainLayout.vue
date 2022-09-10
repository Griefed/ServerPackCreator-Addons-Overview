<template>
  <q-layout :class="$q.dark.isActive ? 'background_dark' : 'background'" view="hHh Lpr lff">
    <q-header :class="$q.dark.isActive ? 'header_dark' : 'header_normal'" elevated>
      <q-toolbar class="shadow-5 toolbar">

        <img
          alt="ServerPackCreator Addons Overview Logo"
          src="~assets/icon.png"
          style="width: 42px; height: 42px"
        />

        <q-toolbar-title><b>ServerPackCreator Addons Overview</b></q-toolbar-title>

        <q-separator style="margin-left: 5px; margin-right: 5px;"/>

        <q-btn
          :icon="this.$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
          class="q-mr-xs"
          dense
          @click="toggleDarkMode()">
          <q-tooltip :disable="this.$q.platform.is.mobile">
            {{ this.$q.dark.isActive ? 'Deactivate Dark Mode' : 'Activate Dark Mode' }}
          </q-tooltip>
        </q-btn>

        <q-separator style="margin-left: 5px; margin-right: 5px;"/>

        <q-btn
          :icon="this.$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          class="q-mr-xs"
          dense
          v-if="!this.$q.platform.is.mobile"
          @click="this.$q.fullscreen.toggle()">
          <q-tooltip :disable="this.$q.platform.is.mobile">
            {{ this.$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Toggle Fullscreen' }}
          </q-tooltip>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height full-width">
            <q-scroll-area class="full-height full-width page">
              <div
                id="particles-js"
                :class="this.$q.dark.isActive ? 'dark_gradient' : 'normal_gradient'"
              />
              <router-view/>
            </q-scroll-area>
          </div>
        </div>
      </q-page>
    </q-page-container>

    <q-footer class="footer shadow-5" elevated height-hint="50">
      <q-toolbar>
        <a href="https://www.griefed.de/#/about" rel="noreferrer noopener" target="_blank">
          <q-btn flat stretch>
            <span class="has-inline-color" style="color:#c0ffee">Site Notice & About</span>
          </q-btn>
        </a>
        <a href="https://www.griefed.de/#/privacy" rel="noreferrer noopener" target="_blank">
          <q-btn flat stretch>
            <span class="has-inline-color" style="color:#c0ffee">Privacy</span>
          </q-btn>
        </a>
        <q-toolbar-title></q-toolbar-title>
        Copyright © {{year}} Griefed.de
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { tsParticles } from 'tsparticles';

export default defineComponent({
  name: "MainLayout",

  setup() {
    let year = new Date().getFullYear();
    let options = {
      "fpsLimit": 30,
      "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#325358", "#C0FFEE", "#31CCEC", "#6A1A78"]
        },
        "shape": {
          "type": ["circle", "triangle", "edge", "polygon"],
          "stroke": {
            "width": 0,
            "color": ["#325358", "#C0FFEE", "#31CCEC", "#6A1A78"]
          },
          "polygon": {
            "nb_sides": 6
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "size_min": 0.1,
            "sync": false
          }
        },
        "links": {
          "enable": true,
          "distance": 150,
          "color": "#C0FFEE",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "right",
          "random": true,
          "straight": false,
          "outModes": {
            "default": "out",
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          },
          "bounce": false
        },
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": ["bubble", "grab"]
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 200,
            "size": 4,
            "duration": 5,
            "opacity": 1,
            "speed": 0.1
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    };
    return {
      viewInfo: ref(false),
      year,
      options
    }
  },
  methods : {
    toggleDarkMode() {
      this.$q.dark.toggle();
      this.$q.cookies.set('dark.isActive', this.$q.dark.isActive);
    }
  },
  mounted() {
    this.$q.dark.set(this.$q.cookies.get('dark.isActive'));
    tsParticles.load("particles-js", this.options);
  }

});
</script>

<!--suppress CssReplaceWithShorthandSafely -->
<style>

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

.toolbar {
  border-bottom: #c0ffee 1px solid;
}

.page {
  background-image: url("~assets/background.webp");
  background-repeat: repeat;
  background-attachment: fixed;
}

.background {
  background: #fff8eb;
}

.background_dark {
  background: #a1a1a1;
}

.header_normal {
  background: url("~assets/tile.webp");
  background-repeat: repeat-x;
  background-color: linear-gradient(
    150deg,
    rgb(50, 83, 88) 15%,
    #76cead 70%);
}

.header_dark {
  background: url("~assets/tile.webp");
  background-repeat: repeat-x;
  background-color: linear-gradient(
    200deg,
    rgb(26, 44, 39) 15%,
    #0b3c6a 70%);
}

.footer {
  border-top: #c0ffee 1px solid;
  background: url("~assets/tile.webp");
  background-repeat: repeat-x;
  background-color: linear-gradient(
    150deg,
    rgb(50, 83, 88) 15%,
    #76cead 70%);
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

</style>
