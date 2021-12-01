import { Grid, Typography } from "@material-ui/core";
import React from "react";
import './welcome.css'
const Welcome = (props) => {
  return (
    <React.Fragment>
              <section>
                <div  id="sec1" className="container-fluid">           

                <div className="container hm1">

                    <div className="home1">
                        <a  id="am1" className=" btn-primary button-sm" href="#">Find Jobs, Employment &amp; Career Opportunities</a>
                        <h2 className="am2 text-white">Search Between More Than <br/> <span className="text-primary">50,000</span> Open Jobs.</h2>
                        </div>

                        <div className="hm2">
                        <form className="form-control">
                            <div className="row" >
                    
                                <div className="col-lg-6 col-md-6" >
                                    <div className="form-group" >
                                        <label>
                                            
                                        </label>
                    
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Job Title, Keywords, or Phrase"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fas fa-search" id="fa1"></i></span>
                                            </div>
                                        </div>
                                </div>
                            </div>
                                   
                            <div className="col-lg-4 col-md-6">
                                <div className="form-group">
                                    <label></label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Location"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="fas fa-map-marker-alt" id="fa2"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
                            <div className="col-lg-2 col-md-6">
                            {/* <label for=""></label> */}
                            <div className="Find-job-btn">

                            <button id="fa3" type="submit" className="btn-primary  btn-block">Find Job</button>
                            </div>
                                
                            </div>

                        </div>
                    </form>
                    </div>

                </div>
                
              </div>
            </section>
            </React.Fragment>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
