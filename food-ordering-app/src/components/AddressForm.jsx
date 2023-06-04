import { useForm } from "react-hook-form";
import Button from "./elements/Button";
import { ReactComponent as ArrowRightSvg } from "../assets/icons/arrow-right-long-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { setAddress } from "../stores/userInfo/addressSlice";
import React, { useState } from 'react';
import Select from 'react-select';

const cityOptions = [
    { value: 'New York', label: 'New York' },
    { value: 'London', label: 'London' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Tokyo', label: 'Tokyo' },
    // Add more city options as needed
  ];

  const Autocomplete = () => {
    const [selectedCity, setSelectedCity] = useState(null);
  
    const handleCityChange = (selectedOption) => {
      setSelectedCity(selectedOption);
    };
  return (
      <div>
        <h1>City </h1>
        <Select
          value={selectedCity}
          onChange={handleCityChange}
          options={cityOptions}
          placeholder="Type a city name..."
        />
        {selectedCity && (
          <div>
            <h2>Selected City:</h2>
            <p>{selectedCity.label}</p>
          </div>
        )}
      </div>
    );
  };
  
//export default Autocomplete;

export const AddressForm = ({ onTabSwitch }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(setAddress(data));
        onTabSwitch('Payment');
    }

    return (
        <form className="md:w-2/3 md:mx-auto px-3 pt-1" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="pt-4 text-2xl md:text-center">Address for the delivery</h3>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="streetAddress">Street Address</label>
                <input 
                    {...register('address', { required: true })}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="street address"
                    type="text"
                    placeholder="Street Address"
                    />
                {errors.address && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="city">City</label>
                    <input 
                    {...register('city')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="city"
                    type="text"
                    placeholder="City"
                    />
                    <Autocomplete/>
                    {errors.address && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="state">State</label>
                    <input 
                    {...register('state')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="state"
                    type="text"
                    placeholder="state"
                    />
                    {errors.address && <span className="text-red-500">This field is required</span>}
                </div>
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="postalCode">Pin Code</label>
                    <input 
                    {...register('postalCode')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="postal code"
                    type="text"
                    placeholder="Pin Code"
                    />
                    {errors.address && <span className="text-red-500">This field is required</span>}
                </div>
            </div>
            <div className="flex justify-end p-2">
                <Button variant="dark" className="flex items-center" type="submit"><span className="mr-1">Next</span><ArrowRightSvg /></Button>
            </div>
        </form>
    )
}