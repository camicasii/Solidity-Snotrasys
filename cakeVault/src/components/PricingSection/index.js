import React from "react";
import { useForm } from "../../hooks/useForm";
import { useFetch } from "../../hooks/useFetch";
import info from "../../data/card-info-content.json";
import CardPricing from "../CardPricing";

export default function PricingSection() {
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
      <div className="container mx-auto px-4 py-24 bg-[]">
        <div className="flex justify-center -mx-2">
          <div className="bg-[] mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
            
            </div>

        </div>
      </div>
    </>
  );
};

