import React from 'react'
// import { useEffect } from 'react';
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card  = () => {
  const [tours, setTours] = useState([]);
  const getTours = async (api) => {
    const res = await fetch(api);
    const data = await res.json();
    setTours(data.data.Tours);
  };
  useEffect(() => {
    getTours("https://natours-aamir.cyclic.app/api/v1/tours");
    console.log(tours);
  }, []);
  return (
    <>
   
    <h1 className="text-center text-dark my-5">NATURE-TOURS</h1>
    
      <div className="container">
        <div className="row">
          <div className="col-lg-3 c0l-md-3 c0l-sm-6">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        
        <div className="col-lg-3 c0l-md-3 c0l-sm-6">
          <div class="card">
            <img
              src=""
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 c0l-md-3 c0l-sm-6">
          <div class="card">
            <img
              src=""
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 c0l-md-3 c0l-sm-6">
          <div class="card">
            <img
              src=""
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        &nbsp; &nbsp;
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 c0l-md-3 c0l-sm-6">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        
        <div className="col-lg-3 c0l-md-3 c0l-sm-6">
          <div class="card">
            <img
              src=""
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 c0l-md-3 c0l-sm-6">
          <div class="card">
            <img
              src=""
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 c0l-md-3 c0l-sm-6">
          <div class="card">
            <img
              src=""
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        
        </div>
      </div>

<fetch/>
    </>
  )
}

export default Card