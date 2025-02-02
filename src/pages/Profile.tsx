import { useState } from "react";
import { User, Mail, Phone, MapPin, Camera, Edit2 } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="md:col-span-1">
          <div className="card-container text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-accent" />
              <button className="absolute bottom-0 right-0 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-xl font-bold mb-2">John Doe</h2>
            <p className="text-sm text-muted-foreground mb-4">Member since 2024</p>
            <button
              className="button-primary w-full"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit2 className="w-4 h-4 mr-2" />
              Edit Profile
            </button>
          </div>

          {/* Stats Card */}
          <div className="card-container mt-6">
            <h3 className="font-semibold mb-4">Activity</h3>
            <div className="space-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                  <span className="font-medium">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="md:col-span-2 space-y-6">
          <div className="card-container">
            <h3 className="font-semibold mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    className="input-field w-full"
                    defaultValue="John"
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    className="input-field w-full"
                    defaultValue="Doe"
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    className="input-field w-full pl-10"
                    defaultValue="john@example.com"
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="tel"
                    className="input-field w-full pl-10"
                    defaultValue="+1 234 567 890"
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    className="input-field w-full pl-10"
                    defaultValue="123 Main St, City, Country"
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card-container">
            <h3 className="font-semibold mb-6">Preferences</h3>
            <div className="space-y-4">
              {preferences.map((pref) => (
                <label key={pref.id} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    defaultChecked={pref.enabled}
                    disabled={!isEditing}
                  />
                  <span className="text-sm">{pref.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const stats = [
  { label: "Active Auctions", value: "5" },
  { label: "Won Auctions", value: "12" },
  { label: "Total Bids", value: "47" },
  { label: "Success Rate", value: "92%" },
];

const preferences = [
  { id: 1, label: "Email notifications for new bids", enabled: true },
  { id: 2, label: "SMS alerts for auction ending soon", enabled: false },
  { id: 3, label: "Newsletter subscription", enabled: true },
  { id: 4, label: "Show my profile to other users", enabled: true },
];

export default Profile;