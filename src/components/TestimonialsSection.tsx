import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      location: 'Ciudad de México',
      rating: 5,
      comment: 'Increíble servicio! Vendí mi iPhone 13 Pro en menos de 2 días. El proceso fue súper sencillo y el pago fue inmediato. Totalmente recomendado.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Ana García',
      location: 'Guadalajara',
      rating: 5,
      comment: 'La mejor experiencia vendiendo un iPhone. Precio justo, proceso transparente y pagaron exactamente lo que cotizaron. Sin sorpresas.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Miguel Rodríguez',
      location: 'Monterrey',
      rating: 5,
      comment: 'Excelente atención al cliente. Me resolvieron todas las dudas por WhatsApp y el envío fue gratuito. Muy profesionales en todo momento.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-section-title text-foreground">
            Lo que dicen 
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> nuestros clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Miles de clientes satisfechos han confiado en nosotros para vender sus iPhones. 
            Lee sus experiencias reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-gradient rounded-2xl p-8">
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <blockquote className="text-card-foreground mb-6 text-base leading-relaxed">
                "{testimonial.comment}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-muted rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Números que nos respaldan
              </h3>
              <p className="text-muted-foreground text-lg">
                Datos reales de nuestro servicio
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-success">+5,000</div>
                <div className="text-muted-foreground">iPhones Comprados</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-apple-blue">4.9/5</div>
                <div className="text-muted-foreground">Calificación Promedio</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-purple-600">24h</div>
                <div className="text-muted-foreground">Tiempo Promedio</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-orange-500">98%</div>
                <div className="text-muted-foreground">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 shadow-hero">
            <h3 className="text-2xl lg:text-3xl font-bold text-hero-foreground mb-4">
              ¿Quieres ser el próximo cliente satisfecho?
            </h3>
            <p className="text-hero-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Únete a miles de personas que ya han confiado en nosotros
            </p>
            <button 
              className="btn-apple bg-hero-foreground text-hero hover:bg-hero-foreground/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-card transition-all"
              onClick={() => document.getElementById('contacto')?.scrollIntoView()}
            >
              Vender Mi iPhone
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;