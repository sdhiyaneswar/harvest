import React, { useRef, useState } from 'react';
import './Home.css';
import { FaBars, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const productListRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollLeft = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <>

    <div className="home-container">
      {/* { <header className="hero-section">
        <div className="nav-bar">
          <button className="hamburger" onClick={toggleNav}>
            <FaBars />
          </button>
          <nav className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="hero-content fade-in">
          <h1>HARVEST HAVEN</h1>
          <p>Your source for fresh, organic produce and premium farming supplies.</p>
          <div className="cta-buttons">
            <button className="cta-button">Shop Now</button>
            <button className="cta-button">Learn More</button>
            <button className="cta-button">Our Story</button>
            <button className="cta-button">Contact Us</button>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
            <button className="search-button">Search</button>
          </div>
        </div>
      </header> } */}
      <div className="hero-content fade-in">
          <div className="logo-search-container">
            <img src="https://ideogram.ai/assets/progressive-image/balanced/response/megW0-K7TsSMoHFBMnkxrw" alt="Logo" width="200px" />
            <div className="search-bar">
              <input type="text" placeholder="Search for products..." />
              <button className="search-button">Search</button>
            </div>
        </div>
    



      </div>
      

      <section id="products" className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-slider">
          <button className="slider-button left" onClick={scrollLeft}>&lt;</button>
          <div className="product-list" ref={productListRef}>
            <div className="product-item zoom-in">
              <img src="https://images.pexels.com/photos/4022591/pexels-photo-4022591.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Organic Tomatoes" />
              <h3>Organic Tomatoes</h3>
              <p>rs.30per lb</p>
              <p>Juicy and ripe, perfect for salads and sauces.</p>
            </div>
            <div className="product-item zoom-in">
              <img src="https://images.pexels.com/photos/7658792/pexels-photo-7658792.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fresh Lettuce" />
              <h3>Fresh Lettuce</h3>
              <p>rs.20 per head</p>
              <p>Crisp and fresh, ideal for your daily salads.</p>
            </div>
            <div className="product-item zoom-in">
              <img src="https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Heirloom Carrots" />
              <h3>Heirloom Carrots</h3>
              <p>rs.23 per lb</p>
              <p>Sweet and flavorful, great for roasting or snacking.</p>
            </div>
            <div className="product-item zoom-in">
              <img src="https://images.pexels.com/photos/45914/paprika-vegetables-food-market-45914.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Organic Bell Peppers" />
              <h3>Organic Bell Peppers</h3>
              <p>rs.30 per lb</p>
              <p>Colorful and sweet, perfect for adding to dishes.</p>
            </div>
            <div className="product-item zoom-in">
              <img src="https://images.pexels.com/photos/221100/pexels-photo-221100.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fresh Strawberries" />
              <h3>Fresh Strawberries</h3>
              <p>rs.28 per lb</p>
              <p>Sweet and juicy, ideal for desserts and snacks.</p>
            </div>
            <div className="product-item zoom-in">
              <img src="https://images.pexels.com/photos/7457493/pexels-photo-7457493.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Organic Spinach" />
              <h3>Organic Spinach</h3>
              <p>rs.18 per bunch</p>
              <p>Rich in nutrients, great for salads and cooking.</p>
            </div>
            <div className="product-item zoom-in">
              <img src="https://imgs.search.brave.com/E-4TGIVuuum33LBRxGOfWrbNlDlbHLF_C-qk01uay2I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/ZWxlY3RpdmUtZm9j/dXMtc2hvdC1iYXNp/bC1sZWF2ZXNfMTgx/NjI0LTUxMDM2Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn" alt="Fresh Basil" />
              <h3>Fresh Basil</h3>
              <p>rs.23 per bunch</p>
              <p>Fragrant and flavorful, perfect for garnishing dishes.</p>
            </div>
            <div className="product-item zoom-in">
              <img src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Organic Apples" />
              <h3>Organic Apples</h3>
              <p>rs.40 per lb</p>
              <p>Crisp and sweet, great for snacking and baking.</p>
            </div>
            <div className="product-item zoom-in">
              <img src="https://imgs.search.brave.com/EhaFksxVPHdIao67rCwQyOItLJ-QgS5nu6bAPEW2IJ4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxscmVjaXBlcy5j/b20vdGhtYi9xelRM/QXlaY2FmV1ViV2x3/YWFMdEw5bEFzcU09/LzE1MDB4MC9maWx0/ZXJzOm5vX3Vwc2Nh/bGUoKTptYXhfYnl0/ZXMoMTUwMDAwKTpz/dHJpcF9pY2MoKS9H/ZXR0eUltYWdlcy0x/NDIwMjE0OTQtMjAw/MC1hNDA3YzEwNGNi/Y2I0ZmE0OGE1OTk0/ZGM2MDZkZDBiNy5q/cGc" alt="Organic Garlic" />
              <h3>Organic Garlic</h3>
              <p>rs.38 per lb</p>
              <p>Strong flavor, perfect for cooking and seasoning.</p>
            </div>
            <div className="product-item zoom-in">
              <img src="https://images.pexels.com/photos/5904941/pexels-photo-5904941.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Organic Cucumber" />
              <h3>Organic Cucumber</h3>
              <p>rs.26 per cucumber</p>
              <p>Fresh and crisp, ideal for salads and snacks.</p>
            </div>
          </div>
          <button className="slider-button right" onClick={scrollRight}>&gt;</button>
        </div>
      </section>
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item zoom-in">
            <h3>Fresh Produce</h3>
            <p>Enjoy the freshest fruits and vegetables harvested directly from our farm. We pride ourselves on offering organic produce free from harmful pesticides.</p>
          </div>
          <div className="service-item zoom-in">
            <h3>Organic Farming Supplies</h3>
            <p>We offer a range of organic farming supplies, including seeds, fertilizers, and tools. Our products are designed to support sustainable and eco-friendly farming practices.</p>
          </div>
          <div className="service-item zoom-in">
            <h3>Farm Tours</h3>
            <p>Experience farm life firsthand with our guided farm tours. Learn about sustainable agriculture, meet our animals, and see how we grow our produce.</p>
          </div>
          <div className="service-item zoom-in">
            <h3>Custom Orders</h3>
            <p>Need something specific? We offer custom orders for bulk produce and supplies. Contact us for more information on how we can meet your needs.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item fade-in">
            <p>"Harvest Haven has the best tomatoes I've ever tasted! The quality is unbeatable."</p>
            <p>- Sarah J.</p>
          </div>
          <div className="testimonial-item fade-in">
            <p>"I love their farm tours. It's a great experience to see how my food is grown and meet the farmers."</p>
            <p>- Mark T.</p>
          </div>
          <div className="testimonial-item fade-in">
            <p>"The organic produce is always fresh and tasty. Their customer service is excellent too."</p>
            <p>- Emily R.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to learn more about our products and services, feel free to reach out.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;
