// import React from "react";
import React, { useState } from "react";
import logo from "./cu.png";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";

export default function Login() {
  const [password, setPassword] = useState("");

  const header = <h6>Pick a password</h6>;
  const footer = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen content-center">
      <div className="grid justify-center items-center px-10">
        <img src={logo} className="max-w-xs" alt="logo" />
        <p className="text-xl font-medium text-gray-500 px-5 max-w-lg">
          Ceylonuni helps you connect and share with the people in your
          university life
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <div className="field">
                <label htmlFor="username1" className="block">
                  Username
                </label>
                <InputText
                  id="username1"
                  aria-describedby="username1-help"
                  className="block w-full"
                />
                <small id="username1-help" className="block">
                  Enter your username to reset your password.
                </small>
              </div>
              <div className="field">
                <label htmlFor="username1" className="block">
                  Password
                </label>
                <Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    toggleMask
                    header={header}
                    footer={footer}
                    className="block w-full"
                  />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
