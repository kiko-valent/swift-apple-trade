import { Zap, Shield, Clock, Headphones } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Pago Inmediato',
      description: 'Recibe tu dinero al instante por transferencia bancaria o efectivo. Sin esperas ni demoras.',
      color: 'text-yellow-500'
    },
    {
      icon: Clock,
      title: 'Proceso Simple',
      description: 'Solo 3 pasos para vender tu iPhone. Cotización online, envío gratuito y pago inmediato.',
      color: 'text-blue-500'
    },
    {
      icon: Shield,
      title: '100% Seguro',
      description: 'Proceso totalmente seguro con seguros incluidos. Tu dispositivo está protegido en todo momento.',
      color: 'text-green-500'
    },
    {
      icon: Headphones,
      title: 'Soporte Personalizado',
      description: 'Equipo especializado disponible por WhatsApp, teléfono y chat para resolver tus dudas.',
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="beneficios" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-section-title text-foreground">
            ¿Por qué elegir 
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Apple Trade In</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos la opción más confiable y rápida para vender tu iPhone. 
            Miles de clientes nos han elegido por estas razones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="card-gradient rounded-2xl p-8 h-full">
                  {/* Icon */}
                  <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-8 w-8 ${benefit.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-card-title text-card-foreground mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="mt-20">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 shadow-hero">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-hero-foreground mb-4">
                Apple Trade In vs Otros
              </h3>
              <p className="text-hero-foreground/80 text-lg">
                Comparación con otras opciones del mercado
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="space-y-4">
                <div className="text-hero-foreground font-semibold text-lg">Apple Trade In</div>
                <div className="space-y-2 text-hero-foreground/80">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Pago Inmediato</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Precio Justo</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">100% Seguro</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-hero-foreground/60 font-semibold text-lg">Mercadolibre</div>
                <div className="space-y-2 text-hero-foreground/50">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-sm">Demora en venta</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Comisiones altas</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Riesgo estafas</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-hero-foreground/60 font-semibold text-lg">Facebook</div>
                <div className="space-y-2 text-hero-foreground/50">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-sm">Proceso inseguro</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-sm">Sin garantías</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Tiempo perdido</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-hero-foreground/60 font-semibold text-lg">Tiendas Físicas</div>
                <div className="space-y-2 text-hero-foreground/50">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-sm">Precios bajos</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Desplazamientos</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Horarios limitados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;