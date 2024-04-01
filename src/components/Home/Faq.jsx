import React from "react";

const Faq = () => {
  return (
    <div className="join join-vertical  w-full mt-6">
      <div className="collapse collapse-arrow join-item border border-blue-100">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-sm font-semibold">
          Invite Friends
        </div>
        <div className="collapse-content">
          <p className="text-xs leading-6 text-slate-400">
            No, only individuals with a recruitment background or those working
            in hiring-related roles can join our platform. When you invite
            friends, please ensure they meet these criteria to maintain the
            integrity of our community and ensure a high-quality networking
            experience for all members.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-blue-100">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-sm font-semibold">FAQ</div>
        <div className="collapse-content">
          <p className="text-xs leading-6 text-slate-400">
            If you have any additional questions or need further assistance, we
            encourage you to visit our Customer Service Center FAQ. Our FAQ
            section is designed to provide answers to commonly asked questions
            and help address any concerns you may have. Simply navigate to the
            Customer Service Center section on our website or platform to access
            a comprehensive list of FAQs.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-blue-100">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-sm font-semibold">
          Terms & Agreements
        </div>
        <div className="collapse-content">
          <p className="text-xs leading-6 text-slate-400">
            To access our Terms & Agreements, simply navigate to the designated
            section on our website or platform. Here, you'll find detailed
            information about the terms of service, privacy policy, and other
            legal agreements governing your use of our platform.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-blue-100">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-sm font-semibold">About Zalora</div>
        <div className="collapse-content">
          <p className="text-xs leading-6 text-slate-400">
            ZALORA: Your go-to for top fashion brands. Shop shirts, dresses,
            sneakers, and more. Over 120,000 products available for Review.
            Review now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
