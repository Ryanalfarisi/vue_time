<template>
  <div>
    <div class="landing-navbar-scroll">
      <nav class="navbar navbar-expand-md ipad-navbar navbar-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="../../static/landing/images/vectors/MenuHamburger.png" alt />
        </button>

        <a class="navbar-brand ml-2" href="/">
          <img src="../../static/landing/images/Logo.png" class alt />
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item after-border">
              <a class="nav-item nav-link active" href="/#home-content">ראשי</a>
            </li>
            <li class="nav-item after-border">
              <a class="nav-item nav-link" href="/#about-content">עלינו</a>
            </li>
            <li class="nav-item after-border">
              <a class="nav-item nav-link" href="/#feature-content">פיצ׳רים</a>
            </li>
            <li class="nav-item after-border">
              <a class="nav-item nav-link" href="/#reviews-content">
                מה אומרים
                עלינו
              </a>
            </li>
            <li class="nav-item after-border">
              <a class="nav-item nav-link" href="/#businese">מאמנים ועסקים</a>
            </li>
            <li class="nav-item after-border">
              <a class="nav-item nav-link" href="/#contact-form-1">
                צור
                קשר
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div dir="rtl" class="pricing-page">
      <div class="pricing-page-content">
        <!-- pricing page header -->
        <header class="pricing-page-header">
          <div>
            <h2 class="pricing-page-main-text-style">Upgrade Your business to next level</h2>
            <p class="pricing-page-sentence">
              If your business relies on the events and games in your community, you need
              Teamtime. Here’s how businesses and professional trainers can grow with Teamtime.
            </p>
            <div class="duration-selector-btn">
              <span class="duration-name">monthly</span>
              <input type="checkbox" class="pricing-tag-selector-btn" />
              <span class="duration-name">yearly</span>
            </div>
          </div>
        </header>
        <!-- pricing page body cntent -->
        <div class="pricing-page-body">
          <div class="content-background">
            <div>
              <h2 style="margin:0px" class="pricing-page-main-text-style">Your Bussiness Type</h2>
            </div>
            <div class="bussiness-type-options">
              <div class="bussiness-type-btns">
                <p>Studio</p>
              </div>
              <div class="bussiness-type-btns">
                <p>Municipality</p>
              </div>
              <div class="bussiness-type-btns">
                <p>Gym</p>
              </div>
              <div class="bussiness-type-btns">
                <p>Sport Club</p>
              </div>
              <div class="bussiness-type-btns">
                <p>Club</p>
              </div>
              <div class="bussiness-type-btns">
                <p>Trainer</p>
              </div>
            </div>

            <!-- <table style="border-collapse: collapse;text-align: center; width: 100%; ">
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Popular</th>
                <th>Advance</th>
              </tr>
            </thead>
            <tbody>
              <tr class="" v-for="n in 8" :key="n">
                <td class="border">{{n}}</td>
                <td class="border">{{n}}</td>
                <td class="border">1</td>
                <td class="border"> 1</td>
              </tr>
            </tbody>
            </table>-->
            <div class="show-on-desktop">
              <div class="facilities-part">
                <div class="all-facilities-part first-child padding-for-price">
                  <h3>
                    <br />
                  </h3>
                  <p class="pricing-table-values text-right" v-for="n in 8" :key="n">ישדוח רוזחמ</p>
                </div>
                <div
                  @mouseenter="chng_active_state"
                  @click="clickActiveState = 1"
                  :class="clickActiveState === 1 ?' hoverEffect basic-facilities-part pricing-box-shadow padding-for-price active-state':' hoverEffect basic-facilities-part pricing-box-shadow padding-for-price'"
                >
                  <div>
                    <h3 class="price-table-header margin-top-bottom">Basic</h3>
                    <p class="pricing-table-values" v-for="n in 8" :key="n">Zeeshan</p>
                    <h3
                      v-show="clickActiveState === 1"
                      class="highlight-box-bg-color margin-top-bottom"
                    >Order Now</h3>
                  </div>
                </div>
                <div
                  @click="clickActiveState = 2"
                  :class="clickActiveState === 2 ?'hoverEffect popular-facilities-part pricing-box-shadow padding-for-price active-state':'hoverEffect popular-facilities-part pricing-box-shadow padding-for-price'"
                >
                  <div>
                    <h3 class="price-table-header margin-top-bottom">popular</h3>
                    <p class="pricing-table-values" v-for="n in 8" :key="n">limited</p>

                    <h3
                      v-show="clickActiveState === 2"
                      class="highlight-box-bg-color margin-top-bottom"
                    >Order Now</h3>
                  </div>
                </div>
                <div
                  @mouseenter="chng_active_state"
                  @click="clickActiveState = 3"
                  :class="clickActiveState === 3 ?'hoverEffect advance-facilities-part pricing-box-shadow padding-for-price active-state':'hoverEffect advance-facilities-part pricing-box-shadow padding-for-price'"
                >
                  <div>
                    <h3 class="price-table-header margin-top-bottom">Advance</h3>
                    <p class="pricing-table-values" v-for="n in 8" :key="n">{{n}}</p>
                    <h3
                      v-show="clickActiveState === 3"
                      class="highlight-box-bg-color margin-top-bottom"
                    >Order Now</h3>
                  </div>
                </div>
              </div>
              <div class="pricing-tab facilities-part">
                <div class="first-child"></div>
                <div class="pricing-tab">
                  <strong>170</strong>
                </div>
                <div class="pricing-tab">
                  <strong>200</strong>
                </div>
                <div class="pricing-tab">
                  <strong>250</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="show-on-mobile">
          <div class="facilities-show-on-mobile">
            <div class="mobile-part-facilities mobile-facilities-basic">
              <div
                @mouseenter="chng_active_state"
                class="hoverEffect basic-facilities-part pricing-box-shadow padding-for-price active-state"
              >
                <div>
                  <h3 class="price-table-header margin-top-bottom">Basic</h3>
                  <p class="pricing-table-values flax-view" v-for="n in 8" :key="n">
                    <span>22</span>
                    <span>Zeeshan</span>
                  </p>
                  <h3
                    v-show="clickActiveState === 1"
                    class="highlight-box-bg-color margin-top-bottom"
                  >Order Now</h3>
                </div>
              </div>
              <div class="pricing-tab">
                <strong>250</strong>
              </div>
            </div>
            <div class="mobile-part-facilities mobile-facilities-popular">
              <div class="hoverEffect popular-facilities-part pricing-box-shadow padding-for-price">
                <div>
                  <h3 class="price-table-header margin-top-bottom">popular</h3>
                  <p class="pricing-table-values flax-view" v-for="n in 8" :key="n">
                    <span>limited</span>
                    <span>limited</span>
                  </p>

                  <h3
                    v-show="clickActiveState === 2"
                    class="highlight-box-bg-color margin-top-bottom"
                  >Order Now</h3>
                </div>
              </div>
              <div class="pricing-tab">
                <strong>250</strong>
              </div>
            </div>
            <div class="mobile-part-facilities mobile-facilities-advance">
              <div
                @mouseenter="chng_active_state"
                class="hoverEffect advance-facilities-part pricing-box-shadow padding-for-price"
              >
                <div>
                  <h3 class="price-table-header margin-top-bottom">Advance</h3>
                  <p class="pricing-table-values flax-view" v-for="n in 8" :key="n">
                    <span>limited</span>
                    <span>limited</span>
                  </p>
                  <h3
                    v-show="clickActiveState === 3"
                    class="highlight-box-bg-color margin-top-bottom"
                  >Order Now</h3>
                </div>
              </div>
              <div class="pricing-tab">
                <strong>250</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="question-answer-boxes">
          <h1 class="pricing-page-main-text-style">Questions And Answers</h1>
          <div class="question-box" v-for="n in 5" :key="n">
            <div @click="show_hide" class="question-title row">
              <span class="col-10">question 1</span>
              <span class="col-2">
                <i class="fa fa-angle-down" style="font-weight:bold;"></i>
              </span>
            </div>
            <div class="answer-box-of-question row" style="display:none">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam temporibus porro, minus
              facilis rem nulla excepturi, aliquam adipisci, quas fugiat expedita voluptatem fugit at necessitatibus
              possimus ratione est?
            </div>
          </div>
        </div>-->
        <h1 class="heading py-4">Questions and Answers</h1>

        <div class="container">
          <div id="accordion">
            <div class="card mb-2" v-for="(n , index) in 6" :key="index">
              <div class="card-header text-right" id="headingOne">
                <h5
                  class="mb-0 d-flex align-items-center justify-content-between"
                  data-toggle="collapse"
                  :data-target="'#collapse' + index"
                  aria-expanded="true"
                  :aria-controls="'collapse'  + index"
                >
                  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, est!?</span>
                  <span class="icon">
                    <img src="static/arrow.png" alt />
                  </span>
                </h5>
              </div>

              <div :id="'collapse'  + index" class="collapse" data-parent="#accordion">
                <div
                  class="card-body"
                >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- pricing page footer -->

        <!-- footer part -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      basicPriceingTab: true,
      popularPriceingTab: true,
      advancePriceingTab: true,
      clickActiveState: 1
    };
  },
  methods: {
    chng_active_state(e) {
      if (
        e.target.classList.contains("price-table-header") ||
        e.target.classList.contains("pricing-table-values") ||
        e.target.classList.contains("highlight-box-bg-color")
      ) {
        if (e.target.parentElement.classList.contains("active-state")) {
          e.target.parentElement.classList.remove("active-state");
        } else {
          e.target.parentElement.classList.add("active-state");
        }
      }
    },
    show_hide(e) {
      var answer_box = e.target.nextElementSibling;
      if (answer_box.style.display == "none") {
        answer_box.style.transition = "all 1.5s";
        answer_box.style.display = "block";
      } else {
        answer_box.style.transition = "all 1.5s";
        answer_box.style.display = "none";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading {
  color: #71695a;
  font-weight: bold;
  font-size: 2.8rem;
  line-height: 127.5%;
}

.pricing-page {
  font-family: Rubik;
  font-style: normal;

  color: #71695a;
}

.pricing-page-main-text-style {
  font-weight: 900;
  font-size: 48px;
  line-height: 127.5%;
  text-shadow: 0px 2px 5px #71695a;
  text-align: center;
}

.pricing-page-sentence {
  width: 60%;
  font-style: normal;
  font-weight: normal;
  margin: 0 auto;
  justify-content: center;
  font-size: 18px;
  line-height: 164%;
}
@media (max-width: 720px) {
  .pricing-page-sentence {
    width: 100%;
    font-style: normal;
    font-weight: normal;
    margin: 0 auto;
    justify-content: center;
    font-size: 18px;
    line-height: 164%;
  }
}
.pricing-page-header {
  width: 100%;
  height: 950px;
  background-image: url("./../../static/price-list.png");
  box-shadow: inset 0px 0px 10px 500px rgba(255, 255, 255, 0.5);
  background-size: 125% 100%;
  padding-top: 140px;
  text-align: center;
}

.pricing-page-body {
  padding: 5% 9%;
}

.pricing-page-body {
  text-align: center;
  color: #71695a;
  background: #ffffff;
  box-shadow: 0px 0px 130px rgba(0, 0, 0, 0.07);
  border-radius: 0px 200px 0px 0px;
  margin-top: -200px;
  /* padding: 30px; */
}

.bussiness-type-options {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 0 15px;
}

.bussiness-type-options div p {
  border: 4px solid #fdb600;
  background: #ffffff;
  height: 40px;
  box-shadow: 0px 0px 130px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  width: 140px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.01em;
  padding: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.facilities-part {
  display: flex;
  justify-content: space-around;
}

.facilities-part div.pricing-box-shadow,
.facilities-part div.pricing-tab {
  width: 22%;
}

.facilities-part > .first-child {
  width: 15%;
}

.border {
  border-left: 1px solid #fdb600;
  border-right: 1px solid #fdb600;
}

.pricing-box-shadow {
  background: #ffffff;
  box-shadow: 0px 0px 130px rgba(0, 0, 0, 0.07);
  border-radius: 20px;
}

.price-table-header {
  background: linear-gradient(3.14deg, #eaeaea 3.46%, #ffffff 94.16%);
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
  padding: 10px 0px;
}

.margin-top-bottom {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.active-state {
  border: 1px solid #fdb600;
}

.active-state .highlight-box-bg-color {
  background: #fdb600 !important;
  color: #fff !important;
  border-radius: 0px 0px 20px 20px !important;
  padding: 10px 0px !important;
}

.active-state .price-table-header {
  background: linear-gradient(180deg, #fdb600 0%, #fd9800 100%) !important;
  color: #ffffff !important;
  border-radius: 20px 20px 0px 0px !important;
  padding: 10px 0px !important;
}

.pricing-tab {
  padding-top: 8px;
}

.pricing-tag-selector-btn {
  position: relative;
  height: 45px;
  -webkit-appearance: none;
  width: 110px;
  background: #fff;
  border: 1px solid #fdb600;
  border-radius: 5px;
  outline: none;
  transition: all 1s;
}

.pricing-tag-selector-btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 43px;
  width: 55px;
  background: linear-gradient(180deg, #fdb600 0%, #fd9800 100%);
  border-radius: 5px 0px 0px 5px;
}

.pricing-tag-selector-btn:checked[type="checkbox"]::before {
  right: -1px;
  border-radius: 0px 5px 5px 0px;
}

.hoverEffect:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

.duration-selector-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  padding-top: 30px;
}

.duration-name {
  font-size: 24px;
}

.text-right {
  text-align: right !important;
}

.padding-for-price {
  margin: 10px 0px;
}

.float-left {
  position: relative;
  left: 0;
  right: 88%;
}

.answer-box-of-question {
  transition: all 0.8s ease;
  font-size: 19px;
  box-shadow: 0px 2px 5px #eeeeee;
  padding: 15px 10px;
  line-height: 1.5;
}

.question-title {
  /* border-bottom: 1px solid #888; */
  padding: 10px;
  font-size: 22px;
  font-weight: normal;
  box-shadow: 0px 0px 5px #eeeeee;
  border-radius: 10px;
}

.question-answer-boxes {
  background: #fff;
  color: #71695a;
  padding: 1% 9% 5% 9%;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
  .slide-fade-leave-to

  /* .slide-fade-leave-active below version 2.1.8 */
 {
  transform: translateX(10px);
  opacity: 0;
}

.question-box {
  margin: 10px;
}

.ques-ans-heading {
  color: #71695a;
  font-weight: 900 !important;
  text-align: center;
  letter-spacing: 0.01em !important;
  font-size: 40px !important;
}

.show-on-mobile {
  /* width: 110%; */
  height: 500px;
  /* border: 1px solid red; */
  overflow-x: scroll;
  padding: 20px;
  background: #fff;
}

.facilities-show-on-mobile {
  display: flex;
  width: 200%;
}

.mobile-part-facilities {
  height: 300px;
  width: 45%;
  margin: 0 15px;
  text-align: center;
  /* border: 1px solid green; */
}

.flax-view {
  display: flex;
  justify-content: space-around;
}

@media (max-width: 768px) {
  .landing-navbar-scroll {
    direction: ltr;
  }

  ul.navbar-nav {
    background: #fff;
  }

  .navbar-dark .navbar-nav .nav-link,
  .navbar-dark .navbar-nav .active > .nav-link,
  .navbar-dark .navbar-nav .nav-link.active,
  .navbar-dark .navbar-nav .nav-link.show,
  .navbar-dark .navbar-nav .show > .nav-link {
    color: #333;
  }
}

@media (max-width: 720px) {
  .show-on-desktop {
    display: none;
  }
}
@media (min-width: 720px) {
  .show-on-mobile {
    display: none;
  }
}

ul.navbar-nav {
  padding: 0;
}

/* ---------------------------------------------------------------- */

.navbar-dark .navbar-nav .nav-link,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .show > .nav-link {
  color: #fff;
}
</style>
