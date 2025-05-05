// src/pages/03-Hours.js
import React from 'react';

function Hours() {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-6 flex flex-col lg:flex-row lg:items-start gap-8">
      {/* Dining Hours - Left Column */}
      <div className="lg:w-1/2 w-full">
        {[
          ['Monday', 'Breakfast: 7:30am-10:30am', 'Lunch: 11:00am-2:00pm', 'Dinner: 4:45pm-8:00pm', 'Late Night: 9:00pm-11:00pm'],
          ['Tuesday', 'Breakfast: 7:30am-10:30am', 'Lunch: 11:00am-2:00pm', 'Dinner: 4:45pm-8:00pm', 'Late Night: 9:00pm-11:00pm'],
          ['Wednesday', 'Breakfast: 7:30am-10:30am', 'Lunch: 11:00am-2:00pm', 'Dinner: 4:45pm-8:00pm', 'Late Night: 9:00pm-11:00pm'],
          ['Thursday', 'Breakfast: 7:30am-10:30am', 'Lunch: 11:00am-2:00pm', 'Dinner: 4:45pm-8:00pm', 'Late Night: 9:00pm-11:00pm'],
          ['Friday', 'Breakfast: 7:30am-10:30am', 'Lunch: 11:00am-2:00pm', 'Dinner: 4:45pm-8:00pm', 'Late Night: CLOSED'],
          ['Saturday', 'Brunch: 9:00am-1:30pm', 'Dinner: 5:00pm-8:00pm', 'Late Night: CLOSED'],
          ['Sunday', 'Brunch: 9:00am-1:30pm', 'Dinner: 5:00pm-8:00pm', 'Late Night: 9:00pm-11:00pm'],
        ].map(([day, ...meals], index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold mb-2">{day}</h3>
            <p className="mb-6 text-xl">
              {meals.map((meal, i) => (
                <React.Fragment key={i}>
                  {meal}<br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>

      {/* Map - Right Column */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-3xl font-bold mb-4">Our Location</h2>
        <div className="w-full h-[450px] border border-black">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.590362030672!2d-122.10967685014631!3d37.841034033542385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f89bdaa162045%3A0x9046dac417308b15!2sOliver%20Hall!5e1!3m2!1sen!2sus!4v1746484038920!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Oliver Hall Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Hours;






