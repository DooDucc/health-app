import { colors } from "../assets/styles/colors";

const Footer = () => {
  const footerLinks = [
    "会員登録",
    "運営会社",
    "利用規約",
    "個人情報の取扱いについて",
    "特定商取引法に基づく表記",
    "お問い合わせ",
  ];

  return (
    <footer className="flex items-center" style={{ backgroundColor: colors.dark500Text, height: '128px' }}>
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center justify-start space-x-8">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-white text-sm hover:text-orange-400 transition-colors cursor-pointer"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
