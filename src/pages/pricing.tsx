import Navbar from "@/components/Navbar";
import "../app/globals.css";

const pricing = () => {
  return (
    <div>
      <Navbar />
        <div className="flex flex-col justify-center items-center border-2 rounded-xl m-5 shadow-lg h-dvh">
          <div className="text-center">
            <h1 className="text-5xl font-bold p-5">Plans and Pricing</h1>
            <p className="text-xs">Recieve unlimited credits when you pay yearly, <br/> and save on your plan</p>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col text-left items-center border-2 rounded-xl m-5 shadow-lg w-4/4 p-10 hover:bg-white hover:drop-shadow-2xl">
              <p>Free</p> 
              <p className="text-4xl font-bold pt-10">$0</p>
              <p className="text-xs pb-10">per user/month, billed annually</p>
              <p>Free-email alerts </p>
              <p>3-minute checks </p>
              <p>automatic data enrichment</p>
              <p>10 monitors </p>
              <p>Up to 3 seats</p>
              <button className="rounded-lg text-xs pr-3 pl-3 pt-1 pb-1 mt-10 border-2"> Get started for free </button>
            </div>
            
            <div className="flex flex-col text-left items-center border-2 rounded-xl m-5 shadow-lg w-4/4 p-10 hover:bg-white hover:drop-shadow-2xl">
              <p>Pro</p> 
              <p className="text-4xl font-bold pt-10">$85</p>
              <p className="text-xs pb-10">per user/month, billed annually</p>
              <p>Free-email alerts </p>
              <p>3-minute checks </p>
              <p>automatic data enrichment</p>
              <p>10 monitors </p>
              <p>Up to 3 seats</p>
              <button className="rounded-lg text-xs pr-3 pl-3 pt-1 pb-1 mt-10 border-2"> Get started with Pro</button>
            </div>

            <div className="flex flex-col text-left items-center border-2 rounded-xl m-5 shadow-lg w-4/4 p-10 bg-black text-white hover:drop-shadow-2xl hover:bg-white hover:text-black">
              <p>Enterprise</p> 
              <p className="text-4xl font-bold pt-10">$Custom</p>
              <p className="text-xs pb-10">per user/month, billed annually</p>
              <p>Free-email alerts </p>
              <p>3-minute checks </p>
              <p>automatic data enrichment</p>
              <p>10 monitors </p>
              <p>Up to 3 seats</p>
              <button className="rounded-lg text-xs pr-3 pl-3 pt-1 pb-1 mt-10 border-2"> Get started with Enterprise </button>
            </div>

          </div>

        </div>
      </div>
  )
}

export default pricing