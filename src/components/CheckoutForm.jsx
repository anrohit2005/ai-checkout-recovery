import { useState } from "react"

function CheckoutForm({ setAiMessage }) {

  const [coupon, setCoupon] = useState("")
  const [paymentChanges, setPaymentChanges] = useState(0)
const handlePaymentChange = () => {

  const newCount = paymentChanges + 1

  setPaymentChanges(newCount)

  if (newCount >= 3) {

    setAiMessage(
      "Having payment trouble? Cash on Delivery may be easier."
    )

  }

}
  const handleCouponChange = (e) => {

    const value = e.target.value

    setCoupon(value)

    if (value === "SAVE50") {

      setAiMessage(
        "That coupon is invalid. Try SAVE10 for 10% off."
      )

    }

  }

  return (

    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h1 className="text-5xl font-bold mb-10">
        Checkout
      </h1>

      <div className="flex flex-col gap-6">

        <input
          type="text"
          placeholder="Full Name"
          className="border p-5 rounded-xl text-xl"
        />

        <input
          type="text"
          placeholder="Address"
          className="border p-5 rounded-xl text-xl"
        />

        <select
  onChange={handlePaymentChange}
  className="border p-5 rounded-xl text-xl"
>

          <option>
            Cash on Delivery
          </option>

          <option>
            UPI
          </option>

          <option>
            Credit Card
          </option>

        </select>

        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={handleCouponChange}
          className="border p-5 rounded-xl text-xl"
        />

        <button
          className="bg-black text-white p-5 rounded-xl text-xl"
        >
          Place Order
        </button>

      </div>

    </div>
  )
}

export default CheckoutForm