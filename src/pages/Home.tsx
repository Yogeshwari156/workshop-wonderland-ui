
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkshopCard from "@/components/WorkshopCard";
import { ArrowRight, Calendar, MapPin, Star, Users } from "lucide-react";

const Home = () => {
  const featuredWorkshops = [
    {
      id: "1",
      title: "Modern Web Design Masterclass",
      instructor: "Sarah Johnson",
      description: "Learn the latest web design trends and create stunning, responsive websites using modern tools and techniques.",
      date: "March 15, 2024",
      duration: "6 hours",
      location: "Online",
      price: 149,
      category: "Design",
      spots: 12,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
    },
    {
      id: "2", 
      title: "JavaScript for Beginners",
      instructor: "Mike Chen",
      description: "Start your programming journey with JavaScript fundamentals and build your first interactive web applications.",
      date: "March 18, 2024",
      duration: "4 hours",
      location: "San Francisco",
      price: 99,
      category: "Development",
      spots: 8,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
    },
    {
      id: "3",
      title: "Digital Marketing Strategy",
      instructor: "Emma Wilson",
      description: "Master digital marketing techniques to grow your business and reach your target audience effectively.",
      date: "March 20, 2024",
      duration: "5 hours",
      location: "New York",
      price: 179,
      category: "Business",
      spots: 15,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
    }
  ];

  const stats = [
    { icon: Users, label: "Students", value: "10,000+" },
    { icon: Calendar, label: "Workshops", value: "500+" },
    { icon: MapPin, label: "Cities", value: "50+" },
    { icon: Star, label: "Rating", value: "4.9/5" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover Amazing 
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Workshops</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Learn new skills, meet like-minded people, and unlock your creative potential with expert-led workshops in your city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/workshops">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                  Browse Workshops
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8">
                Become an Instructor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4">
              Featured Workshops
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Popular This Week
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of learners in these highly-rated workshops designed to help you master new skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} {...workshop} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/workshops">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                View All Workshops
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h2>
            <p className="text-xl text-gray-600">
              Find workshops in topics you're passionate about
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Design", color: "bg-purple-500", count: "120+" },
              { name: "Development", color: "bg-blue-500", count: "95+" },
              { name: "Business", color: "bg-green-500", count: "80+" },
              { name: "Art & Craft", color: "bg-pink-500", count: "60+" },
              { name: "Cooking", color: "bg-orange-500", count: "45+" },
              { name: "Photography", color: "bg-indigo-500", count: "35+" }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-lg mx-auto mb-3 group-hover:scale-110 transition-transform`}></div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} workshops</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our community of learners and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/workshops">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                Browse Workshops
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8">
              Create Account
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
