<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <iq-card body-class="chat-page p-0">
          <template v-slot:body>
            <div class="chat-data-block">
              <b-row>
                <b-col lg="3" class="chat-data-left scroller">
                  <div class="chat-search pt-3 pl-3">
                    <ToggleButton toggleShow="#user-detail-popup">
                      <template v-slot:media>
                        <img :src="user.image" alt="chat-user" class="avatar-60 ">
                      </template>
                      <template v-slot:body>
                        <h5 class="mb-0">{{ user.name }}</h5>
                        <p class="m-0">{{ user.role }}</p>
                      </template>
                    </ToggleButton>
                    <ToggleContent id="user-detail-popup" body-class="text-left">
                      <template v-slot:media>
                        <img :src="user.image" alt="avatar">
                      </template>
                      <template v-slot:title>
                        <div class="user-name mt-4"><h4>{{ user.name }}</h4></div>
                          <div class="user-desc"><p>{{ user.role }}</p></div>
                      </template>
                      <template v-slot:body>
                        <h5 class="mt-4 mb-4">About</h5>
                          <p>It is long established fact that a reader will be distracted bt the reddable.</p>
                          <h5 class="mt-3 mb-3">Status</h5>
                          <ul class="user-status p-0">
                            <li class="mb-1"><i class="ri-checkbox-blank-circle-fill text-success pr-1"></i><span>Online</span></li>
                            <li class="mb-1"><i class="ri-checkbox-blank-circle-fill text-warning pr-1"></i><span>Away</span></li>
                            <li class="mb-1"><i class="ri-checkbox-blank-circle-fill text-danger pr-1"></i><span>Do Not Disturb</span></li>
                            <li class="mb-1"><i class="ri-checkbox-blank-circle-fill text-light pr-1"></i><span>Offline</span></li>
                          </ul>
                      </template>
                    </ToggleContent>
                    <div class="chat-searchbar mt-4">
                      <div class="form-group chat-search-data m-0">
                        <input type="text" class="form-control round" id="chat-search" placeholder="Search" v-model="search">
                        <i class="ri-search-line" />
                      </div>
                    </div>
                  </div>
                  <div class="chat-sidebar-channel scroller mt-4 pl-3">
                    <tab-nav :pills="true" :vertical="true" class="iq-chat-ui" id="chat-list-data">
                      <tab-nav-items :id="`v-pills--d-0`"
                                     href="#v-pills-default"
                                     :ariaControls="`v-pills-d-0`"
                                     role="tab">
                        <template v-slot:title>
                          <b-button variant="primary" block>Video Call</b-button>
                        </template>
                      </tab-nav-items>
                      <template v-for="(item,index) in filteredList">
                        <tab-nav-items :key="index"
                                       :id="`v-pills-${item.id}`"
                                       href="#v-pills-home"
                                       :ariaControls="`v-pills-${item.id}`"
                                       role="tab">
                          <template v-slot:title>
                            <ChatItem :item="item" />
                          </template>
                        </tab-nav-items>
                      </template>
                    </tab-nav>
                  </div>
                </b-col>

                <div class="col-lg-9 chat-data p-0 chat-data-right" :style="`background: url(${require('../../../assets/images/page-img/100.jpg')}) no-repeat scroll center center;background-size: cover;`">
                  <tab-content id="v-pills-tabContent">
                    <tab-content-item :active="true" id="v-pills-default" aria-labelled-by="v-pills-default">
                      <template>
                        <div v-if="startCall">
                          <VideoCall />
                        </div>
                        <div v-else>
                          <ToggleButton :mini-toggle="true" :close-button="false" toggleShow="#chat-user-detail-popup" mediaClass="chat-user-profile">
                            <template v-slot:media>
                            </template>
                            <template v-slot:body>
                            </template>
                          </ToggleButton>
                          <div class="chat-start">
                            <span class="iq-start-icon text-primary"><i class="ri-vidicon-line" /></span>
                            <div class="mt-4">
                              <b-button variant="primary iq-waves-effect" size="lg" v-b-modal.invite >Invite Room</b-button>
                              <b-button variant="primary iq-waves-effect ml-3" v-b-modal.join size="lg">Join Room</b-button>
                              <b-modal id="invite" centered title="Invite Room" ref="modal">
                                <p class="my-2">
                                  <b-input-group class="mt-3">
                                    <b-input-group-prepend>
                                      <b-button variant=" link iq-bg-primary iq-waves-effect" v-clipboard:copy="channel" @click="copyText">Copy</b-button>
                                    </b-input-group-prepend>
                                    <b-form-input v-model="channel"></b-form-input>
                                    <b-input-group-append>
                                      <b-button variant="primary" @click="generate">Generate</b-button>
                                    </b-input-group-append>
                                  </b-input-group>
                                </p>
                                <template v-slot:modal-footer>
                                  <b-button variant=" iq-bg-primary" @click="$bvModal.hide('invite')">Cancel</b-button>
                                  <b-button variant="primary" @click="handleJoin" :disabled="channel === ''">Start Call</b-button>
                                </template>
                              </b-modal>
                              <b-modal id="join" centered title="Join Room">
                                <p class="my-2">
                                  <b-form-input v-model="channel"></b-form-input>
                                </p>
                                <template v-slot:modal-footer>
                                  <b-button variant=" iq-bg-primary" @click="$bvModal.hide('join')">Cancel</b-button>
                                  <b-button variant="primary" @click="handleJoin" :disabled="channel === ''">Join Call</b-button>
                                </template>
                              </b-modal>
                            </div>
                          </div>
                        </div>
                      </template>
                    </tab-content-item>
                    <tab-content-item id="v-pills-home" aria-labelled-by="v-pills-default">
                      <template>
                        <div class="chat-head">
                          <header class="d-flex justify-content-between align-items-center bg-white pt-3 pr-3 pb-3">
                            <ToggleButton :mini-toggle="true" :close-button="false" toggleShow="#chat-user-detail-popup" mediaClass="chat-user-profile">
                              <template v-slot:media>
                                  <img :src="checkUser(5, 'image')" alt="avatar" class="avatar-50 ">
                                  <span class="avatar-status"><i class="ri-checkbox-blank-circle-fill text-success" /></span>
                              </template>
                              <template v-slot:body>
                                <h5 class="mb-0">{{ checkUser(5, 'name') }}</h5>
                              </template>
                            </ToggleButton>
                            <ToggleContent id="chat-user-detail-popup" bodyClass="chatuser-detail" center>
                              <template v-slot:media>
                                <img :src="checkUser(5,'image')" alt="avatar">
                              </template>
                              <template v-slot:title>
                                <div class="user-name mt-4"><h4>{{ checkUser(5, 'name') }}</h4></div>
                                <div class="user-desc"><p>Cape Town, RSA</p></div>
                              </template>
                              <template v-slot:body>
                                <div class="row">
                                  <div class="col-6 col-md-6 title">Nik Name:</div>
                                  <div class="col-6 col-md-6 text-right">{{ checkUser(5, 'name') }}</div>
                                </div><hr>
                                <div class="row">
                                  <div class="col-6 col-md-6 title">Tel:</div>
                                  <div class="col-6 col-md-6 text-right">072 143 9920</div>
                                </div><hr>
                                <div class="row">
                                  <div class="col-6 col-md-6 title">Date Of Birth:</div>
                                  <div class="col-6 col-md-6 text-right">July 12, 1989</div>
                                </div><hr>
                                <div class="row">
                                  <div class="col-6 col-md-6 title">Gender:</div>
                                  <div class="col-6 col-md-6 text-right">Male</div>
                                </div><hr>
                                <div class="row">
                                  <div class="col-6 col-md-6 title">Language:</div>
                                  <div class="col-6 col-md-6 text-right">Engliah</div>
                                </div>
                              </template>
                            </ToggleContent>
                            <div class="chat-header-icons d-flex">
                              <a class="iq-bg-primary iq-waves-effect mr-1 chat-icon-phone"><i class="ri-phone-line mr-0" /></a>
                              <a class="iq-bg-primary iq-waves-effect mr-1 chat-icon-video"><i class="ri-vidicon-line  mr-0" /></a>
                              <a class="iq-bg-primary iq-waves-effect mr-1 chat-icon-delete"><i class="ri-delete-bin-line  mr-0" /></a>
                              <b-dropdown id="dropdownMenuButton2" right variant="none iq-bg-primary iq-waves-effect remove-toggle">
                                <template v-slot:button-content>
                                  <i class="ri-more-2-line mr-0" />
                                </template>
                                <b-dropdown-item href="#"><i class="fa fa-thumb-tack mr-0" aria-hidden="true"></i> Pin to top</b-dropdown-item>
                                <b-dropdown-item href="#"><i class="fa fa-trash-o mr-0" aria-hidden="true"></i> Delete chat</b-dropdown-item>
                                <b-dropdown-item href="#"><i class="fa fa-ban mr-0" aria-hidden="true"></i> Block</b-dropdown-item>
                              </b-dropdown>
                            </div>
                          </header>
                        </div>
                        <div class="chat-content scroller">
                          <template v-for="(item,index) in chat">
                            <div class="chat" :key="index" v-if="!item.me">
                              <div class="chat-user">
                                <a class="avatar m-0">
                                  <img :src="checkUser(item.userId, 'image')" alt="avatar" class="avatar-35 " />
                                </a>
                                <span class="chat-time mt-1">{{ item.time }}</span>
                              </div>
                              <div class="chat-detail">
                                <div class="chat-message">
                                  <p>{{ item.text }}</p>
                                </div>
                              </div>
                            </div>
                            <div class="chat chat-left" :key="index" v-else>
                              <div class="chat-user">
                                <a class="avatar m-0">
                                  <img :src="checkUser(item.userId,'image')" alt="avatar" class="avatar-35 " />
                                </a>
                                <span class="chat-time mt-1">{{ item.time }}</span>
                              </div>
                              <div class="chat-detail">
                                <div class="chat-message">
                                  <p>{{ item.text }}</p>
                                </div>
                              </div>
                            </div>
                          </template>
                        </div>
                        <div class="chat-footer p-3 bg-white">
                          <form class="d-flex align-items-center"  action="javascript:void(0);">
                            <div class="chat-attagement d-flex">
                              <a href="javascript:void(0)"><i class="fa fa-smile-o pr-3" aria-hidden="true"></i></a>
                              <a href="javascript:void(0)"><i class="fa fa-paperclip pr-3" aria-hidden="true"></i></a>
                            </div>
                            <input type="text" class="form-control mr-3" placeholder="Type your message">
                            <button type="submit" class="btn btn-primary d-flex align-items-center p-2"><i class="fa fa-paper-plane-o" aria-hidden="true"></i><span class="d-none d-lg-block ml-1">Send</span></button>
                          </form>
                        </div>
                      </template>
                    </tab-content-item>
                  </tab-content>
                </div>
              </b-row>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import * as Cookies from 'js-cookie'
