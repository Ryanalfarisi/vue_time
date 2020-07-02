<template>
  <div>
    <NavHeader />
    <div class="page-content game-background">
      <div class="container py-5">
        <div class="grid-2">
          <div class="grid-item">
            <h1 class="heading theme-color">Join our family </h1>
            <p class="min-heading mb-3">
              We are excited you choose to join us
            </p>
            <div class="box p-4">
            <div class="list-data-preorder">
                <div class="w-100">
                    <div class="list-preorder orange position-relative active-orange">
                        <div class="title-preorder-list" >
                            <div class="rounded-list border-orange active-orange">
                                <i class="fa fa-check orange_checklist" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div class="list-preorder orange  position-relative">
                        <div class="title-preorder-list" >
                            <div class="rounded-list border-orange active-orange"></div>
                        </div>
                    </div>
                    <div class="list-preorder orange position-relative preorder-end">
                        <div class="title-preorder-list" >
                            <div class="rounded-list border-orange"></div>
                        </div>
                    </div>
                </div>
            </div>
              <h2 class="secondary-heading mb-3">
                Personal Details <span class="t-second-black">(optional)</span>
              </h2>
            <div class="row mx-0">
                <div class="col-lg-12 text-right">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wrapper_btn_photo pt-4 text-center">
                            <img src="/static/images/holder_img.png" alt="">
                            <p class="t-orange fs-14 mt-2">Add photo</p>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-6 m-auto">
                            <div class="">
                                <div class="d-inline-block rotate bg-orange align-middle my-1 ml-2 px-2 py-1">
                                    <img src="/static/images/rotate_left.png" alt="">
                                </div>
                                <p class="d-inline-block align-middle my-1">Rotate left</p>
                            </div>
                            <div class="">
                                <div class="d-inline-block rotate bg-orange align-middle my-1 ml-2 px-2 py-1">
                                    <img src="/static/images/rotate_right.png" alt="">
                                </div>
                                <p class="d-inline-block align-middle my-1">Rotate right</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-12 mt-3">
                    <div class="row">
                        <div class="col-lg-8 col-md-7 col-8 px-0">
                            <div class="form-group w-100">
                                <i class="fa fa-phone fa-rotate-90 form-icon" aria-hidden="true"></i>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Phone number..."
                                />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5 col-4">
                            <router-link tag="button" :to="{name: 'Signup-2'}" class="btn-theme btn">Verify</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-12 mt-3">
                    <div class="row">
                        <div class="col-lg-8 col-md-12 col-8 px-0 mb-3">
                            <input  v-for="n in 5"
                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            type="number"
                            maxlength="1"
                            class="otp_input px-2 text-center fs-24 mx-2 form-control-noborder align-middle d-inline-block" :key="n" />
                        </div>
                        <div class="col-lg-4 col-md-12 col-4 mb-3 px-0">
                            <i class="fa fa-spinner fa-pulse fa-3x fa-fw t-orange"></i>
                        </div>
                         <span>If you don’t get the code, pleased <router-link to="#" class="under-line theme-color">click here</router-link>
                  </span>
                    </div>
                </div>
                <div class="col-lg-12 col-12 mt-3 text-left">
                    <button class="btn-theme-white btn">Skip</button>
                    <button class="btn-theme btn mr-3">Next step</button>
                </div>
            </div>
            </div>
          </div>
          <div class="grid-item py-5">
            <img
              src="/static/images/mob-main.png"
              class="img-fluid main-mob"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <footer class="games-footer">
      <p>Copyright © 2020 TeamTime | All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
export default {
  name: "Signup-1",
  components: {
   NavHeader
  },
  data() {
    return {};
  },
  methods: {
    nextStep() {}
  }
};
</script>

<style scoped>
.game-background {
  background: url(/static/images/games-background.png);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
.games-footer {
  background: linear-gradient(180deg, #fdb600 0%, #fd9800 100%);
  box-shadow: 0px 8px 20px rgba(254, 171, 1, 0.3);
  padding: 0.8rem 4rem;
}
.games-footer p {
  font-size: 18px;
  text-align: right;
  letter-spacing: 0.01em;
  font-family: Rubik;
  color: #ffffff;
}

.heading {
  font-size: 2rem;
}
.theme-color {
  color: #fd9800;
}
.secondary-heading {
  font-size: 1.6rem;
  font-weight: bold;
}
.min-heading {
  font-size: 18px;
  line-height: 21px;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  text-align: center;
  align-items: center;
}
.box {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #fff;
  text-align: right;
}
.form-group {
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  display: flex;
  padding: 0.7rem 0.3rem;
  align-items: center;
  width: 70%;
}
.form-group .form-control, .form-control-noborder {
  border: none;
  font-size: 18px;
  line-height: 21px;
  color: #9c9280;
  padding: 0;
  height: auto;
}
.form-control-noborder:focus {
    outline: none;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: none;
  outline: 0;
  box-shadow: none;
}

.form-group .form-icon {
  margin: 0 1rem;
}

.checkbox-box {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  width: 30px;
  height: 30px;
}

.under-line {
  text-decoration: underline;
}
.under-line:hover {
  color: #fd9800;
  font-weight: bold;
}

.main-mob {
  width: 80%;
}

@media (max-width: 991.98px) {
  .form-group {
    width: 100%;
  }
  .main-mob {
    width: 100%;
  }
}

@media (max-width: 768.98px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }
  .main-mob {
    width: 60%;
  }

  .games-footer {
    padding: 1rem;
  }
}
.wrapper_btn_photo {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    width: 118.51px;
    height: 119.51px;
}
.rotate {
    width:36px;
    height:36px;
    border-radius: 12px;
}
.otp_input {
    width: 43.87px;
    height:50.89px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    border:none;
    margin-top: 10px;
}
.step-bar {
    list-style: none;
}
.step-bar > li {
    display: inline-block;
    width:33%;
}
.list-data-preorder {
  margin-bottom: 20px;
}
.card-flex {
  display: flex;
}
.list-preorder {
  height: 10px;
  padding: 5px;
  width: 46%;
  display: inline-block;
}
.orange {
    border-top: 1px solid rgba(253, 152, 0, 0.45);
    border-bottom: 1px solid rgba(253, 152, 0, 0.45);
}
.active-orange {
    background: #fdb600 !important;
}
.title-preorder-list {
    text-align: center;
    position: absolute;
    right: -6px;
    top: -13px;
}
.rounded-list {
  height: 36px;
  width: 36px;
  margin: auto;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 100px;
  background: #fff;
}
.border-orange {
  border: 1px solid rgba(253, 152, 0, 0.45);
}
.preorder-end {
  width:0px !important;
}
.orange_checklist {
    color:white;
    padding-top:8px;
}
</style>
