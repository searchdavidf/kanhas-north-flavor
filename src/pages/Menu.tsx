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
import masalaDosa from "@/assets/masala-dosa.jpg";
import idliSambar from "@/assets/idli-sambar.jpg";
import palakPaneer from "@/assets/palak-paneer.jpg";
import kadaiPaneer from "@/assets/kadai-paneer.jpg";
import lachhaParatha from "@/assets/lachha-paratha.jpg";
import rajmaChawal from "@/assets/rajma-chawal.jpg";
import alooPalak from "@/assets/aloo-palak.jpg";
import kadaiMushroom from "@/assets/kadai-mushroom.jpg";
import ajwainiParatha from "@/assets/ajwaini-paratha.jpg";
import daalBatiChurma from "@/assets/daal-bati-churma.jpg";
import rajmaChawalReal from "@/assets/rajma-chawal-real.jpg";
import choleChawal from "@/assets/chole-chawal.jpg";
import alooParatha from "@/assets/aloo-paratha.jpg";
import choleBhatureReal from "@/assets/chole-bhature-real.jpg";
import pooriAloo from "@/assets/poori-aloo.jpg";
import deluxeThali from "@/assets/deluxe-thali.jpg";

const Menu = () => {
  const southKaNashta = [
    { name: "Idly Sambar", description: "Steamed rice cakes served with aromatic sambar", price: "AED 7", image: idliSambar },
    { name: "Vada Sambar", description: "Crispy lentil donuts served with sambar", price: "AED 7", image: idliSambar },
    { name: "Sada Dosa", description: "Thin and crispy rice crepe", price: "AED 9", image: masalaDosa },
    { name: "Mysore Sada Dosa", description: "Dosa with spicy red chutney", price: "AED 14", image: masalaDosa },
    { name: "Onion Rawa Sada dosa", description: "Semolina dosa with onions", price: "AED 12", image: masalaDosa },
    { name: "Paper Sada Dosa", description: "Extra thin and crispy dosa", price: "AED 10", image: masalaDosa },
    { name: "Masala Dosa", description: "Crispy dosa filled with spiced potato masala", price: "AED 9", image: masalaDosa },
    { name: "Onion Rawa Masala Dosa", description: "Semolina dosa with onion and potato filling", price: "AED 16", image: masalaDosa },
    { name: "Ghee Roast Masala Dosa", description: "Crispy dosa roasted in ghee with potato masala", price: "AED 16", image: masalaDosa },
    { name: "Paper Masala Dosa", description: "Extra thin dosa with potato masala", price: "AED 15", image: masalaDosa },
    { name: "Onion & Tomato Utthappam", description: "Thick rice pancake with onions and tomatoes", price: "AED 10", image: masalaDosa },
    { name: "Cheese uttappam", description: "Thick rice pancake topped with cheese", price: "AED 15", image: masalaDosa },
    { name: "South ka tiffin", description: "Mini dosa, idli, vada, upma, kesari, chutney, sambhal", price: "AED 19", image: idliSambar },
    { name: "Multigrain Dosa", description: "Healthy dosa made with multiple grains", price: "AED 19", image: masalaDosa },
    { name: "Ragi Dosa", description: "Nutritious finger millet dosa", price: "AED 19", image: masalaDosa },
    { name: "Table family Dosa", description: "Large family-sized dosa", price: "AED 22", image: masalaDosa },
    { name: "Appam & Curry", description: "Soft rice pancake served with vegetable curry", price: "AED 10", image: idliSambar }
  ];

  const northKaNashta = [
    { name: "Poori & Aloo Sabji", description: "Fluffy fried bread with potato curry", price: "AED 12", image: pooriAloo },
    { name: "Chhole Bhature", description: "Fluffy fried bread with spicy chickpea curry", price: "AED 15", image: choleBhatureReal },
    { name: "Bedami Poori", description: "Stuffed fried bread with lentils", price: "AED 19", image: pooriAloo },
    { name: "Veg Grill Sandwich", description: "Grilled sandwich with mixed vegetables", price: "AED 15", image: samosa },
    { name: "Indori Poha", description: "Flattened rice cooked Indori style", price: "AED 12", image: samosa },
    { name: "Sevai Khichdi", description: "Vermicelli cooked with spices", price: "AED 12", image: samosa },
    { name: "Maggie Masala", description: "Spicy Indian style instant noodles", price: "AED 10", image: samosa },
    { name: "Stuffed Parathas (Aloo/Mooli/Gobhi)", description: "Flatbread stuffed with potato/radish/cauliflower", price: "AED 10", image: alooParatha },
    { name: "Paneer Paratha", description: "Flatbread stuffed with cottage cheese", price: "AED 15", image: lachhaParatha },
    { name: "Jaipuri Paratha", description: "Special Jaipuri style stuffed paratha", price: "AED 15", image: lachhaParatha }
  ];

  const paneerDishes = [
    { name: "Paneer Lababdar", description: "Cottage cheese in rich tomato cream gravy", price: "AED 22", image: paneerTikka },
    { name: "Paneer Pasanda", description: "Stuffed cottage cheese in creamy gravy", price: "AED 22", image: paneerTikka },
    { name: "Paneer Bhurji", description: "Scrambled cottage cheese with spices", price: "AED 19", image: paneerTikka },
    { name: "Paneer tikka masala", description: "Grilled cottage cheese in spicy tomato gravy", price: "AED 24", image: paneerTikka },
    { name: "Butter Paneers", description: "Cottage cheese in rich butter tomato gravy", price: "AED 24", image: paneerTikka },
    { name: "Kadai Paneer", description: "Cottage cheese cooked in kadai with bell peppers", price: "AED 24", image: kadaiPaneer },
    { name: "Malai Kofta", description: "Cottage cheese dumplings in creamy gravy", price: "AED 22", image: paneerTikka },
    { name: "Palak Paneer", description: "Cottage cheese in spinach gravy", price: "AED 22", image: palakPaneer },
    { name: "Matar Paneer", description: "Cottage cheese with green peas in tomato gravy", price: "AED 24", image: paneerTikka },
    { name: "Shahi Paneer", description: "Royal cottage cheese in rich creamy gravy", price: "AED 22", image: paneerTikka },
    { name: "Methi Paneer", description: "Cottage cheese with fenugreek leaves", price: "AED 22", image: paneerTikka },
    { name: "Makai Paneer", description: "Cottage cheese with sweet corn", price: "AED 22", image: paneerTikka },
    { name: "Chana Masala", description: "Spicy chickpea curry", price: "AED 15", image: choleBhature }
  ];

  const daalDishes = [
    { name: "Daal Palak", description: "Lentils cooked with spinach", price: "AED 19", image: dalMakhani },
    { name: "Daal Panchratan", description: "Five types of lentils cooked together", price: "AED 20", image: dalMakhani },
    { name: "Daal Tadka", description: "Yellow lentils tempered with spices", price: "AED 18", image: dalMakhani },
    { name: "Daal Makhani", description: "Black lentils in rich buttery gravy", price: "AED 20", image: dalMakhani },
    { name: "Langar Wali Daal", description: "Traditional Gurudwara style lentils", price: "AED 22", image: dalMakhani }
  ];

  const vegetableDishes = [
    { name: "Makai Palak", description: "Sweet corn with spinach", price: "AED 22", image: palakPaneer },
    { name: "Kadhai Veg", description: "Mixed vegetables in kadai masala", price: "AED 24", image: kadaiPaneer },
    { name: "Gatte ki Sabji", description: "Gram flour dumplings in spicy curry", price: "AED 22", image: dalMakhani },
    { name: "Matar ka Nimona", description: "Green peas curry", price: "AED 22", image: dalMakhani },
    { name: "Shaam Savera", description: "Spinach kofta stuffed with cottage cheese", price: "AED 24", image: palakPaneer },
    { name: "Bharwa shimla mirch", description: "Stuffed bell peppers", price: "AED 24", image: vegBiryani },
    { name: "Baingan Bharta", description: "Roasted eggplant mash with spices", price: "AED 22", image: dalMakhani },
    { name: "Soya Chaap Masala", description: "Soya chaap in spicy masala gravy", price: "AED 25", image: paneerTikka },
    { name: "Kadhi Pakoda", description: "Gram flour dumplings in yogurt curry", price: "AED 20", image: dalMakhani },
    { name: "Kashmiri Dam Aloo", description: "Baby potatoes in rich Kashmiri gravy", price: "AED 22", image: alooPalak },
    { name: "Veg Maratha", description: "Mixed vegetables Marathi style", price: "AED 28", image: vegBiryani },
    { name: "Kanha's Special Tawa veg", description: "Arabi, baingan, lotus stem, potato etc", price: "AED 28", image: vegBiryani },
    { name: "Punjabi Rajma Masala", description: "Kidney beans in rich Punjabi gravy", price: "AED 15", image: rajmaChawal },
    { name: "Gobhi Adraki", description: "Cauliflower with ginger", price: "AED 15", image: vegBiryani },
    { name: "Jeera Aloo", description: "Potatoes tempered with cumin seeds", price: "AED 15", image: alooPalak },
    { name: "Aloo Palak", description: "Potatoes cooked with spinach", price: "AED 15", image: alooPalak },
    { name: "Bhindi Masala", description: "Okra cooked with spices", price: "AED 15", image: vegBiryani },
    { name: "Bhindi Do Pyaja", description: "Okra with double onions", price: "AED 17", image: vegBiryani },
    { name: "Palak Mushroom", description: "Mushrooms in spinach gravy", price: "AED 22", image: palakPaneer },
    { name: "Kadhai Mushroom", description: "Mushrooms in kadai masala", price: "AED 25", image: kadaiMushroom },
    { name: "Mushroom Do Pyaja", description: "Mushrooms with double onions", price: "AED 25", image: kadaiMushroom }
  ];

  const breads = [
    { name: "Tawa Roti", description: "Whole wheat flatbread", price: "AED 2/3", image: butterNaan },
    { name: "Ajwaini Paratha", description: "Flatbread with carom seeds", price: "AED 4", image: ajwainiParatha },
    { name: "Multigrain Roti", description: "Healthy multi-grain flatbread", price: "AED 4", image: butterNaan },
    { name: "Missi Roti", description: "Gram flour flatbread", price: "AED 5", image: butterNaan },
    { name: "Makke ki Roti", description: "Corn flour flatbread", price: "AED 5", image: butterNaan },
    { name: "Lachha Paratha", description: "Multi-layered flaky bread", price: "AED 4", image: lachhaParatha },
    { name: "Grilled Chapati", description: "Charcoal grilled chapati (5pm onwards)", price: "AED 4", image: butterNaan },
    { name: "Cheese or Chocolate Paratha", description: "Sweet stuffed paratha", price: "AED 15", image: lachhaParatha },
    { name: "Bread Basket", description: "2 Tawa roti, 2 Ajwaini roti, 2 lachha Paratha", price: "AED 20", image: butterNaan }
  ];

  const rice = [
    { name: "White Rice", description: "Steamed basmati rice", price: "AED 10", image: vegBiryani },
    { name: "Jeera Pulao", description: "Fragrant cumin flavored rice", price: "AED 12", image: vegBiryani },
    { name: "Matar Pulao", description: "Rice with green peas", price: "AED 15", image: vegBiryani },
    { name: "Vegetable Biryani", description: "Fragrant rice with mixed vegetables", price: "AED 22", image: vegBiryani },
    { name: "Quinoa Biryani", description: "Healthy quinoa biryani", price: "AED 25", image: vegBiryani },
    { name: "Hyderabadi Biryani", description: "Authentic Hyderabadi style vegetable biryani", price: "AED 25", image: vegBiryani },
    { name: "Daal Khichdi", description: "Rice and lentils comfort food", price: "AED 15", image: vegBiryani }
  ];

  const combos = [
    { name: "4 pcs Mini Daal Bati Churma", description: "Traditional Rajasthani combo", price: "AED 19", image: daalBatiChurma },
    { name: "Chhole Chawal", description: "Chickpea curry with rice", price: "AED 15", image: choleChawal },
    { name: "Kadhi Chawal", description: "Yogurt curry with rice", price: "AED 15", image: vegBiryani },
    { name: "Rajma Chawal", description: "Kidney beans curry with rice", price: "AED 15", image: rajmaChawalReal },
    { name: "Deluxe Indian Thali", description: "1 snacks of the day, masala chhach, Daal of the day, paneer sabji, 1 Lachha Paratha or Rice, 2 Chapati, pickle, green Salad, 1 sweet", price: "AED 22", image: deluxeThali }
  ];

  const saladsRaita = [
    { name: "Salsa Salad", description: "Fresh Mexican style salsa", price: "AED 9", image: samosa },
    { name: "Green Salad", description: "Fresh seasonal green salad", price: "AED 7", image: samosa },
    { name: "Beetroot Raita", description: "Yogurt with beetroot", price: "AED 9", image: samosa },
    { name: "Vegetable Raita", description: "Mixed vegetable yogurt", price: "AED 9", image: samosa },
    { name: "Boondi Raita", description: "Yogurt with crispy boondi", price: "AED 10", image: samosa },
    { name: "Fruit Salad", description: "Fresh seasonal fruits", price: "AED 15", image: gulabJamun }
  ];

  const desserts = [
    { name: "Gulab Jamun", description: "Golden brown milk solid dumplings soaked in sweet rose-flavored syrup", price: "AED 12", image: gulabJamun },
    { name: "Rasmalai", description: "Soft cottage cheese patties in sweetened, flavored milk with pistachios and saffron", price: "AED 15", image: gulabJamun },
    { name: "Kheer", description: "Traditional Indian rice pudding made with milk, cardamom, and nuts", price: "AED 12", image: gulabJamun }
  ];

  const beverages = [
    { name: "Mango Lassi", description: "Refreshing yogurt-based drink blended with sweet mangoes", price: "AED 10", image: gulabJamun },
    { name: "Masala Chai", description: "Traditional Indian spiced tea with aromatic herbs and spices", price: "AED 8", image: gulabJamun },
    { name: "Fresh Lime Soda", description: "Zesty lime juice with soda water, sweet or salted", price: "AED 8", image: gulabJamun }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">Our Menu</h1>
          <p className="text-xl text-accent-foreground max-w-2xl mx-auto">
            Explore our selection of authentic North & South Indian vegetarian delicacies
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="south-nashta" className="w-full">
            <TabsList className="w-full justify-start mb-8 flex-wrap h-auto gap-2 bg-accent/50">
              <TabsTrigger value="south-nashta" className="text-base">South ka Nashta</TabsTrigger>
              <TabsTrigger value="north-nashta" className="text-base">North ka Nashta</TabsTrigger>
              <TabsTrigger value="paneer" className="text-base">Paneer Dishes</TabsTrigger>
              <TabsTrigger value="daal" className="text-base">Daal</TabsTrigger>
              <TabsTrigger value="vegetables" className="text-base">Vegetables</TabsTrigger>
              <TabsTrigger value="breads" className="text-base">Breads</TabsTrigger>
              <TabsTrigger value="rice" className="text-base">Rice</TabsTrigger>
              <TabsTrigger value="combos" className="text-base">Combos</TabsTrigger>
              <TabsTrigger value="salads" className="text-base">Salads & Raita</TabsTrigger>
              <TabsTrigger value="desserts" className="text-base">Desserts</TabsTrigger>
              <TabsTrigger value="beverages" className="text-base">Beverages</TabsTrigger>
            </TabsList>
            
            <TabsContent value="south-nashta">
              <h2 className="text-3xl font-bold mb-6 text-primary">South ka Nashta</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {southKaNashta.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="north-nashta">
              <h2 className="text-3xl font-bold mb-6 text-primary">North ka Nashta</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {northKaNashta.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="paneer">
              <h2 className="text-3xl font-bold mb-6 text-primary">Paneer Dishes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paneerDishes.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="daal">
              <h2 className="text-3xl font-bold mb-6 text-primary">Daal Dishes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {daalDishes.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="vegetables">
              <h2 className="text-3xl font-bold mb-6 text-primary">Vegetable Dishes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vegetableDishes.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="breads">
              <h2 className="text-3xl font-bold mb-6 text-primary">Breads</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {breads.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="rice">
              <h2 className="text-3xl font-bold mb-6 text-primary">Rice</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rice.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="combos">
              <h2 className="text-3xl font-bold mb-6 text-primary">Combos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {combos.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="salads">
              <h2 className="text-3xl font-bold mb-6 text-primary">Salads & Raita</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {saladsRaita.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="desserts">
              <h2 className="text-3xl font-bold mb-6 text-primary">Desserts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {desserts.map((item, index) => (
                  <MenuCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="beverages">
              <h2 className="text-3xl font-bold mb-6 text-primary">Beverages</h2>
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
      <footer className="bg-accent text-accent-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Kanhas Veg Restaurant</h3>
          <p className="text-accent-foreground/70 mb-4">Authentic North Indian Vegetarian Cuisine</p>
          <p className="text-sm text-accent-foreground/60">
            © 2025 Kanhas Veg Restaurant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
