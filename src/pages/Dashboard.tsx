import { LayoutGrid, ListFilter, Clock, Heart } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="card-container bg-white shadow-lg border border-blue-100"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">{stat.label}</p>
                <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
              </div>
              <stat.icon className="w-8 h-8 text-blue-500/20" />
            </div>
          </div>
        ))}
      </div>

      {/* Active Auctions */}
      <div className="mb-12 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-900">Active Auctions</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600">
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600">
              <ListFilter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {auctions.map((auction, index) => (
            <div
              key={auction.id}
              className="card-container bg-white border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <img 
                src={auction.image} 
                alt={auction.title}
                className="aspect-video w-full object-cover rounded-lg mb-4"
              />
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-blue-900">{auction.title}</h3>
                  <p className="text-sm text-blue-600">
                    Current Bid: ${auction.currentBid}
                  </p>
                </div>
                <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <Clock className="w-4 h-4" />
                <span>{auction.timeLeft} left</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const stats = [
  { label: "Active Bids", value: "12", icon: Clock },
  { label: "Won Auctions", value: "8", icon: Heart },
  { label: "Total Spent", value: "$2,450", icon: LayoutGrid },
  { label: "Watchlist", value: "5", icon: Heart },
];

const auctions = [
  {
    id: 1,
    title: "Vintage Camera",
    currentBid: 250,
    timeLeft: "2h 15m",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    id: 2,
    title: "Art Print #123",
    currentBid: 100,
    timeLeft: "1d 3h",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
  },
  {
    id: 3,
    title: "Mechanical Watch",
    currentBid: 1500,
    timeLeft: "15m",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&q=80",
  },
];

export default Dashboard;