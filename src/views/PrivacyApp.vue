<template>
  <div class="Home" style="width: 100%;">
    <div class="container">
      <div class="row mt-3">
        <div class="col d-flex justify-content-end align-items-center">
          <router-link to="/">
            <img id="logo" src="../assets/logo/logo.png" />
          </router-link>
        </div>
        <div class="col d-flex justify-content-end align-items-end">
          <select class="custom-select thai" v-model="lang">
            <!-- <option value="TH">ไทย</option> -->
            <option value="EN">English</option>
          </select>
        </div>
      </div>
      <hr />
      <div class="thai pl-3 pr-2 mb-5 ml-4 mr-4">
        <div v-if="lang === 'EN'">
          <h3 class="font-weight-bold">Privacy Policy For Mover Driver App</h3>
          <p class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            &emsp;&emsp;Mover Developer Inc. built the Mover Driver app as a free app. This SERVICE is provided by Mover Developer Inc.
            at no cost and is intended for use as is. This page is used to inform website visitors regarding our policies with the collection,
            use, and disclosure of Personal Information if anyone decided to use our Service.
            If you choose to use our Service, then you agree to the collection and use of information in relation with this policy.
            The Personal Information that we collect are used for providing and improving the Service. we will not use or share your information
            with anyone except as described in this Privacy Policy.
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Mover Driver,
            unless otherwise defined in this Privacy Policy.
          </p>
        </div>
        <div v-if="lang === 'EN'">
          <h5 class="mt-4 font-italic">Information Collection and Use</h5>
          <p class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            &emsp;&emsp;For a better experience while using our Service, we may require you to provide us with certain personally
            identifiable information including users name, address, location, camera and phone number. The information that we request is
            will be retained by us and used as described in this privacy policy. <br />
            The app does use third party services that may collect information used to identify you.
          </p>
        </div>
        <div v-if="lang === 'EN'">
          <h5 class="mt-4 font-italic">Log Data</h5>
          <p class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            &emsp;&emsp;We want to inform you that whenever you use our Service, in case of an error in the app we collect data and
            information (through third party products) on your phone called Log Data. This Log Data may include information such as
            your devices’s Internet Protocol (“IP”) address, device name, operating system version, configuration of the app when
            utilising our Service, the time and date of your use of the Service, and other statistics.
          </p>
        </div>
        <div v-if="lang === 'EN'">
          <h5 class="mt-4 font-italic">Cookies</h5>
          <p class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            &emsp;&emsp;Cookies are files with small amount of data that is commonly used an anonymous unique identifier.
            These are sent to your browser from the website that you visit and are stored on your devices’s internal memory. <br />
            This Services does not uses these “cookies” explicitly. However, the app may use third party code and libraries that use
            “cookies” to collection information and to improve their services. You have the option to either accept or refuse these cookies,
            and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
          </p>
        </div>
        <div v-if="lang === 'EN'">
          <h5 class="mt-4 font-italic">Service Providers</h5>
          <div class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            We may employ third-party companies and individuals due to the following reasons:
            <ul class="pl-2 pr-2 pl-sm-5 pr-sm-5">
              <li>
                To facilitate our Service;
              </li>
              <li>
                To provide the Service on our behalf;
              </li>
              <li>
                To perform Service-related services; or
              </li>
              <li>
                To assist us in analyzing how our Service is used.
              </li>
            </ul>
            We want to inform users of this Service that these third parties have access to
            your Personal Information. The reason is to perform the tasks assigned to them on our behalf.
            However, they are obligated not to disclose or use the information for any other purpose.
          </div>
        </div>
        <div v-if="lang === 'EN'">
          <h5 class="mt-4 font-italic">Security</h5>
          <p class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            &emsp;&emsp;We value your trust in providing us your Personal Information,
            thus we are striving to use commercially acceptable means of protecting it. But remember that
            no method of transmission over the internet, or method of electronic storage is 100% secure and reliable,
            and we cannot guarantee its absolute security.
          </p>
        </div>
        <div v-if="lang === 'EN'">
          <h5 class="mt-4 font-italic">Links to Other Sites</h5>
          <p class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            &emsp;&emsp;This Service may contain links to other sites. If you click on a third-party link,
            you will be directed to that site. Note that these external sites are not operated by us.
            Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over,
            and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </div>
        <div v-if="lang === 'EN'">
          <h5 class="mt-4 font-italic">Children’s Privacy</h5>
          <p class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            &emsp;&emsp;This Services do not address anyone under the age of 15. We do not knowingly collect
            personal identifiable information from children under 15. In the case We discover that a child under 15
            has provided us with personal information, we immediately delete this from our servers.
            If you are a parent or guardian and you are aware that your child has provided us with personal information,
            please contact us so that we will be able to do necessary actions.
          </p>
        </div>
        <div v-if="lang === 'EN'">
          <h5 class="mt-4 font-italic">Children’s Privacy</h5>
          <p class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            &emsp;&emsp;We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically
            for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on this page.
          </p>
        </div>
        <div v-if="lang === 'EN'">
          <h5 class="mt-4 font-italic">Contact Us</h5>
          <p class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            &emsp;&emsp;If you have any questions or suggestions about our Privacy Policy, do not hesitate to <a href="mailto:yora46@gmail.com">contact us.</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      isAccept: false,
      lang: 'EN'
    }
  }
}
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  width: 100%;
}
.lang-control {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 10px 0 10px 0;
}
.custom-select {
  font-size: 10pt;
  width: 6rem;
}
#logo {
  width: 50px;
}
</style>
