import "../globals.css";
import { plans } from "../../constants/index";
import CheckoutButton from "@/components/CheckoutButton";
import SubscriptionButton from "@/components/SubscriptionButton";

const pricing = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center border-2 rounded-xl m-5 shadow-lg h-dvh">
          <div className="text-center">
            <h1 className="text-5xl font-bold p-5">Plans and Pricing</h1>
            <p className="text-xs">Recieve unlimited credits when you pay yearly, <br/> and save on your plan</p>
          </div>

          <div className="flex flex-row justify-center items-center">

            {
              plans.map((plan) => {
                return (
                  <div className={ plan.name === "Plus" ? "flex flex-col text-center items-center border-2 rounded-xl m-5 shadow-lg w-1/3 p-5 bg-black text-white hover:drop-shadow-2xl hover:bg-white hover:text-black" : "flex flex-col text-center items-center border-2 rounded-xl m-5 shadow-lg w-1/3 p-5 hover:bg-white hover:drop-shadow-2xl"}>
                  <p>{plan.name}</p> 
                  <p className="text-4xl font-bold pt-10">${plan.amount}</p>
                  <p className="text-xs pb-10">per user/month, billed annually</p>
                  {
                    plan.features.map((feature) => {
                      return (
                        <p>{feature}</p>
                      )
                    })
                  }
                  <SubscriptionButton planId={plan.priceid} planName={plan.name} />
                  {/* <CheckoutButton planAmount={plan.amount} planName={plan.name} /> */}
                </div>
                )
              })
            }

          </div>

        </div>
      </div>
  )
}

export default pricing