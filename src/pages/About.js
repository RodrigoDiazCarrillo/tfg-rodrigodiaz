import React from 'react';
import "./About.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import img1 from "../img/5974245.jpg";
import img2 from "../img/3811818.jpg";
import img3 from "../img/5089117.jpg";
import img4 from "../img/258283.jpg";

const About = () => {

  return (

    <section className="about">
      <Menu/>
      <div className='content'>
      <img src={img1} alt="" className="img1" />
      <p>
      Lorem ipsum dolor sit amet. Qui dolores saepe ut velit earum est iusto quas id odit voluptas.
       Aut obcaecati dignissimos non necessitatibus dolores sed quia ipsa qui accusantium dolores.
        Sit dicta laudantium cum molestiae voluptate ab dolores aliquam ut corporis optio et 
        sapiente iusto quo minima saepe. Sed dolorum amet ut ratione autem aut nihil voluptatem
         sit doloremque delectus nam nostrum vitae et fuga omnis et esse modi.
      </p>
      <img src={img2} alt="" className="img2" />
      <p>
      Lorem ipsum dolor sit amet. Qui dolores saepe ut velit earum est iusto quas id odit voluptas.
       Aut obcaecati dignissimos non necessitatibus dolores sed quia ipsa qui accusantium dolores.
        Sit dicta laudantium cum molestiae voluptate ab dolores aliquam ut corporis optio et 
        sapiente iusto quo minima saepe. Sed dolorum amet ut ratione autem aut nihil voluptatem
         sit doloremque delectus nam nostrum vitae et fuga omnis et esse modi.
      </p>
      <img src={img3} alt="" className="img3" />
      <p>
      Lorem ipsum dolor sit amet. Qui dolores saepe ut velit earum est iusto quas id odit voluptas.
       Aut obcaecati dignissimos non necessitatibus dolores sed quia ipsa qui accusantium dolores.
        Sit dicta laudantium cum molestiae voluptate ab dolores aliquam ut corporis optio et 
        sapiente iusto quo minima saepe. Sed dolorum amet ut ratione autem aut nihil voluptatem
         sit doloremque delectus nam nostrum vitae et fuga omnis et esse modi.
      </p>
      <img src={img4} alt="" className="img4" />
      </div>
      <Footer/>
    </section>
  );
};

export default About;
