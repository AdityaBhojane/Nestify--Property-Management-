
import image from "@/apis/Image 2.jpg";
import PropertyCard from "@/components/PropertyCard/PropertyCard";



export default function PropertiesPage() {

  const data = [
    {
      name: "Metro Jayankrarta Hotel spa",
      location: "North Carolina,USA",
      price: '$7400',
      beds: 6
    },
    {
      name: "Star Hotel Apartment",
      location: "North Carolina,USA",
      price: '$7400',
      beds: 2
    },
    {
      name: "Levendar Apartment",
      location: "South Carolina,USA",
      price: '$7400',
      beds: 1
    },
    {
      name: "Metro Jayankrarta Hotel spa",
      location: "North Carolina,USA",
      price: '$7400',
      beds: 3
    },
    {
      name: "Levendar Apartment",
      location: "South Carolina,USA",
      price: '$7400',
      beds: 1
    },
    {
      name: "Metro Jayankrarta Hotel spa",
      location: "North Carolina,USA",
      price: '$7400',
      beds: 3
    },
    {
      name: "Levendar Apartment",
      location: "South Carolina,USA",
      price: '$7400',
      beds: 1
    },
    {
      name: "Metro Jayankrarta Hotel spa",
      location: "North Carolina,USA",
      price: '$7400',
      beds: 3
    },
  ]

  return (
    <>
      <h1 className="text-2xl font-semibold px-10 pt-5 pb-5">Property List</h1>
      <div className="grid grid-cols-2 p-5 max-xl:grid-cols-1 bg-[#f0efef] dark:bg-[#202020]">
        {data.map((items, index)=>{
          return (
            <>
              <div key={index}>
                <PropertyCard 
                image={image} 
                name={items.name}
                location={items.location}
                price ={items.price}
                beds={items.beds}
                />
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
