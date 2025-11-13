import { Link, useLocation } from "react-router-dom";
import { Phone, LogOut, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import kanhasLogo from "@/assets/kanhas-logo.png";

const Navigation = () => {
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleSignOut = async () => {
    await signOut();
  };
  
  return (
    <nav className="sticky top-0 z-50 bg-accent backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={kanhasLogo} alt="Kanhas Veg Restaurant" className="h-12 w-12 object-contain" />
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Kanhas Veg Restaurant
            </h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-accent-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-accent-foreground'
              }`}
            >
              About
            </Link>
            <Link 
              to="/menu" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/menu') ? 'text-primary' : 'text-accent-foreground'
              }`}
            >
              Menu
            </Link>
            {isAdmin && (
              <Link 
                to="/daily-sales" 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/daily-sales') ? 'text-primary' : 'text-accent-foreground'
                }`}
              >
                Daily Sales
              </Link>
            )}
            <a 
              href="tel:023094707" 
              className="flex items-center space-x-2 text-sm text-accent-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>02 309 4707</span>
            </a>
            {user ? (
              <Button variant="outline" size="sm" onClick={handleSignOut} className="border-primary text-primary hover:bg-primary hover:text-accent">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-accent">
                <Link to="/auth">
                  <LogIn className="h-4 w-4 mr-2" />
                  Admin Login
                </Link>
              </Button>
            )}
          </div>
          
          <div className="md:hidden">
            <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-accent">
              <a href="tel:023094707">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </a>
            </Button>
          </div>
        </div>
        
        <div className="md:hidden flex items-center justify-center space-x-3 mt-3 pt-3 border-t border-border">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-accent-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/about') ? 'text-primary' : 'text-accent-foreground'
            }`}
          >
            About
          </Link>
          <Link 
            to="/menu" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/menu') ? 'text-primary' : 'text-accent-foreground'
            }`}
          >
            Menu
          </Link>
          {isAdmin && (
            <Link 
              to="/daily-sales" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/daily-sales') ? 'text-primary' : 'text-accent-foreground'
              }`}
            >
              Sales
            </Link>
          )}
          {user ? (
            <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-accent-foreground hover:text-primary">
              <LogOut className="h-4 w-4" />
            </Button>
          ) : (
            <Button variant="ghost" size="sm" asChild className="text-accent-foreground hover:text-primary">
              <Link to="/auth">
                <LogIn className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
