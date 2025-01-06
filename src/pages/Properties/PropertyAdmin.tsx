
import PropertyCard from "@/components/PropertyCard/PropertyCard";
import { useGetMyProperty } from "@/hooks/apis/property/useGetMyProperty";
import { LoaderCircle } from "lucide-react";
import { Key } from "react";
import { useNavigate } from "react-router-dom";




export default function PropertyAdmin() {

  const { data: properties, isPending, isError } = useGetMyProperty();

  const navigate = useNavigate();


  return (
    <>
      <h1 className="text-2xl font-semibold px-10 pt-5 pb-5">Property List</h1>
      {isPending && <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoaderCircle className="animate-spin size-10" />
      </div>}
      {isError && <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-center">
          <h3 className="text-5xl font-bold text-red-600">500</h3>
          <h4 className="text-2xl mt-4">Internal Server Error</h4>
          <p className="text-gray-600 mt-2 dark:text-[#ccc]">Oops! Something went wrong on our end.</p>
          <p><span className="text-md cursor-pointer text-blue-400" onClick={() => navigate("./login")}>login</span> again</p>
        </div>
      </div>}
      <div className="grid grid-cols-2 h-screen p-5 max-xl:grid-cols-1 bg-[#f0efef] dark:bg-[#202020]">
        {properties?.property?.map((property: { _id: Key | null | undefined; name: string; images: string; location: string; price: string; }) => {
          return (
            <div className="flex h-fit border border-[#7c7c7c] dark:border-white rounded-xl" key={property._id}>
              <PropertyCard
                name={property.name}
                image={property.images}
                location={property.location}
                price={property.price}
                beds={2}
              />
              <div className="flex flex-col justify-between p-5">
                <button className="bg-blue-700 rounded-xl px-5 py-1">Edit</button>
                <button className="bg-red-600 rounded-xl px-5 py-1">Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
