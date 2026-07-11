import { useState } from "react";
import "./more-module.css";
import { NavLink } from "react-router-dom";

function MoreModules(){
    const [filter, setFilter] = useState("all");

    return(
        <>
            <div className= "module-nav">
                <NavLink to="/" className="back-home">← Back to Home</NavLink>
                <NavLink to="/#demos" className="back-home">Contact Sales</NavLink>
            </div>
            <div className="module-hero">
                <hr/>
                <h3 style={{color: "white"}}>ALL MODULES</h3>
                <h1>Every Modle. One Platform.</h1>
                <h2>CareCentral is fully modular — start with what you need and expand at your own pace. All modules share the same patient database, eliminating duplicate data entry.</h2>
                <div className="num"><div><h1>18+</h1><h3>Modules Available</h3></div><div><h1>100%</h1><h3>Modular Architecture</h3></div></div>
            </div>
                <div className="buttons">
                <button className={filter === "all" ? "filter-btn active" : "filter-btn"} onClick={() => setFilter("all")}>All</button>
                <button className={filter === "clinical" ? "filter-btn active" : "filter-btn"} onClick={() => setFilter("clinical")}>Clinical</button>
                <button className={filter === "speciality" ? "filter-btn active" : "filter-btn"} onClick={() => setFilter("speciality")}>Speciality</button>
                <button className={filter === "administrative" ? "filter-btn active" : "filter-btn"} onClick={() => setFilter("administrative")}>Administrative</button>
                </div>


            <div className="module-grid" id="my-cards">

                {(filter === "all" || filter === "clinical") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">CLINICAL</h1></div>
                    <h4>Patient Management</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Centralised patient records covering registration, medical history, documents, insurance, and a full patient timeline.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Patient Registration</h2>
                            <h2>✓ Medical History</h2>
                            <h2>✓ Document Management</h2>
                        </div>
                        <div>
                            <h2>✓ Electronic Medical Records</h2>
                            <h2>✓ Patient Timeline</h2>
                            <h2>✓ Insurance Management</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "clinical") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">CLINICAL</h1></div>
                    <h4>Appointment Scheduling</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Intelligent scheduling with doctor calendars, walk-in <br/> queue management, automated reminders, and a <br/> reception dashboard.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Doctor Calendar</h2>
                            <h2>✓ Walk-in Support</h2>
                            <h2>✓ Reception Dashboard</h2>
                        </div>
                        <div>
                            <h2>✓ Queue Management</h2>
                            <h2>✓ Automated Reminders</h2>
                            <h2>✓ Multi-Doctor View</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "clinical") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="6" r="2"/><path d="M6 3v6a5 5 0 0 0 10 0V3"/><path d="M11 14v2a5 5 0 0 0 10 0"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">CLINICAL</h1></div>
                    <h4>OPD Consultations</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Full outpatient consultation workflow with SOAP notes, vitals capture, diagnosis coding, procedure tracking, and referrals.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ SOAP Notes</h2>
                            <h2>✓ Diagnosis Coding</h2>
                            <h2>✓ Follow-up Scheduling</h2>
                        </div>
                        <div>
                            <h2>✓ Vitals Recording</h2>
                            <h2>✓ Procedure Tracking</h2>
                            <h2>✓ Referral Management</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "clinical") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v6L4 20a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L15 8V2"/><line x1="9" y1="2" x2="15" y2="2"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">CLINICAL</h1></div>
                    <h4>Laboratory</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>End-to-end lab workflow from request to result — with sample tracking, machine integration, and report generation.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Lab Request Management</h2>
                            <h2>✓ Sample Tracking</h2>
                            <h2>✓ Automated Reports</h2>
                        </div>
                        <div>
                            <h2>✓ Test Catalog</h2>
                            <h2>✓ Result Management</h2>
                            <h2>✓ Machine Integration</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "clinical") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="18" height="8" rx="1"/><path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">CLINICAL</h1></div>
                    <h4>ICU Management</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Critical care module with bed management, continuous monitoring, ventilator tracking, and nursing notes.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Admissions Management</h2>
                            <h2>✓ Continuous Monitoring</h2>
                            <h2>✓ Nursing Notes</h2>
                        </div>
                        <div>
                            <h2>✓ Bed Management</h2>
                            <h2>✓ Ventilator Management</h2>
                            <h2>✓ Critical Care Dashboard</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "clinical") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l2-8 4 16 2-8h8"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">CLINICAL</h1></div>
                    <h4>IPD</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Manage inpatient admissions, ward assignments, daily progress notes, and discharge summaries.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Admission Management</h2>
                            <h2>✓ Daily Rounds Notes</h2>
                            <h2>✓ Discharge Summary</h2>
                        </div>
                        <div>
                            <h2>✓ Ward Assignment</h2>
                            <h2>✓ Medication Orders</h2>
                            <h2>✓ Billing Integration</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "speciality") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">Specialty</h1></div>
                    <h4>Dental</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Specialized dental module with tooth charting, treatment planning, and dental imaging integration.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Tooth Charting</h2>
                            <h2>✓ Dental Imaging</h2>
                            <h2>✓ Patient Records</h2>
                        </div>
                        <div>
                            <h2>✓ Treatment Planning</h2>
                            <h2>✓ Appointment Scheduling</h2>
                            <h2>✓ Billing</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "speciality") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">Specialty</h1></div>
                    <h4>Radiology</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Radiology request and result management with PACS integration readiness and report generation.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Radiology Requests</h2>
                            <h2>✓ PACS Integration Ready</h2>
                            <h2>✓ Image Viewing</h2>
                        </div>
                        <div>
                            <h2>✓ Result Management</h2>
                            <h2>✓ Report Generation</h2>
                            <h2>✓ Billing</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "speciality") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">Specialty</h1></div>
                    <h4>Pharmacy</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Dispensing, stock management, drug interactions, and prescription fulfillment in one module.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Prescription Dispensing</h2>
                            <h2>✓ Drug Interaction Alerts</h2>
                            <h2>✓ Supplier Management</h2>
                        </div>
                        <div>
                            <h2>✓ Drug Inventory</h2>
                            <h2>✓ Expiry Tracking</h2>
                            <h2>✓ Billing</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "speciality") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">Specialty</h1></div>
                    <h4>Ophthalmology</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Eye clinic module with visual acuity recording, refraction, and surgical procedure tracking.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Visual Acuity</h2>
                            <h2>✓ Surgical Planning</h2>
                            <h2>✓ Patient Timeline</h2>
                        </div>
                        <div>
                            <h2>✓ Refraction Records</h2>
                            <h2>✓ IOL Calculation</h2>
                            <h2>✓ Billing</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "speciality") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">Specialty</h1></div>
                    <h4>Gynecology</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Women's health module covering antenatal care, delivery records, and gynaecological consultations.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Antenatal Care</h2>
                            <h2>✓ Growth Charts</h2>
                            <h2>✓ Risk Assessment</h2>
                        </div>
                        <div>
                            <h2>✓ Delivery Records</h2>
                            <h2>✓ Consultation Notes</h2>
                            <h2>✓ Billing</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "speciality") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9.5"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">Specialty</h1></div>
                    <h4>ENT</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Ear, Nose & Throat module with audiogram support, nasal endoscopy notes, and procedure tracking.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Audiogram Recording</h2>
                            <h2>✓ Procedure Tracking</h2>
                            <h2>✓ Referrals</h2>
                        </div>
                        <div>
                            <h2>✓ Endoscopy Notes</h2>
                            <h2>✓ Patient Records</h2>
                            <h2>✓ Billing</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "speciality") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">Specialty</h1></div>
                    <h4>Emergency</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Rapid patient intake for emergency cases with triage scoring, resuscitation notes, and real-time bed status.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Triage Scoring</h2>
                            <h2>✓ Resuscitation Notes</h2>
                            <h2>✓ Handover Notes</h2>
                        </div>
                        <div>
                            <h2>✓ Rapid Intake</h2>
                            <h2>✓ Bed Status Board</h2>
                            <h2>✓ Billing</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "speciality") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">Specialty</h1></div>
                    <h4>Surgery</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Surgical workflow from pre-op assessment through post-op care, including OT scheduling and anaesthesia notes.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Pre-op Assessment</h2>
                            <h2>✓ Anaesthesia Notes</h2>
                            <h2>✓ Post-op Care</h2>
                        </div>
                        <div>
                            <h2>✓ OT Scheduling</h2>
                            <h2>✓ Surgical Checklists</h2>
                            <h2>✓ Billing</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "administrative") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="13" x2="16" y2="13"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">Administrative</h1></div>
                    <h4>Inventory</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Real-time stock management for medical supplies and consumables with reorder alerts and supplier tracking.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Stock Management</h2>
                            <h2>✓ Supplier Management</h2>
                            <h2>✓ Internal Transfers</h2>
                        </div>
                        <div>
                            <h2>✓ Reorder Alerts</h2>
                            <h2>✓ Expiry Tracking</h2>
                            <h2>✓ Reports</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "administrative") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="8" y1="18" x2="10" y2="18"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="14" y1="14" x2="16" y2="14"/><line x1="14" y1="18" x2="16" y2="18"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">Administrative</h1></div>
                    <h4>Finance & Billing</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Full revenue cycle management with patient billing, insurance claims, receipts, and financial reporting.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Patient Billing</h2>
                            <h2>✓ Payment Receipts</h2>
                            <h2>✓ Tax Compliance</h2>
                        </div>
                        <div>
                            <h2>✓ Insurance Claims</h2>
                            <h2>✓ Financial Reports</h2>
                            <h2>✓ Odoo Accounting</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "administrative") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="7" r="4"/><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/><polyline points="17 11 19 13 23 9"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">Administrative</h1></div>
                    <h4>HR & Payroll</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Staff management from onboarding to payroll — contracts, leaves, payslips, and performance tracking.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Employee Onboarding</h2>
                            <h2>✓ Leave Management</h2>
                            <h2>✓ Payslips</h2>
                        </div>
                        <div>
                            <h2>✓ Contract Management</h2>
                            <h2>✓ Payroll Processing</h2>
                            <h2>✓ Performance Reviews</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}

                {(filter === "all" || filter === "administrative") && (
                <div className="module-cards">
                    <div className="icons">
                        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg></div>
                        <div className="available"><h1>Available</h1></div></div>
                    <div><h1 className="name">Administrative</h1></div>
                    <h4>Attendance</h4>
                    <h3 style={{color: "rgb(100, 101, 105)"}}>Biometric and manual attendance tracking with shift management and overtime calculation.</h3>
                    <h5 style={{color: "gray", marginTop:"30px", marginBottom:"3px"}}>INCLUDES</h5>
                    <div className="text-grids">
                        <div>
                            <h2>✓ Biometric Integration</h2>
                            <h2>✓ Shift Management</h2>
                            <h2>✓ Leave Integration</h2>
                        </div>
                        <div>
                            <h2>✓ Manual Attendance</h2>
                            <h2>✓ Overtime Calculation</h2>
                            <h2>✓ Reports</h2>
                        </div>
                    </div>
                    <h5 className = "learn-more">Learn More</h5>

                </div>
                )}
                
            </div>

            <div className="bottom">
                <h1 style={{color: "white"}}>Ready to Get Started?</h1>
                <h2>Talk to our team and find the right combination of modules for your facility.</h2>
                
                <div className="bottom-buttons">
                <NavLink to="/" className="button1">← Back to Home</NavLink>
                <NavLink to="/#demos" className="button2" style={{color:"#2e7ed8", fontWeight:"500"}}>Contact Sales →</NavLink>
                </div>
                
            </div>

            <div className="bottom-nav">
                <span>© 2024 Beltech Solutions · CareCentral Healthcare ERP</span>
            </div>
        </>
    )
}
export default MoreModules;