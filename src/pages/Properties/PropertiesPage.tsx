
import PropertyCard from "@/components/PropertyCard/PropertyCard";
import { useGetProperties } from "@/hooks/apis/auth/useGetProperties";
import { LoaderCircle } from "lucide-react";
import { Key } from "react";




export default function PropertiesPage() {

  const { properties, isPending, isError } = useGetProperties();


  console.log(properties?.property)
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
          <p className="text-gray-600 mt-2">Oops! Something went wrong on our end.</p>
        </div>
      </div>}
      <div className="grid grid-cols-2 h-screen p-5 max-xl:grid-cols-1 bg-[#f0efef] dark:bg-[#202020]">
        {properties?.property?.map((property: { _id: Key | null | undefined; name: string; images: string; location: string; price: string; }) => {
          return (
            <div key={property._id}>
              <PropertyCard
                name={property.name}
                image={property.images}
                location={property.location}
                price={property.price}
                beds={2}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}
