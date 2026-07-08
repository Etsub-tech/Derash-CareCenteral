function Question(){
    return(
        <>
            <div className='ques'>
                <hr />
                <h3 style={{color: "rgb(29, 86, 126)"}}>FAQ</h3>
                <div className='title'><h1>Frequently Asked Questions</h1></div>
                <h3 style={{color: "gray"}}>Everything you need to know about CareCentral.</h3>
                <div className="ques-grid">
                <div className="ques-grid-card"><div>what is CareCenteral</div></div>
                <div className="ques-grid-card">Can it work for multiple branches?</div>
                <div className="ques-grid-card">Can we add modules later?</div>
                <div className="ques-grid-card">Is cloud deployment available?</div>
                <div className="ques-grid-card">Can it integrate with existing systems?</div>
                <div className="ques-grid-card">Do you provide training?</div>
                <div className="ques-grid-card">Do you provide support?</div>
                </div>
                </div>
        </>
    )
}

export default Question;