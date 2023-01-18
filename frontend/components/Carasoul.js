import { Carousel } from "react-responsive-carousel";

function Carasoul() {
  return (
    <div className="">
      <Carousel
        autoFocus
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            loading="lazy"
            src="https://s1.1zoom.me/big0/791/Summer_Shells_Sand_Glasses_552226_1280x853.jpg"
            alt=""
          ></img>
        </div>
        <div></div>
      </Carousel>
    </div>
  );
}

export default Carasoul;
