
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, User } from "lucide-react";

const MyBookings = () => {
  // Mock booking data - will be replaced with real data from backend later
  const bookings = [
    {
      id: "booking-001",
      workshopId: "1",
      workshopTitle: "Modern Web Design Masterclass",
      instructor: "Sarah Johnson",
      date: "March 15, 2024",
      time: "9:00 AM - 3:00 PM",
      duration: "6 hours",
      location: "Online",
      price: 149,
      status: "confirmed",
      bookingDate: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
    },
    {
      id: "booking-002",
      workshopId: "3",
      workshopTitle: "Digital Marketing Strategy",
      instructor: "Emma Wilson",
      date: "March 20, 2024",
      time: "10:00 AM - 3:00 PM",
      duration: "5 hours",
      location: "New York",
      price: 179,
      status: "pending",
      bookingDate: "March 1, 2024",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
    },
    {
      id: "booking-003",
      workshopId: "5",
      workshopTitle: "Professional Photography Workshop",
      instructor: "David Kim",
      date: "February 25, 2024",
      time: "9:00 AM - 5:00 PM",
      duration: "8 hours",
      location: "London",
      price: 225,
      status: "completed",
      bookingDate: "February 10, 2024",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "completed":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Bookings
          </h1>
          <p className="text-lg text-gray-600">
            View and manage your workshop bookings
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {bookings.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <Calendar className="h-16 w-16 text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-900">No bookings yet</h3>
                <p className="text-gray-600 mb-4">
                  You haven't booked any workshops yet. Browse our available workshops to get started!
                </p>
                <Button 
                  onClick={() => window.location.href = '/workshops'}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Browse Workshops
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Bookings Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                      <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Upcoming</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {bookings.filter(b => b.status === "confirmed" || b.status === "pending").length}
                      </p>
                    </div>
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Completed</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {bookings.filter(b => b.status === "completed").length}
                      </p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                      {bookings.filter(b => b.status === "completed").length}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bookings List */}
            <div className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Workshop Image */}
                    <div className="md:w-48 h-48 md:h-auto">
                      <img
                        src={booking.image}
                        alt={booking.workshopTitle}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Booking Details */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {booking.workshopTitle}
                            </h3>
                            <Badge className={getStatusColor(booking.status)}>
                              {getStatusText(booking.status)}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center text-gray-600 mb-2">
                            <User className="h-4 w-4 mr-1" />
                            <span className="text-sm">{booking.instructor}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{booking.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{booking.time}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{booking.location}</span>
                            </div>
                          </div>
                          
                          <div className="text-sm text-gray-500">
                            <p>Booking ID: {booking.id}</p>
                            <p>Booked on: {booking.bookingDate}</p>
                          </div>
                        </div>
                        
                        <div className="md:text-right mt-4 md:mt-0 md:ml-6">
                          <div className="text-2xl font-bold text-gray-900 mb-2">
                            ${booking.price}
                          </div>
                          <div className="space-y-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => window.location.href = `/workshop/${booking.workshopId}`}
                            >
                              View Details
                            </Button>
                            {booking.status === "confirmed" && (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full text-red-600 hover:text-red-700"
                              >
                                Cancel Booking
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyBookings;
