import React from 'react'
const image = window.location.origin + "/bp.jpg"
// ddds
const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page back_cover" ref={ref} data-density="hard">
        <div className="page-content" style={{backgroundImage:`url(${image})`, backgroundSize:"cover", backgroundPosition:"center"}}>
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });

export default PageCover;


