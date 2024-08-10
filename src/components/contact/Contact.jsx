import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';
import emailjs from 'emailjs-com';


const ContactContainer = styled.div`
  /* Container styles */
`;

const FormContainer = styled.form`
  /* Form styles */
`;

const Input = styled.input`
  /* Input styles */
`;

const Textarea = styled.textarea`
  /* Textarea styles */
`;

const SubmitButton = styled.button`
  /* Submit button styles */
`;

const SuccessMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #4bb543;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = (data) => {
    const serviceId = import.meta.env.VITE_S_KEY;
    const templateId = import.meta.env.VITE_T_ID;
    const userId = import.meta.env.VITE_USER_ID;
    console.log(userId);
    console.log(templateId);
    console.log(serviceId);
    emailjs
      .send(serviceId, templateId, data, userId)
      .then(
        (result) => {
          // Show success message
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000); // Hide the message after 3 seconds
          reset(); // Reset the form
        },
        (error) => {
          // Handle error
          console.error('Error sending email:', error.text);
        }
      );
  };

  return (
    <ContactContainer id="contact" className="container m-auto mt-16">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-gray-600 mt-2">Get in touch with me for any questions or opportunities</p>
      </div>

      {/* Card */}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          {/* Left section */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold">Let's connect</h3>
            <p className="text-gray-600">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex items-center gap-2">
              <BsArrowRight className="text-yellow-500" />
              <p>himanshu-srivastava@outlook.com</p>
            </div>
          </div>
        </div>
        <div className="right flex-1">
          <FormContainer
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* ... (form inputs remain unchanged) */}
          </FormContainer>
        </div>
      </div>
        <div className="right flex-1">
          <FormContainer
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <Input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="Your Name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span>{errors.name.message}</span>}

            <Textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              placeholder="Write your message"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <span>{errors.message.message}</span>}

            <SubmitButton
              className="bg-yellow-500 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill />
            </SubmitButton>
          </FormContainer>
        </div>
      </div>

      {/* Success message */}
      <SuccessMessage show={showSuccessMessage}>
        <p>Message sent successfully!</p>
      </SuccessMessage>
    </ContactContainer>
  );
};

export default Contact;
