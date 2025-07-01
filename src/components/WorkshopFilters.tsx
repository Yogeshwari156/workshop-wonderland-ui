
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface WorkshopFiltersProps {
  onFiltersChange: (filters: any) => void;
}

const WorkshopFilters = ({ onFiltersChange }: WorkshopFiltersProps) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [dateFilter, setDateFilter] = useState("");

  const handleFilterChange = () => {
    onFiltersChange({
      search,
      category,
      location,
      priceRange,
      dateFilter,
    });
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setLocation("");
    setPriceRange([0, 500]);
    setDateFilter("");
    onFiltersChange({
      search: "",
      category: "",
      location: "",
      priceRange: [0, 500],
      dateFilter: "",
    });
  };

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle className="text-lg">Filter Workshops</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search workshops..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleFilterChange();
            }}
          />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label>Category</Label>
          <Select value={category} onValueChange={(value) => {
            setCategory(value);
            handleFilterChange();
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="art">Art & Craft</SelectItem>
              <SelectItem value="cooking">Cooking</SelectItem>
              <SelectItem value="photography">Photography</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label>Location</Label>
          <Select value={location} onValueChange={(value) => {
            setLocation(value);
            handleFilterChange();
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Locations</SelectItem>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="san-francisco">San Francisco</SelectItem>
              <SelectItem value="london">London</SelectItem>
              <SelectItem value="berlin">Berlin</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <Label>Price Range: ${priceRange[0]} - ${priceRange[1]}</Label>
          <Slider
            value={priceRange}
            onValueChange={(value) => {
              setPriceRange(value);
              handleFilterChange();
            }}
            max={500}
            min={0}
            step={25}
            className="w-full"
          />
        </div>

        {/* Date Filter */}
        <div className="space-y-2">
          <Label>When</Label>
          <Select value={dateFilter} onValueChange={(value) => {
            setDateFilter(value);
            handleFilterChange();
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this-week">This week</SelectItem>
              <SelectItem value="this-month">This month</SelectItem>
              <SelectItem value="next-month">Next month</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters */}
        <Button 
          variant="outline" 
          onClick={clearFilters}
          className="w-full"
        >
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default WorkshopFilters;
