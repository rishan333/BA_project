"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/navbar";
import { ToastContainer } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    alert('Your password has been reset');
  };

  
  return (<>
    <Navbar />
    <ToastContainer />
     
    <div className="flex items-center justify-center h-[70vh] mt-15 bg-slate-50">
        <div className="text-center">
        <h1 className="font-semibold text-3xl mb-4">Reset your password here:</h1>

            <div className="mb-6 ml-8 mr-8">
              <Input
                type="password"
                placeholder="Enter new password"
                className={
                  "focus-visible:ring-red-500 px-4 py-2 border border-white rounded-md w-full"}
              />
            </div>
            <div className="mb-6 ml-8 mr-8">
              <Input
                type="password"
                placeholder="Confirm new password"
                className={
                  "focus-visible:ring-red-500 px-4 py-2 border border-white rounded-md w-full"}
              />
            </div>
            {/* Button */}
            <div className="flex items-end justify-center">
            <Button className="w-full mb-6 ml-8 mr-8 border-radius:0.25rem"  type="submit">
              Reset Password
            </Button>
            </div>
        <div className="mt-4 bg-slate-50 text-sm ">         
            </div>
        </div>
      </div>   
      
  </>
  );
};

export default ForgotPassword;
