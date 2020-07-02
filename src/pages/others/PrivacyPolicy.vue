<template>
  <div style="background:#f9f9f9;">
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
          <img src="/static/landing/images/vectors/MenuHamburger.png" alt />
        </button>

        <router-link class="navbar-brand ml-2" to="/">
          <img src="/static/landing/images/Logo.png" class alt />
        </router-link>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item after-border">
              <router-link class="nav-item nav-link active" to="/#home-content"
                >ראשי</router-link
              >
            </li>
            <li class="nav-item after-border">
              <router-link class="nav-item nav-link" to="/#about-content"
                >עלינו</router-link
              >
            </li>
            <li class="nav-item after-border">
              <router-link class="nav-item nav-link" to="/#feature-content"
                >פיצ׳רים</router-link
              >
            </li>
            <li class="nav-item after-border">
              <router-link class="nav-item nav-link" to="/#reviews-content">
                מה אומרים עלינו
              </router-link>
            </li>
            <li class="nav-item after-border">
              <router-link class="nav-item nav-link" to="/#businese"
                >מאמנים ועסקים</router-link
              >
            </li>
            <li class="nav-item after-border">
              <router-link class="nav-item nav-link" to="/#contact-form-1">
                צור קשר
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="container">
      <div class="box text-right py-4">
        <div class="terms_conditions">
          <h2 class="heading pb-3">מדיניות פרטיות</h2>
          <div
            class="terms_condrtion-content bg-white"
            style="padding:10px 20px;"
          >
            <div>
              <strong class="para-heading">כללי</strong>
              <p class="para-detail">
                1.מדיניות פרטיות זו הינה חלק בלתי נפרד מתנאי השימוש שלנו. וכל
                שימוש בה על ידך כפוף להוראות תנאי שימוש להלן.
                <br />2. מטרת מדיניות הפרטיות היא לפרט בפניך כיצד נאספים עליך
                נתונים באמצעות האתר והאפליקציה, מה מטרתם וכיצד נעשה בהם שימוש.
                <br />3. בכל גלישה או שימוש אחר באפליקציה, אתה מסכים מרצונך
                למדיניות פרטיות זו במלואה, ולשמירת, מסירת והפקת המידע, לעיבוד
                והעברה של המידע, ולכל שימוש אחר במידע כמפורט במדיניות זו.
                <br />4. בכל גלישה או שימוש אחר באתרים, אתה מצהיר ומתחייב כי
                גילך הינו 18 שנים לפחות, או שאתה משתמש באתרים באישורו של אחד
                מהוריך (או אפוטרופוס שאחראי עליך), ובהסכמתו למדיניות פרטיות זו
                במלואה.
              </p>
            </div>
            <div>
              <strong class="para-heading">ניהול מידע</strong>
              <p class="para-detail">
                1. ככל שנדרשים פרטים אישיים בעת רישום לשירותים באתרים או בעת
                רכישת מוצרים בהם, אנו נבקש ממך רק את המידע הנחוץ במישרין לאספקת
                השירותים או לרכישת המוצרים.
                <br />2. אין עליינו אחראיות על המידע אותו תזין במערכת הצאט שלנו.
                אנו ממליצים להמנע מהודעות לא רלוונטיות, המקרה ונשלחה הודעה בטעות
                ותרצה למחוק אותה, תוכל לפנות אליינו ובהתאם לזמינותינו ויכולתינו
                ננסה למחוק אותה, אין לראות בהודעה זאת התחייבות לכך והאחראיות על
                התוכן אותו המשתמש מזין בצאט הינו על המשתמש בלבד. <br />3.
                הנתונים אותם נקבל ממכם יישמרו במאגר שלנו, ויישמשו אותנו על מנת
                לאפשר שימוש בשירותים באתר, לשפר ולהעשיר את השירותים והתכנים
                באפליקציה, לשפר את הנוטיפיקציות, לצורך רכישה שירותים המוצעים
                באתר וכדי להתאים את המודעות שיוצגו בעת הביקור באתרים לתחומי
                ההתעניינות שלך. <br />המידע שישמש את החברה יהיה בעיקרו מידע
                סטטיסטי, שאינו מזהה אישית..
              </p>
            </div>
            <div>
              <strong class="para-heading">הזכות לעיין במידע</strong>
              <p class="para-detail">
                אתה זכאי לעיין במידע שנאסף אודותיך, ששמור במאגרי המידע שלנו,
                ושמזוהה ומשויך אליך. אין אפשרות לעיין במידע שאינו מזוהה ומשוייך
                אליך.
              </p>
            </div>
            <div>
              <strong class="para-heading">הזכות לתיקון מידע</strong>
              <p class="para-detail">
                אם מצאת שהמידע שנשמר אודותיך אינו נכון, שלם, ברור או מעודכן,
                ניתן לפנות אלינו, בבקשה מפורטת לתיקון או מחיקה של המידע. תוכלו
                לפנות אליינו דרך צור הקשר באתר שלנו, או באפליקציה.
              </p>
            </div>
            <div>
              <strong class="para-heading">ניהול מידע</strong>
              <p class="para-detail">
                1. ככל שנדרשים פרטים אישיים בעת רישום לשירותים באתרים או בעת
                רכישת מוצרים בהם, אנו נבקש ממך רק את המידע הנחוץ במישרין לאספקת
                השירותים או לרכישת המוצרים.
                <br />2. אין עליינו אחראיות על המידע אותו תזין במערכת הצאט שלנו.
                אנו ממליצים להמנע מהודעות לא רלוונטיות, המקרה ונשלחה הודעה בטעות
                ותרצה למחוק אותה, תוכל לפנות אליינו ובהתאם לזמינותינו ויכולתינו
                ננסה למחוק אותה, אין לראות בהודעה זאת התחייבות לכך והאחראיות על
                התוכן אותו המשתמש מזין בצאט הינו על המשתמש בלבד. <br />3.
                הנתונים אותם נקבל ממכם יישמרו במאגר שלנו, ויישמשו אותנו על מנת
                לאפשר שימוש בשירותים באתר, לשפר ולהעשיר את השירותים והתכנים
                באפליקציה, לשפר את הנוטיפיקציות, לצורך רכישה שירותים המוצעים
                באתר וכדי להתאים את המודעות שיוצגו בעת הביקור באתרים לתחומי
                ההתעניינות שלך. <br />המידע שישמש את החברה יהיה בעיקרו מידע
                סטטיסטי, שאינו מזהה אישית..
              </p>
            </div>
            <div>
              <strong class="para-heading">Cookies</strong>
              <p class="para-detail">
                אתר החברה משתמש ב"עוגיות" (Cookies) לצורך תפעולם השוטף והתקין,
                ובכלל זה כדי לאסוף נתונים סטטיסטיים אודות השימוש באתר, לאימות
                פרטים, כדי להתאים את האתר להעדפותיך האישיות ולצורכי אבטחת מידע.
                דפדפנים מודרניים כוללים אפשרות להימנע מקבלת Cookies. אם אינך
                יודע כיצד לעשות זאת, בדוק בקובץ העזרה של הדפדפן שבו אתה משתמש.
              </p>
            </div>
            <div>
              <strong class="para-heading">מסירת מידע לצד שלישי</strong>
              <p class="para-detail">
                החברה לא תעביר לצדדים שלישיים את פרטיך האישיים והמידע שנאסף על
                פעילותך באתר אלא במקרים המפורטים להלן: אם תרכוש מוצרים ושירותים
                מצדדים שלישיים המציעים אותם למכירה באמצעות האתרים, יועבר לצדדים
                שלישיים אלה המידע הדרוש להם לשם השלמת תהליך הרכישה, במקרה של
                מחלוקת משפטית בינך לבין החברה שתחייב חשיפת פרטיך, אם תבצע
                באתרים, פעולות שבניגוד לדין; , אם יתקבל צו שיפוטי המורה למסור את
                פרטיך או המידע אודותיך לצד שלישי; או אם החברה תמכור או תעביר בכל
                צורה שהיא את פעילות האתרים לתאגיד כלשהו - וכן במקרה שתתמזג עם
                גוף אחר או תמזג את פעילות האתרים עם פעילותו של צד שלישי, ובלבד
                שתאגיד זה יקבל על עצמו כלפיך את הוראות מדיניות פרטיות זו.
              </p>
            </div>
            <div>
              <strong class="para-heading">פרסומות של צד שלישי</strong>
              <p class="para-detail">
                אנו משאירים לעצמינו את הזכות לתת לחברות אחרות לנהל את מערך
                הפרסומות באתרים. המודעות שבהן אתה צופה בעת הביקור באתרי מגיעות
                ממחשביהן של אותן חברות. כדי לנהל את הפרסומות שלהן, חברות אלה
                חברות אלה מציבות Cookies במחשבך. ה-Cookies מאפשרים להן לאסוף
                מידע על האתרים שבהם צפית בפרסומות שהציבו ועל אילו פרסומות הקשת.
                השימוש שחברות אלה עושות ב-Cookies כפוף למדיניות הפרטיות שלהן ולא
                למדיניות הפרטיות של החברה
              </p>
            </div>
            <div>
              <strong class="para-heading">דיוור</strong>
              <p class="para-detail">
                כדי לשמור איתך על קשר, להציע ולשלוח לך הצעות ותכנים שיווקיים
                מגורמים שונים, דיוור ישיר, ניוזלטרים, עדכונים, איפוס ססמה ודברי
                פרסומת וכן כדי להודיע לך הודעות שונות בקשר לשירותים שלנו, אנו
                נשתמש בפרטים שנתת לנו. את הדיוור נשלח אליך באמצעות דואר
                אלקטרוני, הודעות קופצות או מתפרצות ובכל דרך תקשורת אחרת.
              </p>
            </div>
            <div>
              <strong class="para-heading">אבטחת מידע</strong>
              <p class="para-detail">
                אנחנו משקיעים מאמצים רבים כדי להגן על המידע, ומיישמים מערכות
                ונהלים שונים לאבטחת מידע. יחד עם זאת, מערכות ההגנה ואבטחת המידע
                שלנו, אינן חסינות לחלוטין בפני כל חדירה או גישה בלתי מורשית,
                ואינן מעניקות הגנה מוחלטת. אנחנו לא נישא באחריות, בקשר לכל נזק
                שייגרם לך בעקבות חדירה, שימוש בלתי מורשה, או גניבת מידע ממאגרינו
                או מהאתרים.
              </p>
            </div>
            <div>
              <strong class="para-heading">שינויים</strong>
              <p class="para-detail">
                אנו נעדכן את מדיניות הפרטיות מעת לעת. הנוסח המחייב של מדיניות
                פרטיות זו, הינו הנוסח העדכני שמוצג באתרים, ואתה מקבל על עצמך
                ומסכים למדיניות הפרטיות על כל סעיפיה, לרבות כל תיקון ועדכון
                שייערך בה. אם נערוך שינויים מהותיים במדיניות הפרטיות, תפורסם
                הודעה מתאימה בעמודי הבית של האתרים. אנא חזור ועיין בדף זה, מעת
                לעת, בכדי לבדוק את הגרסה העדכנית והמחייבת, של מדיניות פרטיות זו.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div>
        <div class="padding-top">
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
              <router-link :to="{ name: 'PrivacyPolicy' }" style="color:#fff"
                >Privacy Policy</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PrivacyPolicy",
  computed: {
    ...mapGetters({ footer: "GET_FOOTER_DATA" })
  },
  data() {
    return {
      footer_data: {}
    };
  },
  methods: {
    socialRedirect(url) {
      // window.location = url;
      window.open(url, "_blank");
    }
  },
  mounted() {
    this.footer.forEach(element => {
      if (element.web_key == "facebook")
        this.footer_data.facebook = element.web_value;

      if (element.web_key == "instagram")
        this.footer_data.instagram = element.web_value;

      if (element.web_key == "linkdin")
        this.footer_data.linkdin = element.web_value;

      if (element.web_key == "youtube")
        this.footer_data.youtube = element.web_value;
    });
  }
};
</script>

<style scoped>
.container {
  margin-top: 90px;
  color: #71695a;
  font-family: Rubik;
}
.terms_conditions .heading {
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 37px;
}
.terms_condrtion-content {
  border-radius: 25px;
}
.para-heading {
  font-size: 1.3rem;
}
@media (max-width: 768px) {
  .landing-navbar-scroll {
    direction: ltr;
  }

  .navbar-brand {
    display: none;
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
