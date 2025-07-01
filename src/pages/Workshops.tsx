
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkshopCard from "@/components/WorkshopCard";
import WorkshopFilters from "@/components/WorkshopFilters";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid, List } from "lucide-react";

const Workshops = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("date");
  const [filters, setFilters] = useState<any>({});

  const allWorkshops = [
    {
      id: "1",
      title: "Modern Web Design Masterclass",
      instructor: "Sarah Johnson",
      description: "Learn the latest web design trends and create stunning, responsive websites using modern tools and techniques. This comprehensive course covers UI/UX principles, modern CSS, and design systems.",
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
      description: "Start your programming journey with JavaScript fundamentals and build your first interactive web applications. Perfect for complete beginners with no coding experience.",
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
      description: "Master digital marketing techniques to grow your business and reach your target audience effectively through social media, content marketing, and SEO.",
      date: "March 20, 2024",
      duration: "5 hours",
      location: "New York",
      price: 179,
      category: "Business",
      spots: 15,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
    },
    {
      id: "4",
      title: "Watercolor Painting Basics",
      instructor: "Lisa Rodriguez",
      description: "Discover the beautiful art of watercolor painting. Learn fundamental techniques, color mixing, and create stunning landscapes and portraits.",
      date: "March 22, 2024",
      duration: "3 hours",
      location: "Berlin", 
      price: 89,
      category: "Art",
      spots: 10,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop"
    },
    {
      id: "5",
      title: "Professional Photography Workshop",
      instructor: "David Kim",
      description: "Master professional photography techniques including composition, lighting, and post-processing. Suitable for both DSLR and mirrorless cameras.",
      date: "March 25, 2024",
      duration: "8 hours",
      location: "London",
      price: 225,
      category: "Photography",
      spots: 6,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop"
    },
    {
      id: "6",
      title: "Italian Cooking Masterclass",
      instructor: "Maria Giuseppe",
      description: "Learn authentic Italian cooking techniques and prepare traditional dishes like handmade pasta, risotto, and classic sauces from scratch.",
      date: "March 28, 2024",
      duration: "4 hours",
      location: "New York",
      price: 129,
      category: "Cooking",
      spots: 8,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop"
    }
  ];

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  // Filter workshops based on active filters
  const filteredWorkshops = allWorkshops.filter(workshop => {
    if (filters.search && !workshop.title.toLowerCase().includes(filters.search.toLowerCase()) && 
        !workshop.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.category && workshop.category.toLowerCase() !== filters.category) {
      return false;
    }
    if (filters.location && workshop.location.toLowerCase() !== filters.location) {
      return false;
    }
    if (filters.priceRange && (workshop.price < filters.priceRange[0] || workshop.price > filters.priceRange[1])) {
      return false;
    }
    return true;
  });

  // Sort workshops
  const sortedWorkshops = [...filteredWorkshops].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "title":
        return a.title.localeCompare(b.title);
      case "date":
      default:
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            All Workshops
          </h1>
          <p className="text-lg text-gray-600">
            Discover and book amazing workshops to expand your skills
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <WorkshopFilters onFiltersChange={handleFiltersChange} />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <span className="text-sm text-gray-600">
                  {sortedWorkshops.length} workshops found
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Sort by Date</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="title">Alphabetical</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Workshop Grid/List */}
            {sortedWorkshops.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-lg text-gray-600 mb-4">No workshops found matching your criteria.</p>
                <Button 
                  onClick={() => setFilters({})}
                  variant="outline"
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
                : "space-y-6"
              }>
                {sortedWorkshops.map((workshop) => (
                  <WorkshopCard key={workshop.id} {...workshop} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Workshops;
