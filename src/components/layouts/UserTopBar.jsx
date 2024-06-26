import { Link } from "react-router-dom";
import { FaListUl } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GiShoppingBag } from "react-icons/gi";

const sideLinks = [
  {
    icon: <CgProfile />,
    title: "Profile",
    to: "/user/profile",
  },
  {
    icon: <GiShoppingBag />,
    title: "Purchases",
    to: "/user/purchases",
  },
  {
    icon: <FaListUl />,
    title: "Wish List",
    to: "/user/wish-list",
  },
  {
    icon: <IoLibrary />,
    title: "Payment Method",
    to: "/payment-method",
  },
];

export const UserTopBar = () => {
  // const { user } = useSelector((state) => state.userInfo);

  // const list =
  //   user.role === "admin"
  //     ? sideLinks
  //     : sideLinks.filter((itm) => !itm.isAdminOnly);

  return (
    <div className="d-flex align-items-center justify-content-center mb-2">
      {sideLinks.map(({ title, to, icon }) => (
        <Link key={title} to={to} className="p-4 nav-link border">
          {icon} {title}
        </Link>
      ))}
    </div>
  );
};
