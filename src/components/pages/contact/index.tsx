'use client';
import React from 'react';
import LandingBanner from '@/components/layout/landingBanner';
import Footer from '@/components/layout/footer';
import CallSolution from '../home/CallSolution';
import ThemeInput from '@/components/shared/inputs/ThemeInput';
import Container from '@/components/layout/container';
import ThemeButton from '@/components/shared/buttons/ThemeButton';
import ThemeTextarea from '@/components/shared/inputs/ThemeTextarea';

export default function Contact() {
  return (
    <div>
      <LandingBanner pageLabel={'Contact US'} />
      <Container>
        <div className="mt-15">
          <div className="grid grid-cols-2">
            <div>Contact Us</div>
            <div className="bg-[#eff1ed] p-10 rounded-3xl">
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <ThemeInput
                    name="firstName"
                    label="First Name"
                    placeholder="Enter First Name"
                    className="w-full border-2-black"
                  />

                  <ThemeInput
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter Last Name"
                    className="w-full border-2-black"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-5">
                  <ThemeInput
                    name="email"
                    label="Email"
                    placeholder="Enter Email"
                    className="w-full border-2-black"
                  />

                  <ThemeInput
                    name="address"
                    label="Address"
                    placeholder="Enter Address"
                    className="w-full border-2-black"
                  />
                </div>

                <div className="grid grid-cols-1 mt-5">
                  <ThemeTextarea
                    name="message"
                    label="Message"
                    placeholder="Enter Your Message Here..."
                  />
                </div>

                <div className="grid grid-cols-1 mt-5">
                  <div className="text-end">
                    <ThemeButton
                      btnText="Submit"
                      onClick={() => {
                        console.log('ok');
                      }}
                      className="bg-primary text-md font-bold mt-3 py-5 px-7 cursor-pointer"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>

      <CallSolution />
      <Footer />
    </div>
  );
}