import { mapGetters } from 'vuex'
import { Users, MessagesUser1 } from '../../../FackApi/api/chat'
import { core } from '../../../config/pluginInit'
import Chat from '../../../store/modules/Chat'
import User from '../../../Model/User'
import ChatItem from '../../../components/Chat/ChatItem'
import ToggleButton from '../../../components/Chat/ToggleButton'
import ToggleContent from '../../../components/Chat/ToggleContent'
const VideoCall = () => import('./VideoCall')

export default {
  name: 'Index',
  components: { ChatItem, VideoCall, ToggleButton, ToggleContent },
  beforeMount () {
    this.$store.registerModule('Chat', Chat)
  },
  mounted () {
    core.index()
    if (Cookies.get('channel') !== undefined) {
      this.handleJoin()
    }
  },
  beforeDestroy () {
    this.$store.unregisterModule('Chat')
  },
  data () {
    return {
      search: '',
      user: new User({ id: 1, name: 'Anna Sthesia', role: 'Developer', image: require('../../../assets/images/user/user-08.jpg'), isActive: true }),
      usersList: Users,
      chat: MessagesUser1,
      joinBtn: false,
      channel: 'DemoRoom',
      baseMode: 'avc',
      transcode: 'interop',
      attendeeMode: 'video',
      videoProfile: '480p_4'
    }
  },
  computed: {
    filteredList () {
      return this.usersList.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    ...mapGetters({
      startCall: 'Chat/videoCallState'
    })
  },
  methods: {
    checkUser (item, type) {
      const user = this.usersList.find(user => user.id === item)
      let final
      if (user !== undefined) {
        switch (type) {
          case 'name':
            final = user.name
            break
          case 'image':
            final = user.image
            break
          case 'role':
            final = user.role
            break
        }
        return final
      }
      return require('../../../assets/images/user/user-05.jpg')
    },
    generate () {
      this.channel = core.random(24)
    },
    copyText () {
      core.Snackbar({ text: 'Copied' })
    },
    handleJoin () {
      Cookies.set('channel', this.channel)
      Cookies.set('baseMode', this.baseMode)
      Cookies.set('transcode', this.transcode)
      Cookies.set('attendeeMode', this.attendeeMode)
      Cookies.set('videoProfile', this.videoProfile)
      this.$store.dispatch('Chat/videoCallAction', true)
    }
  }
}
</script>
<style>
  .remove-toggle::after{
    content: unset;
  }
</style>
