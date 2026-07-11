import { useState } from 'react';
import Price from "./price.jsx";
import Question from "./question.jsx";
import Contact from "./contact.jsx";
import Demo from "./demo.jsx";
//import MoreModules from "./more-modules.jsx";
import './home.css';
import logo from './assets/logo.png';
import logoOnly from './assets/logo-only.png';
import { Link } from "react-router-dom";

function Home(){
        const scrollToFeatures = () => {
        const section = document.getElementById("features");
        section.scrollIntoView({ behavior: "smooth" });
};
        const scrollToDemo = () => {
        const section = document.getElementById("demos");
        section.scrollIntoView({ behavior: "smooth" });
        };
        const [menuOpen, setMenuOpen] = useState(false);
        const [activeTab, setActiveTab] = useState("Overview");
        const tabs = [
            "Overview",
            "Laboratory",
            "Pharmacy",
            "Radiology",
            "Physiotherapy",
            "Gynecology",
            "ENT",
            "Dental",
            "Ophthalmology",
            "Fleet",
            "Fees",
            ];
    return (
        <>
            <div className = "Navigation-bar">
                <div className = "left-nav">
                    <div className = "navLogo"><img src={logoOnly} alt="Logo Only" /></div>
                    <span style={{color:"#3898d0"}}>CareCentral</span>
                </div>
                <div className = "mid-nav">
                    <a href="#features">Features</a>
                    <Link to="/more-modules">Modules</Link>
                    <a href="#pricing">Pricing</a>
                    <a href="#about">About</a>
                    <a href="#questions">FAQ</a>
                </div>
                <div className = "right-nav">
                    <button onClick={scrollToDemo}>Contact Us →</button>
                </div>

                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{backgroundColor:"white"}}>
                    {menuOpen ? (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    ) : (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                    )}
                </button>

                {menuOpen && (
                    <div className="mobile-menu">
                        <a href = "#features" onClick={() => setMenuOpen(false)}>Features</a>
                        <Link to="/more-modules">Modules</Link>
                        <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
                        <a href="#about">About</a>
                        <a href="#questions" onClick={() => setMenuOpen(false)}>FAQ</a>
                        <a href="demo">Contact Sales</a>
                        <button onClick={() => { setMenuOpen(false); scrollToDemo(); }}>Request Demo →</button>
                    </div>
                )}
            </div>

            <div className = "hero">
                <div className = "made-for-eth"><span>Enterprise ERP· Made for Ethiopia</span></div>
                <a style={{fontSize: "60px", fontWeight: "bold"}}>Healthcare </a> <a style={{fontSize: "60px", fontWeight: "bold", color: "#acd1f7"}}>Management Made</a><h1 style={{fontSize: "60px", fontWeight: "bold", color: "white", marginBottom: "60px"}}>Simple.</h1>
                <h3>CareCentral is a modern Healthcare ERP built on Odoo that
                    <br/>helps clinics and hospitals streamline patient care,
                    <br/>operations, finance, and administration from one centralized 
                    <br/>platform.</h3>
                
                <div className = "two-buttons">
                <button className = "request-button" onClick={scrollToDemo}> Request a Demo → </button>
                <button className="explore-button" onClick={scrollToFeatures}>
                    ▶ Explore Features
                </button>                </div>

                <div className='the-3'> 
                    <span>✓ HIPAA Aligned</span>
                    <span>✓ Multi-Branch</span>
                    <span>✓ Cloud & On-Premise</span>
                </div>

                <div className="box">
                <div className="dashboard">
                    <div className="dashboard-top">
                        <span className="back-arrow">‹</span>
                        <div className="win-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                    </div>

                    <div className="dashboard-body">
                        <h2>Health Management Dashboard</h2>

                        <div className="dashboard-tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`tab ${activeTab === tab ? "active" : ""}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}

                            <select className="time-select">
                                <option>All Time</option>
                            </select>
                        </div>

                        <div className="dashboard-tabs-second">
                            <button className="tab">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3c-2 3-2 4-4 4a3 3 0 0 0-3 3c0 5 3 9 5 11 1-2 1-3 2-3s1 1 2 3c2-2 5-6 5-11a3 3 0 0 0-3-3c-2 0-2-1-4-4z"/></svg>
                                Dental
                            </button>
                            <button className="tab">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
                                Ophthalmology
                            </button>
                            <button className="tab">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="7" width="14" height="9"/><path d="M15 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/></svg>
                                Fleet
                            </button>
                            <button className="tab">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M15 9.5c0-1-1.3-1.8-3-1.8s-3 .8-3 2 1.3 1.6 3 1.8 3 .8 3 2-1.3 2-3 2-3-.8-3-1.8"/></svg>
                                Fees
                            </button>
                        </div>

                        <div className="stat-cards">
                            <div className="stat-card blue-edge">
                                <div>
                                    <h4>TOTAL PATIENTS</h4>
                                    <h1>3</h1>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <div className="stat-card yellow-edge">
                                <div>
                                    <h4>ADMITTED TODAY</h4>
                                    <h1>1</h1>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2"><path d="M2 20v-7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7"/><path d="M2 13V7a2 2 0 0 1 2-2h6v8"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
                            </div>
                            <div className="stat-card red-edge">
                                <div>
                                    <h4>APPOINTMENTS TODAY</h4>
                                    <h1>0</h1>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            </div>
                            <div className="stat-card green-edge">
                                <div>
                                    <h4>TOTAL EARNINGS</h4>
                                    <h1>Birr 0.00</h1>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M15 9.5c0-1-1.3-1.8-3-1.8s-3 .8-3 2 1.3 1.6 3 1.8 3 .8 3 2-1.3 2-3 2-3-.8-3-1.8"/></svg>
                            </div>
                        </div>

                        <div className="chart-row">
                            <div className="chart-box">
                                <h3>Patient Gender Distribution</h3>
                                <div className="pie"></div>
                                <div className="legend"><span className="legend-dot purple"></span>Male</div>
                            </div>

                            <div className="chart-box">
                                <h3>Admissions by Department</h3>
                                <div className="bar-chart">
                                    <div className="y-axis">
                                        <span>1.0</span><span>0.8</span><span>0.6</span><span>0.4</span><span>0.2</span>
                                    </div>
                                    <div className="bar-area">
                                        <div className="bar"></div>
                                    </div>
                                </div>
                                <div className="x-axis-single">Eye</div>
                            </div>

                            <div className="chart-box">
                                <h3>Appointments (Last 6 Months)</h3>
                                <div className="line-chart">
                                    <div className="y-axis">
                                        <span>1.0</span><span>0.8</span><span>0.6</span><span>0.4</span><span>0.2</span>
                                    </div>
                                    <div className="line-area">
                                        <div className="flat-line"></div>
                                    </div>
                                </div>
                                <div className="x-axis-months">
                                    <span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className='white'>
            <div className = "second-grid">
                <div className='second'>
            <div>
                <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></div>
                <h2>Healthcare ERP</h2>
                <h3>Complete Platform</h3>
            </div>
            <div>
                <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
                <h2>Modular</h2>
                <h3>Aechitecture</h3>
            </div>
            <div>
                <div className="icon-circle" style={{marginRight:"20px"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="13" x2="16" y2="13"/></svg></div>
                <h2 style={{marginRight:"20px"}}>Multi-Branch</h2>
                <h3 style={{marginRight:"20px"}}>Ready</h3>
            </div>
            </div>
            <div className='second'>
                <div>
                    <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10a5 5 0 0 0-9.6-1.8A4 4 0 0 0 6 16h12a4 4 0 0 0 0-8z"/></svg></div>
                    <h2>Cloud & On-Premise</h2>
                    <h3>Deployment</h3>
                </div>
                <div>
                    <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg></div>
                    <h2>Built on Odoo</h2>
                    <h3>Enterprise Grade</h3>
                </div>
                <div>
                    <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg></div>
                    <h2>Machine Integration</h2>
                    <h3>Ready</h3>
                </div>
            </div>
                
            </div>
            </div>

            <div className = "gray" id="about">
                <hr/>
                <h3 style={{color: "rgb(48, 105, 171)",fontWeight: "bold"}}>Why CareCentral</h3>
                <div className="title"><h1>Built for Modern Healthcare</h1></div>
                <h3>A platform designed from the ground up for clinics, hospitals, and multi-branch <br/> healthcare networks in Ethiopia.</h3>

                <div className='cards-column'>
                <div>
                    <div className='card'>
                <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v3H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2V2z"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg></div>
                <h2>Modern EMR</h2>
                <h3>Electronic Medical Records designed for clinical <br/> efficiency and accuracy.</h3>
            </div>
            <div className='card'>
                <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10a5 5 0 0 0-9.6-1.8A4 4 0 0 0 6 16h12a4 4 0 0 0 0-8z"/></svg></div>
                <h2>Cloud Ready</h2>
                <h3>Accessible anywhere with secure cloud infrastructure.</h3>
            </div>
            <div className='card'>
                <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
                <h2>Scalable</h2>
                <h3>Grows with your facility from single clinic to hospital <br/> network.</h3>
            </div>
            <div className='card'>
                <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg></div>
                <h2>Easy to Use</h2>
                <h3>Intuitive UI designed for clinical staff, not just IT teams.</h3>
            </div>
                    </div>


                <div>
                  <div className='card'>
                    <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="13" x2="16" y2="13"/></svg></div>
                    <h2>Hospital ERP</h2>
                    <h3>Full enterprise resource planning tailored for healthcare <br/> operations.</h3>
                </div>
                <div className='card'>
                    <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg></div>
                    <h2>On-Premise Ready</h2>
                    <h3>Deploy within your own infrastructure for full data <br/> control.</h3>
                </div>
                <div className='card'>
                    <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                    <h2>Secure</h2>
                    <h3>Role-based access, audit logs, and enterprise-grade <br/> security.</h3>
                </div>
                <div className='card'>
                    <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 11 14 9 22 21 10 13 10 13 2"/></svg></div>
                    <h2>Highly Customizable</h2>
                    <h3>Adapt modules and workflows to your facility's unique <br/>needs.</h3>
                </div>
                    </div>
                </div>
            </div>

            <div className='fourth'>
                <hr/>
                <h3 style = {{color: "rgb(48, 105, 171)",fontWeight: "bold"}}>Core Modules</h3>
                <div className='title'><h1 >Everything Your Facility Needs</h1></div>
                <h3 style = {{color: "gray"}}>Integrated clinical workflows that cover every touchpoint — from the front desk to the <br/>ICU.</h3>

            <div className="second-row-cards"> 
                <div className="second-card">
                    <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                    <h2>Patient Management</h2>
                    <h3>✓ Patient Registration</h3>
                    <h3>✓ Electronic Medical Records</h3>
                    <h3>✓ Medical History</h3>
                    <h3>✓ Patient Timeline</h3>
                    <h3>✓ Documents</h3>
                    <h3>✓ Insurance</h3>
                    <Link className="learn-more-link" to="/more-modules">
    Learn More →
</Link>
                </div>

                <div className = "second-card">
                    <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
                    <h2>Appointment Scheduling</h2>
                    <h3>✓ Doctor Calendar</h3>
                    <h3>✓ Queue Management</h3>
                    <h3>✓ Walk-ins</h3>
                    <h3>✓ Reminders</h3>
                    <h3>✓ Reception Dashboard</h3>
                    <Link className="learn-more-link" to="/more-modules">
    Learn More →
</Link>
                </div>
            </div>

            
            <div className="second-row-cards"> 
                <div className="second-card">
                <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l2-8 4 16 2-8h8"/></svg></div>
                    <h2>OPD Consultations</h2>
                    <h3>✓ SOAP Notes</h3>
                    <h3>✓ Vitals</h3>
                    <h3>✓ Diagnoses</h3>
                    <h3>✓ Procedures</h3>
                    <h3>✓ Follow-ups</h3>
                    <h3>✓ Referrals</h3>
                    <Link className="learn-more-link" to="/more-modules">
    Learn More →
</Link>
                </div>
                <div className = "second-card">
                    <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v6L4 20a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L15 8V2"/><line x1="9" y1="2" x2="15" y2="2"/></svg></div>

                    <h2>Laboratory</h2>
                    <h3>✓ Lab Requests</h3>
                    <h3>✓ Test Catalog</h3>
                    <h3>✓ Sample Tracking</h3>
                    <h3>✓ Result Management</h3>
                    <h3>✓ Reports</h3>
                    <h3>✓ Machine Integration</h3>
                    <Link className="learn-more-link" to="/more-modules">
    Learn More →
</Link>
                </div>
                
            </div>


            <div className="second-row-cards"> 
                <div className="second-card">
                <div className="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="18" height="8" rx="1"/><path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></svg></div>                    <h2>ICU</h2>
                    <h3>✓ Admissions</h3>
                    <h3>✓ Bed Management</h3>
                    <h3>✓ Continuous Monitoring</h3>
                    <h3>✓ Ventilator Management</h3>
                    <h3>✓ Nursing Notes</h3>
                    <h3>✓ Critical Care Dashboard</h3>
                    <Link className="learn-more-link" to="/more-modules">
    Learn More →
</Link>
                </div>

                <div className = "second-card-exc">
                    <div className="icon-white-circle"><svg viewBox="0 0 24 24" width="25" height="25"  fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg></div>
                    <h2>Machine Integration</h2>
                    <h3 style={{color: "black"}}>Connect lab analyzers and medical devices directly to <br/> CareCentral for automated result capture.</h3>
                    <h4>Ready for Integration</h4>
                </div>
                
            </div>  
                <Link className = "more-modules" to="/more-modules"> See More Modules →</Link>

            </div>

            <div className = "second-blue">
                <hr />
                <h3 style={{color: "rgb(117, 223, 250)"}}>SPECIALITY MODULES</h3>
                <div className='title'><h1>Expand to Any Specialty</h1></div>
                <h3>Add specialty modules as your facility's clinical scope grows.</h3>

                <div className="glass-cards">
                    <div className='glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3c-2 3-2 4-4 4a3 3 0 0 0-3 3c0 5 3 9 5 11 1-2 1-3 2-3s1 1 2 3c2-2 5-6 5-11a3 3 0 0 0-3-3c-2 0-2-1-4-4z"/></svg>Dental</h3></div>
                    <div className = 'glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 20h8M12 18v2"/></svg>Radiology</h3></div>
                    <div className = 'glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="8" rx="4"/><line x1="12" y1="8" x2="12" y2="16"/></svg>Pharmacy</h3></div>
                    <div className = 'glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>Physiotherapy</h3></div>
                    <div className = 'glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 4-3 5-3 9a3 3 0 0 1-6 0"/></svg>ENT</h3></div>
                    <div className = 'glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>Ophthalmology</h3></div>
                </div>

                <div className="glass-cards">
                    <div className='glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/></svg>Gynecology</h3></div>
                    <div className = 'glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="5"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="9" y1="19" x2="15" y2="19"/></svg>Emergency</h3></div>
                    <div className = 'glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="18" height="8" rx="1"/><path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></svg>IPD</h3></div>
                    <div className = 'glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 4L4 20M9 4l11 11"/></svg>Surgery</h3></div>
                    <div className = 'glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/></svg>Inventory</h3></div>
                    <div className = 'glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>Finance</h3></div>
                </div>

                <div className="glass-cards">
                    <div className='glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>HR & Payroll</h3></div>
                    <div className = 'glass'><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>Attendance</h3></div>
                    <div className = 'glass'><h3>More...</h3></div>
                </div>
            </div>

            <div className="third-white" id="features">
                 <hr />
                <h3 style={{color: "rgb(29, 86, 126)"}}>Platform Features</h3>
                <div className='title' ><h1>Engineered for Healthcare Excellence</h1></div>
                <h3>Every feature built with clinical workflow, compliance, and usability in mind.</h3>
                
                <div className = "third-grids">
<div className='third-white-grid'>
    <div className='third-white-cards'>
        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v3H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2V2z"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg></div>
        <h3>Electronic Medical Records</h3>
    </div>
    <div className='third-white-cards'>
        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h3>Patient Timeline</h3>
    </div>
    <div className='third-white-cards'>
        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
        <h3>Appointment Scheduling</h3>
    </div>
</div>

<div className='third-white-grid'>
    <div className='third-white-cards'>
        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
        <h3>Queue Management</h3>
    </div>
    <div className='third-white-cards'>
        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l2-8 4 16 2-8h8"/></svg></div>
        <h3>Clinical Documentation</h3>
    </div>
    <div className='third-white-cards'>
        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v6L4 20a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L15 8V2"/><line x1="9" y1="2" x2="15" y2="2"/></svg></div>
        <h3>Laboratory Workflow</h3>
    </div>
</div>

<div className='third-white-grid'>
    <div className='third-white-cards'>
        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="18" height="8" rx="1"/><path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></svg></div>
        <h3>ICU Management</h3>
    </div>
    <div className='third-white-cards'>
        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
        <h3>Role-Based Access</h3>
    </div>
    <div className='third-white-cards'>
        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a5 5 0 0 1 5 5c0 3-1 5-1 8a4 4 0 0 1-8 0c0-3-1-5-1-8a5 5 0 0 1 5-5z"/><line x1="9" y1="10" x2="15" y2="10"/></svg></div>
        <h3>Audit Logs</h3>
    </div>
</div>

<div className='third-white-grid'>
    <div className='third-white-cards'>
        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="13" x2="16" y2="13"/></svg></div>
        <h3>Multi-Branch Support</h3>
    </div>
    <div className='third-white-cards'>
        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="12" width="4" height="8"/><rect x="10" y="8" width="4" height="12"/><rect x="17" y="4" width="4" height="16"/></svg></div>
        <h3>Reporting & Analytics</h3>
    </div>
    <div className='third-white-cards'>
        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg></div>
        <h3>Responsive Design</h3>
    </div>
</div>

                <div className='third-white-grid'>
                    <div className='third-white-cards'>
                        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10a5 5 0 0 0-9.6-1.8A4 4 0 0 0 6 16h12a4 4 0 0 0 0-8z"/></svg></div>
                        <h3>Cloud Deployment</h3>
                    </div>
                    <div className='third-white-cards'>
                        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg></div>
                        <h3>On-Premise Deployment</h3>
                    </div>
                    <div className='third-white-cards'>
                        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg></div>
                        <h3>Machine Integration Ready</h3>
                    </div>
                </div>

                <div className='third-white-grid'>
                    <div className='third-white-cards'>
                        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V3h12v6M6 18h12v3H6zM6 14h12M4 9h16v6H4z"/></svg></div>
                        <h3>Barcode Support</h3>
                    </div>
                    <div className='third-white-cards'>
                        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="7" width="16" height="12" rx="2"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><line x1="12" y1="7" x2="12" y2="3"/><circle cx="12" cy="2" r="1"/></svg></div>
                        <h3>Future AI Ready</h3>
                    </div>
                    <div className='third-white-cards'>
                        <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></div>
                        <h3>Data Encryption</h3>
                    </div>
                </div>
                </div>
            </div>

            <div className="second-gray">
                 <hr />
                <h3 style={{color: "rgb(29, 86, 126)"}}>Integrations</h3>
                <div className='title'><h1>Connected to Everything You Need</h1></div>
                <h3>Seamlessly integrated with business operations, medical devices, and future health standards.</h3>

            <div className='second-gray-grid'>
                <div className='second-gray-cards'>
                    <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg></div>
                    <h3>Accounting</h3>
                </div>
                <div className='second-gray-cards'>
                    <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/></svg></div>
                    <h3>Inventory</h3>
                </div>
                <div className='second-gray-cards'>
                    <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3.3 7l8.7 5 8.7-5"/><line x1="12" y1="22" x2="12" y2="12"/></svg></div>
                    <h3>Purchase</h3>
                </div>
            </div>
            <div className='second-gray-grid'>
                <div className='second-gray-cards'>
                    <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                    <h3>HR & Payroll</h3>
                </div>
                <div className='second-gray-cards'>
                    <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg></div>
                    <h3>Attendance</h3>
                </div>
                <div className='second-gray-cards'>
                    <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="3"/><path d="M2 20a7 7 0 0 1 14 0"/><circle cx="18" cy="9" r="2.5"/><path d="M16 20a6 6 0 0 1 7-5.9"/></svg></div>
                    <h3>CRM</h3>
                </div>
            </div>
            <div className='second-gray-grid'>
                <div className='second-gray-cards'>
                    <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="12" width="4" height="8"/><rect x="10" y="8" width="4" height="12"/><rect x="17" y="4" width="4" height="16"/></svg></div>
                    <h3>Dashboard & Reporting</h3>
                </div>
                <div className='second-gray-cards'>
                    <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg></div>
                    <h3>Medical Devices</h3>
                </div>
                <div className='second-gray-cards'>
                    <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v6L4 20a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L15 8V2"/><line x1="9" y1="2" x2="15" y2="2"/></svg></div>
                    <h3>Laboratory Machines</h3>
                </div>
            </div>
            <div className='second-gray-grid'>
                <div className='second-gray-cards'>
                    <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
                    <h3>Radiology Equipment</h3>
                </div>
                <div className='second-gray-cards'>
                    <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="3"/><path d="M2 20a7 7 0 0 1 14 0"/><circle cx="18" cy="9" r="2.5"/><path d="M16 20a6 6 0 0 1 7-5.9"/></svg></div>
                    <h3>Sales</h3>
                </div>
                <div className='second-gray-cards'>
                    <div className="icon-square"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="9" x2="10" y2="9"/><line x1="14" y1="15" x2="20" y2="15"/><circle cx="12" cy="9" r="2"/><circle cx="12" cy="15" r="2"/></svg></div>
                    <h3>Speciality Modules</h3>
                </div>
            </div>
                </div>
                <div id="pricing">
                    <Price />
                </div>
            

                <div className='advantages'>
                <hr />
                <h3 style={{color: "rgb(29, 86, 126)"}}>Why Choose Us</h3>
                <div className='title'><h1>The CareCentral Advantage</h1></div>
                <h3 style={{color: "gray"}}>We are not just software — we are your long-term healthcare technology partner.</h3>


            <div className='cards-column'>
            <div>
                <div className='card'>
                    <div className="icon-circle-blue"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                    <h2>Built on Odoo</h2>
                    <h3>Enterprise-grade foundation trusted by thousands<br/>globally.</h3>
                </div>
                <div className='card'>
                    <div className="icon-circle-blue"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M15 9.5c0-1-1.3-1.8-3-1.8s-3 .8-3 2 1.3 1.6 3 1.8 3 .8 3 2-1.3 2-3 2-3-.8-3-1.8"/></svg></div>
                    <h2>Affordable</h2>
                    <h3>Transparent pricing with no hidden fees.</h3>
                </div>
                <div className='card'>
                    <div className="icon-circle-blue"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg></div>
                    <h2>Easy to Expand</h2>
                    <h3>Add modules anytime without migration headaches.</h3>
                </div>
                <div className='card'>
                    <div className="icon-circle-blue"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="10" cy="10" r="7"/><line x1="21" y1="21" x2="15" y2="15"/></svg></div>
                    <h2>Local Implementation</h2>
                    <h3>On-site or remote setup across Ethiopia.</h3>
                </div>
            </div>

            <div>
                <div className='card'>
                    <div className="icon-circle-blue"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
                    <h2>Modular Design</h2>
                    <h3>Start small, expand as your facility grows.</h3>
                </div>
                <div className='card'>
                    <div className="icon-circle-blue"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></div>
                    <h2>Healthcare Focused</h2>
                    <h3>Built specifically for the African healthcare context.</h3>
                </div>
                <div className='card'>
                    <div className="icon-circle-blue"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                    <h2>Dedicated Support</h2>
                    <h3>Local implementation and training by expert team.</h3>
                </div>
                <div className='card'>
                    <div className="icon-circle-blue"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="9"/><polyline points="8 12 11 15 16 9"/></svg></div>
                    <h2>Secure & Reliable</h2>
                    <h3>Your patient data protected at every layer.</h3>
                </div>
            </div>
            </div>
                </div>

                <div id= "questions"><Question/></div>
                <div id= "demos"><Demo /></div>
                        <div id="contactUs"><Contact /></div>    


    <div className="footer">
    <div className="footer-nav">
        <a href="#features">Features</a>
        <a>Modules</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <a href="#questions">FAQ</a>
    </div>

    <div className="footer-grid">
        <div className="footer-brand">
            <div className="footer-logo"><img src={logo} alt="Logo" /></div>
            <h3>A modern Healthcare ERP by Beltech Solutions — empowering Ethiopia's clinics and hospitals with enterprise-grade technology.</h3>
            <div className="footer-socials">
                <span>in</span>
                <span>f</span>
                <span>➤</span>
                <span>✉</span>
            </div>
        </div>

        <div className="footer-links">
            <h4>COMPANY</h4>
            <a>About Us</a>
            <a>Features</a>
            <a>Pricing</a>
            <a>Support</a>
            <a>Contact</a>
        </div>

        <div className="footer-links">
            <h4>RESOURCES</h4>
            <a>Documentation</a>
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
        </div>
    </div>

    <div className="footer-contact">
        <h4>CONTACT</h4>
        <span>✉ hello@carecentral.et</span>
        <span>📞 +251 91 234 5678</span>
    </div>

    <hr/>
    <h3 className="copyright">© 2026 Beltech Solutions. All rights reserved. CareCentral is a trademark of Beltech Solutions.</h3>
</div>
            
        </>
    )
}

export default Home;