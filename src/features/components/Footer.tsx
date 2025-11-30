const Footer = () => {
  return (
    <div>
      <div className="bg-[#D1E2EB] w-full">
        <footer className="max-w-[1440px] mx-auto">
          <nav className="flex gap-[126px] px-[250px] pb-[60px] pt-[130px]">
            <div>
              <span className=" font-[latoBold] text-[#262626] text-[14px]">
                Company
              </span>
              <ul className="space-y-[15px] mt-[25px]">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Store</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <span className=" font-[latoBold] text-[#262626] text-[14px]">
                Career Opportunities
              </span>
              <ul className="space-y-[15px] mt-[25px]">
                <li>
                  <a href="#">Selling Programs</a>
                </li>
                <li>
                  <a href="#">Advertise</a>
                </li>
                <li>
                  <a href="#">Cooperation</a>
                </li>
              </ul>
            </div>
            <div>
              <span className=" font-[latoBold] text-[#262626] text-[14px]">
                How to Buy
              </span>
              <ul className="space-y-[15px] mt-[25px]">
                <li>
                  <a href="#">MakingPayments</a>
                </li>
                <li>
                  <a href="#">Delivery Options</a>
                </li>
                <li>
                  <a href="#">Buyer Protection</a>
                </li>
                <li>
                  <a href="#">New User Guide</a>
                </li>
              </ul>
            </div>
            <div>
              <span className=" font-[latoBold] text-[#262626] text-[14px]">
                Help
              </span>
              <ul className="space-y-[15px] mt-[25px]">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
