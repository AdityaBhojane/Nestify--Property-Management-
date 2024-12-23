import { BarChartMix } from "@/components/BarChart/BarChartMix";
import { Chart } from "@/components/Chart/Chart";
import { PiChart } from "@/components/pi Chart/PiChart";
import { useStatistic } from "@/hooks/apis/auth/useStatistic";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export default function Dashboard() {

  const {statistic,isError,isFetching} = useStatistic();

  const [angle,setAngle] = useState(0);
  const [propertyAngle,setPropertyAngle] = useState(0);
  const [cityAngle,setCityAngle] = useState(0);

  const agents = parseInt(statistic?.totalAgents)
  const customer = parseInt(statistic?.totalCustomers)
  const properties = parseInt(statistic?.totalProperties)
  const cities = parseInt(statistic?.totalCities);
  const navigate = useNavigate();


  useEffect(()=>{
    if(statistic || agents && customer){
      const anglePerPerson = 360/(agents+customer);
      setAngle(Math.floor(anglePerPerson))
      const anglePerCity = (360/100);
      setCityAngle(Math.floor(anglePerCity));
      const propertiesPerCity = (properties/cities);
      const percentage = (propertiesPerCity/200)*100;
      const angleForProperty = 360*percentage
      setPropertyAngle(Math.floor(angleForProperty))
    }
  },[agents,customer,statistic,properties,cities]);
 

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
      {isFetching && <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoaderCircle className="animate-spin size-10" />
      </div>}
      {isError && <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-center">
          <h3 className="text-5xl font-bold text-red-600">500</h3>
          <h4 className="text-2xl mt-4">Internal Server Error</h4>
          <p className="text-gray-600 mt-2 dark:text-[#ccc]">Oops! Something went wrong on our end.</p>
          <p><span className="text-md cursor-pointer text-blue-400" onClick={()=> navigate("./login")}>login</span> again</p>
        </div>
      </div>} 
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >
          <div className="grid grid-cols-2 max-md:grid-cols-1">
            <Chart priceRanges={statistic?.priceRanges} />
            <BarChartMix statistic={statistic?.propertyTypeCounts}/>
          </div>
          <div className="grid auto-rows-min gap-4 grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="min-w-52">
            <PiChart title={"Total Customers"} color={"#708090"} count={customer || 0} angle={customer*angle || 0}/>
          </div>
          <div className="min-w-52">
            <PiChart title={"Total Properties"}  color={"#4682B4"} count={properties || 0} angle={propertyAngle || 0}/>
          </div>
          <div className="min-w-52">
            <PiChart title={"No. of Cities"}   color={"#6B8E23"} count={cities || 0} angle={cities*cityAngle || 0}/>
          </div>
          <div className="min-w-52">
            <PiChart title={"No. of Agents"}   color={"#8B4513"} count={agents || 0} angle={agents*angle || 0}/>
          </div>
        </div>
        </div>
      </div>
    </>


  )
}

