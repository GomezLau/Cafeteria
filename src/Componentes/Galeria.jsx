import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";

export default function Galeria() {
  return (
    <div>
      <EjemploCarousel />
      <GaleriaInteractiva />
    </div>
  );
}

function EjemploCarousel() {
  return (
    <div>
      <Carousel id="galeria" data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.serargentino.com/public/images/2020/10/cafe2-1603725694.jpg"
            alt="First slide"
          />
          <Carousel.Caption id="leyendas">
            <h5>Recuerdos de nuestros comienzos</h5>
            <p>Viaje en el tiempo...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.serargentino.com/public/images/2019/06/El-famoso-cafe-con-leche-773x458.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption id="leyendas" className="text-white">
            <h5>Cafe con leche</h5>
            <p>Aromas que enamoran!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.serargentino.com/public/images/2018/04/cafes-in-buenos-aires-773x458.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption id="leyendas" className="text-white">
            <h5>Nuestro salón</h5>
            <p>Nos sentimos en casa...!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h5>
        Te mostramos un poquito de donde viene el cafe que tanto disfrutamos...
      </h5>
      <br />
      <iframe
        width="866"
        height="487"
        src="https://www.youtube.com/embed/4w-jH_3_JfM"
        title="Cómo Se Hace El CAFÉ? (Proceso En Fábrica)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function GaleriaInteractiva() {
  const [coffeeImages, setCoffeeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => setCoffeeImages(data))
      .catch((error) => console.error("Error al buscar las imagenes:", error));
  }, []);

  return (
    <div>
      <section className="py-5">
        <div className="container">
          <h2>Galería de Café</h2>
          <div className="row">
            {coffeeImages
              .filter((e) => e.image != null && e.image != "image-1")
              .map((foto) => (
                <div className="col-md-4 mb-4" key={foto.id}>
                  <img
                    src={foto.image}
                    alt={foto.title}
                    className="img-fluid rounded"
                  />
                  <p className="mt-2">{foto.title}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export { EjemploCarousel, GaleriaInteractiva };
