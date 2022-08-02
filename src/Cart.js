import React from "react";


export default function Cartjs(props) {
    const { value,index,setCartLength,cartLength } = props;
    console.log(cartLength);

    const {
        sale,
        title,
        actualPrice,
        price,
        addToCart,
        viewOptions,
        rating
    } = value;


    // Comment
    const [cartButton, setCartButton] = React.useState(false);

    const newcart = [...cartLength, index]

  return (
    <div className="col mb-5">
      <div className="card h-100">
      {sale ? <div className="badge bg-dark text-white position-absolute" >Sale</div> : null}
    
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            {rating ? <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
            </div> : null}
            {actualPrice ? <span className="text-muted text-decoration-line-through">{actualPrice}</span> : null}
            {price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
             <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {setCartLength(newcart)}} style={cartLength.includes(index) ? {background:"grey", pointerEvents: "none" } : null}> 
             {viewOptions ? "View Options" : "Add To Cart" }
            </a>
          </div> 
        </div>
      </div>
    </div>
  );
}
