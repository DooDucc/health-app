import {
  logo,
  iconMemo,
  iconChallenge,
  iconInfo,
  iconMenu,
  iconClose,
  colors,
} from "../assets";
import { useNavbar } from "../hooks";

const Navbar = () => {
  const {
    isMenuOpen,
    toggleMenu,
    isActiveNavItem,
    handleMyRecordClick,
    handleChallengeClick,
    handleNotificationClick,
    handleLogoClick,
    handleMenuItemClick,
    menuItems,
  } = useNavbar();

  return (
    <nav
      className="px-4 fixed top-0 left-0 right-0 z-40 h-[64px]"
      style={{ backgroundColor: colors.dark500Text }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto h-full w-[960px]">
        <div
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleLogoClick}
        >
          <img src={logo} alt="Healthy" className="h-8" />
        </div>

        <div className="flex items-center space-x-8">
          <div
            className="flex items-center space-x-2 cursor-pointer transition-colors"
            style={{
              color: isActiveNavItem("/my-record")
                ? colors.primary400
                : colors.light,
            }}
            onMouseEnter={(e) =>
              !isActiveNavItem("/my-record") &&
              (e.currentTarget.style.color = colors.primary400)
            }
            onMouseLeave={(e) =>
              !isActiveNavItem("/my-record") &&
              (e.currentTarget.style.color = colors.light)
            }
            onClick={handleMyRecordClick}
          >
            <img src={iconMemo} alt="記録" className="w-6 h-6" />
            <span className="text-[16px] font-light">自分の記録</span>
          </div>

          <div
            className="flex items-center space-x-2 cursor-pointer transition-colors"
            style={{
              color: isActiveNavItem("/challenge")
                ? colors.primary400
                : colors.light,
            }}
            onMouseEnter={(e) =>
              !isActiveNavItem("/challenge") &&
              (e.currentTarget.style.color = colors.primary400)
            }
            onMouseLeave={(e) =>
              !isActiveNavItem("/challenge") &&
              (e.currentTarget.style.color = colors.light)
            }
            onClick={handleChallengeClick}
          >
            <img src={iconChallenge} alt="チャレンジ" className="w-6 h-6" />
            <span className="text-[16px] font-light">チャレンジ</span>
          </div>

          <div
            className="flex items-center space-x-2 cursor-pointer transition-colors"
            style={{
              color: isActiveNavItem("/notifications")
                ? colors.primary400
                : colors.light,
            }}
            onMouseEnter={(e) =>
              !isActiveNavItem("/notifications") &&
              (e.currentTarget.style.color = colors.primary400)
            }
            onMouseLeave={(e) =>
              !isActiveNavItem("/notifications") &&
              (e.currentTarget.style.color = colors.light)
            }
            onClick={handleNotificationClick}
          >
            <img src={iconInfo} alt="お知らせ" className="w-6 h-6" />
            <span className="text-[16px] font-light">お知らせ</span>
          </div>

          <div className="relative">
            <button
              onClick={toggleMenu}
              className="p-1 hover:bg-gray-700 rounded transition-colors"
            >
              <img
                src={isMenuOpen ? iconClose : iconMenu}
                alt={isMenuOpen ? "閉じる" : "メニュー"}
                className="w-6 h-6"
              />
            </button>

            {isMenuOpen && (
              <div
                className="absolute top-full right-0 z-50 mt-2"
                style={{
                  backgroundColor: colors.gray400,
                  width: "280px",
                  height: "464px",
                }}
              >
                <div className="flex flex-col h-full">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-600 flex-1"
                    >
                      <button
                        className="flex items-center h-full w-full px-6 text-white text-lg font-light transition-colors text-left"
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = colors.primary400)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = colors.light)
                        }
                        onClick={() => handleMenuItemClick(item)}
                      >
                        {item}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
