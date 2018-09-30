<template>
    <div>
        <section class="hero-section" :style="{'background-image': '../assets/images/contact.jpeg'}">
            <h1>Contact Us</h1>
        </section> 
        <section>
            <div class="container">
                <div class="row py-5">
                    <div class="col-md-6 text-left">
                        <h2 class="mb-4">Let's Talk</h2>
                        <div class="contact-method mb-4">
                            <i class="fa fa-phone-volume"></i>
                            <br>
                            <a href="tel:5555555555">(555) 555-5555</a>
                        </div>
                        <div class="contact-method mb-4">
                            <i class="fa fa-envelope-open"></i>
                            <br>
                            <a href="mailto:test@test.com">contact@bicycles.com</a>
                        </div>
                        <div class="contact-method">
                            <i class="fa fa-map-marker-alt"></i>
                            <br>
                            <a href="#" @click.prevent>10 Street Name, <br>
                            City Name, Country, Zip Code
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6 text-left">
                        <div class="alert alert-success" role="alert" :style="{'display': showConfirmationMessage ? 'block' : 'none'}">
                        Thank you for your message! 
                        </div>
                        <form @submit.prevent="handleFormSubmit">
                            <div class="form-group">
                                <label for="contactName">Name</label>
                                <input type="text" class="form-control" 
                                required
                                v-model="formFields.name"
                                id="contactName" >
                            </div>
                            <div class="form-group">
                                <label for="contactEmail">Email</label>
                                <input type="email" class="form-control" 
                                required
                                v-model="formFields.email"
                                id="contactEmail" >
                            </div>
                            <div class="form-group">
                                <label for="contactPhone">Phone</label>
                                <input type="text" class="form-control" 
                                required
                                v-model="formFields.phone"
                                id="contactPhone" >
                            </div>
                            <div class="form-group">
                                <label for="contactMessage">Message</label>
                                <textarea class="form-control" 
                                required
                                v-model="formFields.message"
                                id="contactMessage" rows="3"></textarea>
                            </div>
                            <button type="submit" 
                                class="btn btn-primary" :disabled="canSubmitForm">
                                Submit
                                </button>
                            </form>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5865.811016380635!2d26.10276176296939!3d44.42472261593343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff15d9a51e47%3A0x55d582fb478d9b9!2sPia%C8%9Ba+Unirii!5e0!3m2!1sro!2sro!4v1538327735865" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </section>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      formFields: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      showConfirmationMessage: false
    };
  },
  computed: {
    canSubmitForm() {
      return (
        this.formFields.name.length === 0 ||
        this.formFields.email.length === 0 ||
        this.formFields.phone.length === 0 ||
        this.formFields.message.length === 0
      );
    }
  },
  methods: {
    handleFormSubmit: function() {
      //show confirmation that message was sent
      this.showConfirmationMessage = true;
      //after 3 seconds hide confirmation message
      setTimeout(() => {
        this.showConfirmationMessage = false;
      }, 3000);
      //reset form fileds
      this.formFields.name = "";
      this.formFields.email = "";
      this.formFields.phone = "";
      this.formFields.message = "";
    }
  }
};
</script>

<style  scoped>
.contact-method i.fa {
  font-size: 26px;
  margin-left: 20px;
}

.contact-method a {
  color: black;
}

.contact-method a:hover {
  text-decoration: none;
}
.hero-section {
  background-image: url("../assets/images/contact.jpeg");
}
</style>


