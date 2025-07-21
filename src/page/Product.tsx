import { constants } from "@components/constant";
import { useParams } from "@tanstack/react-router";

function Product() {
  const { id } = useParams({ from: `${constants.product}/$id` });
  console.log(id);

  return <div>cdssc</div>;
}

export default Product;
