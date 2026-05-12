function CheckoutForm() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border p-3 rounded-xl mb-4"
      />

      <input
        type="text"
        placeholder="Address"
        className="w-full border p-3 rounded-xl mb-4"
      />

      <select
        className="w-full border p-3 rounded-xl mb-4"
      >
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Credit Card</option>
      </select>

      <input
        type="text"
        placeholder="Coupon Code"
        className="w-full border p-3 rounded-xl mb-4"
      />

      <button
        className="w-full bg-black text-white py-3 rounded-xl"
      >
        Place Order
      </button>

    </div>
  )
}

export default CheckoutForm