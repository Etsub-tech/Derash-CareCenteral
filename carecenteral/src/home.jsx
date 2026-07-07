import './home.css'
function Home(){
    return (
        <>
            <div className = "Navigation-bar">
                <div className = "left-nav">
                    <img/>
                    <span>CareCentral</span>

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
                    <button>Request Demo → </button>
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
                <hr/>
                <h3 style={{color: "rgb(48, 105, 171)",fontWeight: "bold"}}>Why CareCentral</h3>
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
                <hr/>
                <h3 style = {{color: "rgb(48, 105, 171)",fontWeight: "bold"}}>Core Modules</h3>
                <h1>Everything Your Facility Needs</h1>
                <h3 style = {{color: "gray"}}>Integrated clinical workflows that cover every touchpoint — from the front desk to the <br/>ICU.</h3>

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
                    <h3 style={{color: "black"}}>Connect lab analyzers and medical devices directly to <br/> CareCentral for automated result capture.</h3>
                    <h4>Ready for Integration</h4>
                </div>
                
            </div>  
                <button className = "more-modules"> <a> See More Modules →</a></button>

            </div>

            <div className = "second-blue">
                <hr />
                <h3 style={{color: "rgb(117, 223, 250)"}}>SPECIALITY MODULES</h3>
                <h1>Expand to Any Specialty</h1>
                <h3>Add specialty modules as your facility's clinical scope grows.</h3>

                <div className="glass-cards">
                    <div className='glass'><h3>Dental</h3></div>
                    <div className = 'glass'><h3>Radiology</h3></div>
                    <div className = 'glass'><h3>Pharmacy</h3></div>
                    <div className = 'glass'><h3>Physiotherapy</h3></div>
                    <div className = 'glass'><h3>ENT</h3></div>
                    <div className = 'glass'><h3>Ophthalmology</h3></div>
                </div>

                <div className="glass-cards">
                    <div className='glass'><h3>Gynecology</h3></div>
                    <div className = 'glass'><h3>Emergency</h3></div>
                    <div className = 'glass'><h3>IPD</h3></div>
                    <div className = 'glass'><h3>Surgery</h3></div>
                    <div className = 'glass'><h3>Inventory</h3></div>
                    <div className = 'glass'><h3>Finance</h3></div>
                </div>

                <div className="glass-cards">
                    <div className='glass'><h3>HR & Payroll</h3></div>
                    <div className = 'glass'><h3>Attendance</h3></div>
                    <div className = 'glass'><h3>More...</h3></div>
                </div>
            </div>

            <div className="third-white">
                 <hr />
                <h3 style={{color: "rgb(29, 86, 126)"}}>Platform Features</h3>
                <h1>Engineered for Healthcare Excellence</h1>
                <h3>Every feature built with clinical workflow, compliance, and usability in mind.</h3>
                
                <div className = "third-grids">
                <div className='third-white-grid'>
                    <div className='third-white-cards'><h3>Electronic Medical Records</h3></div>
                    <div className='third-white-cards'><h3>Patient Timeline</h3></div>
                    <div className='third-white-cards'><h3>Appointment Scheduling</h3></div>
                </div>
                <div className='third-white-grid'>
                    <div className='third-white-cards'><h3>Queue Management</h3></div>
                    <div className='third-white-cards'><h3>Clinical Documentation</h3></div>
                    <div className='third-white-cards'><h3>Laboratory Workflow</h3></div>
                </div>
                <div className='third-white-grid'>
                    <div className='third-white-cards'><h3>ICU Management</h3></div>
                    <div className='third-white-cards'><h3>Role-Based Access</h3></div>
                    <div className='third-white-cards'><h3>Audit Logs</h3></div>
                </div>
                <div className='third-white-grid'>
                    <div className='third-white-cards'><h3>Multi-Branch Support</h3></div>
                    <div className='third-white-cards'><h3>Reporting & Analytics</h3></div>
                    <div className='third-white-cards'><h3>Responsive Design</h3></div>
                </div>
                <div className='third-white-grid'>
                    <div className='third-white-cards'><h3>Cloud Deployment</h3></div>
                    <div className='third-white-cards'><h3>On-Premise Deployment</h3></div>
                    <div className='third-white-cards'><h3>Machine Integration Ready</h3></div>
                </div>
                <div className='third-white-grid'>
                    <div className='third-white-cards'><h3>Barcode Support</h3></div>
                    <div className='third-white-cards'><h3>Future AI Ready</h3></div>
                    <div className='third-white-cards'><h3>Data Encryption</h3></div>
                </div>
            </div>
            </div>

            <div className="second-gray">
                 <hr />
                <h3 style={{color: "rgb(29, 86, 126)"}}>Integrations</h3>
                <h1>Connected to Everything You Need</h1>
                <h3>Seamlessly integrated with business operations, medical devices, and future health standards.</h3>

                <div className='second-gray-grid'>
                    <div className='second-gray-cards'><h3>Accounting</h3></div>
                    <div className='second-gray-cards'><h3>Inventory</h3></div>
                    <div className='second-gray-cards'><h3>Purchase</h3></div>
                </div>
                <div className='second-gray-grid'>
                    <div className='second-gray-cards'><h3>HR & Payroll</h3></div>
                    <div className='second-gray-cards'><h3>Attendance</h3></div>
                    <div className='second-gray-cards'><h3>CRM</h3></div>
                </div>
                <div className='second-gray-grid'>
                    <div className='second-gray-cards'><h3>Dashboard & Reporting</h3></div>
                    <div className='second-gray-cards'><h3>Medical Devices</h3></div>
                    <div className='second-gray-cards'><h3>Laboratory Machines</h3></div>
                </div>
                <div className='second-gray-grid'>
                    <div className='second-gray-cards'><h3>Radiology Equipment</h3></div>
                    <div className='second-gray-cards'><h3>Sales</h3></div>
                    <div className='second-gray-cards'><h3>Speciality Modules</h3></div>
                </div>
                </div>

                <div className='fifth-white'>
                    <hr />
                    <h3 style={{color: "rgb(29, 86, 126)"}}>PRICING</h3>
                    <h1>Simple, Transparent Pricing</h1>
                    <h3>Choose the plan that fits your facility. No hidden fees, no surprises.</h3>

                    <div className = "prices">
                        <div className = "price-white">
                            <h4 style={{paddingLeft:"15px"}}>Monthly Subscription</h4>
                            <h2 style = {{fontWeight: "bold", fontSize: "24"}}>SaaS Plan</h2>
                            <span style =  {{fontWeight: "bold", fontSize: "30px", color: "black"}}>Custome</span> <span style =  {{color: "gray"}}>ETB/month</span>
                            <h3>ideal for clinics and growing facilities</h3>
                            <h2>✓ Patient Management</h2>
                            <h2>✓ Appointment Scheduling</h2>
                            <h2>✓ OPD Consultations</h2>
                            <h2>✓ Laboratory Module</h2>
                            <h2>✓ ICU Module</h2>
                            <h2>✓ Cloud Hosting Included</h2>
                            <h2>✓ Email & Telegram Support</h2>
                            <h2>✓ Regular Updates</h2>

                            <button>Request Demo</button>
                        </div>
                        <div className = "price-blue">
                            <h4 style={{paddingLeft:"8px"}}>One-Time Implementation</h4>
                            <span style = {{fontWeight: "bold", fontSize: "15px", fontColor: "white"}}>One-time plan</span><br/>
                            <span style =  {{fontWeight: "bold", fontSize: "30px", color: "white"}}>Custome</span> <span>ETB</span>
                            <h3>Full implementation for hospitals and networks.</h3>
                            <h5>✓ Full Installation & Configuration</h5>
                            <h5>✓ Staff Training & Go-Live Support</h5>
                            <h5>✓ All Core Modules</h5>
                            <h5>✓ On-Premise or Cloud Setup</h5>
                            <h5>✓ Custom Configuration</h5>
                            <h5>✓ 3 Months Free Support</h5>
                            <h5>✓ Data Migration Assistance</h5>
                            <h5>✓ Dedicated Implementation Team</h5>

                            <button>Contact Sales</button>

                        </div>
                    </div>
                </div>

                <div className='advantages'>
                <hr />
                <h3 style={{color: "rgb(29, 86, 126)"}}>Why Choose Us</h3>
                <h1>The CareCentral Advantage</h1>
                <h3>We are not just software — we are your long-term healthcare technology partner.</h3>

                </div>

            
        </>
    )
}

export default Home;