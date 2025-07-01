
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About WorkshopHub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about connecting learners with expert instructors through 
            hands-on workshops that inspire growth, creativity, and skill development.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn from industry professionals with years of experience in their fields.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Hands-on Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Practical workshops designed to give you real-world skills and experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Earn certificates of completion to showcase your new skills and knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join a supportive community of learners passionate about growth and development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2020, WorkshopHub was born from the belief that everyone deserves access to 
              high-quality, hands-on learning experiences. We started with a simple mission: to connect 
              passionate instructors with eager learners in an environment that fosters creativity, 
              collaboration, and skill development.
            </p>
          </div>
          
          <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
            <p>
              What began as a small collection of design workshops has grown into a comprehensive 
              platform offering courses in technology, business, arts, and personal development. 
              Our instructors are carefully selected not just for their expertise, but for their 
              ability to inspire and teach.
            </p>
            
            <p>
              Today, we're proud to have helped thousands of learners develop new skills, advance 
              their careers, and pursue their passions. Whether you're looking to learn something 
              completely new or deepen existing knowledge, we're here to support your learning journey.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
