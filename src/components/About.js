import React from "react";

export default function About(props) {

    
  //  const [myStyle,setMyStyle]=useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
  }

     

  return (
    <div className="container">
      <h1 className="my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item"  >
          <h2 className="accordion-header" id="headingOne">
            <button
              aria-controls="collapseOne"
              aria-expanded="true"
              className="accordion-button"
              data-bs-target="#collapseOne"
              data-bs-toggle="collapse"
              type="button"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            aria-labelledby="headingOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            id="collapseOne"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingTwo">
            <button
              aria-controls="collapseTwo"
              aria-expanded="false"
              className="accordion-button collapsed"
              data-bs-target="#collapseTwo"
              data-bs-toggle="collapse"
              type="button"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            aria-labelledby="headingTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            id="collapseTwo"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              aria-controls="collapseThree"
              aria-expanded="false"
              className="accordion-button collapsed"
              data-bs-target="#collapseThree"
              data-bs-toggle="collapse"
              type="button"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            aria-labelledby="headingThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            id="collapseThree"
          >
            <div className="accordion-body"style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
       
    </div>
  );
}
