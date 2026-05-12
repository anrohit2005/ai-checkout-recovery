import CheckoutForm from "../components/CheckoutForm"
import AIChatBox from "../components/AIChatBox"
import OrderSummary from "../components/OrderSummary"

function Checkout(){
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Section */}
        <div className="md:col-span-2">

          <CheckoutForm/>

          <OrderSummary/>

        </div>

        {/* Right Section */}
        <div>
          <AIChatBox />
        </div>

      </div>
      
    </div>
  )
}
export default Checkout