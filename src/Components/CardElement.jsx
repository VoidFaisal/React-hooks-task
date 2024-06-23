import React from "react";

const CardElement = (props) => {
  return (
    <>
      <div
        className="bg-white rounded-xl shadow-md relative flex-1 min-w-[300px]"
        key={props.index}
      >
        <div className="p-4">
            <img className="relative py-4 " src={props.flow.photo} alt={props.flow.name} />
          <div className="mb-5">{props.flow.instructions}</div>
          <h3 className="text-indigo-500 mb-2">{props.flow.price}$</h3>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <i className="fa-solid fa-location-dot text-lg"></i>
              {props.flow.category}
            </div>
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default CardElement;
