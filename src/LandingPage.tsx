// CeeVaa Landing Page Component - Small Business Focused
import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Linkedin,
  Building2,
  Search,
  Send,
  Activity,
  Clock,
  DollarSign,
  Heart,
  Phone,
  Wrench,
  Home,
  Scissors,
  Truck,
  Dog,
  Leaf,
  Hammer,
  Paintbrush,
  Shield
} from 'lucide-react';
import './LandingPage.css';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "demo" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#1B2D3F" },
          dark: { "cal-brand": "#B0C7DE" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <img src="/logo.png" alt="CeeVaa" className="nav-logo" />
            <span className="nav-brand-text">CeeVaa</span>
          </div>
          <div className="nav-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#industries">Who It's For</a>
            <a href="#pricing">Pricing</a>
            <a href="https://app.ceevaa.ai/login" className="nav-link-login">Login</a>
            <button 
              className="nav-btn-primary"
              data-cal-namespace="demo"
              data-cal-link="ceevaa/demo"
              data-cal-config='{"layout":"month_view"}'
            >
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Warm, Personal */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-gradient-orb hero-orb-1"></div>
          <div className="hero-gradient-orb hero-orb-2"></div>
          <div className="hero-grid-overlay"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-badge">
            <Sparkles size={14} />
            <span>Built for Local Service Businesses</span>
          </div>
          
          <h1 className="hero-title">
            Get More Customers<br />
            <span className="hero-title-accent">While You Focus on Your Work</span>
          </h1>
          
          <p className="hero-subtitle">
            You're great at what you do — cleaning, repairs, lawn care, or walking dogs. 
            But finding new customers? That's where we come in. CeeVaa brings customers to you, 
            so you can spend less time marketing and more time doing what you love.
          </p>

          <div className="hero-cta-group">
            <button 
              className="hero-btn-primary"
              data-cal-namespace="demo"
              data-cal-link="ceevaa/demo"
              data-cal-config='{"layout":"month_view"}'
            >
              See How It Works
              <ArrowRight size={18} />
            </button>
            <a href="#industries" className="hero-btn-secondary">
              Is This For Me?
            </a>
          </div>

          <div className="hero-trust-simple">
            <p>Helping janitorial services, HVAC technicians, dog walkers, landscapers, and more get new customers every day</p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="pain-section">
        <div className="section-container">
          <div className="pain-header">
            <h2>Sound Familiar?</h2>
          </div>
          <div className="pain-grid">
            <div className="pain-card">
              <Clock size={32} />
              <h3>"I don't have time for marketing"</h3>
              <p>You're busy running your business. Between jobs, invoices, and customers, who has time to figure out ads and emails?</p>
            </div>
            <div className="pain-card">
              <DollarSign size={32} />
              <h3>"I can't afford fancy marketing"</h3>
              <p>Big marketing agencies charge thousands. You just need more customers, not a complicated strategy.</p>
            </div>
            <div className="pain-card">
              <Phone size={32} />
              <h3>"I rely on word-of-mouth"</h3>
              <p>Referrals are great, but they're unpredictable. Some months are busy, others are too quiet.</p>
            </div>
          </div>
          <div className="pain-solution">
            <p>We get it. That's exactly why we built CeeVaa — to help small business owners like you get a steady stream of new customers without the hassle.</p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section id="industries" className="industries-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">WHO IT'S FOR</span>
            <h2 className="section-title">Built for Hardworking Business Owners</h2>
            <p className="section-subtitle">
              If you run a local service business and want more customers, CeeVaa is for you
            </p>
          </div>

          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon"><Sparkles size={24} /></div>
              <span>Janitorial & Cleaning</span>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><Wrench size={24} /></div>
              <span>HVAC & Plumbing</span>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><Dog size={24} /></div>
              <span>Dog Walking & Pet Care</span>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><Leaf size={24} /></div>
              <span>Landscaping & Lawn Care</span>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><Home size={24} /></div>
              <span>Roofing & Contractors</span>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><Paintbrush size={24} /></div>
              <span>Painting & Decorating</span>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><Hammer size={24} /></div>
              <span>Handyman Services</span>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><Truck size={24} /></div>
              <span>Moving & Hauling</span>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><Shield size={24} /></div>
              <span>Pest Control</span>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><Scissors size={24} /></div>
              <span>Carpet & Upholstery</span>
            </div>
          </div>

          <p className="industries-more">And many more local service businesses across the US</p>
        </div>
      </section>

      {/* Meet Your Helpers - Simplified Agent Section */}
      <section id="agents" className="helpers-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">YOUR HELPERS</span>
            <h2 className="section-title">Meet Your Marketing Team</h2>
            <p className="section-subtitle">
              Think of them as your tireless assistants who work around the clock to bring you new customers
            </p>
          </div>

          <div className="helpers-grid">
            {/* Sky - Lead Finder */}
            <div className="helper-card">
              <div className="helper-avatar helper-avatar-sky">
                <Search size={28} />
              </div>
              <div className="helper-content">
                <h3>Sky</h3>
                <span className="helper-role">Finds Potential Customers</span>
                <p>
                  Sky searches Google Maps to find local businesses and property managers 
                  who might need your services. She finds their contact info so you don't have to.
                </p>
                <div className="helper-benefits">
                  <div className="helper-benefit">
                    <CheckCircle2 size={16} />
                    <span>Finds businesses in your area</span>
                  </div>
                  <div className="helper-benefit">
                    <CheckCircle2 size={16} />
                    <span>Gets email addresses for you</span>
                  </div>
                  <div className="helper-benefit">
                    <CheckCircle2 size={16} />
                    <span>Works 24/7, even while you sleep</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sage - Email Sender */}
            <div className="helper-card">
              <div className="helper-avatar helper-avatar-sage">
                <Send size={28} />
              </div>
              <div className="helper-content">
                <h3>Sage</h3>
                <span className="helper-role">Reaches Out For You</span>
                <p>
                  Sage writes friendly, personal emails to potential customers introducing 
                  your business. No pushy sales talk — just genuine outreach that gets responses.
                </p>
                <div className="helper-benefits">
                  <div className="helper-benefit">
                    <CheckCircle2 size={16} />
                    <span>Writes emails that sound like you</span>
                  </div>
                  <div className="helper-benefit">
                    <CheckCircle2 size={16} />
                    <span>Follows up automatically</span>
                  </div>
                  <div className="helper-benefit">
                    <CheckCircle2 size={16} />
                    <span>Never forgets to send a message</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nova - Google Presence */}
            <div className="helper-card">
              <div className="helper-avatar helper-avatar-nova">
                <Activity size={28} />
              </div>
              <div className="helper-content">
                <h3>Nova</h3>
                <span className="helper-role">Boosts Your Google Presence</span>
                <p>
                  Nova helps customers find YOU when they search on Google. She optimizes 
                  your Google Business Profile so you show up when people search for services like yours.
                </p>
                <div className="helper-benefits">
                  <div className="helper-benefit">
                    <CheckCircle2 size={16} />
                    <span>Helps you rank higher on Google</span>
                  </div>
                  <div className="helper-benefit">
                    <CheckCircle2 size={16} />
                    <span>Suggests keywords people search for</span>
                  </div>
                  <div className="helper-benefit">
                    <CheckCircle2 size={16} />
                    <span>Shows how healthy your profile is</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Simple */}
      <section id="how-it-works" className="simple-steps-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">HOW IT WORKS</span>
            <h2 className="section-title">Simple as 1-2-3</h2>
            <p className="section-subtitle">
              No complicated setup. No tech skills needed. Just tell us about your business and we do the rest.
            </p>
          </div>

          <div className="simple-steps">
            <div className="simple-step">
              <div className="simple-step-number">1</div>
              <h3>Tell Us About Your Business</h3>
              <p>What do you do? Where do you work? What's your ideal customer? Just answer a few simple questions.</p>
            </div>
            <div className="simple-step-arrow">
              <ArrowRight size={24} />
            </div>
            <div className="simple-step">
              <div className="simple-step-number">2</div>
              <h3>We Find & Reach Out</h3>
              <p>Sky finds potential customers in your area. Sage sends them friendly emails introducing your services.</p>
            </div>
            <div className="simple-step-arrow">
              <ArrowRight size={24} />
            </div>
            <div className="simple-step">
              <div className="simple-step-number">3</div>
              <h3>You Get New Customers</h3>
              <p>Interested people reply directly to you. Just answer their questions and book the job!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonial Style */}
      <section className="testimonial-section">
        <div className="section-container">
          <div className="testimonial-card">
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">
              I used to spend my Sundays driving around looking for commercial properties to pitch. 
              Now CeeVaa does that for me. Last month I landed 3 new cleaning contracts just from 
              emails Sage sent out. It's like having a salesperson who never takes a day off.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">M</div>
              <div className="testimonial-info">
                <span className="testimonial-name">Mike R.</span>
                <span className="testimonial-business">Commercial Cleaning, Houston TX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="section-container">
          <div className="results-header">
            <h2>Real Results for Real Businesses</h2>
          </div>
          <div className="results-grid">
            <div className="result-item">
              <div className="result-value">45%</div>
              <div className="result-label">of emails get opened</div>
            </div>
            <div className="result-item">
              <div className="result-value">12%</div>
              <div className="result-label">reply with interest</div>
            </div>
            <div className="result-item">
              <div className="result-value">$0</div>
              <div className="result-label">to get started</div>
            </div>
            <div className="result-item">
              <div className="result-value">24/7</div>
              <div className="result-label">working for you</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Friendly */}
      <section id="pricing" className="pricing-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">SIMPLE PRICING</span>
            <h2 className="section-title">Affordable Plans for Small Businesses</h2>
            <p className="section-subtitle">No contracts. Cancel anytime. Start seeing results in days, not months.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-header">
                <h3 className="pricing-name">Done-For-You</h3>
                <p className="pricing-tagline">We handle everything for you</p>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">499</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="pricing-onboarding">+$49 per booked appointment</p>
              </div>
              
              <ul className="pricing-features">
                <PricingFeature text="Find 30 potential customers daily" />
                <PricingFeature text="Send up to 4,500 emails/month" />
                <PricingFeature text="Full Google SEO optimization" />
                <PricingFeature text="Dedicated account manager" />
                <PricingFeature text="We manage all outreach for you" />
                <PricingFeature text="Phone follow-ups on leads" />
                <PricingFeature text="Monthly strategy calls" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Common Questions</h2>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Do I need to be tech-savvy?</h4>
              <p>Not at all! If you can use email and text, you can use CeeVaa. We set everything up for you.</p>
            </div>
            <div className="faq-item">
              <h4>How fast will I see results?</h4>
              <p>Most customers start getting responses within the first week. Results vary, but we've seen customers book jobs within days of starting.</p>
            </div>
            <div className="faq-item">
              <h4>Will emails seem spammy?</h4>
              <p>Never. Sage writes personalized, friendly emails that sound like they're coming from a real person (because they're based on you!).</p>
            </div>
            <div className="faq-item">
              <h4>Can I cancel anytime?</h4>
              <p>Yes! No contracts, no commitments. Cancel with one click if it's not working for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <Heart className="cta-icon" size={40} />
            <h2>Ready to Get More Customers?</h2>
            <p>Join hundreds of hardworking business owners who are growing with CeeVaa</p>
            <button 
              type="button" 
              className="cta-btn"
              data-cal-namespace="demo"
              data-cal-link="ceevaa/demo"
              data-cal-config='{"layout":"month_view"}'
            >
              Let's Talk — It's Free
              <ArrowRight size={20} />
            </button>
            <p className="cta-subtext">No credit card required. Just a friendly conversation.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand-section">
              <div className="footer-brand">
                <img src="/logo.png" alt="CeeVaa" className="footer-logo" />
                <span className="footer-brand-text">CeeVaa</span>
              </div>
              <p className="footer-tagline">Helping local businesses get more customers</p>
            </div>

            <div className="footer-links">
              <a href="#how-it-works">How It Works</a>
              <a href="#industries">Who It's For</a>
              <a href="#pricing">Pricing</a>
              <a href="https://app.ceevaa.ai/login">Login</a>
            </div>

            <div className="footer-address">
              <div className="footer-address-title">
                <Building2 size={16} />
                <span>Ceevaasch Technologies Inc.</span>
              </div>
              <p>12603, Southwest Freeway,</p>
              <p>Suite 555, Stafford, Texas 77477</p>
            </div>

            <div className="footer-social">
              <a 
                href="https://www.linkedin.com/company/ceevaa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Follow CeeVaa on LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} CeeVaa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const PricingFeature: React.FC<{ text: string }> = ({ text }) => {
  return (
    <li className="pricing-feature-item">
      <CheckCircle2 size={18} />
      <span>{text}</span>
    </li>
  );
};

export default LandingPage;
