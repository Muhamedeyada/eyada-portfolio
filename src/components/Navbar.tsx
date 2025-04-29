import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "../hooks/use-mobile";
import { useCVLinks } from "../contexts/CVLinksContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { cvLinks } = useCVLinks();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavItemClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavItems = () => {
    if (isHomePage) {
      return navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-muted-foreground hover:text-primary transition-colors"
          onClick={handleNavItemClick}
        >
          {item.name}
        </a>
      ));
    } else {
      return (
        <Link
          to="/"
          className="text-muted-foreground hover:text-primary transition-colors"
          onClick={handleNavItemClick}
        >
          Back to Home
        </Link>
      );
    }
  };

  // Get CV link from context or use default
  const cvLink =
    cvLinks[0]?.url ||
    "https://drive.google.com/drive/folders/1L5mHXBS_x6mgDnGEAD2KQ6IMu-L6IWFx";

  const downloadCV = () => {
    window.open(cvLink, "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 50
          ? "bg-background/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/profile.png"
            alt="Mohamed Eyada"
            className="h-10 w-10 rounded-full object-cover border-2 border-primary"
          />
          <span className="hidden md:block text-2xl font-bold text-gradient">
            Mohamed Eyada
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {renderNavItems()}
          <ThemeToggle />
          <Button
            onClick={downloadCV}
            className="flex items-center gap-2 bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:opacity-90 transition-opacity"
          >
            <FileText className="h-4 w-4" />
            Resume
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="relative z-50"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="w-full md:hidden fixed bg-background/95 backdrop-blur-lg z-40 flex flex-col">
          <div className="container py-4 flex flex-col space-y-6">
            {renderNavItems()}
            <Button
              variant="outline"
              className="justify-start bg-card/50"
              onClick={() => {
                downloadCV();
                setIsMenuOpen(false);
              }}
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
