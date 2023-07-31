import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Yoga Mat"
          price={500}
          description="Useful for exercising and yoga"
        />
        <ProductItem
          title="Badminton Rockets"
          price={1500}
          description="Durable and Light-weight"
        />
        <ProductItem
          title="CEAT Cricket Bat"
          price={8000}
          description="Grade-A English Willow"
        />
        <ProductItem
          title="SG Leather Ball"
          price={650}
          description="Premium leather ball for competitive Cricket"
        />
      </ul>
    </section>
  );
};

export default Products;
