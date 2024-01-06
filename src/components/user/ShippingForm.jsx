export default function ShippingForm(){
    return (
      <>
        <form>
            <div className="grid grid-cols-12 gap-5 login">
                <div className="col-span-12">
                    <h2 className="text-2xl font-bold text-black">Add Shipping Info</h2>
                </div>

                <div className="col-span-12 lg:col-span-6">
                    <label htmlFor="CustomerName">Customer Name</label>
                    <input type="text" className="login-input w-full" placeholder="eg: John Doe"  />
                </div>

                <div className="col-span-12 lg:col-span-6">
                    <label htmlFor="CustomerEmail">Customer Email</label>
                    <input type="email" className="login-input w-full" placeholder="eg: example@mail.com" />
                </div>

                <div className="col-span-12 lg:col-span-6">
                    <label htmlFor="PhoneNo">Phone No</label>
                    <input type="text" className="login-input w-full" placeholder="eg: +1234567890" />
                </div>

                <div className="col-span-12 lg:col-span-6">
                    <label htmlFor="Postcode">Post Code</label>
                    <input type="text" className="login-input w-full" placeholder="eg: 62105" />
                </div>

                <div className="col-span-12">
                    <label htmlFor="Address">Address</label>
                    <input type="text" className="login-input w-full" placeholder="eg: New York, United States" />
                </div>

                <div className="col-span-12 lg:col-span-6">
                    <label htmlFor="City">City/Town</label>
                    <input type="text" className="login-input w-full" placeholder="eg: New York" />
                </div>

                <div className="col-span-12 lg:col-span-6">
                    <label htmlFor="State">State</label>
                    <input type="text" className="login-input w-full" placeholder="eg: United States" />
                </div>

                <div className="col-span-12">
                    <button type="submit" className="bg-brand text-white py-2 w-full rounded-md">Save Address & Deliver Here</button>
                </div>
                
            </div>
        </form>
      </>
    )
}