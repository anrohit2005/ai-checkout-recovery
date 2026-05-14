import { useState } from "react"

import CheckoutForm from "../components/CheckoutForm"
import AIChatBox from "../components/AIChatBox"
import OrderSummary from "../components/OrderSummary"

function Checkout() {

  const [aiMessage, setAiMessage] = useState(
    "Need help with coupons, shipping, or payment?"
  )

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2">

          <CheckoutForm setAiMessage={setAiMessage} />

          <OrderSummary />

        </div>

        <AIChatBox message={aiMessage} />

      </div>

    </div>
  )
}

export default Checkout