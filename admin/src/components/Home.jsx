import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../Assests/image1.jpg";
import image2 from "../Assests/image2.jpg";
import image3 from "../Assests/image3.jpg";
import image4 from "../Assests/image4.png";

function Home() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <br />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            style={{ width: "300px", height: "300px" }}
          />
          <Carousel.Caption>
            <p>
              A ROOM WITHOUT BOOKS IS LIKE A BODY WITHOUT A SOUL. <br />
              <i>CICERO</i>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            style={{ width: "300px", height: "300px" }}
          />

          <Carousel.Caption>
            <p style={{ color: "black", fontSize: "20px" }}>
              <b>JOIN WITH US: LUMINEX BOOK SHOP</b>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            style={{ width: "300px", height: "300px" }}
          />

          <Carousel.Caption>
            <p>
              READING GIVES US SOMEPLACE TO GO WHEN WE HAVE TO STAY WHERE WE
              ARE.
              <br />
              <i>MASON COOLEY</i>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image4}
            alt="Third slide"
            style={{ width: "300px", height: "300px" }}
          />
        </Carousel.Item>
      </Carousel>
      <h1><center>Welcome Admin</center></h1>
    </div>
  );
}

//render(<ControlledCarousel />);
export default Home
