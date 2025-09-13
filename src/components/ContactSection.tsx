import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "¡Formulario enviado!",
      description: "Te contactaremos en las próximas 2 horas para tu cotización.",
    });

    // Reset form
    setFormData({ name: '', phone: '', model: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const phoneNumber = '+52 1 55 1234 5678';
  const whatsappNumber = '525512345678';

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-section-title text-foreground">
            Contáctanos 
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> ahora</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Obtén tu cotización gratuita y vende tu iPhone hoy mismo. 
            Múltiples formas de contactarnos para tu comodidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Solicita tu cotización
              </h3>
              <p className="text-muted-foreground">
                Completa el formulario y te contactaremos en menos de 2 horas
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    required
                    className="bg-card"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+52 55 1234 5678"
                    required
                    className="bg-card"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">Modelo de iPhone</Label>
                <Input
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  placeholder="Ej: iPhone 13 Pro 256GB"
                  required
                  className="bg-card"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje (opcional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos el estado de tu iPhone o cualquier detalle adicional..."
                  rows={4}
                  className="bg-card resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full btn-apple bg-primary hover:bg-primary/90 text-lg py-6"
              >
                Solicitar Cotización Gratuita
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Otras formas de contacto
              </h3>
              <p className="text-muted-foreground">
                Elige la opción que más te convenga
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="card-gradient rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success text-success-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-card-foreground mb-2">WhatsApp</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Respuesta inmediata • Disponible 24/7
                    </p>
                    <Button 
                      className="btn-apple bg-success hover:bg-success/90 text-success-foreground"
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                    >
                      Abrir WhatsApp
                    </Button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card-gradient rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-card-foreground mb-2">Teléfono</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Lunes a Viernes 9:00 - 19:00 hrs
                    </p>
                    <Button 
                      variant="outline"
                      className="btn-apple border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                    >
                      {phoneNumber}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card-gradient rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-apple-blue text-apple-blue-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-card-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Respuesta en 2-4 horas
                    </p>
                    <Button 
                      variant="outline"
                      className="btn-apple border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-apple-blue-foreground"
                      onClick={() => window.open('mailto:info@appletradein.mx', '_self')}
                    >
                      info@appletradein.mx
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours & Location */}
            <div className="bg-muted rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h5 className="font-semibold text-foreground">Horarios</h5>
                  <p className="text-muted-foreground text-sm">
                    Lunes a Viernes: 9:00 - 19:00 hrs<br />
                    Sábados: 10:00 - 15:00 hrs
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h5 className="font-semibold text-foreground">Oficinas</h5>
                  <p className="text-muted-foreground text-sm">
                    Polanco, Ciudad de México<br />
                    <span className="text-xs">(Dirección exacta al confirmar cita)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;