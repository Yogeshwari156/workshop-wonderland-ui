
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star, 
  ArrowLeft,
  Check,
  Heart,
  Share2
} from "lucide-react";

const WorkshopDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, you'd fetch this based on the ID
  const workshop = {
    id: "1",
    title: "Modern Web Design Masterclass",
    instructor: "Sarah Johnson",
    description: "Learn the latest web design trends and create stunning, responsive websites using modern tools and techniques. This comprehensive course covers UI/UX principles, modern CSS, and design systems.",
    fullDescription: `Join Sarah Johnson, a senior UX designer at Google, for an intensive workshop on modern web design. This masterclass will take you through the entire design process, from wireframing to prototyping to final implementation.

    What makes this workshop unique is the hands-on approach - you'll be working on real projects throughout the day, applying concepts as you learn them. By the end of the session, you'll have created a complete responsive website from scratch.

    Sarah has over 8 years of experience in web design and has worked with companies like Google, Airbnb, and Shopify. She's passionate about sharing her knowledge and helping others create beautiful, functional web experiences.`,
    date: "March 15, 2024",
    duration: "6 hours",
    location: "Online",
    price: 149,
    originalPrice: 199,
    category: "Design",
    spots: 12,
    totalSpots: 20,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    instructorImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
    agenda: [
      { time: "9:00 AM", topic: "Introduction & Design Principles", duration: "1 hour" },
      { time: "10:00 AM", topic: "Modern CSS Techniques", duration: "1.5 hours" },
      { time: "11:30 AM", topic: "Break", duration: "15 min" },
      { time: "11:45 AM", topic: "Responsive Design", duration: "1.5 hours" },
      { time: "1:15 PM", topic: "Lunch Break", duration: "45 min" },
      { time: "2:00 PM", topic: "Design Systems & Components", duration: "1.5 hours" },
      { time: "3:30 PM", topic: "Project Work & Q&A", duration: "30 min" }
    ],
    includes: [
      "6 hours of expert instruction",
      "All course materials and resources",
      "Certificate of completion", 
      "1-month access to recordings",
      "Private community access",
      "Lifetime updates to course materials"
    ],
    requirements: [
      "Basic HTML/CSS knowledge",
      "Computer with internet connection",
      "Code editor (VS Code recommended)",
      "Figma account (free)"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/workshops" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to workshops
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-blue-600 hover:bg-blue-700">
                  {workshop.category}
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {workshop.spots} spots left
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Workshop Info */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {workshop.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{workshop.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{workshop.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{workshop.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{workshop.totalSpots - workshop.spots}/{workshop.totalSpots} enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{workshop.rating} ({workshop.reviews} reviews)</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {workshop.description}
              </p>
            </div>

            {/* Instructor */}
            <Card>
              <CardHeader>
                <CardTitle>Meet Your Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <img
                    src={workshop.instructorImage}
                    alt={workshop.instructor}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {workshop.instructor}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {workshop.fullDescription}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {workshop.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Agenda */}
            <Card>
              <CardHeader>
                <CardTitle>Workshop Agenda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {workshop.agenda.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-b-0">
                      <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{item.topic}</h4>
                        <p className="text-sm text-gray-600">{item.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {workshop.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">${workshop.price}</span>
                    {workshop.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${workshop.originalPrice}</span>
                    )}
                  </div>
                  {workshop.originalPrice && (
                    <p className="text-sm text-green-600 font-medium">
                      Save ${workshop.originalPrice - workshop.price}!
                    </p>
                  )}
                </div>

                <Separator className="my-6" />

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Date</span>
                    <span className="font-medium">{workshop.date}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{workshop.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium">{workshop.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Spots Remaining</span>
                    <span className="font-medium text-orange-600">{workshop.spots} left</span>
                  </div>
                </div>

                <Link to={`/booking/${workshop.id}`} className="w-full">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Book This Workshop
                  </Button>
                </Link>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Free cancellation up to 24 hours before the workshop
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkshopDetail;
