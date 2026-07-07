function Demo(){
    return(
        <>
            <div className="final">
            <div >
            <hr style={{ color: "rgb(156, 212, 253)" }} />
            <h3 style={{ color: "rgb(156, 212, 253)" }}>GET STARTED TODAY</h3>
            <div className='title'><h1 
                className="text" 
                style={{ color: "rgb(224, 240, 255)", textAlign: "left", marginLeft: "40px" }}
            >
                Ready to Modernize Your Healthcare Facility?
            </h1></div>
            <h3 className="text" style={{ color: "rgb(224, 240, 255)" }}>
                Schedule a personalized demo and see how CareCentral can transform patient care, streamline operations, and bring your facility into the digital era.
            </h3>
                <div className="text">       
                <span>📞 +251 955935455</span>
                <span>✉ beltechsolns@gmail.com</span>
                <span>➤ @belTechSolns</span>
            </div>
            </div>

            <div className="stats-row">
                <div className="stat-box">
                    <h1>48h</h1>
                    <h3>Average setup time</h3>
                </div>
                <div className="stat-box">
                    <h1>100%</h1>
                    <h3>Local support team</h3>
                </div>
                <div className="stat-box">
                    <h1>5 months</h1>
                    <h3>Free post-launch support</h3>
                </div>
            </div>

             <div className="demo-form">
            <h2>Request a Demo</h2>
            <h3>Fill in the form and our team will reach out within 24 hours.</h3>

            <div className="form-row">
                <div className="form-group">
                    <h4>Hospital / Clinic Name *</h4>
                    <input type="text" placeholder="Addis Healthcare Center" />
                </div>
                <div className="form-group">
                    <h4>Contact Person *</h4>
                    <input type="text" placeholder="Dr. Sara Haile" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <h4>Email Address *</h4>
                    <input type="text" placeholder="contact@clinic.et" />
                </div>
                <div className="form-group">
                    <h4>Phone Number *</h4>
                    <input type="text" placeholder="+251 91 234 5678" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <h4>Facility Type</h4>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <h4>Number of Branches</h4>
                    <input type="text" placeholder="e.g. 1, 3, 10+" />
                </div>
            </div>

            <div className="form-group-full">
                <h4>Message</h4>
                <textarea placeholder="Tell us about your facility and what you need..."></textarea>
            </div>

            <button>Submit Demo Request → </button>
        </div>
                    </div> 
        </>
    )
}

export default Demo;