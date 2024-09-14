import React from 'react'
import blog1 from "../../../assets/images/blog1.png"
import blog2 from "../../../assets/images/blog2.png"
import blog3 from "../../../assets/images/blog3.png"

import "./blog.modules.css"


const BlogSec = () => {
  return (
    <div className="blog__sec">
      <div className=" d-flex container justify-content-around align-items-center  ">
        <div className="text__content">
          <h3 className="text-uppercase ">OUR LATEST NEWS</h3>
          <p className="subtitle">
            A shopper's guide to making smart purchases
          </p>
        </div>
        <button className="btn  ms-auto border-0 p-2  ">
          <a
            className="text-uppercase bg-light text-dark text-decoration-none p-2 rounded-lg"
            href="/blog"
          >
            view all
            <i class="bi bi-arrow-up-right ms-2"></i>
          </a>
        </button>
      </div>
      <div className="cards__container  mt-5 mb-5 m-auto row">
        <a
          className="card__blog absolute col-lg-4 col-sm-12 mt-5 text-dark text-decoration-none rounded"
          href="/#"
        >
          <img src={blog1} alt="#" className="w-100 mb-2 p-0"></img>
          <p className="light ms-3">28 July 2022</p>
          <p className="fw-bold mb-0">Demystifying Product Labels</p>
          <div className="light">
            Have you ever felt overwhelmed by the technical jargon and symbols
            on product packaging? Fear not! In this blog, we break down common
            product labels, certifications, and claims, empowering you to
            understand what they mean and how they impact your purchase
            decisions. Whether it's deciphering ingredient lists, eco-friendly
            certifications, or quality seals, we've got you covered.
          </div>
        </a>

        <a
          className="card__blog absolute  col-lg-4 col-sm-12 mt-5 text-dark text-decoration-none rounded"
          href="/#"
        >
          <img src={blog2} alt="#" className="w-100 mb-2 "></img>
          <p className="light ms-3">28 July 2022</p>
          <p className="fw-bold mb-0 ">Demystifying Product Labels</p>
          <div className="light">
            Nothing is more disappointing than receiving a product that doesn't
            fit quite right. To help you avoid the hassle of returns and
            exchanges, we present a comprehensive guide to sizing and
            measurements. Whether you're shopping for clothing, footwear, or
            home appliances, learn how to measure accurately and use size charts
            effectively to ensure the perfect fit every time.
          </div>
        </a>

        <a
          className="card__blog absolute  col-lg-4 col-sm-12 mt-5 text-dark text-decoration-none rounded"
          href="/#"
        >
          <img src={blog3} alt="#" className="w-100 mb-2 "></img>
          <p className="light ms-3">28 July 2022</p>
          <p className="fw-bold mb-0">Demystifying Product Labels</p>
          <div className="light">
            Tired of seeing the same mainstream products everywhere? In this
            blog, we take you on a journey to discover hidden gems – unique and
            innovative products that are often overlooked. From independent
            designers to small businesses, uncover a world of creativity and
            quality that will not only enrich your life but also support
            talented entrepreneurs. Embrace the joy of owning one-of-a-kind
            treasures that stand out from the crowd.
          </div>
        </a>
      </div>
    </div>
  );
}

export default BlogSec