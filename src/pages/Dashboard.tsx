import { LayoutGrid, ListFilter, Clock, Heart } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="card-container"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <stat.icon className="w-8 h-8 text-primary/20" />
            </div>
          </div>
        ))}
      </div>

      {/* Active Auctions */}
      <div className="mb-12 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Active Auctions</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-accent rounded-lg">
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-accent rounded-lg">
              <ListFilter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {auctions.map((auction, index) => (
            <div
              key={auction.id}
              className="card-container"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="aspect-video rounded-lg bg-accent mb-4" />
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold">{auction.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Current Bid: ${auction.currentBid}
                  </p>
                </div>
                <button className="p-2 hover:bg-accent rounded-lg">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
  },
  {
    id: 2,
    title: "Art Print #123",
    currentBid: 100,
    timeLeft: "1d 3h",
  },
  {
    id: 3,
    title: "Mechanical Watch",
    currentBid: 1500,
    timeLeft: "15m",
  },
];

export default Dashboard;