import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="max-w-[1440px] mx-auto px-[90px] py-[31.5px] w-full flex justify-between font-[latoRegular]">
        <Link to="/">
          <div className="flex justify-center items-center gap-[6.5px] ">
            <img
              src="./Logo.svg"
              alt="Company logo"
              className="w-[49px] h-[33px]"
            />
            <h2 className="font-bold text-[32px]">Luminae</h2>
          </div>
        </Link>

        <div className="flex ml-[28.5px] items-center relative">
          <input
            type="text"
            className="px-2 py-3 border-[#E9E9E9] border rounded-sm  min-w-[345px] h-10"
            placeholder="Search Products"
          />
          <img
            src="./Search.svg"
            alt="Search icon "
            className="border-l border-[#E9E9E9] absolute right-[11.5px] px-3"
          />
          <div className="flex items-center gap-[7px] absolute mr-3 right-[56px]">
            <span className="text-sm">All categories</span>
            <img src="./Arrow.svg" alt="down arrow " />
          </div>
        </div>
        <div className="flex items-center">
          <nav>
            <ul className="flex list-none gap-[50px] text-[#555555]">
              <li>
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    isActive ? "text-[#FF7A00]" : "text-[#555555]"
                  }
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-[#FF7A00]" : "text-[#555555]"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    isActive ? "text-[#FF7A00]" : "text-[#555555]"
                  }
                >
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/help&support"
                  className={({ isActive }) =>
                    isActive ? "text-[#FF7A00]" : "text-[#555555]"
                  }
                >
                  Help & support
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <nav>
            <ul className="flex list-none gap-3">
              <li>
                <a href="#">
                  <img src="./Instagram.svg" alt="logo" />
                </a>
              </li>{" "}
              <li>
                <a href="#">
                  <img src="./FB.svg" alt="logo" />
                </a>
              </li>{" "}
              <li>
                <a href="#">
                  <img src="./Telegram.svg" alt="logo" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-[#262626] w-full flex justify-center">
        <div className="max-w-[1440px] mx-auto  px-[90px] py-[8px] w-full flex  font-[latoBold] text-white justify-between">
          <div className="flex items-center gap-1">
            <img src="./categories.svg" alt="categories" />
            <h2 className="text-[20px]">Categories</h2>
          </div>
          <div className="flex items-center ml-10">
            <span className="font-[latoRegular] text-[12px]">USD</span>
            <img src="./arrowWhite.svg" alt="arrow" />
          </div>
          <div className="flex items-center ml-3">
            <span className="font-[latoRegular] text-[12px]">English</span>
            <img src="./arrowWhite.svg" alt="arrow" />
          </div>
          <div className="flex gap-[10px] ml-[72px]  border-l border-[#7B7B7B] px-[72px] border-r">
            <img src="./menCosmetics.png" alt="shavers" />
            <div>
              <h4>Weekly Men's Toiletries Coupons.</h4>
              <p className="text-[#C4C4C4] font-[latoRegular] text-[12px]">
                We extend exclusive discounts to our male <br />
                clientele
              </p>
            </div>
          </div>
          <nav className="flex items-center">
            <ul className="flex list-none  ml-[72px] gap-[20px] text-[14px] font-[latoRegular]">
              <li className="flex gap-1 items-center">
                <img src="./signIn.svg" alt="avatar" className="w-6 h-6" />
                <a href="">Sign In</a>
              </li>
              <li className="flex gap-1 items-center">
                <img
                  src="./favourites.svg"
                  alt="favourites"
                  className="w-6 h-6"
                />
                <a href="">Favourites</a>
              </li>
              <li className="flex gap-1 items-center">
                <img src="./cart.svg" alt="shopping cart" className="w-6 h-6" />
                <a href="">Cart</a>
                <span className="ml-2 rounded-[100%] bg-[#3DC47E] px-2 py-2 w-6 h-6 flex items-center">
                  3
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
