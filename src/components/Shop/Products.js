import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="p-01"
          title="Yoga Mat"
          price={500}
          description="Useful for exercising and yoga"
        />
        <ProductItem
          id="p-02"
          title="Badminton Rackets (x2)"
          price={1500}
          description="Durable and Light-weight"
        />
        <ProductItem
          id="p-03"
          title="CEAT Cricket Bat"
          price={8000}
          description="Grade-A English Willow"
        />
        <ProductItem
          id="p-04"
          title="SG Leather Ball"
          price={650}
          description="Premium leather ball for competitive Cricket"
        />
      </ul>
    </section>
  );
};

export default Products;
