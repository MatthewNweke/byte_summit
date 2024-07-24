import React from "react";
import GetInTouch from "@/app/components/GetInTouch";
import "../../css/Styles.module.css";

const page = () => {
  return (
    <div className="mt-28">
      <div className="">
        <div className="bg-[#E6EBFE] h-[40vh]">
          <div className="bg-[#E6EBFE] max-md:mt-5 w-[70%] left-1/2 -translate-x-1/2 max-lg:w-[80%] max-md:w-[90%] max-sm:w-[95%] max-lg:mt-10 relative max-2xl:top-[15%]  pt-5 px-3 max-sm:px-5 max-sm:pb-5">
            <p className="text-[#0032F0]  text-[1.5rem] font-semibold max-md:text-[1.2rem] ">
              Privacy Policy
            </p>
          </div>
        </div>
        <div className="relative bottom-[20vh] p-5 rounded-md shadow-xl bg-white w-[70%] left-1/2 -translate-x-1/2 max-lg:w-[80%] max-md:w-[90%] max-sm:w-[95%] max-md:bottom-[15vh]">
          <p className="border-b-[1px] py-5 text-[#121212] font-semibold">
            ByteSummit Terms and Conditions
          </p>
          <p className="py-5">
            We transform ideas and concepts into fully functional products that
            are both aesthetically pleasing and functional, satisfying business
            requirements
          </p>

          <ol className="list-decimal pl-5 leading-7">
            <li>
              Introduction Welcome to ByteSummit! By accessing or using our
              website, you agree to comply with these terms and conditions.
              Please read them carefully.
            </li>

            <li className="mt-5">
              <p> Definitions </p>
              <ul className="list-disc">
                <li> User: Any individual accessing or using ByteSummit.</li>
                <li>
                  {" "}
                  Content: All text, images, videos, and other materials
                  available on the platform.
                </li>
                <li>
                  Services: The features, functionalities, and tools provided by
                  ByteSummit.{" "}
                </li>
              </ul>
            </li>
            <li className="mt-5">
              <p> User Obligations By using ByteSummit, you agree to:</p>
              <ul className="list-disc">
                <li>
                  {" "}
                  Provide accurate and complete information during registration.
                </li>
                <li>Comply with all applicable laws and regulations.</li>
                <li>
                  Refrain from engaging in spam, hacking, or any malicious
                  activities.
                </li>
                <li> Treat other users with respect and courtesy.</li>
              </ul>
            </li>
            <li className="mt-5">
              <p>Intellectual Property</p>
              <ul className="list-disc">
                <li>
                  {" "}
                  Ownership: ByteSummit retains ownership of all content created
                  by the platform.
                </li>
                <li>
                  {" "}
                  User Content: By submitting content, users grant ByteSummit a
                  non-exclusive, worldwide, royalty-free license to use,
                  reproduce, and distribute their content.{" "}
                </li>
              </ul>
            </li>
            <li className="mt-5">
              Privacy and Data Collection
              <ul className="list-disc">
                <li>
                  Data Collection: ByteSummit collects user data for account
                  management, analytics, and personalization.
                </li>
                <li>
                  {" "}
                  Cookies: We use cookies to enhance user experience. By using
                  ByteSummit, you consent to our cookie policy.{" "}
                </li>
              </ul>
            </li>
            <li className="mt-5">
              {" "}
              <p>Disclaimers and Limitations</p>
              <ul className="list-disc">
                <li>
                  {" "}
                  Accuracy: While we strive for accuracy, ByteSummit does not
                  guarantee the correctness of all information.{" "}
                </li>
                Liability:
                <li>
                  ByteSummit is not liable for any direct, indirect, or
                  consequential damages arising from platform use.{" "}
                </li>
              </ul>
            </li>
            <li className="mt-5">
              <p>Termination and Suspension</p>
              <ul className="list-disc">
                <li>
                  We reserve the right to terminate or suspend user accounts for
                  violations of these terms.
                </li>
                <li>Users have the right to appeal account decisions.</li>
              </ul>
            </li>
            <li className="my-5">
              <p>Governing Law and Jurisdiction</p>
              <ul className="list-disc">
                <li>
                  {" "}
                  These terms are governed by the laws of [Your Jurisdiction].{" "}
                </li>
                <li>
                  {" "}
                  Any disputes shall be resolved in the courts of [Your
                  Jurisdiction].
                </li>
              </ul>
              <p className="mt-5">
                {" "}
                Remember that this is a general template, and you should consult
                legal professionals to tailor it specifically for ByteSummit. If
                you have any specific requirements or need further assistance,
                feel free to ask! 📝🔍
              </p>
            </li>
          </ol>

          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default page;
