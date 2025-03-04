import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-6xl font-bold text-gray-900 max-w-3xl leading-tight">
            Transform Your Social Media Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              With AI-Powered Ideas
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl">
            Get personalized content suggestions for Instagram and TikTok based
            on your {"profile's"} performance and trending topics.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <Link
              href="/login"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all"
            >
              See Demo
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-black hover:shadow-lg hover:transform hover:scale-105 transition-all border border-gray-100"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-black/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 text-gray-900 border border-gray-100 shadow-sm">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Creator Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-gray-900 border border-gray-100">
                <div className="flex items-start gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover" 
                  />
                  <div>
                    <p className="text-lg mb-4">{testimonial.quote}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-white/70 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 border-t border-gray-200 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-900 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">ContentMuse</h3>
              <p className="text-gray-600">Empowering creators with AI-driven insights</p>
            </div>
            <div className="flex gap-8">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms of Service</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Add these new constants after the existing features array
const features = [
  {
    icon: "🎯",
    title: "Smart Analysis",
    description: "Get insights from your best performing content across platforms"
  },
  {
    icon: "💡",
    title: "AI Suggestions",
    description: "Receive personalized content ideas based on your style and audience"
  },
  {
    icon: "📈",
    title: "Track Growth",
    description: "Monitor your content performance and audience engagement"
  }
];

const steps = [
  {
    title: "Connect Your Accounts",
    description: "Link your Instagram and TikTok profiles securely with just a few clicks"
  },
  {
    title: "Get Personalized Ideas",
    description: "Receive AI-generated content suggestions based on your best performing posts"
  },
  {
    title: "Create & Grow",
    description: "Transform suggestions into engaging content that resonates with your audience"
  }
];

const testimonials = [
  {
    quote: "This tool completely transformed how I plan my content. My engagement has increased by 150%!",
    name: "Sarah Chen",
    title: "Lifestyle Creator",
    image: "/testimonials/sarah.jpg" // You'll need to add these images
  },
  {
    quote: "The AI suggestions are spot-on and save me hours of brainstorming time every week.",
    name: "Mike Rodriguez",
    title: "Travel Content Creator",
    image: "/testimonials/mike.jpg"
  }
];
