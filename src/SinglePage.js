import React from 'react'
const image = window.location.origin + "/lines.jpg"

const Page = React.forwardRef((props, ref) => {
    return (
      <div className="single_page" ref={ref}>
        <div className="page-content" style={{backgroundImage: !props.background ? `url(${image})` : `url(${props.background})`, backgroundSize:"100% 100%", backgroundPosition:"center",  }}>
          <h2 className="page-header">{props.heading}</h2>
         {props.image &&  <div className="page-image">
              <img src={props.image} alt="" />
          </div>}
          <div className="page-text">{props.children}</div>
          {props.button && <button className='page_btn'>{props.button}</button>}
          <div className="page-footer">{props.number + 1}</div>
        </div>
      </div>
    );
  });

export default Page;