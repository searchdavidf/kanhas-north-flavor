import { MapPin, Phone, Heart, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-restaurant.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="About Kanhas" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Bringing authentic North Indian flavors to Abu Dhabi
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground text-left">
              <p>
                Welcome to <span className="text-primary font-semibold">Kanhas Veg Restaurant</span>, where tradition meets taste in the heart of Abu Dhabi. 
                We are proud to serve authentic North Indian vegetarian cuisine that celebrates the rich culinary heritage 
                of India while catering to the diverse palates of our beloved community.
              </p>
              <p>
                Our journey began with a simple vision: to create a space where food lovers could experience 
                the warmth of Indian hospitality and the authentic flavors that have been passed down through generations. 
                Every dish we prepare is crafted with love, using traditional recipes and the finest ingredients.
              </p>
              <p>
                At Kanhas, we believe that good food brings people together. Whether you're joining us for a family 
                celebration, a casual meal with friends, or a quick lunch break, we're committed to making every 
                dining experience memorable with our flavorful dishes and warm service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6 border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Authentic Recipes</h3>
                <p className="text-muted-foreground">
                  Traditional North Indian recipes passed down through generations, prepared with authentic spices and techniques
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Family Atmosphere</h3>
                <p className="text-muted-foreground">
                  A welcoming environment where families and friends can gather to enjoy delicious food together
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Ingredients</h3>
                <p className="text-muted-foreground">
                  Only the finest and freshest ingredients to ensure every dish meets our high standards of excellence
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-border">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Musaffah Shabiya 10<br />
                      Near Madina Hyper Market<br />
                      Abu Dhabi, UAE
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-border">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                    <p className="text-muted-foreground mb-2">
                      Call us for reservations or takeaway orders
                    </p>
                    <a 
                      href="tel:023094707" 
                      className="text-xl text-primary hover:underline font-semibold"
                    >
                      02 309 4707
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Kanhas Veg Restaurant</h3>
          <p className="text-background/70 mb-4">Authentic North Indian Vegetarian Cuisine</p>
          <p className="text-sm text-background/60">
            © 2025 Kanhas Veg Restaurant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
