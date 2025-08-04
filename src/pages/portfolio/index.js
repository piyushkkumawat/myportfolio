import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
      <div className="mb-5 po_items_ho grid grid-rows-3 grid-flow-col gap-6">
  {dataportfolio.map((data, i) => (
    <div key={i} className="po_item bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <img src={data.img} alt={data.title} className="w-full h-48 object-cover" />
      <div className="content p-4">
        <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{data.description}</p>
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          View Project
        </a>
      </div>
    </div>
  ))}
</div>


      </Container>
    </HelmetProvider>
  );
};
