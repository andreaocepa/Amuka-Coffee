/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ShoppingCart, Mail, Phone, ArrowDown, ChevronRight, Menu, X } from 'lucide-react';

const CoffeeProduct = ({ name, type, description, price, imageUrl, waLink, mailLink, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className="group relative bg-white/5 border border-gold/10 overflow-hidden hover:border-gold/30 transition-colors duration-500"
  >
    <div className="relative h-72 overflow-hidden">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="p-8">
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-caramel mb-3 block">{type}</span>
      <h3 className="font-display text-2xl font-bold text-cream mb-3">{name}</h3>
      <p className="text-latte/70 font-light leading-relaxed mb-6 line-clamp-3">{description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-mono text-sm text-gold tracking-wider">{price}</span>
      </div>
      <div className="flex gap-3 mt-6">
        <a 
          href={waLink} 
          target="_blank"
          className="flex-1 bg-[#25D366] hover:opacity-90 text-white font-mono text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all"
        >
          <Phone className="w-3 h-3 fill-current" /> WhatsApp
        </a>
        <a 
          href={mailLink}
          className="flex-1 border border-gold/40 hover:border-gold text-gold font-mono text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all"
        >
          <Mail className="w-3 h-3" /> Email
        </a>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    const checkScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-espresso">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'bg-espresso/95 backdrop-blur-xl border-b border-gold/10 py-4 px-8 md:px-16' : 'py-8 px-8 md:px-16'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono text-xs tracking-[0.4em] uppercase text-gold font-bold"
          >
            Amuka Coffee
          </motion.div>
          <div className="hidden md:flex gap-12">
            {['Products', 'Story', 'Craft', 'Order'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-mono text-[10px] tracking-[0.3em] uppercase text-latte hover:text-gold transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:hidden text-gold"
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/60 to-espresso z-10" />
          <img 
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80" 
            alt="Coffee Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[10px] tracking-[0.6em] uppercase text-gold mb-8 block">
              EST. 2025 · LANGO, NORTHERN UGANDA
            </span>
            <h1 className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.9] font-black text-ivory tracking-tighter mb-6">
              Amuka<br />
              <span className="italic text-gold font-medium">Coffee</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-latte font-light italic mb-12 max-w-2xl mx-auto opacity-80">
              Mit Te Kur — Strong. Authentic. Unforgettable.
            </p>
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-gold" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_12px_#d4a04a]" />
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-gold" />
            </div>
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-12 py-4 border border-gold text-gold font-mono text-[10px] tracking-[0.4em] uppercase hover:bg-gold hover:text-espresso transition-all duration-500"
            >
              Explore Our Blends
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40"
        >
          <div className="w-[1px] h-12 bg-gradient-to-t from-gold to-transparent" />
          <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-latte">Scroll</span>
        </motion.div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 md:py-40 bg-dark-roast relative">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80" 
              alt="Our Story" 
              className="w-full aspect-[4/5] object-cover filter sepia-[20%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-gold text-espresso p-6 md:p-10 font-mono text-[10px] tracking-[0.3em] uppercase leading-relaxed max-w-[240px]">
              Lango Sub-region, Northern Uganda
            </div>
          </motion.div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 text-gold mb-2">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold">The Origin</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-ivory leading-tight">
              Roots That Run <span className="italic text-gold font-medium">Deep</span>
            </h2>
            <p className="text-latte font-light leading-[1.8] text-lg opacity-80">
              Amuka Coffee is a living testament to the resilience and pride of the Lango people. Our beans are harvested from the same plains where our ancestors roamed, nurtured by the volcanic soil and the golden sun of Northern Uganda.
            </p>
            <p className="text-latte font-light leading-[1.8] text-lg opacity-80">
              Every bean carries a rhythm—the steady pulse of community, the heat of the fire, and the unwavering strength of the Lango spirit. We don't just sell coffee; we share our heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 md:py-40 bg-espresso">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 text-gold mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold">The Collection</span>
              <div className="h-[1px] w-12 bg-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-ivory mb-8">
              Crafted for Your <span className="italic text-gold font-medium">Morning</span>
            </h2>
            <p className="text-latte opacity-70 leading-relaxed font-light">
              Carefully handpicked and expertly roasted to perfection. Explore our signature blends, each offering a unique journey through the flavors of our land.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <CoffeeProduct 
              name="Amuka Dark Roast"
              type="Signature Blend"
              description="Our flagship blend. Bold, full-bodied with a smooth finish. Roasted deep to bring out the rich earthiness of Lango soil."
              price="250g / 500g / 1kg"
              imageUrl="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80"
              waLink="https://wa.me/256772085760?text=Hi%20Amuka%20Coffee!%20I'd%20like%20to%20order%20the%20Dark%20Roast%20blend."
              mailLink="mailto:andrewocepa@gmail.com?subject=Order: Dark Roast"
              delay={0.1}
            />
            <CoffeeProduct 
              name="Lango Medium Roast"
              type="Everyday Brew"
              description="A perfect balance of bright acidity and warm caramel sweetness. Ideal for those who enjoy a nuanced, medium-bodied cup."
              price="250g / 500g / 1kg"
              imageUrl="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80"
              waLink="https://wa.me/256772085760?text=Hi%20Amuka%20Coffee!%20I'd%20like%20to%20order%20the%20Medium%20Roast%20blend."
              mailLink="mailto:andrewocepa@gmail.com?subject=Order: Medium Roast"
              delay={0.2}
            />
            <CoffeeProduct 
              name="Heritage Whole Bean"
              type="Specialty Batch"
              description="Single-origin whole beans for the coffee purist. Freshness guaranteed from our highland farms direct to your grinder."
              price="250g / 500g / 1kg"
              imageUrl="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
              waLink="https://wa.me/256772085760?text=Hi%20Amuka%20Coffee!%20I'd%20like%20to%20order%20the%20Heritage%20Whole%20Bean."
              mailLink="mailto:andrewocepa@gmail.com?subject=Order: Heritage Whole Bean"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Featured Banner / Quote */}
      <section className="py-24 bg-mahogany overflow-hidden relative">
        <div className="absolute inset-0 bg-gold/[0.03] pattern-grid" />
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-8xl md:text-[12rem] leading-[0.5] text-gold/10 font-bold mb-8"
          >
            "
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-5xl font-italic text-ivory italic leading-snug mb-12"
          >
            Every cup is a bridge to the <span className="text-gold">spirit of Northern Uganda</span>—a celebration of culture and community.
          </motion.p>
          <div className="flex items-center justify-center gap-4">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" className="w-12 h-12 rounded-full object-cover border border-gold/30" alt="Founder" referrerPolicy="no-referrer" />
            <div className="text-left">
              <span className="block font-mono text-[10px] tracking-widest text-gold font-bold uppercase">Amuka Coffee</span>
              <span className="font-serif text-sm text-latte italic opacity-60">Lango Sub-region, N. Uganda</span>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Section */}
      <section id="craft" className="py-24 md:py-40 bg-espresso">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 text-gold mb-6">
                <div className="h-[1px] w-12 bg-gold" />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold">The Process</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black text-ivory mb-12">
                The Journey of <span className="italic text-gold font-medium">Authenticity</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  { step: '01', title: 'Generational Growth', desc: 'Our coffee is grown by Lango farmers whose wisdom has been passed down for centuries, ensuring every bean is a product of deep knowledge and care.' },
                  { step: '02', title: 'Handpicked Precision', desc: 'Each cherry is selected at the moment of perfect ripeness, a meticulous process that preserves the integrity and character of our harvest.' },
                  { step: '03', title: 'Ancestral Roasting', desc: 'We combine traditional techniques with modern expertise to roast in small batches, unlocking the bold, earthy flavors unique to Northern Ugandan soil.' }
                ].map((item) => (
                  <motion.div 
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex gap-8 items-start">
                      <span className="font-display text-5xl md:text-6xl text-gold/10 group-hover:text-gold/20 transition-colors duration-500 font-black">{item.step}</span>
                      <div>
                        <h4 className="font-display text-xl text-cream font-bold mb-3">{item.title}</h4>
                        <p className="text-latte font-light leading-relaxed max-w-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80" 
                className="w-full aspect-square object-cover rounded-sm grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80" 
                className="w-full aspect-square object-cover rounded-sm grayscale-[30%] hover:grayscale-0 transition-all duration-700 mt-12" 
                referrerPolicy="no-referrer"
              />
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80" 
                className="w-full aspect-square object-cover rounded-sm grayscale-[30%] hover:grayscale-0 transition-all duration-700 -mt-12" 
                referrerPolicy="no-referrer"
              />
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                src="https://images.unsplash.com/photo-1442115994334-0805374a496c?w=600&q=80" 
                className="w-full aspect-square object-cover rounded-sm grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section id="order" className="py-32 md:py-60 relative overflow-hidden bg-dark-roast">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80" 
            className="w-full h-full object-cover" 
            alt="Coffee bag closer"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-gold mb-12 block">A Taste of Heritage</span>
            <h2 className="font-display text-5xl md:text-8xl font-black text-ivory mb-12 leading-[0.9]">
              Taste History.<br />Taste Culture.<br /><span className="italic text-gold font-medium">Taste Home.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/256772085760?text=Hi%20Amuka%20Coffee!%20I'd%20like%20to%20place%20an%20order." 
                target="_blank"
                className="w-full md:w-auto px-12 py-5 bg-[#25D366] text-white font-mono text-[10px] tracking-[0.4em] uppercase font-bold hover:opacity-90 transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-4 h-4 fill-current" /> Order on WhatsApp
              </a>
              <a 
                href="mailto:andrewocepa@gmail.com" 
                className="w-full md:w-auto px-12 py-5 border border-gold text-gold font-mono text-[10px] tracking-[0.4em] uppercase hover:bg-gold hover:text-espresso transition-all flex items-center justify-center gap-3"
              >
                <Mail className="w-4 h-4" /> Email Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-espresso border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display text-2xl text-gold font-bold italic">Amuka Coffee</div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-mono text-[9px] tracking-widest text-latte/40 uppercase">
             <span>+256 772 085 760</span>
             <span className="hidden md:inline">·</span>
             <span>andrewocepa@gmail.com</span>
             <span className="hidden md:inline">·</span>
             <span>EST. 2025 · MIT TE KUR · LANGO, UGANDA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
