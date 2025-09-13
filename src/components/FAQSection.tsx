import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: '¿Qué necesito para vender mi iPhone?',
      answer: 'Solo necesitas que tu iPhone encienda, tenga la pantalla funcional y no esté reportado como robado. Aceptamos dispositivos con pequeños rayones o detalles estéticos menores.'
    },
    {
      question: '¿Cuánto tarda el proceso de pago?',
      answer: 'Una vez que recibimos y verificamos tu iPhone, el pago se realiza de inmediato. Por transferencia bancaria puede tardar hasta 2 horas, y en efectivo es inmediato si vienes a nuestras oficinas.'
    },
    {
      question: '¿Qué modelos de iPhone aceptan?',
      answer: 'Compramos todos los modelos de iPhone desde iPhone 6 en adelante. Los modelos más recientes (iPhone 12, 13, 14) tienen mejor cotización. También aceptamos iPhone SE de todas las generaciones.'
    },
    {
      question: '¿Debo incluir accesorios como cargador o caja?',
      answer: 'No es necesario. Compramos únicamente el iPhone. Si tienes accesorios originales en buen estado, pueden aumentar ligeramente el valor, pero no son obligatorios.'
    },
    {
      question: '¿Cómo determinan el precio de mi iPhone?',
      answer: 'El precio se basa en el modelo, capacidad de almacenamiento, año de fabricación y estado físico del dispositivo. Realizamos una evaluación completa y transparente del dispositivo.'
    },
    {
      question: '¿Qué pasa si mi iPhone tiene la pantalla rota?',
      answer: 'Aceptamos iPhones con pantalla rota, pero el precio se ajusta según el daño. Si el dispositivo enciende y es funcional, aún tiene valor para nosotros.'
    },
    {
      question: '¿Cómo puedo estar seguro de que es confiable?',
      answer: 'Somos una empresa registrada con más de 3 años de experiencia. Tenemos oficinas físicas, miles de reseñas positivas y ofrecemos seguros completos en todos nuestros envíos.'
    },
    {
      question: '¿Puedo cancelar la venta después de enviar mi iPhone?',
      answer: 'Sí, tienes hasta 24 horas después de que recibamos tu dispositivo para cancelar la venta. Te devolvemos tu iPhone sin costo adicional por envío asegurado.'
    }
  ];

  return (
    <section id="faq" className="section-padding bg-muted">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-section-title text-foreground">
            Preguntas 
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Resolvemos todas tus dudas sobre el proceso de venta de tu iPhone. 
            Si no encuentras tu pregunta, contáctanos directamente.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-hero rounded-2xl p-8 shadow-hero">
            <h3 className="text-xl lg:text-2xl font-bold text-hero-foreground mb-3">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-hero-foreground/80 mb-6">
              Nuestro equipo está disponible para ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-apple bg-success text-success-foreground hover:bg-success/90 px-6 py-3 rounded-lg font-semibold transition-all"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                WhatsApp
              </button>
              <button 
                className="btn-apple bg-hero-foreground text-hero hover:bg-hero-foreground/90 px-6 py-3 rounded-lg font-semibold transition-all"
                onClick={() => document.getElementById('contacto')?.scrollIntoView()}
              >
                Formulario de Contacto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;