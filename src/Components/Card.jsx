import React from "react";
import { useState, useEffect } from "react";
import CardElement from './CardElement';
import { Link } from "react-router-dom";
const card = ({isHome = false}) => {
  const [phool, setPhool] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch_flower = async () => {
      try {
        const flowers = await fetch('/api/flowerlist');
        const fetched = await flowers.json();
        setPhool(fetched);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };
    fetch_flower();
  }, []);

    const flowerlist = isHome ? phool:phool.slice(0,3);
  return (
    <>
      <section className={`bg-blue-50 px-4 py-10 ${isHome?'pt-40':''}`}>
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome? "AllFlowers" : "Recent Flowers"}
          </h2>
          <div className="flex flex-wrap gap-6">
            {/* <!-- Job Listing 1 --> */}
            {flowerlist.map((flow, index) => (
              <CardElement flow={flow} index={index}/>
            ))}
          </div>
        </div>
      </section>
      {isHome? '':<section class="m-auto max-w-lg my-10 px-6">
      <Link
        to="allflowers"
        class="block bg-gray-700 text-white text-center py-4 px-6 rounded-xl hover:bg-indigo-700"
        >View All Flowers</Link>
    </section>}
    </>
  );
};

export default card;
