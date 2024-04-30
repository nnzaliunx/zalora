const ServicePage = () => {
  return (
    <div className="max-w-2xl mx-0 pt-24 h-screen bg-white text-black">
      <div className="card w-full px-0 mx-0 bg-base-100 shadow-xs border border-blue-100">
        <div className="card-body">
          <div className="flex">
            <h2 className="card-title text-3xl font-light">Hello,</h2>
          </div>
          <p className="leading-relaxed">
            Welcome to use! if you encounter any problems with deposite and
            withdrawal during use, please contact our custormer service team.
          </p>
          <div className="card-actions">
            <a
              href="https://tawk.to/chat/65f7fba8cc1376635adbb806/1hp8au3hg"
              target="_blank"
            >
              <button className="btn bg-indigo-700  hover:text-white  uppercase  w-full text-white text-base mt-4 ">
                Contact Customer Service
              </button>
            </a>
          </div>
          <p className="mt-2 pb-4 text-center text-gray-400 text-sm">
            Operating Hours: 11:00 - 23:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
