import arrow from "../assets/SVG/arrow.svg";
import { toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    try {
      injectStyle();
      toast.promise(
        fetch(import.meta.env.VITE_API_ADDRESS, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.name,
            mailid: data.email,
            message: data.message,
          }),
        }).then((res) => {
          if (res.ok) {
            reset({ email: "", name: "", message: "" });
          } else {
            throw new Error(`error: ${res.status}`);
          }
        }),
        {
          pending: "pending",
          success: "message sent successfully",
          error: "error occured in sending the message",
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="text-monofont flex flex-col transition-all"
    >
      <label>Email</label>
      <input
        {...register("email", {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          },
        })}
        type="text"
        placeholder="Enter your email"
        className="p-3 bg-formbackground mb-5 rounded-md text-black"
      />
      <label>Name</label>
      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="Enter your name"
        className="p-3 bg-formbackground mb-5 rounded-md text-black"
      />
      <label>Message</label>
      <textarea
        {...register("message", { required: true })}
        placeholder="Enter your message"
        className="p-3 h-48 bg-formbackground mb-5 rounded-md text-black"
      />

      {errors?.email?.type == "required" && (
        <p className="font-secondary text-white p-2 bg-red-600 text-center mb-2">
          please enter your email
        </p>
      )}
      {errors?.name?.type == "required" && (
        <p className="font-secondary text-white p-2 bg-red-600 text-center mb-2">
          please enter your name
        </p>
      )}
      {errors?.message?.type == "required" && (
        <p className="font-secondary text-white p-2 bg-red-600 text-center mb-2">
          please enter the message
        </p>
      )}
      {errors?.email?.type == "pattern" && (
        <p className="font-secondary text-white p-2 bg-red-600 text-center mb-2">
          Invalid Email address
        </p>
      )}

      <div className="bg-buttoncolor p-3 font-extrabold text-white rounded-md flex justify-center items-center gap-2 cursor-pointer">
        <input type="submit" className="cursor-pointer" />
        <p>
          <img src={arrow} />
        </p>
      </div>
    </form>
  );
};

export default Form;
