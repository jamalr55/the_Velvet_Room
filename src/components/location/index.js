import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443087.5486245582!2d-95.6814758171013!3d29.817478217248173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C+TX!5e0!3m2!1sen!2sus!4v1556734616104!5m2!1sen!2sus"
        width="100%"
        height="500px"
        frameborder="0"
        allowfullscreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
