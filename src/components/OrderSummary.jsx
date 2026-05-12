import products from "../data/products"

function OrderSummary() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 mt-6">

      <h2 className="text-2xl font-bold mb-4">
        Order Summary
      </h2>

      {products.map((item) => (
        <div
          key={item.id}
          className="flex justify-between mb-3"
        >
          <p>{item.name}</p>
          <p>₹{item.price}</p>
        </div>
      ))}

      <hr className="my-4" />

      <div className="flex justify-between font-bold text-lg">
        <p>Total</p>
        <p>₹4999</p>
      </div>

    </div>
  )
}

export default OrderSummary