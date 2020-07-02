<template>
  <div>
    <NavHeader />
    <div class="page-content game-background">
      <div class="container py-5">
        <div class="grid-2">
          <div class="grid-item">
            <h1 class="heading theme-color">Join our family</h1>
            <p class="min-heading mb-3">
              We are excited you choose to join us
            </p>
            <div class="box p-4">
              <img
                src="/static/images/signup-1.png"
                class="
              img-fluid mb-2"
                alt=""
              />
              <h2 class="secondary-heading mb-3">
                Personal Details
              </h2>
              <form @submit.prevent="nextStep">
                <div class="form-group">
                  <svg
                    class="form-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                  >
                    <path
                      d="M15.2564 14.6748C15.2564 11.7396 14.531 8.34671 11.6069 8.34671C10.7028 9.22841 9.47517 9.77529 8.11356 9.77529C6.75195 9.77529 5.52427 9.22841 4.62026 8.34671C1.69615 8.34671 0.970703 11.7396 0.970703 14.6748C0.970703 16.3043 2.04213 17.6324 3.34794 17.6324H12.8792C14.185 17.6324 15.2564 16.3043 15.2564 14.6748ZM12.3993 4.77529C12.3993 2.40921 10.4796 0.489571 8.11356 0.489571C5.74749 0.489571 3.82785 2.40921 3.82785 4.77529C3.82785 7.14136 5.74749 9.061 8.11356 9.061C10.4796 9.061 12.3993 7.14136 12.3993 4.77529Z"
                      fill="#9C9280"
                    />
                  </svg>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name..."
                  />
                </div>
                <div class="form-group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="form-icon"
                    width="21"
                    height="18"
                    viewBox="0 0 21 17"
                    fill="none"
                  >
                    <path
                      d="M20.6094 5.98511C20.2746 6.35341 19.8951 6.67707 19.4933 6.95609C17.6295 8.21725 15.7545 9.48957 13.9353 10.8065C12.9978 11.4985 11.8371 12.3467 10.6205 12.3467H10.6094H10.5982C9.3817 12.3467 8.22098 11.4985 7.28348 10.8065C5.46429 9.47841 3.58929 8.21725 1.73661 6.95609C1.32366 6.67707 0.944196 6.35341 0.609375 5.98511V14.8467C0.609375 15.8289 1.41295 16.6324 2.39509 16.6324H18.8237C19.8058 16.6324 20.6094 15.8289 20.6094 14.8467V5.98511ZM20.6094 2.70386C20.6094 1.72171 19.7946 0.918143 18.8237 0.918143H2.39509C1.20089 0.918143 0.609375 1.85564 0.609375 2.94939C0.609375 3.96502 1.73661 5.22618 2.52902 5.76189C4.25893 6.96725 6.01116 8.17261 7.74107 9.38913C8.46652 9.89136 9.6942 10.9181 10.5982 10.9181H10.6094H10.6205C11.5246 10.9181 12.7522 9.89136 13.4777 9.38913C15.2076 8.17261 16.9598 6.96725 18.7009 5.76189C19.683 5.08109 20.6094 3.95386 20.6094 2.70386Z"
                      fill="#9C9280"
                    />
                  </svg>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="email"
                  />
                </div>
                <div class="form-group">
                  <!-- class="form-icon" -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="form-icon"
                    width="14"
                    height="18"
                    viewBox="0 0 14 17"
                    fill="none"
                  >
                    <path
                      d="M4.25502 7.63243V5.48957C4.25502 3.91591 5.5385 2.63243 7.11217 2.63243C8.68583 2.63243 9.96931 3.91591 9.96931 5.48957V7.63243H4.25502ZM13.5407 8.70386C13.5407 8.11234 13.0608 7.63243 12.4693 7.63243H12.1122V5.48957C12.1122 2.74404 9.8577 0.489571 7.11217 0.489571C4.36663 0.489571 2.11217 2.74404 2.11217 5.48957V7.63243H1.75502C1.1635 7.63243 0.683594 8.11234 0.683594 8.70386V15.1324C0.683594 15.7239 1.1635 16.2039 1.75502 16.2039H12.4693C13.0608 16.2039 13.5407 15.7239 13.5407 15.1324V8.70386Z"
                      fill="#9C9280"
                    />
                  </svg>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="form-icon"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M2.25084 18.6324V15.4181H5.46512V18.6324H2.25084ZM6.17941 18.6324V15.4181H9.75084V18.6324H6.17941ZM2.25084 14.7039V11.1324H5.46512V14.7039H2.25084ZM6.17941 14.7039V11.1324H9.75084V14.7039H6.17941ZM2.25084 10.4181V7.20386H5.46512V10.4181H2.25084ZM10.4651 18.6324V15.4181H14.0366V18.6324H10.4651ZM6.17941 10.4181V7.20386H9.75084V10.4181H6.17941ZM14.7508 18.6324V15.4181H17.9651V18.6324H14.7508ZM10.4651 14.7039V11.1324H14.0366V14.7039H10.4651ZM6.53655 5.061C6.53655 5.25073 6.36914 5.41814 6.17941 5.41814H5.46512C5.27539 5.41814 5.10798 5.25073 5.10798 5.061V1.84671C5.10798 1.65698 5.27539 1.48957 5.46512 1.48957H6.17941C6.36914 1.48957 6.53655 1.65698 6.53655 1.84671V5.061ZM14.7508 14.7039V11.1324H17.9651V14.7039H14.7508ZM10.4651 10.4181V7.20386H14.0366V10.4181H10.4651ZM14.7508 10.4181V7.20386H17.9651V10.4181H14.7508ZM15.108 5.061C15.108 5.25073 14.9406 5.41814 14.7508 5.41814H14.0366C13.8468 5.41814 13.6794 5.25073 13.6794 5.061V1.84671C13.6794 1.65698 13.8468 1.48957 14.0366 1.48957H14.7508C14.9406 1.48957 15.108 1.65698 15.108 1.84671V5.061ZM19.3937 4.34671C19.3937 3.56546 18.7464 2.91814 17.9651 2.91814H16.5366V1.84671C16.5366 0.864571 15.733 0.0609989 14.7508 0.0609989H14.0366C13.0544 0.0609989 12.2508 0.864571 12.2508 1.84671V2.91814H7.96512V1.84671C7.96512 0.864571 7.16155 0.0609989 6.17941 0.0609989H5.46512C4.48298 0.0609989 3.67941 0.864571 3.67941 1.84671V2.91814H2.25084C1.46959 2.91814 0.822266 3.56546 0.822266 4.34671V18.6324C0.822266 19.4137 1.46959 20.061 2.25084 20.061H17.9651C18.7464 20.061 19.3937 19.4137 19.3937 18.6324V4.34671Z"
                      fill="#9C9280"
                    />
                  </svg>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Date of Birth"
                  />
                </div>
                <div class="form-group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="form-icon"
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                  >
                    <path
                      d="M8.88016 20.3003C14.5559 12.0723 15.6094 11.2278 15.6094 8.20386C15.6094 4.06171 12.2515 0.703857 8.10938 0.703857C3.96723 0.703857 0.609375 4.06171 0.609375 8.20386C0.609375 11.2278 1.66289 12.0723 7.33859 20.3003C7.71106 20.8384 8.50773 20.8383 8.88016 20.3003ZM8.10938 11.3289C6.38348 11.3289 4.98438 9.92975 4.98438 8.20386C4.98438 6.47796 6.38348 5.07886 8.10938 5.07886C9.83527 5.07886 11.2344 6.47796 11.2344 8.20386C11.2344 9.92975 9.83527 11.3289 8.10938 11.3289Z"
                      fill="#9C9280"
                    />
                  </svg>
                  <input type="text" class="form-control" placeholder="City" />
                </div>
                <div class="mb-3 d-flex align-items-center">
                  <div class="checkbox-box ml-3"></div>
                  <span>
                    I agree to
                    <router-link to="#" class="under-line theme-color">
                      Terms & Conditions
                    </router-link>
                  </span>
                </div>
                <router-link tag="button" :to="{name: 'Signup-2'}" class="btn-theme btn">Next Step</router-link>
              </form>
            </div>
            <p class="my-4">
              Already have an account ?
              <router-link to="#" class="font-weight-bold theme-color">
                Click here to login
              </router-link>
            </p>
          </div>
          <div class="grid-item">
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
.form-group .form-control {
  border: none;
  font-size: 18px;
  line-height: 21px;
  color: #9c9280;
  padding: 0;
  height: auto;
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

.btn-theme {
  background: linear-gradient(180deg, #fdb600 0%, #fd9800 100%);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 0px 4px 12px rgba(254, 171, 1, 0.3);
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  border: none;
  padding: 0.8rem 1.2rem;
  transition: all 0.3s ease-in;
  position: relative;
}

.btn-theme:hover,
.btn-theme:focus {
  transform: scale(1.1);
  border: none;
  box-shadow: none;
}

.btn-theme:active {
  transform: translateY(5px) scale(1);
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
</style>
