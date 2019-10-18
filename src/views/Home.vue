<template>
  <div class="home">

    <!-- STATIC CONTENT SECTION -->
    <section class="content-section">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <div class="col-content top">
              <h1 class="theme_h1"> Contacts </h1>
            </div>  <!-- COL CONTENT WITH PADDING TOP -->
          </b-col>
          <b-col sm="12" md="6">
            <div class="col-content bottom">
              <b-row>
                <b-col cols="12">
                  <div>
                    <h2 class="theme_h2"> GMS Headquarters </h2>
                  </div>
                </b-col>
                <b-col xl="7" lg="12">
                  <div>
                    <p class="theme_p"> Global Message Services Ukraine LLC </p>
                    <p class="theme_p"> Bundestrasse 5 / 3rd Floor </p>
                    <p class="theme_p"> 6300 Zug </p>
                    <p class="theme_p"> Switzerland </p>
                    <p class="theme_phone"> +41 41 544 62 00 </p>
                  </div>
                </b-col>
                <b-col xl="5" lg="12">
                  <div>
                    <p class="theme_p"> Email </p>
                    <p> 
                      <a href="mailto:info@gms-worldwide.com" class="theme_link_red">info@gms-worldwide.com</a> 
                    </p>
                    <p class="theme_p"> Send message </p>
                    <p> 
                      <a href="viber://chat?number=+41415446200" class="theme_link_red">Viber us</a> 
                    </p>
                    <p class="theme_p"> Send form </p>
                    <p> 
                      <a href="#" v-scroll-to="'#contact-form'" class="theme_link_red">Contact us</a> 
                    </p>
                  </div>
                </b-col>
              </b-row>
            </div>  <!-- COL CONTENT WITH PADDING-BOTTOM -->
          </b-col>
          <b-col sm="12" md="6">
            <div class="col-content bottom">
              <h2 class="theme_h2"> Technical support 24/7 </h2>
              <div>
                <p class="theme_p">
                  GMS understand that it can be hard to follow all new technologies. We regulary provide for all our clients educational training to make your operators business earn more and better though our best practices. 
                </p>
                <p class="theme_phone"> +41 41 544 62 00 </p>
              </div>
            </div>  <!-- COL CONTENT -->
          </b-col>
        </b-row>
      </b-container>
    </section>  <!-- CONTENT SECTION -->
    <!--END OF STATIC CONTENT -->

    <section class="content-section gray">
      <b-container fluid>
        <b-row align-v="center">
          <b-col lg="6" md="12">
            <div class="col-content top bottom">
              <h2 class="theme_h2">Our Offices</h2>
              <div class="bootstrap-tabs">
                <tabs/>  <!-- TABS COMPONENT -->
              </div>  <!-- BOOTSTRAP TABS -->
            </div>  <!-- COL CONTENT WITH TOP & BOTTOM PADDING-->
          </b-col>
          <b-col lg="6" md="12">
            <div class="google-map">
              <google-map/>
            </div>  <!-- GOOGLE MAP -->
          </b-col>
        </b-row>
      </b-container>
    </section> <!-- CONTENT SECTION -->

    <section class="content-section green">
      <b-container fluid>
        <b-row class="full-vh-height">
          <b-col sm="12">
            <div class="col-content top-full-width">
              <h2 class="theme_h2 contact_heading">
                Contact Us
              </h2>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="col-content bottom">
              <div class="contact-form" id="contact-form">
                <contact-form />
              </div>  <!-- CONTACT FORM -->
            </div>  <!-- COL CONTENT -->
          </b-col>
          <b-col lg="6" align-self="start">
            <div class="col-content bottom">
              <p class="theme_p color-dark">
                Please tell us more about your request and give us info about your company and country
              </p>
            </div>  <!-- COL CONTENT -->
          </b-col>
        </b-row>
      </b-container>
    </section> <!-- CONTENT SECTION, FULL VIEWPORT HEIGHT SECTION-->

  </div>  <!-- HOME -->
</template>

<script>
import Tabs from '@/components/tabs.vue'
import GoogleMap from '@/components/map.vue'
import ContactForm from '@/components/form.vue'

export default {
  name: 'home',
  components: {
    Tabs,
    ContactForm,
    GoogleMap
  }
}
</script>
