import { Card, CardContent } from "@/components/ui/card";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const MenuCard = ({ name, description, price, image }: MenuCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border bg-card">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-end justify-between">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <span className="text-lg font-bold text-gold">{price}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
