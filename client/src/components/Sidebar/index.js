import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  accessCategories,
  accessTalents,
  accessEvents,
  accessPayments,
  accessOrders,
  accessParticipants,
} from "../../const/access";

function SidebarItem({ role, roles, path, currentPath, onClick, icon, children }) {
  const isHas = roles.indexOf(role);
  const isActive = currentPath.startsWith(path);
  if (isHas < 0) return null;
  return (
    <div
      className={`nav-link ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {icon && <span className="me-3 d-flex align-items-center">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState({ role: null, email: "" });

  useEffect(() => {
    const data = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};
    setAuth(data);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };

  // Modern SVG Icons
  const icons = {
    dashboard: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="16" width="7" height="5" />
      </svg>
    ),
    categories: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
    talents: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    payments: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    events: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    participants: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
    orders: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  };

  return (
    <div className="cms-sidebar shadow-lg">
      <div className="logo-wrapper">
        <a href="/dashboard" className="logo">
          SEMINA<span>.CMS</span>
        </a>
      </div>

      <div className="profile-wrapper">
        <div className="profile-name text-truncate">
          {auth.email ? auth.email.split("@")[0] : "Admin"}
        </div>
        <div className="profile-role">{auth.role || "staff"}</div>
      </div>

      <div className="menu-wrapper">
        <SidebarItem
          role={auth.role}
          roles={accessCategories.lihat}
          path="/dashboard"
          currentPath={location.pathname}
          onClick={() => navigate("/dashboard")}
          icon={icons.dashboard}
        >
          Dashboard
        </SidebarItem>

        <SidebarItem
          role={auth.role}
          roles={accessCategories.lihat}
          path="/categories"
          currentPath={location.pathname}
          onClick={() => navigate("/categories")}
          icon={icons.categories}
        >
          Categories
        </SidebarItem>

        <SidebarItem
          role={auth.role}
          roles={accessTalents.lihat}
          path="/talents"
          currentPath={location.pathname}
          onClick={() => navigate("/talents")}
          icon={icons.talents}
        >
          Talents
        </SidebarItem>

        <SidebarItem
          role={auth.role}
          roles={accessPayments.lihat}
          path="/payments"
          currentPath={location.pathname}
          onClick={() => navigate("/payments")}
          icon={icons.payments}
        >
          Payments
        </SidebarItem>

        <SidebarItem
          role={auth.role}
          roles={accessEvents.lihat}
          path="/events"
          currentPath={location.pathname}
          onClick={() => navigate("/events")}
          icon={icons.events}
        >
          Events
        </SidebarItem>

        <SidebarItem
          role={auth.role}
          roles={accessParticipants.lihat}
          path="/participants"
          currentPath={location.pathname}
          onClick={() => navigate("/participants")}
          icon={icons.participants}
        >
          Participants
        </SidebarItem>

        <SidebarItem
          role={auth.role}
          roles={accessOrders.lihat}
          path="/orders"
          currentPath={location.pathname}
          onClick={() => navigate("/orders")}
          icon={icons.orders}
        >
          Orders
        </SidebarItem>
      </div>

      <div className="logout-wrapper">
        <button className="btn-logout border-0" onClick={handleLogout}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
}
