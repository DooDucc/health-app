import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleMenuItemClick = (item: string) => {
    setIsMenuOpen(false);
    switch (item) {
      case "自分の記録":
        navigate("/my-record");
        break;
      case "コラム一覧":
        navigate("/column");
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
    menuItems,
  };
};
