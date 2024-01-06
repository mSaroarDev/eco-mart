import ShippingForm from "@/components/user/ShippingForm";

export default function ShippingPage(){
    return (
      <>
        <div>
            <h1 className="text-lg font-bold text-black">Shipping Adress</h1>
            <p className="text-gray-600 text-sm">The shipping address for product delivery</p>
          </div>

          {/* shipping form */}
          <div className="mt-10">
            <ShippingForm />
          </div>
      </>
    )
}