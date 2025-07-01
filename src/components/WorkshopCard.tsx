
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface WorkshopCardProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  date: string;
  duration: string;
  location: string;
  price: number;
  category: string;
  spots: number;
  image: string;
}

const WorkshopCard = ({
  id,
  title,
  instructor,
  description,
  date,
  duration,
  location,
  price,
  category,
  spots,
  image,
}: WorkshopCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700">
          {category}
        </Badge>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-sm font-semibold text-gray-900">${price}</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">by {instructor}</p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{spots} spots remaining</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link to={`/workshop/${id}`} className="w-full">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default WorkshopCard;
