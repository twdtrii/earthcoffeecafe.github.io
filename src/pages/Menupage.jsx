import {Container, Row, Col} from "react-bootstrap";
import {semuaMenu, semuaMenu2, specialMenu} from "../data/index";

const Menupage = () => {
  return(
    <div className="menu-page">


        <div className="menuutama min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="fw-bold text-center">Menu</h1>
          </Col>


        </Row>

        <Row>
          {semuaMenu.map((menu) =>{
            return(
              <Col key={menu.id} className="shadow rounded">
                <img src={menu.image} alt="unsplash2.com" className="w-100 mb-4 rounded-top" />
                <div className="star mb-2 px-3">
                  <i className={menu.star1}></i>
                  <i className={menu.star2}></i>
                  <i className={menu.star3}></i>
                  <i className={menu.star4}></i>
                  <i className={menu.star5}></i>
                </div>
                <h5 className="mb-3 px-3">{menu.title}</h5>
                <p className="mb-3 px-3">{menu.desc}</p>
                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="m-0 text-primary fw-bold">{menu.price}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
    
    <div className="menuutama2">
    <Container>
      <Row>
          <Col>
          <h1 className="fw-bold mb-5">Earth Desserts</h1>
          </Col>
        </Row>

          
        <Row>
          {semuaMenu2.map((menu) =>{
            return(
              <Col key={menu.id} className="shadow rounded">
                <img src={menu.image} alt="unsplash2.com" className="w-100 mb-4 rounded-top" />
                <div className="star mb-2 px-3">
                  <i className={menu.star1}></i>
                  <i className={menu.star2}></i>
                  <i className={menu.star3}></i>
                  <i className={menu.star4}></i>
                  <i className={menu.star5}></i>
                </div>
                <h5 className="mb-3 px-3">{menu.title}</h5>
                <p className="mb-3 px-3">{menu.desc}</p>
                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="m-0 text-primary fw-bold">{menu.price}</p>
                </div>
              </Col>
            );
          })}
        </Row>
    </Container>
    <div className="menuutama3">
    <Container>
      <Row>
          <Col>
          <h1 className="fw-bold mb-5">Special Paket Earth</h1>
          </Col>
        </Row>

          
        <Row>
          {specialMenu.map((menu) =>{
            return(
              <Col key={menu.id} className="shadow rounded">
                <img src={menu.image} alt="unsplash2.com" className="w-100 mb-4 rounded-top" />
                <div className="star mb-2 px-3">
                  <i className={menu.star1}></i>
                  <i className={menu.star2}></i>
                  <i className={menu.star3}></i>
                  <i className={menu.star4}></i>
                  <i className={menu.star5}></i>
                </div>
                <h5 className="mb-3 px-3">{menu.title}</h5>
                <p className="mb-3 px-3">{menu.desc}</p>
                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="m-0 text-primary fw-bold">{menu.price}</p>
                </div>
              </Col>
            );
          })}
        </Row>
    </Container>
    </div>
    </div>

    </div>
  );

};

export default Menupage;