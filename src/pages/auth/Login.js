import React from "react";
import logo from "./cu.png";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import "./auth.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen content-center">
      <div className="flex justify-end items-center">
        <div className="flex flex-col justify-center px-10 md:mt-0 mt-12">
          <img src={logo} className="max-w-xs" alt="logo" />
          <p className="text-xl font-medium text-gray-500 px-5 max-w-lg">
            Ceylonuni helps you connect and share with the people in your
            university life
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="min-h-full flex items-center justify-center">
          <div className="max-w-md w-full space-y-8">
            <div className="card cu-card md:mt-0 my-6">
              <h2 className="text-2xl font-extrabold text-teal-600">
                Sign in to your account
              </h2>
              <div className="grid">
                <div className="col-12 flex flex-col align-items-center justify-content-center">
                  <div className="p-fluid">
                    <div className="field">
                      <label htmlFor="username">Email Address</label>
                      <InputText
                        id="username"
                        type="text"
                        className="w-full cu-text"
                        placeholder="your university email address"
                      />
                      <small className="block text-gray-500">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="field">
                      <label htmlFor="password">Password</label>
                      <InputText
                        id="password"
                        type="password"
                        className="cu-text"
                        placeholder="your password"
                      />
                    </div>
                    <div className="field">
                      <Checkbox className="mr-3" id="remind"></Checkbox>
                      <label htmlFor="remind" className="p-checkbox-label">
                        Remember me
                      </label>
                    </div>
                    <Link to="/" className="w-full">
                      <Button
                        label="Sign in"
                        icon="pi pi-sign-in"
                        iconPos="right"
                        className="cu-button"
                      ></Button>
                    </Link>
                    <a
                      href="#;"
                      className="mt-5 block text-center text-teal-500"
                    >
                      Forgotten Password?
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <Divider align="center" className="text-gray-300">
                    or
                  </Divider>
                </div>
                <div className="col-12 flex flex-col align-items-center justify-content-center">
                  <small className="block text-gray-500 my-2">
                    Don't have an account?
                  </small>
                  <Link to="/signup" className="w-full">
                    <Button
                      label="Sign up"
                      icon="pi pi-user-plus"
                      className="p-button-success cu-button w-full"
                    ></Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
