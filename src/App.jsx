import bakingImg from '../Baking.jpg';
import brownieImg from '../brownie.webp';
import chocolateImg from '../chocolate.jpeg';
import vanillaImg from '../vanilla.jpeg';
import classicChocolateImg from '../classic chocolate.jpeg';
import redVelvetImg from '../valvet cupcakes.jpg';
import chocoCookiesImg from '../choco cookies.jpg';
import designCakeImg from '../design cake.jpg';
import bakehouseMark from './assets/bakehouse-mark.svg';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import CustomerPanel from './components/CustomerPanel.jsx';
import RiderPanel from './components/RiderPanel.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import RiderLogin from './components/RiderLogin.jsx';
// function App() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top navbar-bakehouse">
//         <div className="container">
//           <a className="navbar-brand fw-bold" href="#home">
//             <img className="brand-mark" src={bakehouseMark} alt="BakeHouse bakery logo" />
//             <span className="brand-wordmark">BakeHouse</span>
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse justify-content-end" id="navMenu">
//             <ul className="navbar-nav align-items-lg-center gap-lg-3">
//               <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
//               <li className="nav-item"><a className="nav-link" href="#recipes">Recipes</a></li>
//               <li className="nav-item"><a className="nav-link" href="#shop">Shop</a></li>
//               <li className="nav-item"><a className="nav-link" href="#custom">Customize</a></li>
//               <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
//               <li className="nav-item"><a className="btn btn-outline-dark btn-sm px-3 nav-action" href="#login">Login</a></li>
//               <li className="nav-item"><a className="btn btn-dark btn-sm px-3 nav-action" href="#cart">🛒 Cart</a></li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//  <section 
//   id="home" 
//   className="hero d-flex align-items-center"
//  style={{
//     background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bakingImg})`,
//   backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '600px'
// }}
// >
//           <div className="container text-center text-white">
//           <h1 className="hero-title">Bake it. Love it. Or Order it.</h1>
//           <p className="hero-sub">Fresh cakes, sweet recipes, and everything in between.</p>
//             <a href="#shop" className="btn btn-warning btn-lg me-2">Order Now</a>
//             <a href="#recipes" className="btn btn-outline-light btn-lg">Explore Recipes</a>
//         </div>
//       </section>

//       <section id="shop" className="py-5">
//         <div className="container">
//           <h2 className="section-title text-center mb-4">Featured Products</h2>
//           <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <div className="row justify-content-center g-4">
//                   <div className="col-12 col-md-4 mb-4">
//                     <div className="card product-card h-100">
//                       <img src={chocolateImg} className="card-img-top" alt="Chocolate Cake" style={{ width: '100%', objectFit: 'cover' }} />
//                       <div className="card-body text-center">
//                         <h5 className="card-title">Chocolate Cake</h5>
//                         <p className="card-text text-muted">PKR 3,500</p>
//                         <button type="button" className="btn btn-sm btn-dark product-action">Add to Cart</button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-12 col-md-4 mb-4">
//                     <div className="card product-card h-100">
//                       <img src={vanillaImg} className="card-img-top" alt="Cupcakes" style={{ width: '100%', objectFit: 'cover' }} />
//                       <div className="card-body text-center">
//                         <h5 className="card-title">Vanilla Cupcakes</h5>
//                         <p className="card-text text-muted">PKR 2,000</p>
//                         <button type="button" className="btn btn-sm btn-dark product-action">Add to Cart</button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-12 col-md-4 mb-4">
//                     <div className="card product-card h-100">
//                       <img src={brownieImg} className="card-img-top" alt="Brownies" style={{ width: '100%', objectFit: 'cover' }} />
//                       <div className="card-body text-center">
//                         <h5 className="card-title">Fudge Brownies</h5>
//                         <p className="card-text text-muted">PKR 1,600</p>
//                         <button type="button" className="btn btn-sm btn-dark product-action">Add to Cart</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="carousel-item">
//                 <div className="row justify-content-center g-4">
//                   <div className="col-12 col-md-4 mb-4">
//                     <div className="card product-card h-100">
//                       <img src="https://picsum.photos/seed/choco-chip-cookies/400/300" className="card-img-top" alt="Cookies" style={{ width: '100%', objectFit: 'cover' }} />
//                       <div className="card-body text-center">
//                         <h5 className="card-title">Choco Chip Cookies</h5>
//                         <p className="card-text text-muted">PKR 1,200</p>
//                         <button type="button" className="btn btn-sm btn-dark product-action">Add to Cart</button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-12 col-md-4 mb-4">
//                     <div className="card product-card h-100">
//                       <img src="https://picsum.photos/seed/red-velvet-cake/400/300" className="card-img-top" alt="Red Velvet Cake" style={{ width: '100%', objectFit: 'cover' }} />
//                       <div className="card-body text-center">
//                         <h5 className="card-title">Red Velvet Cake</h5>
//                         <p className="card-text text-muted">PKR 3,900</p>
//                         <button type="button" className="btn btn-sm btn-dark product-action">Add to Cart</button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-12 col-md-4 mb-4">
//                     <div className="card product-card h-100">
//                       <img src="https://picsum.photos/seed/glazed-donuts/400/300" className="card-img-top" alt="Donuts" style={{ width: '100%', objectFit: 'cover' }} />
//                       <div className="card-body text-center">
//                         <h5 className="card-title">Glazed Donuts</h5>
//                         <p className="card-text text-muted">PKR 1,800</p>
//                         <button type="button" className="btn btn-sm btn-dark product-action">Add to Cart</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
//               <span className="carousel-control-prev-icon"></span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
//               <span className="carousel-control-next-icon"></span>
//             </button>
//           </div>
//         </div>
//       </section>

