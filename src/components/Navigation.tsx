import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Kanhas Veg Restaurant
            </h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              About
            </Link>
            <Link 
              to="/menu" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/menu') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Menu
            </Link>
            <Link 
              to="/daily-sales" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/daily-sales') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Daily Sales
            </Link>
            <a 
              href="tel:023094707" 
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>02 309 4707</span>
            </a>
          </div>
          
          <div className="md:hidden">
            <Button variant="outline" size="sm" asChild>
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
              isActive('/') ? 'text-primary' : 'text-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/about') ? 'text-primary' : 'text-foreground'
            }`}
          >
            About
          </Link>
          <Link 
            to="/menu" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/menu') ? 'text-primary' : 'text-foreground'
            }`}
          >
            Menu
          </Link>
          <Link 
            to="/daily-sales" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/daily-sales') ? 'text-primary' : 'text-foreground'
            }`}
          >
            Sales
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
