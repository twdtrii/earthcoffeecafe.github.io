import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/gambarcoffee3.png";

import {CafeTerbaru, dataSwiper} from "../data/index";
import { PromoTerbaru } from "../data/index";
import Faq from "../components/FaqComponent";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Homepage = () => {
  return (
      <div className="homepage">
                <header className="w-100 min-vh-100 d-flex align-items-center">     
              <Container>
                <Row className="header-box d-flex align-items-center pt-lg-5">
                  <Col lg="6">
                    <h1 className="mb-4">
                    Menikmati Secangkir Coffee <br /> <span>Sambil Bersantai Dengan</span> <br /> Melindungi Bumi!
                    </h1>
                    <p className="mb-4"> kami percaya bahwa kebaikan untuk diri sendiri dan<br /> lingkungan bisa dimulai dari hal sederhana seperti<br />
                    secangkir earth coffee
                    </p>
                  </Col>
                  <Col lg="6" className="pt-lg-0 pt-5">
                    <img src={HeroImage} alt="hero-img" />
                  </Col>
                </Row>
              </Container>
          </header> 
              <div className="history w-100 min-vh-100">
                <Container>
                  <Row>
                    <Col>
                      <h1 className="fw-bold">Our Story Our Story Our Story</h1>
                      <p className="">Our Story</p>
                    </Col>
                  </Row>
                  <Row>
                  {CafeTerbaru.map((cafe) => {
                      return <Col key={cafe.id}>
                       <img src={cafe.image} alt="unsplash.com"/>
                      </Col>
                    })}

                    <Col>
                      <p>
                        <span>
                          <br />
                          <br/>
                          <br />
                          Earth Coffee berfokus pada menyajikan pengalaman minum kopi yang terhubung dengan alam. 
                          Penggunaan material alami, tanaman hidup, dan desain eco-friendly menciptakan suasana yang harmonis 
                          dan menenangkan. <br />
                          <br />
                          Earth Coffee tidak hanya menjual kopi, tetapi juga menyebarkan kesadaran tentang 
                          pentingnya menjaga lingkungan, melalui setiap aspek bisnisnya, dari menu hingga desain dan komunitas.
                        </span>
                       </p>
                    </Col>
                  </Row>
                </Container>
            </div>
            <div className="promocaffee w-100 min-vh-100">              
              <Container>
              <Row>
                    <Col>
                        <h1 className="text-center fw-bold">Promo di Earth Coffee</h1>
                        <p className="text-center">Temukan berbagai promo menarik di sini!</p>
                    </Col>
              </Row>

              <Row>
              {PromoTerbaru.map((promo) => {
                      return <Col key={promo.id} className="shadow rounded">
                       <img src={promo.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                      </Col>
                    })}
              </Row>
              </Container>
            </div>
            <div className="testimoni py-5">
              <Container>
                <Row>
                  <Col>
                    <h1 className="text-center fw-bold pt-5">Testimoni</h1>
                    <p className="text-center">Kenyamanan Customer Menjadi Utama</p>
                  </Col>
                </Row>

                <Row>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                      992: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                      1200: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },

                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {dataSwiper.map((data) =>{
                      return(<SwiperSlide key={data.id} className="shadow">
                        <p className="desc">{data.desc}</p>
                      </SwiperSlide>
                      )
                    })}
                    
                  </Swiper>
                </Row>
              </Container>
            </div>

            {/* Section FAQ */}
            
            <Faq/>

            {/* Section FAQ */}


      </div>
  );

};

export default Homepage;