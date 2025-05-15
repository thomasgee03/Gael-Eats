import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Hero Section */}
      <div className="relative">
      <img 
        src={`${process.env.PUBLIC_URL}/images/OliverHall.jpeg`} 
        alt="Oliver Hall"
        className="w-[100vw] h-auto object-cover" />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold bg-black bg-opacity-50">
          Oliver Hall
        </h2>
      </div>

      <div className="w-[100%] max-w-screen-lg mx-auto p-6 text-center">
        <p className="mb-6 text-2xl">
          Oliver hall is the dining hall that accommodates Saint Mary’s students by offering a variety of food options to eat. Saint Mary’s College contracts with the Good Eating Company to provide food service in Oliver Hall, The Coffee Shop, and for many of the student socials. The College offers breakfast, lunch, and dinner during the week, and brunch and dinner on weekends. The Late Night Dining Program offered nightly gives students a break from studying (Sunday–Thursday).
        </p>
      </div>

      {/* Dining Plan Section */}
      <div className="relative">
        <img
          src={`${process.env.PUBLIC_URL}/images/FishSandwich.jpeg`} 
          alt="Fish Sandwich"
          className="w-[100vw] h-auto object-cover"
        />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-semibold bg-black bg-opacity-50">
          Dining Plan Options
        </h2>
      </div>

      <div className="w-[100%] max-w-screen-lg mx-auto p-6">
        <h3 className="text-2xl font-bold mb-2">5 Day Meal Plan:</h3>
        <p className="mb-6 text-2xl">
          5-Day Meal Plan with $100 Board Points* per term, offering unlimited access to Oliver hall Monday through Friday during hours of operation. This Meal Plan includes three (3) guest passes and one (1) faculty guest per term. **Remaining Board points from Fall roll over to Spring term, but do not roll over to next academic year.
        </p>

        <h3 className="text-2xl font-bold mb-2">7 Day Meal Plan:</h3>
        <p className="mb-6 text-2xl">
          7-Day Meal Plan with $40 Board Points* per term, offering unlimited access to Oliver hall during hours of operation. This Meal Plan includes three (3) guest passes and one (1) faculty guest per term. **Remaining Board points from Fall roll over to Spring term, but do not roll over to next academic year.
        </p>

        <h3 className="text-2xl font-bold mb-2">175 Block:</h3>
        <p className="mb-6 text-2xl">
          Residents living in Becket Hall and More Hall will have the 175 Block meal plan, where students have 175 swipes into Oliver Hall each semester. This meal plan is included in the room/board costs for Becket/More residents, and Townhouse residents can increase their meal plan from their included 75 Block meal plan to the 175 Block meal plan for an additional cost.
        </p>

        <h3 className="text-2xl font-bold mb-2">75 Block:</h3>
        <p className="mb-6 text-2xl">
          Residents living in the Townhouse Apartments will have the 75 Block meal plan, where they will have 75 swipes into Oliver Hall per semester. Townhouse residents can increase their meal plans from this base included meal plan to either the 175 Block meal plan, or the 5 Day / 7 Day meal plan for an additional cost that's not included in base room/board costs for townhouses.
        </p>
      </div>
    </div>
  )
}
