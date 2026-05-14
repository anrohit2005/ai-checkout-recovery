import { useEffect, useState } from "react"

function AIChatBox() {

  const [message, setMessage] = useState(
    "Need help with coupons, shipping, or payment?"
  )

  useEffect(() => {

    const timer = setTimeout(() => {

      setMessage(
        "Having trouble completing checkout? I can help."
      )

    }, 15000)

    return () => clearTimeout(timer)

  }, [])

  return (

    <div className="bg-white rounded-2xl shadow-lg p-5 h-fit">

      <h2 className="text-2xl font-bold mb-4">
        AI Assistant
      </h2>

      <div className="bg-gray-100 p-4 rounded-xl">

        <p className="text-gray-700">
          {message}
        </p>

      </div>

    </div>
  )
}

export default AIChatBox