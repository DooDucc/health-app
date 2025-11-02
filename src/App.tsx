import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import {
  MainLayout,
  LoadingSpinner,
  preloadCriticalResources,
} from "./modules";
import type { RootState } from "./modules/base/store";

const MyPage = lazy(() => import("./modules/myPage/page/MyPage"));
const MyRecord = lazy(() => import("./modules/myRecord/page/MyRecord"));
const ColumnPage = lazy(() => import("./modules/columnPage/page/ColumnPage"));
const LoginPage = lazy(() => import("./modules/authentication/page/LoginPage"));

const App = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authentication.isLoggedIn
  );

  useEffect(() => {
    preloadCriticalResources();
  }, []);

  if (!isLoggedIn) {
    return (
      <Suspense
        fallback={
          <LoadingSpinner
            size="lg"
            message="Loading page..."
            className="min-h-screen"
          />
        }
      >
        <Routes>
          <Route
            path="/column"
            element={
              <MainLayout>
                <ColumnPage />
              </MainLayout>
            }
          />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <MainLayout>
      <Suspense
        fallback={
          <LoadingSpinner
            size="lg"
            message="Loading page..."
            className="min-h-screen"
          />
        }
      >
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="/my-record" element={<MyRecord />} />
          <Route path="/column" element={<ColumnPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default App;
