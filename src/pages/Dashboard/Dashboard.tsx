import { BarChartMix } from "@/components/BarChart/BarChartMix";
import { Chart } from "@/components/Chart/Chart";
import { PiChart } from "@/components/pi Chart/PiChart";




export default function Dashboard() {

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >
          <div className="grid grid-cols-2 max-md:grid-cols-1">
            <Chart />
            <BarChartMix />
          </div>
          <div className="grid auto-rows-min gap-4 grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="min-w-52">
            <PiChart title={"Total Customers"} color={"#708090"} count={12} angle={60}/>
          </div>
          <div className="min-w-52">
            <PiChart title={"Total Properties"}  color={"#4682B4"} count={30} angle={190}/>
          </div>
          <div className="min-w-52">
            <PiChart title={"No. of Cities"}   color={"#6B8E23"} count={50} angle={100}/>
          </div>
          <div className="min-w-52">
            <PiChart title={"No. of Agents"}   color={"#8B4513"} count={5} angle={100}/>
          </div>
        </div>
        </div>
      </div>
    </>


  )
}

