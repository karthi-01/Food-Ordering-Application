import { useForm } from "react-hook-form";
import Button from "./elements/Button";
import { ReactComponent as ArrowRightSvg } from "../assets/icons/arrow-right-long-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { setAddress } from "../stores/userInfo/addressSlice";
import { useState, useEffect } from 'react';
export const AddressForm = ({ onTabSwitch }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(setAddress(data));
        onTabSwitch('Payment');
    }

    const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

    return (
        <form className="md:w-2/3 md:mx-auto px-3 pt-1" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="pt-4 text-2xl md:text-center block mb-2  font-bold ">Address for the delivery</h3>
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
            <div>
    <div className="mb-4 md:flex md:justify-between">          
      <div className="mb-4 md:mr-2 md:mb-0 flex-1">
       <label className="block mb-2 text-sm font-bold text-gray-700" for="State">State</label>
        <select value={selectedState} onChange={handleStateChange}>
          <option value="">-- Select a state --</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Punjab">Punjab</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Karnataka">Karnataka</option>
          <option value="New Delhi">New Delhi</option>
        </select>
      </div>
      <div className="mb-4 md:mr-2 md:mb-0 flex-1">
      <label className="block mb-2 text-sm font-bold text-gray-700" for="city">City</label>
        <select value={selectedCity} onChange={handleCityChange}>
          <option value="">-- Select a city --</option>
          {selectedState === 'Gujarat' && (
            <>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Surat">Surat</option>
              <option value="Vadodara">Vadodara</option>
            </>
          )}
          {selectedState === 'Maharashtra' && (
            <>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Thane">Thane</option>
            </>
          )}
          {selectedState === 'Punjab' && (
            <>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Amritsar">Amritsar</option>
              <option value="Ludhiana">Ludhiana</option>
            </>
          )}
          {selectedState === 'Tamil Nadu' && (
            <>
              <option value="Chennai">Chennai</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Madurai">Madurai</option>
            </>
          )}
          {selectedState === 'Uttar Pradesh' && (
            <>
              <option value="Lucknow">Lucknow</option>
              <option value="Varanasi">Varanasi</option>
              <option value="Agra">Agra</option>
              <option value="Kanpur">Kanpur</option>
            </>
          )}
          {selectedState === 'Karnataka' && (
            <>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mysore">Mysore</option>
              <option value="Mangalore">Mangalore</option>
            </>
          )}
          {selectedState === 'New Delhi' && (
            <>
              <option value="Delhi City">Delhi City</option>
            </>
          )}
        </select>
      </div>
      </div>
      {errors.address && <span className="text-red-500">This field is required</span>}
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