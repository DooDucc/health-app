import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../authentication/store/authenticationSlice";
import type { AppDispatch } from "../store";

export const useNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveNavItem = (itemPath: string) => {
    return location.pathname === itemPath;
  };

  const handleMyRecordClick = () => {
    navigate("/my-record");
  };

  const handleChallengeClick = () => {
    navigate("/challenge");
  };

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsMenuOpen(false);
    navigate("/");
  };

  const handleMenuItemClick = (item: string) => {
    setIsMenuOpen(false);
    switch (item) {
      case "自分の記録":
        navigate("/my-record");
        break;
      case "コラム一覧":
        navigate("/column");
        break;
      case "ログアウト":
        handleLogout();
        break;
      default:
        break;
    }
  };

  const menuItems = [
    "自分の記録",
    "体重グラフ",
    "目標",
    "選択中のコース",
    "コラム一覧",
    "設定",
    "ログアウト",
  ];

  return {
    isMenuOpen,
    toggleMenu,
    isActiveNavItem,
    handleMyRecordClick,
    handleChallengeClick,
    handleNotificationClick,
    handleLogoClick,
    handleMenuItemClick,
    handleLogout,
    menuItems,
  };
};