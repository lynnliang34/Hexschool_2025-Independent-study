import { NavLink } from "react-router";
import headerMenuItems from "../routes/headerMenuItems";

export default function HeaderNavbar() {
  return (
    <ul className="navbar-nav me-lg-3 me-xl-5 me-xxl-10">
      {headerMenuItems.map((item, index) => (
        <li className="nav-item me-xxl-6" key={index}>
          {/* 主選單項目 */}
          <NavLink className="nav-link-1" to={item.link}>
            {item.title}
          </NavLink>

          {/* 子選單 */}
          {item.subItems && (
            <div className="hover-section">
              <div className="d-flex flex-column px-2">
                {item.subItems &&
                  item.subItems.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      className="nav-link-2"
                      to={subItem.link}
                    >
                      {subItem.title}
                    </NavLink>
                  ))}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
