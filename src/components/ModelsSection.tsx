import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import iphone14Pro from '@/assets/iphone-14-pro.jpg';
import iphone13 from '@/assets/iphone-13.jpg';
import iphone12 from '@/assets/iphone-12.jpg';
import iphoneSE from '@/assets/iphone-se.jpg';

const ModelsSection = () => {
  const models = [
    {
      name: 'iPhone 14 Pro',
      image: iphone14Pro,
      priceRange: '$800 - $1,200',
      description: 'El iPhone más avanzado con sistema de cámaras Pro',
      popular: true
    },
    {
      name: 'iPhone 13',
      image: iphone13,
      priceRange: '$600 - $900',
      description: 'Rendimiento excepcional con batería de larga duración',
      popular: false
    },
    {
      name: 'iPhone 12',
      image: iphone12,
      priceRange: '$450 - $700',
      description: 'Diseño elegante con tecnología 5G',
      popular: false
    },
    {
      name: 'iPhone SE',
      image: iphoneSE,
      priceRange: '$200 - $350',
      description: 'Potencia compacta a precio accesible',
      popular: false
    }
  ];

  return (
    <section id="modelos" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-section-title text-foreground">
            Modelos que 
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> compramos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compramos todos los modelos de iPhone en buen estado. Los precios varían según 
            el modelo, capacidad de almacenamiento y condición del dispositivo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {models.map((model, index) => (
            <div key={index} className="relative">
              {/* Popular Badge */}
              {model.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-success text-success-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-card">
                    Más Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className="card-gradient rounded-2xl p-6 h-full flex flex-col">
                {/* Image */}
                <div className="relative mb-6 flex-shrink-0">
                  <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                    <img
                      src={model.image}
                      alt={`${model.name} - Vender con Apple Trade In`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-card-title text-card-foreground mb-2">
                    {model.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {model.description}
                  </p>

                  {/* Price Range */}
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-success mb-1">
                      {model.priceRange}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      *Precio aproximado según condición
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="btn-apple w-full bg-primary hover:bg-primary/90"
                    onClick={() => document.getElementById('contacto')?.scrollIntoView()}
                  >
                    Vender Ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-muted rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              ¿No ves tu modelo?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              También compramos iPhone 11, iPhone XS, iPhone XR, iPhone X y modelos anteriores. 
              ¡Contáctanos para una cotización personalizada!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="btn-apple bg-primary hover:bg-primary/90"
                onClick={() => document.getElementById('contacto')?.scrollIntoView()}
              >
                Consultar Modelo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="btn-apple border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                WhatsApp Directo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;