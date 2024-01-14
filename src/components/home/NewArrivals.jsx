import React from "react"
import SectionTitle from "../utilities/SectionTitle"
import ProductCart from "../product/ProductCart"
import AnalogueWatch from "../../assets/images/productImage/analogue watch.jpg"
import DigitalWatch from "../../assets/images/productImage/digital watch.jpg"
import Bag from "../../assets/images/productImage/bag.jpg"
import Doll from "../../assets/images/productImage/doll.jpg"

const NewArrivals = () => {
  let allProducts = [
    {
      id: 0,
      productName: "analogue watch",
      productPrice: "1250",
      isNew: "true",
      discount: "false",
      color: "false",
      productImage: AnalogueWatch,
    },
    {
      id: 1,
      productName: "digital watch",
      productPrice: "2270",
      isNew: "false",
      discount: "10",
      color: "black",
      productImage: DigitalWatch,
    },
    {
      id: 2,
      productName: "bag",
      productPrice: "250",
      isNew: "true",
      discount: "false",
      color: "red",
      productImage: Bag,
    },
    {
      id: 3,
      productName: "doll",
      productPrice: "840",
      isNew: "false",
      discount: "false",
      color: "gray",
      productImage: Doll,
    },
  ]
  return (
    <section className="mt-[128px]">
      <div className="max-w-container mx-auto">
        <SectionTitle />
        <div className="grid grid-cols-4 gap-10 mt-12">
          {allProducts.map((item, index) => (
            <ProductCart
              id={item.id}
              productImage={item.productImage}
              productName={item.productName}
              productPrice={item.productPrice}
              isNew={item.isNew}
              discount={item.discount}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
