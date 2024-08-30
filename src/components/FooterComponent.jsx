import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
  <div className="footer py-5">
    <Container>
      <Row className="d-flex justify-content-between">
        <Col lg="4">
        <img src="public/Logo2.png" className="pt-5" />
        <p className="desc pt-4">
        Nikmati kopi organik pilihan dari petani lokal sambil bersantai di suasana yang terhubung dengan alam. 
        Di sini, kami percaya bahwa kebaikan untuk diri sendiri dan lingkungan bisa dimulai dari hal sederhana—seperti 
        secangkir kopi.
        </p>

        </Col>

        <Col lg="4">
            <h1 className="fw-bold pt-5">Customer Center</h1>
            <div className="location mb-1 mt-4">
          <Link className="text-decoration-none">
            <FaLocationDot />
            <p className="m-0"> Cafe EarthCoffee <br />
              Jl. Sultan Hasanudin Dalam, Blok M, Kebayoran Baru, Jakarta Selatan.</p>
          </Link>
        </div>

        <div className="whatsapp mb-1 mt-4">
        <Link className="text-decoration-none">
            <FaWhatsapp />
            <p className="m-0">0821-3456-9088</p>        
          </Link>
        </div>
        </Col>

        <Col lg="2">
        <h1 className="fw-bold pt-5">Sosial Media</h1>

        <div className="social mt-3"> 
        <FaInstagram className="i"/>
        <FaSquareXTwitter />
        <FaTiktok />
        </div>

        </Col>      
      </Row>
      <Row>
        <Col>
        <div className="copyright">
        <p className="px-md-0 px-3 pt-5">
          &copy; Copyright 2024 by <span>Earth Coffee</span>, All Rights Reserved</p>
        </div>
        </Col>
              
      </Row>
    </Container>
  </div>
  );
};

export default Footer;