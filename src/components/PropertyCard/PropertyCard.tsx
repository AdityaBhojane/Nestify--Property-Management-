import { BedDouble, MapPin } from 'lucide-react';

interface PropertyCardProps {
    image: string,
    name: string
    location: string
    price: string
    beds: number
}

export default function PropertyCard({ image, name, location, price, beds }:PropertyCardProps ) {
    return (
        <>
            <div className="w-full flex items-center gap-5 p-4">
                <div className="min-w-[250px] max-w-[250px] rounded-xl">
                    <img src={image} alt="property image" className='rounded-xl w-full h-full cursor-pointer'/>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="bg-[#DADEFA] px-6 py-2 rounded-lg text-[#457BE8] font-semibold w-[120px]">${price}</span>
                    <h3 className='font-bold text-lg  cursor-pointer'>{name}</h3>
                    <div className="flex items-center gap-2 text-[#7e7e7e]">
                        <MapPin />
                        <p>{location}</p>
                    </div>
                    <span className="flex items-center gap-4">
                        <BedDouble />
                        {beds}
                    </span>
                </div>
            </div>
        </>
    )
}
