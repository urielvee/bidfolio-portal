import { useState } from "react";
import { Upload, Clock, DollarSign, Info } from "lucide-react";

const CreateAuction = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="card-container">
        <h2 className="text-2xl font-bold text-center mb-8">Create New Auction</h2>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className="flex items-center"
                style={{ width: index === 0 ? "0" : "100%" }}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                    ${
                      step > index + 1
                        ? "bg-primary border-primary text-primary-foreground"
                        : step === index + 1
                        ? "border-primary text-primary"
                        : "border-gray-300 text-gray-300"
                    }`}
                >
                  {index + 1}
                </div>
                {index < totalSteps - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 ${
                      step > index + 1 ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Item Details</span>
            <span>Pricing</span>
            <span>Review</span>
          </div>
        </div>

        {/* Step 1: Item Details */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <label className="text-sm font-medium">Item Title</label>
              <input
                type="text"
                className="input-field w-full"
                placeholder="Enter item title"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <select className="input-field w-full">
                <option value="">Select a category</option>
                <option value="art">Art & Collectibles</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <textarea
                className="input-field w-full min-h-[100px]"
                placeholder="Describe your item"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Images</label>
              <div className="border-2 border-dashed border-input rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Drag and drop images here, or click to select files
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Pricing */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <label className="text-sm font-medium">Starting Price</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="number"
                  className="input-field w-full pl-10"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Reserve Price (Optional)</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="number"
                  className="input-field w-full pl-10"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Duration</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select className="input-field w-full pl-10">
                  <option value="1">1 day</option>
                  <option value="3">3 days</option>
                  <option value="5">5 days</option>
                  <option value="7">7 days</option>
                
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-accent/50 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-primary mt-0.5" />
                <p className="text-sm">
                  Please review your auction details carefully. Once published, some details cannot be modified.
                </p>
              </div>
            </div>

            {/* Add review content here */}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            className="px-6 py-2 rounded-lg border border-input hover:bg-accent transition-all duration-300"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
          >
            Back
          </button>
          <button
            className="button-primary"
            onClick={() => setStep(Math.min(totalSteps, step + 1))}
          >
            {step === totalSteps ? "Create Auction" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAuction;