import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import MenuCard from "@/components/MenuCard";
import paneerTikka from "@/assets/paneer-tikka.jpg";
import dalMakhani from "@/assets/dal-makhani.jpg";
import butterNaan from "@/assets/butter-naan.jpg";
import samosa from "@/assets/samosa.jpg";
import choleBhature from "@/assets/chole-bhature.jpg";
import vegBiryani from "@/assets/veg-biryani.jpg";
import gulabJamun from "@/assets/gulab-jamun.jpg";

const Menu = () => {
  const appetizers = [
    {
      name: "Samosa",
      description: "Crispy golden pastries filled with spiced potatoes and peas, served with mint and tamarind chutneys",
      price: "AED 12",
      image: samosa
    },
    {
      name: "Paneer Tikka",
      description: "Succulent cottage cheese cubes marinated in aromatic spices and grilled to perfection",
      price: "AED 28",
      image: paneerTikka
    },
    {
      name: "Veg Pakora",
      description: "Mixed vegetable fritters coated in chickpea batter and deep-fried until golden and crispy",
      price: "AED 15",
      image: samosa
    }
  ];

  const mainCourses = [
    {
      name: "Dal Makhani",
      description: "Slow-cooked black lentils in rich buttery tomato gravy with aromatic spices",
      price: "AED 22",
      image: dalMakhani
    },
    {
      name: "Chole Bhature",
      description: "Fluffy fried bread served with spicy chickpea curry, a classic North Indian comfort food",
      price: "AED 25",
      image: choleBhature
    },
    {
      name: "Paneer Butter Masala",
      description: "Soft cottage cheese cubes in creamy tomato-based gravy with butter and aromatic spices",
      price: "AED 32",
      image: paneerTikka
    },
    {
      name: "Vegetable Biryani",
      description: "Fragrant basmati rice layered with mixed vegetables and aromatic spices, served with raita",
      price: "AED 28",
      image: vegBiryani
    },
    {
      name: "Palak Paneer",
      description: "Fresh cottage cheese in a creamy spinach gravy flavored with garlic and spices",
      price: "AED 30",
      image: dalMakhani
    },
    {
      name: "Malai Kofta",
      description: "Soft vegetable and cottage cheese dumplings in rich creamy cashew and tomato gravy",
      price: "AED 32",
      image: paneerTikka
    }
  ];

  const breads = [
    {
      name: "Butter Naan",
      description: "Soft and fluffy Indian flatbread brushed with melted butter, baked in tandoor",
      price: "AED 5",
      image: butterNaan
    },
    {
      name: "Garlic Naan",
      description: "Tandoor-baked naan topped with fresh garlic and cilantro",
      price: "AED 6",
      image: butterNaan
    },
    {
      name: "Tandoori Roti",
      description: "Whole wheat flatbread cooked in traditional tandoor oven",
      price: "AED 4",
      image: butterNaan
    },
    {
      name: "Paratha",
      description: "Layered whole wheat flatbread, crispy on the outside and soft inside",
      price: "AED 7",
      image: butterNaan
    }
  ];

  const desserts = [
    {
      name: "Gulab Jamun",
      description: "Golden brown milk solid dumplings soaked in sweet rose-flavored syrup",
      price: "AED 12",
      image: gulabJamun
    },
    {
      name: "Rasmalai",
      description: "Soft cottage cheese patties in sweetened, flavored milk with pistachios and saffron",
      price: "AED 15",
      image: gulabJamun
    },
    {
      name: "Kheer",
      description: "Traditional Indian rice pudding made with milk, cardamom, and nuts",
      price: "AED 12",
      image: gulabJamun
    }
  ];

  const beverages = [
    {
      name: "Mango Lassi",
      description: "Refreshing yogurt-based drink blended with sweet mangoes",
      price: "AED 10",
      image: gulabJamun
    },
    {
      name: "Masala Chai",
      description: "Traditional Indian spiced tea with aromatic herbs and spices",
      price: "AED 8",
      image: gulabJamun
    },
    {
      name: "Fresh Lime Soda",
      description: "Zesty lime juice with soda water, sweet or salted",
      price: "AED 8",
      image: gulabJamun
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Our Menu</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our selection of authentic North Indian vegetarian delicacies
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="appetizers" className="w-full">
            <TabsList className="w-full justify-start mb-8 flex-wrap h-auto">
              <TabsTrigger value="appetizers" className="text-base">Appetizers</TabsTrigger>
              <TabsTrigger value="mains" className="text-base">Main Courses</TabsTrigger>
              <TabsTrigger value="breads" className="text-base">Breads</TabsTrigger>
              <TabsTrigger value="desserts" className="text-base">Desserts</TabsTrigger>
              <TabsTrigger value="beverages" className="text-base">Beverages</TabsTrigger>
            </TabsList>
            
            <TabsContent value="appetizers">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {appetizers.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mains">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mainCourses.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="breads">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {breads.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="desserts">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {desserts.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="beverages">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {beverages.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
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

export default Menu;
