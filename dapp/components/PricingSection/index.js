import React from "react";
import { useForm } from "../../hooks/useForm";
import { useFetch } from "../../hooks/useFetch";
import info from "../../data/card-info-content.json";
import CardPricing from "../CardPricing";

const PricingSection = () => {
  const { loading, data } = useFetch(``);

  const [formValues, handleInputChange] = useForm({
    amountPlanOne: "",
    amountPlanTwo: "",
    amountPlanThree: "",
  });

  const { DateOne, DateTwo, DateThree, DateFour, DateFive } = info;

  const { amountPlanOne, amountPlanTwo, amountPlanThree } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container mx-auto px-4 py-24 bg-[#030217]">
        <div className="lg:flex lg:items-center lg:-mx-2">
          <div className="bg-[#000000] mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
            <CardPricing loading={true}
            title='Plan 1'
            amountPlanOne={0.001}  />
            </div>

          <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 bg-[#000000]">
          <CardPricing loading={true}
            title='Plan 2'
            amountPlanOne={0.001}  />            
          </div>

          <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 bg-[#000000]">          
          <CardPricing loading={true}
            title='Plan 3'
            amountPlanOne={0.001}  />            
          </div>
        </div>
      </div>
    </>
  );
};
export default PricingSection;
