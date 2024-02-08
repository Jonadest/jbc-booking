import "./Menu.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <div className="imgSide"></div>
        <div className="detailsSide text-center">
          <h1>Contact Me</h1>
          <p>
            <a href="tel: 862 231 8040 ">
              <i class="fa-solid fa-mobile"></i> 862 231 8040
            </a>
          </p>

          <i class="fa-solid fa-envelope"></i>
          <p>
            <a href="mailto:ijannyc@gmail.com">ijannyc@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
