import React from "react"
import { useForm } from "react-hook-form"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <Layout>  
      <SEO title="Contact us" />    
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input 
            type="email"
            name="email"
            id="email"
            ref={register({
                required: "Required",
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
                }
            })}
            />
            {errors.email && errors.email.message}
          </label>
            <label>
                Subject
                <input type="text" name="subject" id="subject" />
            </label>
            <label>
                Message
                <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
            </form>
    </Layout>  
  );
};

export default ContactPage

