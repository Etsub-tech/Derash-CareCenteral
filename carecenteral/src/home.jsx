import './home.css'
function Home(){
    return (
        <>
            <div className = "Navigation-bar">
                <div className = "left-nav">
                    <img/>
                    <h2>CareCentral</h2>

                </div>
                <div className = "mid-nav">
                    <a>Features</a>
                    <a>Modules</a>
                    <a>Pricing</a>
                    <a>About</a>
                    <a>FAQ</a>
                </div>
                <div className = "right-nav">
                    <a>Contact Sales</a>
                    <button style={{backgroundColor: "blue"}}>Request Demo</button>
                </div>
            </div>

            <div className = "hero">
                <div className = "made-for-eth"><span>Enterprise ERP· Made for Ethiopia</span></div>
                <a style={{fontSize: "60px", fontWeight: "bold"}}>Healthcare </a> <a style={{fontSize: "60px", fontWeight: "bold", color: "#acd1f7"}}>Management Made</a><h1 style={{fontSize: "60px", fontWeight: "bold", color: "white", marginBottom: "60px"}}>Simple.</h1>
                <h3>CareCentral is a modern Healthcare ERP built on Odoo that
                    <br/>helps clinics and hospitals streamline patient care,
                    <br/>operations, finance, and administration from one centralized 
                    <br/>platform.</h3>
                
                <div className = "two-buttons">
                <button classNAme = "elivated">Request a Demo </button>
                <button> Explore Features</button>
                </div>

                <div> 
                    <h3>HIPAA Aligned</h3>
                    <h3>Multi-Branch</h3>
                    <h3>Cloud & On-Premise</h3>
                </div>

                <div className="box"></div>
            </div>

            <div className='white'>
            <div className = "second-grid">
                <div className='second'>
                <div>
                    <h2>Healthcare ERP</h2>
                    <h3>Complete Platform</h3>
                </div>
                <div>
                    <h2>Modular</h2>
                    <h3>Aechitecture</h3>
                </div>
                <div>
                    <h2>Multi-Branch</h2>
                    <h3>Ready</h3>
                </div>
                </div>
                <div className='second'>
                <div>
                    <h2>Cloud & On-Premise</h2>
                    <h3>Deployment</h3>
                </div>

                <div>
                    <h2>Built on Odoo</h2>
                    <h3>Enterprise Grade</h3>
                </div>

                <div>
                    <h2>Machine Integration</h2>
                    <h3>Ready</h3>
                </div>
            </div>
            </div>
            </div>

            <div className = "gray">
                <h3>Why CareCentral</h3>
                <h1>Built for Modern Healthcare</h1>
                <h3>A platform designed from the ground up for clinics, hospitals, and multi-branch <br/> healthcare networks in Ethiopia.</h3>

                <div className='cards-column'>
                <div>
                    <div className='card'>
                        <h2>Modern EMR</h2>
                        <h3>Electronic Medical Records designed for clinical <br/> efficiency and accuracy.</h3>
                    </div>
                    <div className='card'>
                        <h2>Cloud Ready</h2>
                        <h3>Accessible anywhere with secure cloud infrastructure.</h3>
                    </div>
                    <div className='card'>
                        <h2>Scalable</h2>
                        <h3>Grows with your facility from single clinic to hospital <br/> network.</h3>
                    </div>
                    <div className='card'>
                        <h2>Easy to Use</h2>
                        <h3>Intuitive UI designed for clinical staff, not just IT teams.</h3>
                    </div>
                    </div>


                <div>
                    <div className='card'>
                    <h2>Hospital ERP</h2>
                    <h3>Full enterprise resource planning tailored for healthcare <br/> operations.</h3>
                    </div>
                    <div className='card'>
                    <h2>On-Premise Ready</h2>
                    <h3>Deploy within your own infrastructure for full data <br/> control.</h3>
                    </div>
                    <div className='card'>
                    <h2>Secure</h2>
                    <h3>Role-based access, audit logs, and enterprise-grade <br/> security.</h3>
                    </div>
                     <div className='card'>
                    <h2>Highly Customizable</h2>
                    <h3>Adapt modules and workflows to your facility's unique <br/>needs.</h3>
                    </div>
                    </div>
                </div>
            </div>

            <div className='fourth'>
                <h3>Core Modules</h3>
                <h1>Everything Your Facility Needs</h1>
                <h3>Integrated clinical workflows that cover every touchpoint — from the front desk to the <br/>ICU.</h3>

            <div className="second-row-cards"> 
                <div className="second-card">
                    <h2>Patient Management</h2>
                    <h3>✓ Patient Registration</h3>
                    <h3>✓ Electronic Medical Records</h3>
                    <h3>✓ Medical History</h3>
                    <h3>✓ Patient Timeline</h3>
                    <h3>✓ Documents</h3>
                    <h3>✓ Insurance</h3>
                    <a>Learn More → </a>
                </div>

                <div className = "second-card">
                    <h2>Appointment Scheduling</h2>
                    <h3>✓ Doctor Calendar</h3>
                    <h3>✓ Queue Management</h3>
                    <h3>✓ Walk-ins</h3>
                    <h3>✓ Reminders</h3>
                    <h3>✓ Reception Dashboard</h3>
                    <a>Learn More → </a>
                </div>
            </div>

            
            <div className="second-row-cards"> 
                <div className="second-card">
                    <h2>OPD Consultations</h2>
                    <h3>✓ SOAP Notes</h3>
                    <h3>✓ Vitals</h3>
                    <h3>✓ Diagnoses</h3>
                    <h3>✓ Procedures</h3>
                    <h3>✓ Follow-ups</h3>
                    <h3>✓ Referrals</h3>
                    <a>Learn More → </a>
                </div>

                <div className = "second-card">
                    <h2>Laboratory</h2>
                    <h3>✓ Lab Requests</h3>
                    <h3>✓ Test Catalog</h3>
                    <h3>✓ Sample Tracking</h3>
                    <h3>✓ Result Management</h3>
                    <h3>✓ Reports</h3>
                    <h3>✓ Machine Integration</h3>
                    <a>Learn More → </a>
                </div>
                
            </div>


            <div className="second-row-cards"> 
                <div className="second-card">
                    <h2>ICU</h2>
                    <h3>✓ Admissions</h3>
                    <h3>✓ Bed Management</h3>
                    <h3>✓ Continuous Monitoring</h3>
                    <h3>✓ Ventilator Management</h3>
                    <h3>✓ Nursing Notes</h3>
                    <h3>✓ Critical Care Dashboard</h3>
                    <a>Learn More → </a>
                </div>

                <div className = "second-card-exc">
                    <h2>Machine Integration</h2>
                    <h3>Connect lab analyzers and medical devices directly to <br/> CareCentral for automated result capture.</h3>
                    <h4>Ready for Integration</h4>
                </div>
                
            </div>  
                <button className = "more-modules"> <a> See More Modules →</a></button>

            </div>
        </>
    )
}

export default Home;