<template>
  <div class="d-flex align-items-center">
    <div id="sidebar-toggle" v-if="miniToggle" @click="toggleMini" class="sidebar-toggle">
      <i class="ri-menu-3-line"></i>
    </div>
    <div class="avatar chat-profile mr-3" :class="mediaClass"  @click="toggleContent">
      <slot name="media" />
    </div>
    <div class="chat-caption">
      <slot name="body" />
    </div>
    <button type="submit" class="close-btn-res p-3" @click="closePannle" v-if="closeButton"><i class="ri-close-fill" /></button>
  </div>
</template>
<script>
export default {
  name: 'ToggleButton',
  props: {
    toggleShow: { type: String, default: '' },
    mediaClass: { type: String, default: '' },
    miniToggle: { type: Boolean, default: false },
    closeButton: { type: Boolean, default: true }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggleContent () {
      let selector = document.querySelector(this.toggleShow)
      selector.classList.add('show')
    },
    toggleMini () {
      let elements = document.querySelector('.chat-data-left')
      elements.classList.add('show')
    },
    closePannle () {
      let elements = document.querySelector('.chat-data-left')
      elements.classList.remove('show')
    },
    checkToggle (type) {
      if (this.link === type) {
        switch (type) {
          case 'media':
          case 'body':
            this.active = false
            break
        }
      } else {
        this.active = true
      }
    }
  }
}
</script>
