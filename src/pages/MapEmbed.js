import React from "react";

function MapEmbed() {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100935.18430647562!2d-122.18375612332176!3d37.761333630343316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f89bdaa162045%3A0x9046dac417308b15!2sOliver%20Hall!5e0!3m2!1sen!2sus!4v1745601040616!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map of Oliver Hall"
      ></iframe>
    </div>
  );
}

export default MapEmbed;
