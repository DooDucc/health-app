export const preloadRoutes = {
  MyPage: () => import("../../myPage/page/MyPage"),
  MyRecord: () => import("../../myRecord/page/MyRecord"),
  ColumnPage: () => import("../../columnPage/page/ColumnPage"),
  LoginPage: () => import("../../authentication/page/LoginPage"),
};

export const preloadComponents = {
  CustomLineChart: () => import("../components/CustomLineChart"),
};

export const preloadImages = {
  mainPhoto: () => import("../assets/images/d01.jpg"),
  record1: () => import("../assets/images/record-1.jpg"),
  record2: () => import("../assets/images/record-2.jpg"),
  record3: () => import("../assets/images/record-3.jpg"),
};

export const preloadCriticalResources = async () => {
  try {
    await Promise.all([preloadRoutes.MyPage(), preloadImages.mainPhoto()]);
  } catch (error) {
    console.warn("Failed to preload critical resources:", error);
  }
};

export default {
  preloadCriticalResources,
};
