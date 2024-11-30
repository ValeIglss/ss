import React from 'react';

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1519674908817-8f4e15c5c231",
      title: "Trophy Room",
      description: "Professional display and preservation"
    },
    {
      url: "https://images.unsplash.com/photo-1469781842882-558a83098db3",
      title: "Hunting Experience",
      description: "From field to home"
    },
    {
      url: "https://images.unsplash.com/photo-1516681000991-4f0c4a88e1c4",
      title: "Secure Transport",
      description: "Safe and compliant shipping"
    },
    {
      url: "https://images.unsplash.com/photo-1484627147104-f5197bcd6651",
      title: "Documentation",
      description: "Expert handling of permits"
    },
    {
      url: "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb",
      title: "Global Service",
      description: "Worldwide trophy transport"
    },
    {
      url: "https://images.unsplash.com/photo-1518709766631-a6c7f7856bc3",
      title: "Quality Care",
      description: "Premium handling service"
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-primary-dark/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-white">Gallery</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light">
            Experience our professional handling and attention to detail through our gallery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.title}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl font-medium mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200 font-light">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}