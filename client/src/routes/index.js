import { Navigate, Route, Routes } from "react-router-dom";
import GuardRoute from "../components/GuardRoute";
import GuestOnlyRoute from "../components/GuestOnlyRoute";

import Login from "../pages/signin";
import { HomeRoute } from "./HomeRoute";
import { TalentsRoute } from "./TalentsRoute";
import { CategoriesRoute } from "./CategoriesRoute";
import Sidebar from "../components/Sidebar";
import { PaymentsRoute } from "./PaymentsRoute";
import { EventsRoute } from "./EventsRoute";
import { OrdersRoute } from "./OrdersRoute";
import { ParticipantsRoute } from "./ParticipantsRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="signin"
        element={
          <GuestOnlyRoute>
            <Login />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/"
        element={
          <div className="d-flex" style={{ minHeight: "100vh" }}>
            <Sidebar />
            <div className="flex-grow-1 cms-content">
              <GuardRoute />
            </div>
          </div>
        }
      >
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path="categories/*" element={<CategoriesRoute />} />
        <Route path="talents/*" element={<TalentsRoute />} />
        <Route path="payments/*" element={<PaymentsRoute />} />
        <Route path="events/*" element={<EventsRoute />} />
        <Route path="orders/*" element={<OrdersRoute />} />
        <Route path="participants/*" element={<ParticipantsRoute />} />
        <Route path="" element={<Navigate to="/dashboard" replace={true} />} />
      </Route>
    </Routes>
  );
}
