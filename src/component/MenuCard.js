import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card-container">
        {menuData.map((curElm) => {
          return (
            <div className="container text-center">
              <div className="row">
                <div className="col">
                <div className="card-container" key={curElm.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={curElm.image}
                  className="card-img-top"
                  alt="my-images"
                />
                <div className="card-body">
                  <span>{curElm.id}</span>
                  <p>
                    <a
                      className="btn btn-primary"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      {curElm.name}
                    </a>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">{curElm.description}</div>
                  </div>
                </div>
              </div>
            </div>
                </div>
                 
              </div>
            </div>





             
          )
        })}
      </section>
    </>
  );
};

export default MenuCard;
