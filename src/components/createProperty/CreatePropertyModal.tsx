import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setPropertyModal } from "@/redux/slice/modalSlice";

interface PropertyFormData {
  name: string;
  description: string;
  images: string;
  price: number | string;
  location: string;
  city: string;
  cityPin: number | string;
  purpose: string;
  PropertyType: string;
}

const CreatePropertyModal: React.FC = () => {
  const [formData, setFormData] = useState<PropertyFormData>({
    name: "",
    description: "",
    images: "",
    price: "",
    location: "",
    city: "",
    cityPin: "",
    purpose: "",
    PropertyType: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const updatePropertyModal = useSelector((state:RootState)=> state.modal.updatePropertyModal)
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "cityPin" ? Number(value) : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validation based on backend schema
    if (!formData.name || formData.name.length < 5) newErrors.name = "Name must be at least 5 characters long.";
    if (!formData.description || formData.description.length < 10)
      newErrors.description = "Description must be at least 10 characters long.";
    if (!formData.images) newErrors.images = "Image URL is required.";
    if (!formData.price || isNaN(Number(formData.price))) newErrors.price = "Valid price is required.";
    if (!formData.location) newErrors.location = "Location is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.cityPin || isNaN(Number(formData.cityPin))) newErrors.cityPin = "Valid city PIN is required.";
    if (!formData.purpose) newErrors.purpose = "Purpose is required.";
    if (!formData.PropertyType) newErrors.PropertyType = "Property type is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Data:", formData);
      // Submit form data to the backend
    }
  };

  return (
    <Dialog
     open={updatePropertyModal}
     onOpenChange={()=>dispatch(setPropertyModal())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter property name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter property description"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>
          <div>
            <Label htmlFor="images">Image URL</Label>
            <Input
              id="images"
              name="images"
              value={formData.images}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
            {errors.images && <p className="text-red-500 text-sm">{errors.images}</p>}
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter property price"
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>
          <div>
            <Label htmlFor="cityPin">City PIN</Label>
            <Input
              id="cityPin"
              name="cityPin"
              type="number"
              value={formData.cityPin}
              onChange={handleChange}
              placeholder="Enter city PIN"
            />
            {errors.cityPin && <p className="text-red-500 text-sm">{errors.cityPin}</p>}
          </div>
          <div>
            <Label htmlFor="purpose">Purpose</Label>
            <Select onValueChange={(value) => handleSelectChange("purpose", value)}>
              <SelectTrigger>
                <Input placeholder="Select purpose" value={formData.purpose} readOnly />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="sale">Sale</SelectItem>
              </SelectContent>
            </Select>
            {errors.purpose && <p className="text-red-500 text-sm">{errors.purpose}</p>}
          </div>
          <div>
            <Label htmlFor="PropertyType">Property Type</Label>
            <Select onValueChange={(value) => handleSelectChange("PropertyType", value)}>
              <SelectTrigger>
                <Input placeholder="Select property type" value={formData.PropertyType} readOnly />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="office">Office</SelectItem>
                <SelectItem value="shop">Shop</SelectItem>
                <SelectItem value="plot">Plot</SelectItem>
              </SelectContent>
            </Select>
            {errors.PropertyType && <p className="text-red-500 text-sm">{errors.PropertyType}</p>}
          </div>
        </form>
        <DialogFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePropertyModal;
