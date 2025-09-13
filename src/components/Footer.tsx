import { Phone, MessageCircle, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Cómo Funciona', href: '#como-funciona' },
    { name: 'Modelos', href: '#modelos' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const legalLinks = [
    { name: 'Términos y Condiciones', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Política de Cookies', href: '#' },
    { name: 'Aviso Legal', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' }
  ];

  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-8 w-8 text-hero-foreground" />
              <span className="text-xl font-bold">Apple Trade In</span>
            </div>
            <p className="text-hero-foreground/80 leading-relaxed">
              La forma más segura, rápida y confiable de vender tu iPhone. 
              Más de 5,000 clientes satisfechos nos respaldan.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-success" />
                <span className="text-sm">WhatsApp 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-success" />
                <span className="text-sm">Soporte telefónico</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-success" />
                <span className="text-sm">Respuesta en 2 horas</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-hero-foreground/80 hover:text-hero-foreground hover-underline transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Teléfono</h5>
                <a 
                  href="tel:+525512345678"
                  className="text-hero-foreground/80 hover:text-hero-foreground transition-colors text-sm"
                >
                  +52 1 55 1234 5678
                </a>
              </div>
              <div>
                <h5 className="font-medium mb-2">Email</h5>
                <a 
                  href="mailto:info@appletradein.mx"
                  className="text-hero-foreground/80 hover:text-hero-foreground transition-colors text-sm"
                >
                  info@appletradein.mx
                </a>
              </div>
              <div>
                <h5 className="font-medium mb-2">Horarios</h5>
                <p className="text-hero-foreground/80 text-sm">
                  Lun - Vie: 9:00 - 19:00<br />
                  Sáb: 10:00 - 15:00
                </p>
              </div>
            </div>
          </div>

          {/* Legal & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Legal</h4>
            <nav className="space-y-3">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-hero-foreground/80 hover:text-hero-foreground hover-underline transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* Social Media */}
            <div className="pt-4">
              <h5 className="font-medium mb-4">Síguenos</h5>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`text-hero-foreground/80 ${social.color} transition-colors`}
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-8 border-t border-hero-foreground/20">
          <div className="bg-hero-foreground/10 rounded-2xl p-8 text-center">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              ¿Listo para vender tu iPhone?
            </h3>
            <p className="text-hero-foreground/80 mb-6 max-w-2xl mx-auto">
              Obtén tu cotización gratuita ahora y vende tu iPhone en menos de 24 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-apple bg-success text-success-foreground hover:bg-success/90 px-6 py-3 rounded-lg font-semibold transition-all"
                onClick={() => window.open('https://wa.me/525512345678', '_blank')}
              >
                WhatsApp Directo
              </button>
              <button 
                className="btn-apple bg-hero-foreground text-hero hover:bg-hero-foreground/90 px-6 py-3 rounded-lg font-semibold transition-all"
                onClick={() => document.getElementById('contacto')?.scrollIntoView()}
              >
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-hero-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-hero-foreground/60 text-sm">
              © {currentYear} Apple Trade In México. Todos los derechos reservados.
            </div>
            <div className="text-hero-foreground/60 text-sm">
              Empresa registrada • RFC: ATIM240101ABC • CDMX, México
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;