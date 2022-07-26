import React from "react";
import Cartjs from "./Cart";

export default function AddCart(props) {
  // const { value } = props;
  // const {
  //     title,
  //     actualPrice,
  //     price,
  //     isAdded,
  //     addToCart,
      //  }

    const [cartLength, setCartLength] = React.useState([])

    const newCartLength = []
    // React.useEffect(() =>{
    //    if (cartLength.length) newCartLength = cartLength.pop();

    // },[cartLength])

  let data = [
    {
      title: "Fancy Product",
      price: "$40.00 - $80.00",
      viewOptions: true,
      rating: false
    },
    {
      title: "Special Item",
      actualPrice: "$20.00",
      price: "$18.00",
      addToCart: false,
      sale: true,
      rating: true
    },
    {
      title: "Sale Item",
      actualPrice: "$50.00",
      price: "$25.00",
      addToCart: false,
      sale: true,
      rating: false
    },
    {
      title: "Popular Item",
      price: "$40.00",
      addToCart: false,
      sale: false,
      rating: true
    },
    {
      title: "Sale Item",
      actualPrice: "$50.00",
      price: "$25.00",
      addToCart: false,
      sale:true,
      rating: false
    },
    {
      title: "Fancy Product",
      price: "$120.00 - $280.00",
      viewOptions: false,
      rating: false
    },
    {
      title: "Special Item",
      actualPrice: "$20.00",
      price: "$18.00",
      addToCart: false,
      sale: true,
      rating: true
    },
    {
      title: "Popular Item",
      price: "$40.00",
      addToCart: false,
      rating: true
    },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button onClick={() => setCartLength(newCartLength)} className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cartLength.length} 
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((value, index) => {
              return <Cartjs value={value} index={index} setCartLength={setCartLength} cartLength={cartLength} />;
            })}
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
}