//       <section id="recipes" className="py-5 bg-light">
//         <div className="container">
//           <h2 className="section-title text-center mb-4">Popular Recipes</h2>
//           <div className="row g-4">
//             <div className="col-md-4">
//               <div className="card recipe-card h-100">
//                 <img src={classicChocolateImg} className="card-img-top" alt="Chocolate Cake Recipe" />
//                 <div className="card-body">
//                   <h5 className="card-title">Classic Chocolate Cake</h5>
//                   <p className="card-text text-muted recipe-meta">Prep: 20 min | Difficulty: Easy</p>
//                   <button type="button" className="btn btn-sm btn-outline-dark recipe-action">View Recipe</button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card recipe-card h-100">
//                 <img src={redVelvetImg} className="card-img-top" alt="Red Velvet Recipe" />
//                 <div className="card-body">
//                   <h5 className="card-title">Red Velvet Cupcakes</h5>
//                   <p className="card-text text-muted recipe-meta">Prep: 30 min | Difficulty: Medium</p>
//                   <button type="button" className="btn btn-sm btn-outline-dark recipe-action">View Recipe</button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card recipe-card h-100">
//                 <img src={chocoCookiesImg} className="card-img-top" alt="Cookies Recipe" />
//                 <div className="card-body">
//                   <h5 className="card-title">Choco Chip Cookies</h5>
//                   <p className="card-text text-muted recipe-meta">Prep: 15 min | Difficulty: Easy</p>
//                   <button type="button" className="btn btn-sm btn-outline-dark recipe-action">View Recipe</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="custom" className="py-5 custom-cake-section">
//         <div className="container">
//           <div className="row align-items-center g-4">
//             <div className="col-md-7 custom-cake-media">
//               <img
//                 src={designCakeImg}
//                 className="img-fluid custom-cake-image"
//                 alt="Custom Cake"
//               />
//             </div>
//             <div className="col-md-5 custom-cake-copy">
//               <h2 className="section-title">Design Your Own Cake</h2>
//               <p className="text-muted">Choose flavor, size, frosting, toppings and write a custom message. Your cake, your way.</p>
//               <button type="button" className="btn btn-warning btn-lg custom-cake-action">Customize Now</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-5 bg-dark text-white text-center weekend-special">
//         <div className="container weekend-special-content">
//           <h2 className="section-title mb-3">Weekend Special</h2>
//           <p className="mb-4">Get 20% off on all cakes ordered this weekend. Use code <strong className="weekend-code">SWEET20</strong> at checkout.</p>
//           <a href="#shop" className="btn btn-warning btn-lg weekend-action">Shop Now</a>
//         </div>
//       </section>

//       <section id="about" className="py-5 about-section">
//         <div className="container text-center about-content">
//           <h2 className="section-title about-title">About BakeHouse</h2>
//           <p className="text-muted about-copy">
//             BakeHouse brings together bakers and home cooks — browse recipes to bake at home,
//             or order fresh cakes and treats made by our team, delivered to your door.
//           </p>
//         </div>
//       </section>

//       <footer className="py-4 bg-light text-center text-muted footer-bakehouse">
//         <p className="mb-0 footer-copy">&copy; 2026 BakeHouse. All rights reserved.</p>
//       </footer>
//     </>
//   );
// }
function App() {
  return (
    <div>
      <Register />
      {/* <Login /> */}
      {/* <AdminLogin /> */}
      {/* <AdminDashboard /> */}
      {/* <CustomerPanel/> */}
      {/* <RiderPanel /> */}
      {/* <RiderLogin /> */}
    </div>
  );
}


export default App;