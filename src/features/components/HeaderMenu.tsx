import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div className="p-6 bg-white z-10 flex font-[latoRegular] absolute rounded-lg">
      <div>
        <div className="flex mb-10 gap-12">
          <div className="space-y-2 flex flex-col min-w-[145px] ">
            <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
              SHOE & BAG
            </span>
            <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
              <li>
                <Link to="#">Casual Shoes</Link>
              </li>
              <li>
                <Link to="#">Boots</Link>
              </li>
              <li>
                <Link to="#">Sandals</Link>
              </li>
              <li>
                <Link to="#">Slippers</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 flex flex-col min-w-[145px]">
            <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
              HOME TEXTILE
            </span>
            <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
              <li>
                <Link to="#">Bedding</Link>
              </li>
              <li>
                <Link to="#">Pillows</Link>
              </li>
              <li>
                <Link to="#">Handkerchief Towels</Link>
              </li>
              <li>
                <Link to="#">Curtain</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 flex flex-col min-w-[145px]">
            <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
              PARTY SUPPLIES
            </span>
            <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
              <li>
                <Link to="#">Event & Party</Link>
              </li>
              <li>
                <Link to="#">Christmas</Link>
              </li>
              <li>
                <Link to="#">Artificial Decorations</Link>
              </li>
              <li>
                <Link to="#">Wedding</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-12">
          <div className="space-y-2 flex flex-col min-w-[145px]">
            <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
              LUXURY &<br /> DESIGNER
            </span>
            <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
              <li>
                <Link to="#">Towels</Link>
              </li>
              <li>
                <Link to="#">Bathroom Scales</Link>
              </li>
              <li>
                <Link to="#">Bath Mats</Link>
              </li>
              <li>
                <Link to="#">Shower Caps</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 flex flex-col min-w-[145px]">
            <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
              COSMETICS
            </span>
            <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
              <li>
                <Link to="#">
                  Shampoo and <br /> Conditioner
                </Link>
              </li>
              <li>
                <Link to="#">Styling Products</Link>
              </li>
              <li>
                <Link to="#">Hair Accessories</Link>
              </li>
              <li>
                <Link to="#">Men's Grooming</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 flex flex-col min-w-[145px]">
            <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
              SPORT & <br />
              OUTDOORS
            </span>
            <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
              <li>
                <Link to="#">Team Sports</Link>
              </li>
              <li>
                <Link to="#">Water Sports</Link>
              </li>
              <li>
                <Link to="#">Outdoor Recreation</Link>
              </li>
              <li>
                <Link to="#">Fitness Equipment</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex ml-12 gap-4 ">
        <div className="space-y-2 flex flex-col">
          <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
            Clothes
          </span>
          <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
            <li>
              <Link to="#">Bottoms</Link>
            </li>
            <li>
              <Link to="#">Women's Clothing</Link>
            </li>
            <li>
              <Link to="#">T-Shirts and Tops</Link>
            </li>
            <li>
              <Link to="#">Bottoms</Link>
            </li>
            <li>
              <Link to="#">Dresses</Link>
            </li>
            <li>
              <Link to="#">Outerwear</Link>
            </li>
            <li>
              <Link to="#">Formal Wear</Link>
            </li>
            <li>
              <Link to="#">Casual Wear</Link>
            </li>
            <li>
              <Link to="#">Seasonal Collections</Link>
            </li>
            <li>
              <Link to="#">Sports Bras</Link>
            </li>
            <li>
              <Link to="#">Workout Tops</Link>
            </li>
            <li>
              <Link to="#">Fall Wardrobe</Link>
            </li>
          </ul>
        </div>
        <img src="./headerMenu.png" alt="Womans clothes" />
      </div>
    </div>
  );
};

export default HeaderMenu;
