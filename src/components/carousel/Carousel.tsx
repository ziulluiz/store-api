import audifonos from '../../assets/audifonos.jpg';
import bocina from '../../assets/bocina.jpg';
import iphone from '../../assets/iphone.jpg';
import S23 from '../../assets/S23.jpg';

import './carousel.css'; 
import { Link } from 'react-router-dom';

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
    { id: 1, image: audifonos, alt: 'Slide 1' },
    { id: 2, image: bocina, alt: 'Slide 2' },
    { id: 3, image: iphone, alt: 'Slide 3' },
    { id: 4, image: S23, alt: 'Slide 4' },
  ];

export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true, 
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 3000,
      };

      return (
        <div className="carousel-container">
        <Slider {...settings}>
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="carousel-item">
                <img src={product.image} alt={product.alt} />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      )

}