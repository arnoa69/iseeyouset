<script setup>
  import { ref } from 'vue';
  import CookieBanner from './components/cookies/CookieBanner.vue'
  import ManageCookieBanner from './components/cookies/ManageCookieBanner.vue'
  import PolicyBanner from './components/cookies/PolicyBanner.vue'
  import { posthogModule } from './plugins/posthog'
  import { useI18n } from "vue-i18n";
  import Layout from './components/Layout.vue';

  const { t } = useI18n();  
  const isModalOpen = ref(false);
  const iframeLink = ref('');

  const openModal = (payload) => {
    if (window.location.hostname === 'localhost') {
    iframeLink.value = "http://localhost:8083/?type=" + payload.message;
  } else {
      iframeLink.value = "https://flowform.verladerampenprofi.de/?type=" + payload.message;
  } 
    isModalOpen.value = true;
  }
  
  const closeModal = () => {
    isModalOpen.value = false
  };

  // show banner depending on posthog opt in or out
  const showBanner = ref(!(posthogModule.posthog.has_opted_out_capturing() || posthogModule.posthog.has_opted_in_capturing()));

  const showConfigBanner = ref(false)

  const showPolicyBanner = ref(false)

</script>

<template>

      <Layout />

      <CookieBanner 
        v-if="showBanner" 
        @hideBanner="showBanner = false" 
        @showManageBanner="showConfigBanner = true" 
        @showPolicyBanner="showPolicyBanner = true" />

      <ManageCookieBanner 
        v-if="showConfigBanner" 
        @hideConfigBanner="showConfigBanner = false" 
        @hideBothBanner="showBanner = false, showConfigBanner = false" />

      <PolicyBanner 
        v-if="showPolicyBanner"
        @hide-policy-banner="showPolicyBanner = false" />

       <div v-if="isModalOpen" class="modal cinematic-modal show" :style="{display: isModalOpen ? 'block' : 'none'}" >
        <div class="modal-header">
          <h5 class="modal-title">{{ t('modal.title') }}</h5>
          <!-- Add close icon here if needed -->
        </div>
        <div class="modal-content">
          <iframe :src="iframeLink" frameborder="0" class="modal-iframe"></iframe>
        </div>
        <div class="modal-footer">
          <button @click="closeModal" type="button" class="btn btn-secondary">{{ t('modal.close-button') }}</button>
        </div>
      </div>

</template>

<style scoped>
.cinematic-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
}

.cinematic-modal .modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
  padding: 20px;
  border-radius: 10px;
  width: 89%;
  height: 79%;
}

.modal-iframe {
  width: 100%;
  height: calc(100% - 100px); 
  border: 0;
  border-radius: 18px;
  flex: 1;
}

.modal-header {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: white;
  border: 0;
}

.modal-title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 7%;
}

.modal-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #000;
  padding: 10px;
  text-align: right;
  border: 0;
}

.btn-secondary {
  background-color: #fff;
  color: #000;
  border: none;
}

.leave-icon {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 999;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  padding: 10px;
}
</style>
<!--
<style scoped>
  /* Modal Styles */
  .modal {
    position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white; /* Set the background color as per your design */
  display: flex;
  flex-direction: column;
}

.top-bar {
  background-color: black;
  height: 20px; /* Adjust the height as needed */
}

.modal-header {
  background-color: #000000;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.modal-header .close-modal {
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  margin-right: 20px;
}

.modal-header h2 {
  margin-left: 15px;
  font-size:20px;
}

.close-modal {
  font-size: 26px;
  cursor: pointer;
}


.modal-iframe {
  width: 100%;
  height: calc(100% - 100px); 
  border: 0;
  flex: 1;
  border-radius: 25px;
  background-color: #291EA5;
}

.footer {
  background-color: black;
  height: 20px; /* Adjust the height as needed */
}

.left-line, .right-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 15px; /* Adjust the thickness as needed */
  background-color: black;
}

.left-line {
  left: 0;
}

.right-line {
  right: 0;
}

.close-text {
  font-size: 18px;
}

@media (max-width: 576px) {
  .modal-header h2 {
    font-size: 20px;
  }
  .close-text {
    display: none;
    
  }
}
</style>
-->