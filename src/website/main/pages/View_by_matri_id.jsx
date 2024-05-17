import React from "react";
import Auth_User from "../../authentication/Auth_User";

const View_by_matri_id = () => {
    const{token}=Auth_User(); 
    const image = {
        backgroundImage: `url(https://thegrandindianwedding.com/wp-content/uploads/2016/11/indian-wedding-hands.jpg)`, // Use the imported image as the background
       
        backgroundRepeat: 'no-repeat', // Use camelCase
    backgroundSize: 'cover', // Use camelCase
    width:"100%",
    height:"650px",
    marginTop:"-120px"
      };  
  return (       
    <div style={{ marginTop: "180px" }}> 
    {token?(
       <> 
       <div className="container-fluid" style={image}>
         <div className="carousel " >
           <div class="center clearfix"><div class="col-sm-7 center_left clearfix">
             <div class="center_left_inner clearfix">
               <h1 style={{ marginTop: "200px" }}>View by cast</h1>
               <h3></h3>
               <h5><a href="/ " style={{ color: "white" }}>Home</a></h5>
 
             </div>
           </div>
           </div>
 
         </div>
       </div>
       <h2   style={{color:"rgb(220, 53, 69)",textAlign:"center"}}>View By Matri_id </h2></>)
      :(
      <section className="error__section section--padding">
        <div className="container">
          <div className="row row-cols-1">
            <div className="col">
              <div className="error__content text-center">
                <img
                  className="error__content--img mb-50"
                  src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png?w=1024"
                  alt="error-img"
                />
                <h2 className="error__content--title">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>OOPs! </font>
                    <font style={{ verticalAlign: "inherit" }}>
                    We could not find this page
 
                    </font>
                  </font>
                </h2>
                <p className="error__content--desc">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                    Hello, this is really painful to follow.
                    </font>
                    <font style={{ verticalAlign: "inherit" }}>
                    The mind should be taken for granted.
                    </font>
                  </font>
                </p>
                <a className="error__content--btn primary__btn" href="/">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Back to home
                    </font>
                  </font>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
    </div>
  );
};

export default View_by_matri_id;
