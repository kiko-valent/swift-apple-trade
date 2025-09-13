import { Search, Send, CreditCard } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: 'Cotiza tu iPhone',
      description: 'Completa nuestro formulario online con el modelo y estado de tu iPhone para recibir una cotización instantánea.',
      step: '01'
    },
    {
      icon: Send,
      title: 'Envíalo o Tráelo',
      description: 'Recíbelo en nuestras oficinas o utiliza nuestro servicio de envío gratuito con seguro completo incluido.',
      step: '02'
    },
    {
      icon: CreditCard,
      title: 'Recibe tu Pago',
      description: 'Una vez verificado tu dispositivo, recibe tu pago inmediato por transferencia o efectivo.',
      step: '03'
    }
  ];

  return (
    <section id="como-funciona" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-section-title text-foreground">
            ¿Cómo funciona 
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> nuestro proceso</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Vender tu iPhone nunca ha sido tan simple. Nuestro proceso de 3 pasos garantiza 
            una experiencia rápida, segura y transparente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 md:left-0 md:transform-none">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-card">
                    {step.step}
                  </div>
                </div>

                {/* Card */}
                <div className="card-gradient rounded-2xl p-8 text-center md:text-left pt-12 md:pt-8 h-full">
                  <div className="flex justify-center md:justify-start mb-6">
                    <div className="w-16 h-16 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-card-title text-card-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-12 h-0.5 bg-border transform translate-x-0 lg:translate-x-6">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 shadow-hero">
            <h3 className="text-2xl lg:text-3xl font-bold text-hero-foreground mb-4">
              ¿Listo para vender tu iPhone?
            </h3>
            <p className="text-hero-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Obtén tu cotización gratuita en menos de 2 minutos
            </p>
            <button 
              className="btn-apple bg-hero-foreground text-hero hover:bg-hero-foreground/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-card transition-all"
              onClick={() => document.getElementById('contacto')?.scrollIntoView()}
            >
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;