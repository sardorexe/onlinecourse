import "./styles/Main/Main.css";

const Main = () => {
  return (
    <main className="main courses">
      <section className="about-courses">
        <div className="course-text">
          <p className="about-title">
            Ushbu kurs orqali web dasturlash sohasida hozirda juda ko’p <br />
            foydalaniladigan texnologiyalarni o’rganasiz.
          </p>
          <p className="about-desc">
            Bugungi kunda internetning ommaviyligi haqida gapirish o’rinsiz.
            Internet hayotimizning bir bo’lagiga aylandi, biz uning
            xizmatlaridan har kuni foydalanishga odatlandik. Internet turli xil
            insonlarni yagona maqsad bilan birlashishiga sabab bo’lmoqda. Hamma
            internet tarmog’idan biror turdagi axborot olishga harakat qiladi.
            Shunday vaqtlar keladiki, dasturlashni bilish inson uchun normal
            holatga aylanib qoladi. Ya’ni, dasturlash o’rganishimiz kerak
            bo’lgan asosiy ehtiyojlarimizdan biriga aylanadi.
          </p>
          <p className="about-desc">
            Siz ushbu kurs orqali umumiy dasturlash sohasini boshlang’ich
            darajada tushunib olasiz va o’zingiz 0 dan web-ilovalar yozishni
            o’rganasiz. Kurs davomida sizga mentorlar tomonidan qo’shimcha
            yordamlar ko’rsatiladi.
          </p>
        </div>
        <div className="about-boxes reasons">
          <div className="box">
            <h2 className="title">NEGA AYNAN BIZ?</h2>
            <ul className="reasons-list">
              <li className="reason">
                Yuqori kayfiyat, maksimal darajada soddalik bilan tushuntirish,
                professional dasturchilar tomonidan darslar, zamonaviy
                yondashuv.
              </li>
              <li className="reason">
                O’zlashtirishingiz qiyin bo’lgan mavzularni qo’shimcha
                materiallar va darslar orqali mustahkamlash
              </li>
              <li className="reason">
                Real loyihalar bilan ishlash, ishga kirish va o’z karyerangizni
                boshlashingiz uchun qo’shimcha maslahatlar.
              </li>
            </ul>
          </div>
          <div className="box">
            <h2 className="title">NIMA O’RGANAMIZ?</h2>
            <ul className="reasons-list">
              <li className="reason">HTML5, CSS3</li>
              <li className="reason">Bootstrap, Bulma, Materialize</li>
              <li className="reason">SASS va SCSS preprocessorlari</li>
              <li className="reason">Zamonaviy Javascript</li>
              <li className="reason">
                Frontendda murakkab strukturalar qura olish
              </li>
              <li className="reason">
                JavaScript yordamida dinamik web sahifalar yarata olish
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="course-payment">
        <div className="payment-box">
          <div className="box-start">
            <h1 className="box-title">KURSGA YOZILISH</h1>
            <p className="box-desc">Qabul cheklangan.</p>
          </div>
          <div className="select-course">
            <input type="radio" name="select" id="option-1" checked />
            <input type="radio" name="select" id="option-2" />
            <label htmlFor="option-1" className="border-wrap option-1">
              <div className="label">
                <div className="start">
                  <div className="check"></div>
                  <p className="title">Oddiy kurs</p>
                </div>
                <p className="price">750.000 UZS</p>
              </div>
            </label>
            <label htmlFor="option-2" className="border-wrap option-2">
              <div className="label">
                <div className="start">
                  <div className="check"></div>
                  <p className="title">Kurs (+individual)</p>
                </div>
                <p className="price">950.000 UZS</p>
              </div>
            </label>
          </div>
          <div className="info-course">
            <div className="text">
              <p className="info">
                <b>Kurs davomiyligi: </b>6 oy
              </p>
              <p className="info">
                <b>Har bir dars davomiyligi: </b>1.5 soat
              </p>
              <p className="info">
                <b>Kurs kimlar uchun?</b>
              </p>
              <p className="info-body">
                Dasturlashni 0 dan o’rganish istagida bo’lgan va sohaga engi
                kirib kelgan insonlar
              </p>
              <p className="info-body">
                Web dasturlash sohasini yaxshi o’rganishni istaganlar
              </p>
              <p className="info">
                <b>O'qituvchi: </b> Kamron Fozilov
              </p>
            </div>
            <div className="info-submit">
              <p className="remember">
                Darslar <b>ZOOM</b> platformasi orqali olib boriladi
              </p>
              <button className="submit-btn">SOTIB OLISH</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
