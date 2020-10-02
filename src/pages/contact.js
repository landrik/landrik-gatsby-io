import React from "react"
import { useForm } from "react-hook-form"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from '../components/map.js'

const ContactPage = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <Layout>  
      <SEO title="Contact us" />    
      <div className="row">
        <div className="col-md">
            <div className="col-md-5 details-window">
                <h2 className="section-title">Let's start something great together</h2>
                <form id="form-contact" onSubmit={handleSubmit(onSubmit)} name="form-contact" className="form" autocomplete="off">  
                    <div className="panel panel-default">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <input type="text" placeholder="Your Name" id="name" name="name" tabindex="1" required />
                                <label for="name">Your Name:</label>
                            </li>
                            <li className="list-group-item">
                                <input type="text" placeholder="Your Email" id="email" name="email" tabindex="2" required />
                                <label for="email">Your Email:</label>
                            </li>
                            <li className="list-group-item options">
                                <label for="subject">Subject: I want </label>
                                <div id="iwant" className="option-group field">
                                    <input name="projSubject" type="radio" className="tab options_check" value="hello" checked="checked" required />
                                    <label className="option label_radio" for="hello">to say hello</label>

                                    <input name="projSubject" type="radio" className="tab options_check" value="quote" required />
                                    <label className="option label_radio" for="quote">a quote</label>

                                    <div className="tab__content">
                                        <div className="list-group-item enquiry">
                                            <textarea placeholder="Message…" id="message" name="message" tabindex="3" required></textarea>
                                            <label for="message">Message:</label>
                                        </div>
                                    </div>
                                    <div  className="tab__content">
                                        <div className="list-group-item options enquiry">
                                            <label for="project_type">What would I be working on?</label>
                                            <div className="option-group field">
                                                <span className="checkbox">
                                                    <input name="projType[]" type="checkbox" className="" value="website" checked="checked" required="" />
                                                    <label className="option label_check">Website</label>
                                                </span>
                                                <span className="checkbox">
                                                    <input name="projType[]" type="checkbox" className="" value="mobile" required="" />
                                                    <label for="mobile" className="option label_check">Mobile</label>
                                                </span>
                                                <span className="checkbox">
                                                    <input name="projType[]" type="checkbox" className="" value="other" required="" />
                                                    <label className="option label_check">Other</label>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="list-group-item options enquiry">
                                            <label for="budget">What is your budget?: </label>
                                            <input type="text" id="budget" name="projBudget" className="slider-input" value="£1500" />
                                            <div className="slider-wrapper">
                                                <div id="budget-slider"></div>
                                            </div>
                                        </div>
                                        <div className="list-group-item options enquiry">
                                            <textarea id="project_description" name="projDesc" placeholder="Project Description: What are the main goals of this project? For example: increasing conversion, modernizing website, improving brand recognition, boosting usability, etc..." id="projDesc" name="projDesc" required></textarea>
                                            <label for="projectDesc">Project description?</label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <input id="submit" className="button button-submit" type="submit" name="submit" value="Send message"/>
                    </div>
                </form>
                <div id="success"></div>
                <div id="error">
                  <span>
                    <p>Something went wrong, try refreshing your browser and submitting your form again.</p>
                  </span>
                </div>
                <ul className="social-links clearfix">
                  <li>
                    <a href="#" title="twitter" target="_blank"><i className="icon-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#" title="linkedin" target="_blank"><i className="icon-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#" title="github" target="_blank"><i className="icon-github"></i></a>
                  </li>
                  <li>
                    <a href="#" title="codepen" target="_blank"><i className="icon-codepen"></i></a>
                  </li>
                  <li className="footer-copy">© 2017 | handcrafted with <span className="heart">♥</span> by Landry Karege.</li>	
                </ul>
            </div>
            <Map />
        </div>
    </div>
    </Layout>  
  );
};

export default ContactPage



 
        



