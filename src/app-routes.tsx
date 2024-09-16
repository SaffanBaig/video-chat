import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageLoader from "./component/PageLoader";

const LandingPage = lazy(() => import("./pages/Landing"));
const MeetPage = lazy(() => import("./pages/Meet"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/meet/:id" element={<MeetPage />} />
        {/* Redirect any other path to Landing Page */}
        <Route path="*" element={<Navigate to={"/landing"} />} />
      </Routes>
    </Suspense>
  );
}
