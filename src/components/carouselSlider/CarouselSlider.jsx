import Carousel from "react-bootstrap/Carousel";

export const CarouselSlider = () => {
  const displaywidth = window.innerWidth;
  console.log(displaywidth);
  const Image1 = () => <img src={`https://picsum.photos/1920/800`} />;
  const Image2 = () => <img src={`https://picsum.photos/id/24/1920/800`} />;
  const Image3 = () => <img src={`https://picsum.photos/id/20/1920/800`} />;

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image1 text="First slide" />
        <Carousel.Caption className="text-light">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image2 text="Second slide" />
        <Carousel.Caption className="text-light">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image3 text="Third slide" />
        <Carousel.Caption className="text-light">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
