import React from 'react';
import MapEmbed from './MapEmbed'; 

function Hours() {
  return (
    <>
      {/* Header Image */}
      <div className="relative">
        <img 
          src={`${process.env.PUBLIC_URL}/images/DiningHall.jpeg`} 
          alt="Dining Hall"
          className="w-[100vw] h-[400px] object-cover" 
        />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold bg-black bg-opacity-50">
          Dining Hours
        </h2>
      </div>

      {/* Dining Hours List */}
      <div className="w-full max-w-screen-lg mx-auto p-6">
        {[
          ['Monday', 'Breakfast: 7:30am-10:30am', 'Lunch: 11:00am-2:00pm', 'Dinner: 4:45pm-8:00pm', 'Late Night: 9:00pm-11:00pm'],
          ['Tuesday', 'Breakfast: 7:30am-10:30am', 'Lunch: 11:00am-2:00pm', 'Dinner: 4:45pm-8:00pm', 'Late Night: 9:00pm-11:00pm'],
          ['Wednesday', 'Breakfast: 7:30am-10:30am', 'Lunch: 11:00am-2:00pm', 'Dinner: 4:45pm-8:00pm', 'Late Night: 9:00pm-11:00pm'],
          ['Thursday', 'Breakfast: 7:30am-10:30am', 'Lunch: 11:00am-2:00pm', 'Dinner: 4:45pm-8:00pm', 'Late Night: 9:00pm-11:00pm'],
          ['Friday', 'Breakfast: 7:30am-10:30am', 'Lunch: 11:00am-2:00pm', 'Dinner: 4:45pm-8:00pm', 'Late Night: CLOSED'],
          ['Saturday', 'Brunch: 9:00am-1:30pm', 'Dinner: 5:00pm-8:00pm', 'Late Night: CLOSED'],
          ['Sunday', 'Brunch: 9:00am-1:30pm', 'Dinner: 5:00pm-8:00pm', 'Late Night: 9:00pm-11:00pm']
        ].map(([day, ...meals], index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold mb-2">{day}</h3>
            <p className="mb-6 text-xl">
              {meals.map((meal, i) => (
                <React.Fragment key={i}>
                  {meal.includes(':') ? meal : `Brunch: ${meal}`}<br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>

      {/* New Section: Location with Map */}
      <div className="w-full max-w-screen-lg mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Our Location</h2>
        <MapEmbed />
      </div>
    </>
  );
}

export default Hours;
