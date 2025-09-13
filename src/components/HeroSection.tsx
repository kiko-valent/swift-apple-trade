import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-iphones.jpg';

const HeroSection = () => {
  return (
    <section id="inicio" className="hero-background section-padding pt-24 lg:pt-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero text-hero-foreground fade-in-up">
                Vende tu iPhone{' '}
                <span className="text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
                  fácil, rápido y seguro
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-hero-foreground/80 max-w-2xl fade-in-up-delay">
                Recibe dinero en efectivo o crédito de inmediato con Apple Trade In. 
                Proceso transparente, cotización justa y pago al instante.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 fade-in-up-delay">
              <Button 
                size="lg" 
                className="btn-apple bg-hero-foreground text-hero hover:bg-hero-foreground/90 shadow-hero text-base lg:text-lg px-8 py-4"
                onClick={() => document.getElementById('contacto')?.scrollIntoView()}
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-apple border-hero-foreground text-hero-foreground hover:bg-hero-foreground hover:text-hero text-base lg:text-lg px-8 py-4"
                onClick={() => document.getElementById('como-funciona')?.scrollIntoView()}
              >
                <Play className="mr-2 h-5 w-5" />
                Saber Más
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-hero-foreground/60 text-sm lg:text-base pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
                <span>Pago Inmediato</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
                <span>Sin Complicaciones</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="iPhones modernos para vender con Apple Trade In"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-card animate-pulse-slow">
              Valoración Gratuita
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;