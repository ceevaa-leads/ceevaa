// CeeVaa Landing Page Component - Agent-Focused Design
import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { 
  MapPin, 
  Zap, 
  Target, 
  BarChart3, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Linkedin,
  Building2,
  Search,
  Send,
  Star,
  Bot,
  Brain,
  Activity,
  Award,
  FileSearch,
  KeyRound
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
            <a href="#agents">AI Agents</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="https://app.ceevaa.ai/login" className="nav-link-login">Login</a>
            <button 
              className="nav-btn-primary"
              data-cal-namespace="demo"
              data-cal-link="ceevaa/demo"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-gradient-orb hero-orb-1"></div>
          <div className="hero-gradient-orb hero-orb-2"></div>
          <div className="hero-grid-overlay"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-badge">
            <Bot size={14} />
            <span>AI-Powered Growth Agents</span>
          </div>
          
          <h1 className="hero-title">
            Your AI Team for<br />
            <span className="hero-title-accent">Local Business Growth</span>
          </h1>
          
          <p className="hero-subtitle">
            Meet Sky, Sage & Nova — three AI agents that find leads from Google Maps, 
            convert them with cold email outreach, and optimize your Google Business Profile for SEO.
          </p>

          <div className="hero-cta-group">
            <button 
              className="hero-btn-primary"
              data-cal-namespace="demo"
              data-cal-link="ceevaa/demo"
              data-cal-config='{"layout":"month_view"}'
            >
              Meet Your AI Team
              <ArrowRight size={18} />
            </button>
            <a href="#agents" className="hero-btn-secondary">
              See How They Work
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              <div className="trust-avatar">A</div>
              <div className="trust-avatar">M</div>
              <div className="trust-avatar">S</div>
            </div>
            <p>Trusted by janitorial, HVAC, roofing, landscaping, and other local service businesses</p>
          </div>
        </div>
      </section>

      {/* Agent Team Introduction */}
      <section className="team-intro-section">
        <div className="section-container">
          <div className="team-intro-content">
            <Sparkles className="team-intro-icon" size={40} />
            <h2>A Team of AI Agents Working For Your Business Growth</h2>
            <p>While you focus on delivering great service, our AI agents handle lead generation, outreach, and SEO optimization — all on autopilot.</p>
          </div>
        </div>
      </section>

      {/* Meet Your AI Agents Section */}
      <section id="agents" className="agents-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">YOUR AI TEAM</span>
            <h2 className="section-title">Meet Your AI Agents</h2>
            <p className="section-subtitle">
              Three specialized agents working together to grow your local business
            </p>
          </div>

          <div className="agents-grid agents-grid-three">
            {/* Sky - Lead Scout Agent */}
            <div className="agent-card agent-sky">
              <div className="agent-avatar-container">
                <div className="agent-avatar agent-avatar-aria">
                  <Search size={28} />
                </div>
                <div className="agent-status">
                  <span className="status-dot"></span>
                  Online
                </div>
              </div>
              
              <div className="agent-info">
                <h3 className="agent-name">Sky</h3>
                <span className="agent-role">Lead Scout Agent</span>
                <p className="agent-tagline">Google Maps Lead Finder</p>
              </div>

              <p className="agent-description">
                Sky scours Google Maps 24/7 to find your ideal customers. She identifies local businesses, 
                discovers decision-makers, and extracts their contact information for outreach.
              </p>

              <div className="agent-capabilities">
                <h4>What Sky Does</h4>
                <ul>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Scrapes Google Maps for target businesses</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Finds owner emails & contact details</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Filters by industry, location & size</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Delivers qualified leads daily</span>
                  </li>
                </ul>
              </div>

              <div className="agent-stats">
                <div className="agent-stat">
                  <span className="stat-number">10K+</span>
                  <span className="stat-text">Leads Found Daily</span>
                </div>
                <div className="agent-stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-text">Data Accuracy</span>
                </div>
              </div>
            </div>

            {/* Sage - Outreach Agent */}
            <div className="agent-card agent-sage">
              <div className="agent-avatar-container">
                <div className="agent-avatar agent-avatar-marcus">
                  <Send size={28} />
                </div>
                <div className="agent-status">
                  <span className="status-dot"></span>
                  Online
                </div>
              </div>
              
              <div className="agent-info">
                <h3 className="agent-name">Sage</h3>
                <span className="agent-role">Outreach Agent</span>
                <p className="agent-tagline">Cold Email Specialist</p>
              </div>

              <p className="agent-description">
                Sage takes Sky's leads and crafts personalized cold emails that convert. 
                He analyzes each business to create compelling messages that get responses.
              </p>

              <div className="agent-capabilities">
                <h4>What Sage Does</h4>
                <ul>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>AI-writes personalized cold emails</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Automates multi-step campaigns</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Optimizes for open & reply rates</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Manages follow-ups automatically</span>
                  </li>
                </ul>
              </div>

              <div className="agent-stats">
                <div className="agent-stat">
                  <span className="stat-number">45%</span>
                  <span className="stat-text">Open Rate</span>
                </div>
                <div className="agent-stat">
                  <span className="stat-number">12%</span>
                  <span className="stat-text">Reply Rate</span>
                </div>
              </div>
            </div>

            {/* Nova - SEO Agent */}
            <div className="agent-card agent-nova">
              <div className="agent-avatar-container">
                <div className="agent-avatar agent-avatar-sophia">
                  <Activity size={28} />
                </div>
                <div className="agent-status">
                  <span className="status-dot"></span>
                  Online
                </div>
              </div>
              
              <div className="agent-info">
                <h3 className="agent-name">Nova</h3>
                <span className="agent-role">SEO Agent</span>
                <p className="agent-tagline">Google Business Profile Optimizer</p>
              </div>

              <p className="agent-description">
                Nova analyzes your Google Business Profile to boost your local visibility. 
                She suggests keywords, tracks your rankings, and provides a comprehensive health score.
              </p>

              <div className="agent-capabilities">
                <h4>What Nova Does</h4>
                <ul>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Analyzes your Google Business Profile</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Suggests best SEO keywords</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Ranks you for target keywords</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Provides GBP health score</span>
                  </li>
                </ul>
              </div>

              <div className="agent-stats">
                <div className="agent-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-text">SEO Metrics Tracked</span>
                </div>
                <div className="agent-stat">
                  <span className="stat-number">3x</span>
                  <span className="stat-text">Avg. Visibility Boost</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">HOW IT WORKS</span>
            <h2 className="section-title">Your AI Agents in Action</h2>
            <p className="section-subtitle">Two powerful workflows to grow your business</p>
          </div>

          {/* Workflow 1: Lead Generation & Outreach */}
          <div className="workflow-block">
            <div className="workflow-title">
              <div className="workflow-title-icon">
                <Target size={20} />
              </div>
              <h3>Lead Generation & Outreach</h3>
            </div>
            
            <div className="workflow-container">
              <div className="workflow-step">
                <div className="workflow-step-number">1</div>
                <div className="workflow-step-icon">
                  <Target size={24} />
                </div>
                <h4>Define Your Target</h4>
                <p>Tell us your ideal customer — industry, location, and size.</p>
              </div>

              <div className="workflow-arrow">
                <ArrowRight size={20} />
              </div>

              <div className="workflow-step">
                <div className="workflow-step-number">2</div>
                <div className="workflow-step-agent workflow-step-agent-sky">
                  <Search size={16} />
                  <span>Sky</span>
                </div>
                <h4>Sky Finds Leads</h4>
                <p>She scrapes Google Maps and extracts decision-maker contacts.</p>
              </div>

              <div className="workflow-arrow">
                <ArrowRight size={20} />
              </div>

              <div className="workflow-step">
                <div className="workflow-step-number">3</div>
                <div className="workflow-step-agent workflow-step-agent-sage">
                  <Send size={16} />
                  <span>Sage</span>
                </div>
                <h4>Sage Reaches Out</h4>
                <p>He crafts personalized emails and manages follow-ups.</p>
              </div>

              <div className="workflow-arrow">
                <ArrowRight size={20} />
              </div>

              <div className="workflow-step">
                <div className="workflow-step-number">4</div>
                <div className="workflow-step-icon">
                  <TrendingUp size={24} />
                </div>
                <h4>You Close Deals</h4>
                <p>Convert interested prospects into paying customers.</p>
              </div>
            </div>
          </div>

          {/* Workflow 2: GBP SEO Optimization */}
          <div className="workflow-block">
            <div className="workflow-title">
              <div className="workflow-title-icon">
                <Activity size={20} />
              </div>
              <h3>Google Business Profile SEO</h3>
            </div>
            
            <div className="workflow-container">
              <div className="workflow-step">
                <div className="workflow-step-number">1</div>
                <div className="workflow-step-icon">
                  <Building2 size={24} />
                </div>
                <h4>Connect Your GBP</h4>
                <p>Link your Google Business Profile for analysis.</p>
              </div>

              <div className="workflow-arrow">
                <ArrowRight size={20} />
              </div>

              <div className="workflow-step">
                <div className="workflow-step-number">2</div>
                <div className="workflow-step-agent workflow-step-agent-nova">
                  <Activity size={16} />
                  <span>Nova</span>
                </div>
                <h4>Nova Analyzes</h4>
                <p>She audits your profile and identifies optimization opportunities.</p>
              </div>

              <div className="workflow-arrow">
                <ArrowRight size={20} />
              </div>

              <div className="workflow-step">
                <div className="workflow-step-number">3</div>
                <div className="workflow-step-icon">
                  <KeyRound size={24} />
                </div>
                <h4>Get Keyword Insights</h4>
                <p>Discover the best SEO keywords for your business.</p>
              </div>

              <div className="workflow-arrow">
                <ArrowRight size={20} />
              </div>

              <div className="workflow-step">
                <div className="workflow-step-number">4</div>
                <div className="workflow-step-icon">
                  <Award size={24} />
                </div>
                <h4>Track & Improve</h4>
                <p>Monitor rankings and overall GBP health score.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-header">
            <h2>Real Results from Real AI Agents</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">10K+</div>
              <div className="stat-label">Leads Generated Daily</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">45%</div>
              <div className="stat-label">Average Open Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">12%</div>
              <div className="stat-label">Reply Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3x</div>
              <div className="stat-label">Avg. Visibility Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">CAPABILITIES</span>
            <h2 className="section-title">Everything Your AI Team Can Do</h2>
            <p className="section-subtitle">
              Sky, Sage & Nova come with powerful features built-in
            </p>
          </div>

          <div className="features-grid">
            <FeatureCard
              icon={<MapPin />}
              title="Google Maps Scraping"
              description="Sky automatically searches Google Maps for local businesses matching your ideal customer profile"
              accent="blue"
            />
            <FeatureCard
              icon={<Brain />}
              title="AI-Personalized Emails"
              description="Sage analyzes each business to write personalized cold emails that feel human, not spammy"
              accent="silver"
            />
            <FeatureCard
              icon={<FileSearch />}
              title="GBP Analysis"
              description="Nova performs a deep audit of your Google Business Profile to identify improvement areas"
              accent="blue"
            />
            <FeatureCard
              icon={<KeyRound />}
              title="Keyword Suggestions"
              description="Get AI-recommended SEO keywords that will help your business rank higher locally"
              accent="silver"
            />
            <FeatureCard
              icon={<BarChart3 />}
              title="Ranking & Analytics"
              description="Track how you rank for keywords and monitor your GBP health score over time"
              accent="blue"
            />
            <FeatureCard
              icon={<Zap />}
              title="Automated Campaigns"
              description="Set it and forget it — your agents handle everything from discovery to follow-ups"
              accent="silver"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">PRICING</span>
            <h2 className="section-title">Choose Your AI Team Plan</h2>
            <p className="section-subtitle">No long-term commitments. Cancel anytime.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-name">Starter</h3>
                <div className="pricing-agents">
                  <Bot size={16} />
                  <span>All 3 AI Agents Included</span>
                </div>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">79</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="pricing-onboarding">+$49 one-time onboarding fee</p>
                <p className="pricing-description">Perfect for getting started</p>
              </div>
              
              <ul className="pricing-features">
                <PricingFeature text="Sky finds 10 businesses/day" />
                <PricingFeature text="Sage sends up to 1,500 emails/month" />
                <PricingFeature text="Nova's GBP health reports" />
                <PricingFeature text="Basic keyword suggestions" />
                <PricingFeature text="Standard email support (48-hour)" />
              </ul>
            </div>

            <div className="pricing-card pricing-card-featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-header">
                <h3 className="pricing-name">Growth</h3>
                <div className="pricing-agents">
                  <Bot size={16} />
                  <span>All 3 AI Agents Included</span>
                </div>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">129</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="pricing-onboarding">+$49 one-time onboarding fee</p>
                <p className="pricing-description">For businesses ready to scale</p>
              </div>
              
              <ul className="pricing-features">
                <PricingFeature text="Sky finds 30 businesses/day" />
                <PricingFeature text="Sage sends up to 4,500 emails/month" />
                <PricingFeature text="Advanced GBP analytics & tracking" />
                <PricingFeature text="Full keyword ranking reports" />
                <PricingFeature text="Customizable email templates" />
                <PricingFeature text="Priority support (24-hour response)" />
              </ul>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-name">Managed Growth</h3>
                <div className="pricing-agents">
                  <Star size={16} />
                  <span>AI Agents + Human Expert</span>
                </div>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">499</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="pricing-onboarding">+$49 per qualified walkthrough</p>
                <p className="pricing-description">Fully managed, hands-off solution</p>
              </div>
              
              <ul className="pricing-features">
                <PricingFeature text="Dedicated Sales Rep + All AI Agents" />
                <PricingFeature text="From emails to calls to walkthroughs" />
                <PricingFeature text="Full GBP optimization service" />
                <PricingFeature text="Dedicated account manager" />
                <PricingFeature text="Full onboarding and training" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <div className="cta-agents">
              <div className="cta-agent-avatar cta-agent-sky">
                <Search size={20} />
              </div>
              <div className="cta-agent-avatar cta-agent-sage">
                <Send size={20} />
              </div>
              <div className="cta-agent-avatar cta-agent-nova">
                <Activity size={20} />
              </div>
            </div>
            <h2>Ready to put your AI agents to work?</h2>
            <p>Sky, Sage & Nova are ready to start growing your business</p>
            <button 
              type="button" 
              className="cta-btn"
              data-cal-namespace="demo"
              data-cal-link="ceevaa/demo"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Your Demo
              <ArrowRight size={20} />
            </button>
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
              <p className="footer-tagline">Your AI team for local business growth</p>
            </div>

            <div className="footer-links">
              <a href="#agents">AI Agents</a>
              <a href="#how-it-works">How It Works</a>
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

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: 'blue' | 'silver';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, accent }) => {
  return (
    <div className={`feature-card feature-card-${accent}`}>
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
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
