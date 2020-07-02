<template>
  <div id="landing-page">
    <div class="landing-inner">
      <div class="navbar-box-outer">
        <div
          :class="
            pagescroll == false ? 'landing-navbar' : 'landing-navbar-scroll'
          "
        >
          <nav class="navbar navbar-expand-md ipad-navbar">
            <router-link class="navbar-brand ml-2" to="#">
              <img
                src="../../static/landing/images/Logo.png"
                class="landing-logo"
                alt
              />
            </router-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img
                src="../../static/landing/images/vectors/MenuHamburger.png"
                alt
              />
            </button>
            <div
              class="collapse navbar-collapse my-nav mt-2"
              id="navbarNavAltMarkup"
            >
              <div
                class="navbar-nav"
                v-scroll-spy-active="{ class: 'active' }"
                v-scroll-spy-link
              >
                <div class="after-border">
                  <router-link
                    class="nav-item nav-link active"
                    to="#home-content"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    @click.prevent="scrollTo('#home-content')"
                    >ראשי</router-link
                  >
                </div>
                <div class="after-border">
                  <router-link
                    class="nav-item nav-link"
                    to="#about-content"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    @click.prevent="scrollTo('#about-content')"
                    >עלינו</router-link
                  >
                </div>
                <div class="after-border">
                  <router-link
                    class="nav-item nav-link"
                    to="#feature-content"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    @click.prevent="scrollTo('#feature-content')"
                    >פיצ׳רים</router-link
                  >
                </div>
                <div class="after-border">
                  <router-link
                    class="nav-item nav-link"
                    to="#reviews-content"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    @click.prevent="scrollTo('#reviews-content')"
                  >
                    מה אומרים עלינו
                  </router-link>
                </div>

                <div class="after-border">
                  <router-link
                    class="nav-item nav-link"
                    to="#businese"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    @click.prevent="scrollTo('#businese')"
                    >מאמנים ועסקים</router-link
                  >
                </div>
                <div class="after-border">
                  <router-link
                    class="nav-item nav-link"
                    to="#contact-form-1"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    @click.prevent="scrollTo('#contact-form-1')"
                  >
                    צור קשר
                  </router-link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="body-content" v-scroll-spy="{ offset: 45 }">
        <div id="home-content">
          <!-- page header start -->
          <div class="landpage-header-bg"></div>
          <div class="text-center heade-content">
            <!-- landing-page navbar -->
            <div class="page-header" data-aos="fade-down">
              <!-- page header content -->
              <div class="container">
                <div class="row ipad-view">
                  <div
                    class="col-md-7 header-title-text text-center text-md-right"
                  >
                    <p class="header-main-title">
                      <!-- <strong style="font-weight:900; text-shadow:0px 1px,1px 0px,1px 0px;">ניהול</strong>
                      קבוצות
                      ספורט-->
                      <strong
                        style="font-weight:900; text-shadow:0px 1px,1px 0px,1px 0px;"
                        >ניהול</strong
                      >
                      קבוצות ומפגשים בצורה
                      <strong
                        style="font-weight:900; text-shadow:0px 1px,1px 0px,1px 0px;"
                        >נוחה ושיתופית</strong
                      >
                    </p>
                    <p style="letter-spacing: normal;">
                      כושר, מוזיקה, בישולים מדיטציות ועוד
                    </p>
                    <p class="third-heading text-center">
                      זמינים בחנויות האפליקציות
                    </p>
                    <div
                      class="row justify-content-center justify-content-md-start"
                    >
                      <div class="col-6">
                        <router-link to="#">
                          <img
                            src="../../static/landing/images/vectors/appstore.png"
                            class="download-main-img hoverme"
                            alt
                          />
                        </router-link>
                      </div>
                      <div class="col-6">
                        <router-link to="#">
                          <img
                            src="../../static/landing/images/vectors/googleplay.png"
                            class="download-main-img hoverme"
                            alt
                          />
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-5 pt-5 pt-md-5">
                    <div class="row text-center justify-content-center">
                      <img
                        class="header-mobile-pic header-mobile-pic-1 mt-n3"
                        src="../../static/landing/images/landing_page_images/header2.png"
                        alt
                        style="margin-left: -30px;"
                      />
                      <img
                        class="header-mobile-pic"
                        src="../../static/landing/images/landing_page_images/header1.png"
                        alt
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about-content" style>
          <div class="padding-top">
            <div class="container">
              <div class="no-margin m-0 mx-xl-5 p-0 px-xl-5">
                <div class="no-margin m-0 mx-xl-5 p-0 px-xl-5">
                  <div class="page-app-intro text-center">
                    <p
                      class="pb-0 mb-n1 mt-5"
                      style="color:#FDB600; font-weight:bold;"
                    >
                      קצת על האפליקציה שלנו
                    </p>
                    <strong data-aos="fade-down" class="teamtime-intro-heading">
                      ברוכים הבאים ל-TeamTime
                    </strong>

                    <p class="p-3 px-md-5" v-html="footer_data.about_us">
                      <br />אז איך זה עובד? 👇
                    </p>
                  </div>
                  <div
                    data-aos="fade-down"
                    class="text-center page-app-video-intro"
                  >
                    <!-- <video
                      class="w-100 vedio-title"
                      poster="../../static/omri_ki_bachi.png"
                      controls
                    >
                      <source src="../../static/landing/videos/display_video.mp4" type="video/mp4" />
                      <source src="../../static/landing/videos/display_video.mp4" type="video/ogg" />Your browser does not support the video tag.
                    </video>-->
                    <iframe
                      class="w-100 vedio-title"
                      src="https://www.youtube.com/embed/mPoyT69cwgc"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <div
                    data-aos="fade-down"
                    class="pt-5 page-app-games-list text-center"
                  >
                    <label class="p-3 game-title">מגוון תחומי עניין</label>
                    <!-- <div class="row teamtime-games px-md-5 justify-content-center">
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/running.png"
                          alt
                        />
                        <figcaption class="text-center game-name">ריצה / הליכה</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/football.png"
                          alt
                        />
                        <figcaption class="text-center game-name">כדורגל</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/swimming.png"
                          alt
                        />
                        <figcaption class="text-center game-name">שחייה</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/yoga.png"
                          alt
                        />
                        <figcaption class="text-center game-name">יוגה</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/gym.png"
                          alt
                        />
                        <figcaption class="text-center game-name">מכשירי כושר</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/cycling.png"
                          alt
                        />
                        <figcaption class="text-center game-name">רכיבה</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/diving.png"
                          alt
                        />
                        <figcaption class="text-center game-name">צלילה</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/baseball.png"
                          alt
                        />
                        <figcaption class="text-center game-name">טניס</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/bodybuilding.png"
                          alt
                        />
                        <figcaption class="text-center game-name">כושר קרבי</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/scakting.png"
                          alt
                        />
                        <figcaption class="text-center game-name">גלישה</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/basketball.png"
                          alt
                        />
                        <figcaption class="text-center game-name">כדורעף</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/badminton.png"
                          alt
                        />
                        <figcaption class="text-center game-name">סקוואש</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/football-1.png"
                          alt
                        />
                        <figcaption class="text-center game-name">כדורעף</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/boating.png"
                          alt
                        />
                        <figcaption class="text-center game-name">קיאקים</figcaption>
                      </figure>
                      <figure class="text-center sports-img-pic">
                        <img
                          class="game-vector"
                          src="../../static/landing/images/vectors/basketball-1.png"
                          alt
                        />
                        <figcaption class="text-center game-name">כדורסל</figcaption>
                      </figure>
                    </div>-->

                    <!-- services images -->

                    <div class="teamtime-games px-md-5">
                      <figure class="text-center">
                        <img
                          class="img-fluid"
                          src="../../static/landing/images/services/service-1.png"
                          alt
                        />
                        <figcaption class="text-center game-name">
                          אימוני כח
                        </figcaption>
                      </figure>
                      <figure class="text-center">
                        <img
                          class="img-fluid"
                          src="../../static/landing/images/services/service-2.png"
                          alt
                        />
                        <figcaption class="text-center game-name">
                          יוגה
                        </figcaption>
                      </figure>
                      <figure class="text-center">
                        <img
                          class="img-fluid"
                          src="../../static/landing/images/services/service-3.png"
                          alt
                        />
                        <figcaption class="text-center game-name">
                          אירובי
                        </figcaption>
                      </figure>
                      <figure class="text-center">
                        <img
                          class="img-fluid"
                          src="../../static/landing/images/services/service-4.png"
                          alt
                        />
                        <figcaption class="text-center game-name">
                          לימודי נגינה
                        </figcaption>
                      </figure>
                      <figure class="text-center">
                        <img
                          class="img-fluid"
                          src="../../static/landing/images/services/service-5.png"
                          alt
                        />
                        <figcaption class="text-center game-name">
                          הרצאות
                        </figcaption>
                      </figure>
                      <figure class="text-center">
                        <img
                          class="img-fluid"
                          src="../../static/landing/images/services/service-6.png"
                          alt
                        />
                        <figcaption class="text-center game-name">
                          לימוד שפות
                        </figcaption>
                      </figure>
                      <figure class="text-center">
                        <img
                          class="img-fluid"
                          src="../../static/landing/images/services/service-7.png"
                          alt
                        />
                        <figcaption class="text-center game-name">
                          אפיה
                        </figcaption>
                      </figure>
                      <figure class="text-center">
                        <img
                          class="img-fluid"
                          src="../../static/landing/images/services/service-8.png"
                          alt
                        />
                        <figcaption class="text-center game-name">
                          בישול
                        </figcaption>
                      </figure>
                      <figure class="text-center">
                        <img
                          class="img-fluid"
                          src="../../static/landing/images/services/service-9.png"
                          alt
                        />
                        <figcaption class="text-center game-name">
                          בגרויות
                        </figcaption>
                      </figure>
                      <figure class="text-center">
                        <img
                          class="img-fluid"
                          src="../../static/landing/images/services/service-10.png"
                          alt
                        />
                        <figcaption class="text-center game-name">
                          מפגשי להקות
                        </figcaption>
                      </figure>
                      <figure class="text-center">
                        <img
                          class="img-fluid"
                          src="../../static/landing/images/services/service-11.png"
                          alt
                        />
                        <figcaption class="text-center game-name">
                          מסיבות
                        </figcaption>
                      </figure>
                      <figure class="text-center">
                        <img
                          class="img-fluid"
                          src="../../static/landing/images/services/service-12.png"
                          alt
                        />
                        <figcaption class="text-center game-name">
                          מסיבות
                        </figcaption>
                      </figure>
                    </div>
                  </div>

                  <div class="app-download-links text-center">
                    <p
                      class="small pt-4"
                      style="color:#FDB600;font-size: 16px; font-weight: bold; line-height: 127.5%; letter-spacing: 0.01em;"
                    >
                      זמינים להורדה בחנויות האפליקציות
                    </p>
                    <div class="row justify-content-center">
                      <div data-aos="fade-down" class="col-9 col-md-4">
                        <img
                          class="ml-0 sports-download-img hoverme"
                          src="../../static/landing/images/vectors/appstore.png"
                          alt
                        />
                      </div>
                      <div data-aos="fade-down" class="col-9 col-md-4">
                        <img
                          class="mr-0 sports-download-img hoverme"
                          src="../../static/landing/images/vectors/googleplay.png"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="feature-content" style>
          <div class>
            <div class="w-container py-5 text-white">
              <div class="app-features app-feature-contents"></div>

              <div class="container features-content-box">
                <div style="padding-top:5rem; margin-top:4rem;">
                  <div class="row item-center">
                    <div
                      data-aos="fade-down"
                      class="col-md-4 order-1 order-md-2 text-center mt-n5 align-items-center justify-content-center"
                    >
                      <img
                        class="app-feature-mobile-pic"
                        src="../../static/landing/images/landing_page_images/features1.png"
                        alt
                      />
                    </div>

                    <div
                      data-aos="fade-down"
                      class="padding-p-0 order-3 order-md-1 col-md-4 mt-n3 mobile-display-none"
                    >
                      <div
                        v-for="(service, index) in services_list"
                        :key="index"
                        v-show="index <= 2"
                        :class="
                          index > 0
                            ? 'row align-items-center my-3'
                            : 'row align-items-center'
                        "
                      >
                        <div class="col text-right games-feature-description">
                          <strong>{{ service.title }}</strong>
                          <p v-html="service.description"></p>
                        </div>

                        <div class="justify-content-center">
                          <div
                            :class="
                              index === 2 || index === 1
                                ? 'app-features-svg-images mt-4'
                                : 'app-features-svg-images'
                            "
                          >
                            <img :src="baseUrl + service.image" alt />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      data-aos="fade-down"
                      class="col-md-4 order-2 order-md-3 mt-n2 mobile-display-none padding-p-0"
                    >
                      <div class="col d-inline-flex flex-column">
                        <div
                          v-for="(service, index) in services_list"
                          :key="index"
                          v-show="index > 2"
                          :class="
                            index > 3
                              ? 'row align-items-center mt-3'
                              : 'row align-items-center'
                          "
                        >
                          <div class="justify-content-center">
                            <div class="app-features-svg-images">
                              <img :src="baseUrl + service.image" alt />
                            </div>
                          </div>
                          <div
                            :class="
                              index === 1 || index == 2 || ipad_view == true
                                ? 'text-right games-feature-description mt-n5'
                                : 'col text-right games-feature-description'
                            "
                          >
                            <strong>{{ service.title }}</strong>
                            <p v-html="service.description"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- mobile display slider  -->

                  <!-- mobile display slider  -->

                  <div
                    id="carouselExampleIndicat"
                    class="carousel slide mt-5 desktop-display-none"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    <div class="carousel-inner">
                      <div
                        v-for="(service, index) in services_list"
                        :key="index"
                        :class="
                          index == 0
                            ? 'carousel-item justify-content-center active'
                            : 'carousel-item justify-content-center'
                        "
                      >
                        <div
                          class="card text-center align-center"
                          style="width: 18rem;"
                        >
                          <div
                            class="app-features-svg-images card-img text-center"
                          >
                            <img
                              :src="baseUrl + service.image"
                              class="card-img-top rounded"
                              alt="..."
                            />
                          </div>
                          <div class="card-body p-0 m-0">
                            <h5 class="card-title">{{ service.title }}</h5>
                            <p
                              class="card-text"
                              v-html="service.description"
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <router-link
                      class="carousel-control-prev next-item-icon"
                      to="#carouselExampleIndicat"
                      role="button"
                      data-slide="next"
                    >
                      <span class aria-hidden="true">
                        <img
                          src="../../static/landing/images/vectors/pre-icon.png"
                          alt
                        />
                      </span>
                      <span class="sr-only">Previous</span>
                    </router-link>
                    <router-link
                      class="carousel-control-next next-item-icon"
                      to="#carouselExampleIndicat"
                      role="button"
                      data-slide="prev"
                    >
                      <span class aria-hidden="true">
                        <img
                          src="../../static/landing/images/vectors/post-icon.png"
                          alt
                        />
                      </span>
                      <span class="sr-only">Next</span>
                    </router-link>
                    <br />
                    <br />
                    <br />
                    <ol class="carousel-indicators mt-5 pr-0">
                      <li
                        v-for="(service, index) in services_list"
                        :key="index"
                        :class="index == 0 ? ' active' : ''"
                        data-target="#carouselExampleIndicat"
                        data-slide-to="0"
                      ></li>
                    </ol>
                  </div>
                  <!-- mobile display slider  -->
                  <!-- mobile display slider  -->
                </div>
              </div>
            </div>
          </div>

          <div class="pb-5">
            <div class="my-5 pt-3 pt-md-5" style>
              <div class="padding-top mt-md-5">
                <div class="container">
                  <div
                    class="text-center d-flex justify-content-center features-mobile-pic-height"
                  >
                    <div
                      data-aos="fade-down"
                      data-aos-duration="1500"
                      class="col col-md-auto"
                    >
                      <img
                        class="app-feature-converstion"
                        src="../../static/landing/images/landing_page_images/L_conversation.png"
                        alt
                      />
                    </div>
                    <div
                      data-aos="flip-left"
                      class="col col-md-auto text-center"
                    >
                      <img
                        class="image-fluid app-feature-desktop"
                        src="../../static/landing/images/landing_page_images/form_sec_old.png"
                        alt
                      />
                    </div>

                    <div
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      class="col col-md-auto text-center"
                      style="margin-right:-60px; z-index: -1;"
                    >
                      <img
                        class="ml-3 ml-md-0 app-feature-converstion"
                        src="../../static/landing/images/landing_page_images/L_profile.png"
                        alt
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <!-- slider contents start -->
              <div
                class="mobile-display-none logo-list mw-100 overflow-hidden mt-md-4"
              >
                <div class="d-flex align-items-center justify-content-around">
                  <div class>
                    <router-link to="https://www.reefseacenter.co.il" target="_blank">
                      <img
                        src="../../static/landing/images/logo5.png"
                        alt
                        height="120px"
                        class="logo-images-setup"
                      />
                    </router-link>
                  </div>
                  <div class>
                    <router-link to="http://divemanta.co.il/" target="_blank">
                      <img
                        src="../../static/landing/images/logo3.png"
                        alt
                        class="logo-images-setup"
                        height="110px"
                      />
                    </router-link>
                  </div>
                  <div class>
                    <router-link to="https://www.suunto.co.il" target="_blank">
                      <img
                        src="../../static/landing/images/logo2.png"
                        alt
                        class="logo-images-setup"
                        height="65px"
                        style="margin-top: -30px;"
                      />
                    </router-link>
                  </div>
                  <div class>
                    <router-link to="https://www.dugit.co.il/" target="_blank">
                      <img
                        src="../../static/landing/images/text_logo2.png"
                        class="logo-images-setup"
                        alt
                      />
                    </router-link>
                  </div>
                  <div class>
                    <router-link to="https://www.ecotime.co.il" target="_blank">
                      <img
                        class="newLogo logo-images-setup"
                        src="../../static/landing/images/text_logo.png"
                        alt
                      />
                    </router-link>
                  </div>
                </div>
              </div>
              <!-- mobile display  -->
              <div
                id="logoSlider"
                class="logo-list carousel slide desktop-display-none"
                data-interval="false"
              >
                <div class="carousel-inner">
                  <div
                    class="carousel-item active text-center align-items-start"
                  >
                    <router-link to="https://www.suunto.co.il" target="_blank">
                      <img
                        src="../../static/landing/images/logo2.png"
                        style="padding:30px 0px;"
                        height="150"
                        width="250"
                        alt="..."
                      />
                    </router-link>
                  </div>
                  <div class="carousel-item text-center align-items-start">
                    <router-link to="http://divemanta.co.il/" target="_blank">
                      <img
                        src="../../static/landing/images/logo3.png"
                        class="mobile-logo-imges"
                        alt="..."
                      />
                    </router-link>
                  </div>
                  <div class="carousel-item text-center align-items-start">
                    <router-link to="https://www.dugit.co.il/" target="_blank">
                      <img
                        src="../../static/landing/images/text_logo2.png"
                        class="mobile-logo-imges"
                        alt="..."
                      />
                    </router-link>
                  </div>
                  <div class="carousel-item justify-content-center text-center">
                    <router-link to="https://www.reefseacenter.co.il" target="_blank">
                      <img
                        src="../../static/landing/images/logo5.png"
                        style="padding:20px 0px;"
                        height="150"
                        width="150"
                        alt="..."
                      />
                    </router-link>
                  </div>
                  <div class="carousel-item justify-content-center text-center">
                    <router-link to="https://www.ecotime.co.il" target="_blank">
                      <img
                        src="../../static/landing/images/text_logo.png"
                        class="mobile-logo-imges"
                        alt="..."
                      />
                    </router-link>
                  </div>
                </div>
                <router-link
                  class="carousel-control-prev"
                  to="#logoSlider"
                  role="button"
                  data-slide="next"
                  id="show_next_brand"
                >
                  <span aria-hidden="true">
                    <img
                      src="../../static/landing/images/vectors/pre-icon.png"
                      alt
                    />
                  </span>
                </router-link>
                <router-link
                  class="carousel-control-next"
                  to="#logoSlider"
                  role="button"
                  data-slide="prev"
                >
                  <span aria-hidden="true">
                    <img
                      src="../../static/landing/images/vectors/post-icon.png"
                      alt
                    />
                  </span>
                </router-link>
              </div>
              <!-- mobile display  -->
            </div>
          </div>
        </div>
        <div id="reviews-content">
          <div class="padding-top">
            <div class="container slider-bg-large">
              <div class="mt-4 pt-2 mobile-display-none">
                <div class="text-center pb-5">
                  <strong
                    class="text-secondary"
                    style="font-size: 36px; line-height: 162.69%; color:#71695A;"
                  >
                    מה אומרים עלינו
                  </strong>
                </div>
                <div class="d-flex justify-content-around pt-5 mw-100">
                  <div>
                    <img
                      class="user-slider-images"
                      :src="
                        baseUrl + customer_list[customer_slider_array[0]].image
                      "
                      alt
                    />
                  </div>

                  <div class="ml-5" style="transform: scale(1.5);">
                    <img
                      class="user-slider-images"
                      :src="
                        baseUrl + customer_list[customer_slider_array[1]].image
                      "
                      alt
                    />
                  </div>

                  <div class="user-image-slider" style="transform: scale(2);">
                    <img
                      class="user-slider-images"
                      :src="
                        baseUrl + customer_list[customer_slider_array[2]].image
                      "
                      alt
                    />
                  </div>

                  <div class="mr-5" style="transform: scale(1.5);">
                    <img
                      class="user-slider-images"
                      :src="
                        baseUrl + customer_list[customer_slider_array[3]].image
                      "
                      alt
                    />
                  </div>

                  <div>
                    <img
                      class="user-slider-images"
                      :src="
                        baseUrl + customer_list[customer_slider_array[4]].image
                      "
                      alt
                    />
                  </div>
                </div>
              </div>

              <div class="contianer p-5 i-pad-dislay-none">
                <div class="p-5 mobile-display-none">
                  <div
                    id="reviewsSlider"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active" data-interval="10000">
                        <div
                          class="card text-center align-center slider-card-detail"
                        >
                          <div class="right-quote quote">
                            <svg>
                              <path
                                xmlns="http://www.w3.org/2000/svg"
                                opacity="0.6"
                                d="M15.7118 4.57143C15.7118 2.44196 13.9841 0.714284 11.8546 0.714284H4.14035C2.01088 0.714284 0.283203 2.44196 0.283203 4.57143V12.2857C0.283203 14.4152 2.01088 16.1429 4.14035 16.1429H8.64035C9.70508 16.1429 10.5689 17.0067 10.5689 18.0714V18.7143C10.5689 21.5469 8.25865 23.8571 5.42606 23.8571H4.14035C3.43722 23.8571 2.85463 24.4397 2.85463 25.1429V27.7143C2.85463 28.4174 3.43722 29 4.14035 29H5.42606C11.0912 29 15.7118 24.3795 15.7118 18.7143V4.57143ZM33.7118 4.57143C33.7118 2.44196 31.9841 0.714284 29.8546 0.714284H22.1403C20.0109 0.714284 18.2832 2.44196 18.2832 4.57143V12.2857C18.2832 14.4152 20.0109 16.1429 22.1403 16.1429H26.6403C27.7051 16.1429 28.5689 17.0067 28.5689 18.0714V18.7143C28.5689 21.5469 26.2587 23.8571 23.4261 23.8571H22.1403C21.4372 23.8571 20.8546 24.4397 20.8546 25.1429V27.7143C20.8546 28.4174 21.4372 29 22.1403 29H23.4261C29.0912 29 33.7118 24.3795 33.7118 18.7143V4.57143Z"
                                fill="#EBE4D7"
                              />
                            </svg>
                          </div>
                          <div class="left-quote quote">
                            <svg>
                              <path
                                xmlns="http://www.w3.org/2000/svg"
                                opacity="0.6"
                                d="M18.2882 24.4286C18.2882 26.558 20.0159 28.2857 22.1454 28.2857L29.8597 28.2857C31.9891 28.2857 33.7168 26.558 33.7168 24.4286L33.7168 16.7143C33.7168 14.5848 31.9891 12.8571 29.8597 12.8571L25.3597 12.8571C24.2949 12.8571 23.4311 11.9933 23.4311 10.9286L23.4311 10.2857C23.4311 7.45313 25.7413 5.14286 28.5739 5.14286L29.8597 5.14286C30.5628 5.14286 31.1454 4.56027 31.1454 3.85714L31.1454 1.28571C31.1454 0.58259 30.5628 3.00491e-07 29.8597 3.61961e-07L28.5739 4.74361e-07C22.9088 9.69627e-07 18.2882 4.62054 18.2882 10.2857L18.2882 24.4286ZM0.288223 24.4286C0.288223 26.558 2.0159 28.2857 4.14537 28.2857L11.8597 28.2857C13.9891 28.2857 15.7168 26.558 15.7168 24.4286L15.7168 16.7143C15.7168 14.5848 13.9891 12.8571 11.8597 12.8571L7.35965 12.8571C6.29492 12.8571 5.43108 11.9933 5.43108 10.9286L5.43108 10.2857C5.43108 7.45313 7.74135 5.14286 10.5739 5.14286L11.8597 5.14286C12.5628 5.14286 13.1454 4.56027 13.1454 3.85714L13.1454 1.28572C13.1454 0.582591 12.5628 1.8741e-06 11.8597 1.93557e-06L10.5739 2.04797e-06C4.90876 2.54324e-06 0.288221 4.62054 0.288222 10.2857L0.288223 24.4286Z"
                                fill="#EBE4D7"
                              />
                            </svg>
                          </div>

                          <div class="card-body p-0 m-0">
                            <strong
                              class="card-title"
                              style="font-size: 24px;line-height: 127.5%; color:#71695A;"
                              >{{ customer_list[active_customer].name }}</strong
                            >
                            <p class="card-title" style="color:#fd9800;">
                              {{ customer_list[active_customer].title }}
                            </p>
                            <p
                              class="card-text"
                              style="color:#71695A; font-size:16px; letter-spacing: 0.01em;"
                              v-html="
                                customer_list[active_customer].description
                              "
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <label
                      class="carousel-control-prev"
                      to="#reviewsSlider"
                      role="button"
                      data-slide="prev"
                    >
                      <span>
                        <img
                          src="../../static/landing/images/vectors/previous.png"
                          class="hoverme"
                          @click="nextCustomer"
                          alt
                        />
                      </span>
                      <span class="sr-only">Previous</span>
                    </label>
                    <label
                      class="carousel-control-next"
                      to="#reviewSlider"
                      role="button"
                      data-slide="next"
                    >
                      <span>
                        <img
                          src="../../static/landing/images/vectors/next.png"
                          class="hoverme"
                          @click="prevCustomer"
                          alt
                        />
                      </span>
                      <span class="sr-only">Next</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- mobile display slider  -->
            <div class="mt-3">
              <div class="text-center mb-1 desktop-display-none">
                <strong
                  style="font-size: 30px;line-height: 162.69%;color:#71695A; font-weight: bold;"
                >
                  מה אומרים עלינו
                </strong>
              </div>

              <div
                id="carouselExampleIndicators"
                class="carousel slide desktop-display-none"
                data-interval="false"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div
                    v-for="(customer, index) in customer_list"
                    :class="
                      index == 0
                        ? 'carousel-item justify-content-center active'
                        : 'carousel-item justify-content-center'
                    "
                    :key="index"
                  >
                    <div
                      class="card text-center align-center"
                      style="width: 18rem;"
                    >
                      <div class="mobile-slider-users text-center w-100">
                        <img
                          :src="baseUrl + customer.image"
                          class
                          height="200"
                          width="200"
                          alt="..."
                        />
                      </div>
                      <div class="card-body p-0 m-0">
                        <strong
                          class="card-title"
                          style="font-size: 24px;line-height: 127.5%; color:#71695A;"
                          >{{ customer.name }}</strong
                        >
                        <p class="card-title">{{ customer.title }}</p>
                        <p
                          class="card-text"
                          style="color:#71695A; font-size:16px; letter-spacing: 0.01em;"
                          v-html="customer.description"
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
                <router-link
                  class="carousel-control-prev next-item-icon"
                  to="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span class aria-hidden="true">
                    <img
                      src="../../static/landing/images/vectors/previous.png"
                      alt
                    />
                  </span>
                  <span class="sr-only"></span>
                </router-link>
                <router-link
                  class="carousel-control-next next-item-icon"
                  to="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span class aria-hidden="true">
                    <img
                      src="../../static/landing/images/vectors/next.png"
                      alt
                    />
                  </span>
                  <span class="sr-only">Next</span>
                </router-link>
              </div>
              <ol class="carousel-indicators mt-5 pr-0 d-none">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="5"
                ></li>
              </ol>
            </div>
            <!-- mobile display slider  -->
          </div>
        </div>

        <div id="businese" style>
          <div class="padding-top pt-5 mt-3">
            <div class="w-container" style="position: relative;">
              <div class="form-section-draw"></div>
              <div class="container px-3 form-section-inner-content">
                <div class="row justify-content-center">
                  <div
                    class="col-12 col-lg-4 text-center align-self-center pt-md-5"
                  >
                    <img
                      class="form-sec-mobile-pic img-fluid"
                      src="../../static/landing/images/landing_page_images/form_sec.png"
                      alt
                    />
                  </div>
                  <div class="col-12 col-lg-8 text-right text-white">
                    <div
                      class="text-center text-md-right"
                      style="font-size:16px; letter-spacing: 0.01em;"
                    >
                      <strong class="d-block form-section-heading"
                        >עסקים ומאמנים</strong
                      >
                      <label for class="game-sec-lable"
                        >בואו להנות ממערכת ניהול מתקדמת</label
                      >
                      <p class="small w-100 w-md-75 fs-15">
                        המערכת שלנו תעזור לכם לנהל, לייעל ולהגדיל את מספר
                        הלקוחות בעסק שלכם
                      </p>
                    </div>

                    <div class="mobile-display-none">
                      <div
                        class="rounded-lg px-4 py-2"
                        style="background: rgba(0, 0, 0, 0.3);"
                      >
                        <div class="row">
                          <div
                            class="col-6"
                            v-for="(bs, i) in bussines_data"
                            :key="i"
                            v-show="i < 2"
                          >
                            <strong>
                              <img
                                src="../../static/landing/images/vectors/check.png"
                                alt
                              />
                              {{ bs.web_title }}
                            </strong>
                            <p>{{ bs.web_value }}</p>
                          </div>
                        </div>

                        <div class="row">
                          <div
                            class="col-6"
                            v-for="(bs, i) in bussines_data"
                            :key="i"
                            v-show="i >= 2 && i < 4"
                          >
                            <strong>
                              <img
                                src="../../static/landing/images/vectors/check.png"
                                alt
                              />
                              {{ bs.web_title }}
                            </strong>
                            <p>{{ bs.web_value }}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="cardCarousel"
                      class="slide carousel mt-5 desktop-display-none"
                    >
                      <ol class="carousel-indicators">
                        <li
                          v-for="(service, ind) in bussines_data"
                          :key="ind"
                          :class="ind == 0 ? 'active' : ''"
                          data-target="#cardCarousel"
                          data-slide-to="0"
                        ></li>
                      </ol>
                      <div
                        class="carousel-inner"
                        style="background: rgba(0, 0, 0, 0.25); padding: 20px 0px 45px 0px; border-radius: 16px;"
                      >
                        <div
                          v-for="(service, ind) in bussines_data"
                          :key="ind"
                          :class="
                            ind == 0
                              ? 'carousel-item active justify-content-center'
                              : 'carousel-item  justify-content-center'
                          "
                        >
                          <div
                            class="card text-center align-center"
                            style="width: 18rem;"
                          >
                            <div class="card-body p-0 m-0">
                              <h3 class="card-title">
                                <img
                                  src="../../static/landing/images/vectors/check.png"
                                  alt
                                />
                                {{ service.web_title }}
                              </h3>
                              <p class="card-text">{{ service.web_value }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <router-link
                        to="#cardCarousel"
                        class="carousel-control-next align-items-end"
                        data-slide="prev"
                      >
                        <span class aria-hidden="true">
                          <img
                            src="../../static/landing/images/vectors/next.png"
                            alt
                          />
                        </span>
                      </router-link>
                      <router-link
                        to="#cardCarousel"
                        class="carousel-control-prev align-items-end"
                        data-slide="next"
                      >
                        <span class aria-hidden="true">
                          <img
                            src="../../static/landing/images/vectors/previous.png"
                            alt
                          />
                        </span>
                      </router-link>
                    </div>
                    <div style="height:100px">
                      <div
                        class="text-center mb-3"
                        style="background-image:url('../../static/landing/images/paintFill.png');background-size:100% 100%"
                      >
                        <strong class="d-block game-price-tag">
                          להרשמה למכירה המוקדמת ולפרטים נוספים צרו קשר
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact-form-1" class="form-sec-padding-top container">
          <div data-aos="flip-left" class="align-center justify-content-center">
            <div class="col text-center">
              <strong
                class="text-white d-block"
                style="font-size: 24px; line-height: 127.5%;"
              >
                דברו איתנו
              </strong>
              <label
                class="text-white d-block"
                for
                style="font-size: 36px;line-height: 127.5%; font-weight: normal;"
              >
                אנחנו כאן לכל שאלה
              </label>
            </div>
            <form class="text-center m-auto form-width-control">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    v-model="contact_data.name"
                    class="form-control form-control-shadow"
                    id="inputEmail4"
                    placeholder="שם מלא..."
                  />
                </div>
                <div class="form-group col-md-6">
                  <input
                    v-model="contact_data.email"
                    type="text"
                    class="form-control form-control-shadow"
                    id="inputPassword4"
                    placeholder="טלפון/אימייל..."
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <input
                    v-model="contact_data.subject"
                    type="text"
                    class="form-control form-control-shadow"
                    id="inputAddress"
                    placeholder="נושא הפנייה..."
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 form-group">
                  <textarea
                    class="form-control form-control-shadow"
                    v-model="contact_data.message"
                    rows="9"
                    style="resize: none;"
                    id="exampleFormControlTextarea1"
                    placeholder="כתוב הודעה..."
                  ></textarea>
                </div>
              </div>
              <pulse-loader
                v-if="show_spinner_contact_us"
                :loading="true"
                :color="'#fd9800'"
              ></pulse-loader>
              <label
                v-else
                class="px-4 rounded-pill sign-up-button hoverme"
                @click="contactToAdmin"
              >
                שלח הודעה
              </label>
            </form>
            <h2 v-show="show_success_contact_us_msg" style="color:#27AE60">
              בקשתך נמצאת בטיפול, ניצור איתך קשר בהקדם
            </h2>
            <h5 v-show="contact_us_has_error" style="color:#EB5757">
              יש למלא את כל הפרטים
            </h5>
          </div>
        </div>
        <footer>
          <div>
            <div class="padding-top">
              <a
                href="#home-content"
                v-show="upButton"
                @click.prevent="scrollTo('#home-content')"
                class="back-to-top"
              >
                <img
                  class="hoverme"
                  src="../../static/landing/images/vectors/Group_90.png"
                  alt
                />
              </a>
              <!-- landing page footer part  -->

              <div class="jumbotron mt-5 mb-0 py-3 subm-form-outer">
                <div class="row justify-content-center">
                  <div class="my-2 my-lg-1">
                    <img
                      src="../../static/landing/images/vectors/signup_pic.png"
                      alt
                    />
                  </div>
                  <div class="mr-3">
                    <div v-show="show_subscribe_status">
                      <div
                        style="color:#9C9280;font-weight: bold;
                        font-size: 18px;
                        margin-right:10px;
                        line-height: 127.5%;
                        letter-spacing: 0.01em;
                        "
                      >
                        <svg
                          width="60"
                          height="40"
                          viewBox="0 0 64 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M63.1384 10.0268C63.1384 9.02232 62.7366 8.01785 62.0134 7.29464L56.5491 1.83035C55.8259 1.10714 54.8214 0.705355 53.817 0.705355C52.8125 0.705355 51.808 1.10714 51.0848 1.83035L24.7277 28.2277L12.9152 16.375C12.192 15.6518 11.1875 15.25 10.183 15.25C9.17857 15.25 8.17411 15.6518 7.45089 16.375L1.98661 21.8393C1.26339 22.5625 0.861607 23.567 0.861607 24.5714C0.861607 25.5759 1.26339 26.5804 1.98661 27.3036L16.5312 41.8482L21.9955 47.3125C22.7188 48.0357 23.7232 48.4375 24.7277 48.4375C25.7321 48.4375 26.7366 48.0357 27.4598 47.3125L32.9241 41.8482L62.0134 12.7589C62.7366 12.0357 63.1384 11.0312 63.1384 10.0268Z"
                            fill="#9C9280"
                          />
                        </svg>
                        תודה שנרשמת! מבטיחים לעדכן בכל מה שקורה
                      </div>
                    </div>

                    <form v-show="!show_subscribe_status">
                      <div class="form-row">
                        <div class="my-2 my-md-0 col-md-auto">
                          <input
                            type="text"
                            v-model="subscriber.full_name"
                            class="form-control mb-2 footer-form"
                            id="inlineFormInput"
                            placeholder="שם מלא..."
                          />
                        </div>
                        <div class="col-md-auto my-2 my-md-0">
                          <input
                            type="text"
                            v-model="subscriber.email"
                            class="form-control footer-form"
                            id="inlineFormInputGroup"
                            placeholder="אימייל..."
                          />
                        </div>
                        <div class="col-md-auto text-center my-2 my-md-0">
                          <pulse-loader
                            v-if="show_spinner"
                            :loading="true"
                            :color="'#fd9800'"
                          ></pulse-loader>
                          <label
                            v-else
                            style="padding: 7px;"
                            class="rounded-pill sign-up-button px-4 mb-2 hoverme"
                            @click="userSubscribe"
                          >
                            הרשם עכשיו
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div
                class="jumbotron mb-0 py-3 footer-social-bg text-white text-center"
              >
                <div class="mx-auto margin-classes-width">
                  <div
                    class="row justify-content-between justify-content-md-around mb-2 mx-md-4 f-grid"
                  >
                    <div
                      target="_blank"
                      class="footer-social-link-name youtube-link-color f-grid-item"
                      @click="socialRedirect(footer_data.youtube)"
                    >
                      Youtube
                      <i
                        style="margin:3px 5px 0px 0px; "
                        class="fab fa-youtube"
                      ></i>
                    </div>
                    <div
                      class="footer-social-link-name linkedin-link-color f-grid-item"
                      @click="socialRedirect(footer_data.linkdin)"
                    >
                      linkedIn
                      <i
                        style="margin:3px 5px 0px 0px;"
                        class="fab fa-linkedin"
                      ></i>
                    </div>
                    <div
                      class="footer-social-link-name facebook-link-color f-grid-item"
                      @click="socialRedirect(footer_data.facebook)"
                    >
                      Facebook
                      <i
                        style="margin:3px 5px 0px 0px;"
                        class="fab fa-facebook-square"
                      ></i>
                    </div>
                    <div
                      class="footer-social-link-name insta-link-color f-grid-item"
                      @click="socialRedirect(footer_data.instagram)"
                    >
                      Instagram
                      <i
                        style="margin:3px 5px 0px 0px;"
                        class="fab fa-instagram"
                      ></i>
                    </div>
                  </div>
                </div>
                <p>
                  Copyright © 2020 TeamTime | All rights reserved. |
                  <router-link
                    :to="{ name: 'PrivacyPolicy' }"
                    style="color:#fff"
                    >Privacy Policy</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import VueAos from "vue-aos";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

AOS.init({
  duration: 1200,
  disable: function() {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  }
});

export default {
  name: "Welcome",
  components: {
    PulseLoader
  },
  data() {
    return {
      show_success_contact_us_msg: false,
      contact_us_has_error: false,
      show_spinner_contact_us: false,
      show_subscribe_status: false,
      show_contact_us_status: false,
      show_spinner_contact_us: false,
      show_spinner: false,
      pagescroll: false,
      scrollspy: false,
      ipad_view: false,
      contact_data: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      upButton: false,
      start_customer: 0,
      active_customer: 2,
      customer_list: [
        {
          name: "",
          image: ""
        },
        {
          name: "",
          image: ""
        },
        {
          name: "",
          image: ""
        },
        {
          name: "",
          image: ""
        },
        {
          name: "",
          image: ""
        }
      ],

      footer_data: {
        facebook:
          "https://www.facebook.com/profile.php?id=100006163980551&ref=bookmarks",
        instagram: "",
        linkdin: "",
        youtube: "",
        about_us:
          "מאמן? מאמנת? אנו נספק לך פתרונות לניהול ויעול הזמן ולהעברת כספים בצורה מאובטחת וקלילה. אצלנו ניתן למצוא פרטנרים במרחק הקלקה בהתאם לתחום הספורט האהוב עלייך. יצרנו פלטפורמה המחברת בין קבוצות ספורט חובבניות ומקצועיות לבין מתאמנים."
      },
      bussines_data: [
        { web_title: "", web_value: "" },
        { web_title: "", web_value: "" },
        { web_title: "", web_value: "" },
        { web_title: "", web_value: "" }
      ],
      services_list: [],

      baseUrl: window.serverAddress,
      subscriber: {
        full_name: "",
        email: ""
      },

      customer_slider_array: [0, 1, 2, 3, 4],
      contact_error: false
    };
  },
  mounted() {
    if (window.innerWidth === 772 && window.innerWidth === 768) {
      this.ipad_view = true;
    }
    // for(n in 100)
    // {
    //   this.customer_list(Object);
    // }
    // console.clear();

    this.getData();
    if (window.innerWidth < 760) {
      this.scrollspy = true;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    //    AOS.init()
    this.autoRunBrandCarousal();
  },
  methods: {
    autoRunBrandCarousal() {
      setInterval(function() {
        $("#show_next_brand").click();
      }, 4000);
    },
    socialRedirect(url) {
      // window.location = url;
      window.open(url, "_blank");
    },
    showSuccess() {
      let vm = this;
      this.show_spinner_contact_us = false;
      this.show_success_contact_us_msg = true;
      vm.contact_data.name = "";
      vm.contact_data.email = "";
      vm.contact_data.subject = "";
      vm.contact_data.message = "";
    },
    async contactToAdmin() {
      this.contact_us_has_error = false;

      if (
        this.contact_data.name == "" ||
        this.contact_data.email == "" ||
        this.contact_data.subject == "" ||
        this.contact_data.message == ""
      ) {
        this.contact_us_has_error = true;
        return;
      }

      this.show_spinner_contact_us = true;

      if ((await window.save(contactUs, this.contact_data)) == true) {
        this.showSuccess();
      }
    },
    handleScroll(event) {
      window.pageYOffset > 550 && window.innerWidth > 760
        ? (this.pagescroll = true)
        : (this.pagescroll = false);
      window.pageYOffset > 550
        ? (this.upButton = true)
        : (this.upButton = false);
    },
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth"
      });

      $("a").click(function() {
        // remove classes from all
        $("a").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
      });
    },
    async nextCustomer() {
      for (let i = 0; i < 4; i++) {
        this.customer_slider_array[i] = this.customer_slider_array[i + 1];
      }
      this.customer_slider_array[4] =
        ++this.customer_slider_array[4] % this.customer_list.length;
      this.active_customer = this.customer_slider_array[2];
    },

    async prevCustomer() {
      this.customer_slider_array[4] = this.customer_slider_array[3];
      this.customer_slider_array[3] = this.customer_slider_array[2];
      this.customer_slider_array[2] = this.customer_slider_array[1];
      this.customer_slider_array[1] = this.customer_slider_array[0];

      this.customer_slider_array[0] =
        this.customer_slider_array[0] == 0
          ? this.customer_list.length - 1
          : --this.customer_slider_array[0];
      this.active_customer = this.customer_slider_array[2];
    },

    async validateSubscribe() {
      let result = true;
      if (this.subscriber.full_name == "" || this.subscriber.email == "") {
        result = false;
      }
      return result;
    },
    async userSubscribe() {
      if (
        this.subscriber.full_name == "" ||
        this.subscriber.email == "" ||
        !window.validEmail(this.subscriber.email)
      ) {
        this.$toast.error({
          title: "Error",
          message: "Please first fill email and full name then submit!",
          position: "bottom center",
          showMethod: "wobble",
          hideMethod: "zoomOutDown",
          showDuration: 3000,
          color: "red"
        });

        return;
      }

      this.show_spinner = true;
      if ((await window.save(userSubscribe, this.subscriber)) == true) {
        this.show_spinner = false;
        this.show_subscribe_status = true;
      }
    },
    async getData() {
      let response = await axios.get(getWebData);

      if (response.status == 200) {
        this.services_list = response.data.service_data;
        this.customer_list = response.data.member_data;
        let count = 0;
        // console.log(response.data.footer_data)

        const footer = await response.data.footer_data;

        this.$store.dispatch("ADD_FOOTER_DATA", footer);

        footer.forEach(element => {
          // console.log(element);
          if (element.web_key == "facebook")
            this.footer_data.facebook = element.web_value;

          if (element.web_key == "instagram")
            this.footer_data.instagram = element.web_value;

          if (element.web_key == "linkdin")
            this.footer_data.linkdin = element.web_value;

          if (element.web_key == "youtube")
            this.footer_data.youtube = element.web_value;

          if (element.web_key == "about_us")
            this.footer_data.about_us = element.web_value;

          if (element.web_title != null) {
            this.bussines_data[count].web_title = element.web_title;
            this.bussines_data[count].web_value = element.web_value;
            count++;
          }
        });
      }
    }
  }
};
</script>
<style src="cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css"></style>
<style scoped></style>
