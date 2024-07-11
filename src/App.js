import "./App.css";
import { Navbar } from "./components/Navbar";
import { Jumbotron } from "./components/Jumbotron";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container text-center w-75">
        <div className="row mb-3">
          <Jumbotron
            title="Bienvenido a mi Mundo Digital"
            p="Soy Marco Urrutia, un desarrollador web apasionado por crear experiencias en línea únicas y funcionales. Con años de experiencia en el diseño y desarrollo de sitios web, estoy aquí para ayudarte a llevar tu presencia digital al siguiente nivel."
            buttonText="Vamos a Empezar"
          />
        </div>
        <div className="row d-flex justify-content-between m-1">
          <Card
            cardTitle="Desarrollo Web Personalizado"
            cardImage="https://www.scnsoft.com/application-development/custom-web-app-development/custom-web-app-development-cover-picture.svg"
            cardText="Ofrecemos soluciones de desarrollo web a medida para satisfacer las necesidades únicas de tu negocio. Desde páginas estáticas hasta complejas aplicaciones web, lo hacemos todo."
            buttonText="Descubre Más"
          />
          <Card
            cardTitle="Diseño Responsivo"
            cardImage="https://www.searchenginejournal.com/wp-content/uploads/2021/10/responsive-web-design-1-61f01c4b64c5f-sej.png"
            cardText="Nuestros diseños responsivos aseguran que tu sitio web se vea increíble y funcione perfectamente en cualquier dispositivo, desde computadoras de escritorio hasta teléfonos móviles."
            buttonText="Ver Ejemplos"
          />
          <Card
            cardTitle="Optimización SEO"
            cardImage="https://aspiration.marketing/hubfs/what%20is%20SEO.svg"
            cardText="Mejoramos la visibilidad de tu sitio en los motores de búsqueda mediante técnicas avanzadas de SEO. Atrae más tráfico y convierte visitantes en clientes."
            buttonText="Mejora tu SEO"
          />
          <Card
            cardTitle="Mantenimiento y Soporte"
            cardImage="https://img.fixthephoto.com/blog/images/gallery/news_image_14039.png"
            cardText="Proporcionamos mantenimiento y soporte continuo para asegurar que tu sitio web esté siempre actualizado y funcionando sin problemas. Déjanos cuidar de tu presencia en línea."
            buttonText="Solicita Soporte"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
