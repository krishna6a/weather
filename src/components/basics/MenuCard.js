import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {/* js-code inside "{}" inside JSX-code */}
        {menuData.map((currElem, i) => {
          const { id, name, image, price, category, description } = currElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {i + 1}
                    </span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  {/* ---- you have to close every tag, even img tag using "/"----- */}
                  <img src={image} alt="" />
                  <div>
                    {/* <h3>{price}</h3> */}
                    <span className="card-tag subtle">{price} | Order Now</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
