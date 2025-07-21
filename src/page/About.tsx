import { useContext } from 'react'
import { ShopContext } from "@components/context/ShopContext";

function About() {
  const { products } = useContext(ShopContext);
  console.log(products);
  
  return (
    <div>About</div>
  )
}

export default About