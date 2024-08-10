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

const Message = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  background-color: ${({ type }) => (type === 'success' ? '#4bb543' : '#ff3333')};
  color: white;
`;

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message, setMessage] = useState({ show: false, text: '', type: 'success' });

  const onSubmit = async (data) => {
    try {
      const serviceId = import.meta.env.VITE_S_KEY;
      const templateId = import.meta.env.VITE_T_ID;
      const userId = import.meta.env.VITE_USER_ID;

      await emailjs.send(serviceId, templateId, data, userId);
      
      setMessage({ show: true, text: 'Message sent successfully!', type: 'success' });
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage({ show: true, text: 'Failed to send message. Please try again.', type: 'error' });
    } finally {
      setTimeout(() => setMessage({ ...message, show: false }), 3000);
    }
  };

  return (
    <ContactContainer id="contact" className="container m-auto mt-16">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Contact Me
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Get in touch with me for any questions or opportunities
        </p>
      </div>

      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold">Let's connect</h3>
            <p className="text-gray-600">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
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
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}

            <Input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="Your Name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}

            <Textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              placeholder="Write your message"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}

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

      <Message show={message.show} type={message.type}>
        <p>{message.text}</p>
      </Message>
    </ContactContainer>
  );
};

export default Contact;
