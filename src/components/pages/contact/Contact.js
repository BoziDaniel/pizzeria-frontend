import React from "react";


const Contact = () => {
  return (
    <div style={{ background: "#f0f0f0" }}>
        <h2 style={{ margin: 30}}>Contacts</h2>
        <h3 style={{ margin: 30}}> Location: 
          <iframe title="location" width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
          src="https://www.openstreetmap.org/export/embed.html?bbox=19.055694937705997%2C47.504165477632476%2C19.060064256191257%2C47.5058360508519&amp;layer=mapnik&amp;marker=47.505000770887904%2C19.057879596948624"
          style={{border: 1}}></iframe>
          <br/>
          <small>
            <a href="https://www.openstreetmap.org/?mlat=47.50500&amp;mlon=19.05788#map=19/47.50500/19.05788">Nagyobb térkép</a>
          </small>
        </h3>
        <h3 style={{ margin: 30}}>Phone number: 30/ 555-3456</h3>
        <h3 style={{  margin: 30}}>Open hours: NON-STOP</h3>


      </div>      
  );
};

export default Contact;
