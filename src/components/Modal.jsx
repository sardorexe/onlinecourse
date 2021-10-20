import modal from "./assets/modal.jpg";
import "./styles/Modal/Modal.css"

const Modal = ({closeModal}) => {
  return (
    <div onClick={closeModal} className="modal">
      <div className="modal-box">
        <div className="box-img">
          <img src={modal} alt="Modal" />
        </div>
        <div className="box-content">
          <div className="content">
            <h1 className="number">1</h1>
            <div className="texts">
              <h3>Belgilangan miqdordagi pulni kartaga o‘tkazing!</h3>
              <p>Uzcard: 8600 3129 4005 7223 (Kamron Fozilov)</p>
              <p>
                Payme orqali to’lov:{" "}
                <a href="https://payme.uz/@kamrondev">
                  https://payme.uz/@kamrondev
                </a>
              </p>
            </div>
          </div>
          <div className="content border">
            <h1 className="number">2</h1>
            <div className="texts">
              <h3>
                To‘lov qilganligingiz haqidagi ma’lumotni skrinshot qilib
                adminstratorga yuboring.
              </h3>
              <p>
                Adminstrator:{" "}
                <a href="https://t.me/livecoders_admin">
                  t.me/livecoders_admin
                </a>
              </p>
            </div>
          </div>
          <div className="content">
            <h1 className="number">3</h1>
            <div className="texts">
              <h3>
                Ism, familiya va telefon raqamingizni adminstratorga jo’nating!
                Sizni yopiq guruhga qo’shib qo’yamiz.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
