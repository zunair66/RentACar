// import React from "react";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import { products } from "../../Database/data";
// import Card from "../../components/Card/Card";
// import './Category.scss'
// import Filters from "../../components/Filters/Filters";
// const Category = () => {
//   return (
//     <div className="category">
//       <Header />
//       <Filters/>
//       <div className="parent-card">
//       {products.map((item, index) => (
//         <div className="cat-card">
//           <Card item={item} index={index} />
//         </div>
//       ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Category;




import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { products } from "../../Database/data";
import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters";
import "./Category.scss";

const Category = () => {
  return (
    <div className="category">
      <Header />
      <div className="category-content">
        <div className="filters">
          <Filters />
        </div>
        <div className="cards">
          <div className="parent-card">
            {products.map((item, index) => (
              <div className="cat-card" key={index}>
                <Card item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
