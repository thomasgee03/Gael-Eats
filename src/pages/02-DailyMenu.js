import React from 'react';
     import { Link } from 'react-router-dom';

     const menuSections = [
       {
         title: 'Chefs Table',
         description: 'World Inspired Cuisine',
         image: 'CentralOven.png',
         imagePosition: 'right',
       },
       {
         title: 'Clean Plate',
         description: 'Allergen Friendly Zone',
         image: 'CentralOven.png',
         imagePosition: 'left',
       },
       {
         title: 'Central Oven',
         description: 'Trattoria',
         image: 'CentralOven.png',
         imagePosition: 'right',
       },
       {
         title: 'Black Label Grill',
         description: '',
         image: 'BlackLabelGrill.png',
         imagePosition: 'left',
       },
       {
         title: 'WildFlour',
         description: 'Freshly Baked Goods',
         image: 'CentralOven.png',
         imagePosition: 'right',
       },
     ];

     function DailyMenu() {
       return (
         <div className="bg-white w-screen overflow-x-hidden">
           {/* Hero section */}
           <div className="relative w-screen">
             <img
               src={`${process.env.PUBLIC_URL}/images/OliverHall.jpeg`}
               alt="Oliver Hall"
               className="w-screen h-[400px] object-cover"
             />
             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
               <h2 className="text-6xl font-bold text-white text-center">The Options</h2>
             </div>
           </div>

           {/* Menu sections */}
           <div className="w-full px-6 py-12 space-y-10">
             {menuSections.map((section, index) => (
               <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
                 {section.imagePosition === 'left' ? (
                   <>
                     <div>
                       <img
                         src={`${process.env.PUBLIC_URL}/images/${section.image}`}
                         alt={`${section.title} image`}
                         className="w-full rounded shadow"
                       />
                     </div>
                     <div>
                       <h3 className="text-2xl font-bold">{section.title}</h3>
                       <p className="text-gray-600 mt-1">{section.description}</p>
                       <div className="mt-4 space-x-4">
                         <Link to={`/submission?station=${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
                           <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                             Submission
                           </button>
                         </Link>
                         <Link to={`/${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
                           <button className="border border-gray-400 text-gray-800 px-4 py-2 rounded hover:bg-gray-100">
                             Menu
                           </button>
                         </Link>
                       </div>
                     </div>
                   </>
                 ) : (
                   <>
                     <div>
                       <h3 className="text-2xl font-bold">{section.title}</h3>
                       <p className="text-gray-600 mt-1">{section.description}</p>
                       <div className="mt-4 space-x-4">
                         <Link to={`/submission?station=${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
                           <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                             Submission
                           </button>
                         </Link>
                         <Link to={`/${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
                           <button className="border border-gray-400 text-gray-800 px-4 py-2 rounded hover:bg-gray-100">
                             Menu
                           </button>
                         </Link>
                       </div>
                     </div>
                     <div>
                       <img
                         src={`${process.env.PUBLIC_URL}/images/${section.image}`}
                         alt={`${section.title} image`}
                         className="w-full rounded shadow"
                       />
                     </div>
                   </>
                 )}
               </div>
             ))}
           </div>
         </div>
       );
     }

     export default DailyMenu;

