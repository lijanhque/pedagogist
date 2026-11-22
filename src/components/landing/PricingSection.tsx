import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles } from 'lucide-react';

type Tier = {
  name: string;
  price: string;
  period: string;
  description: string;
  highlight?: boolean;
  features: string[];
  cta: string;
};

const TIERS: Tier[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Try the platform at your own pace',
    features: [
      '10 AI scoring credits',
      'One free full mock test',
      'Core practice questions',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$10',
    period: '15 days',
    description: 'Focused, unlimited practice for two weeks',
    highlight: true,
    features: [
      'Unlimited AI Scoring',
      'Unlimited mock tests',
      'Full practice question bank',
      'Full Test History',
      'Detailed Analytics',
    ],
    cta: 'Choose Pro',
  },
  {
    name: 'VIP',
    price: '$30',
    period: '30 days',
    description: 'Complete preparation with live teacher support',
    features: [
      'Unlimited AI scoring',
      'Unlimited mock tests',
      'Full practice question bank',
      'Full test history and analytics',
      'Live professional teacher support',
    ],
    cta: 'Choose VIP',
  },
];

export function PricingSection() {
  const { user } = useAuth();
  const getCtaUrl = (name: string) => {
    if (name === 'Free') return user ? '/dashboard' : `/auth?redirect=${encodeURIComponent('/dashboard')}`;
    const billingPath = `/billing?plan=${name.toLowerCase()}`;
    return user ? billingPath : `/auth?redirect=${encodeURIComponent(billingPath)}`;
  };

  return (
    <section id="pricing" className="py-24 bg-muted/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Simple Pricing for{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Learner
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick the access period that works for you. Paid packs are one-time purchases and never auto-renew.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full relative transition-all duration-300 ${
                  tier.highlight
                    ? 'border-primary shadow-[0_0_40px_hsl(var(--primary)/0.2)] scale-105'
                    : 'border-border/50 hover:border-primary/30'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1 gap-1">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-black text-foreground">{tier.price}</span>
                    <span className="ml-2 text-muted-foreground text-lg">{tier.period}</span>
                  </div>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-success" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full mt-6 ${
                      tier.highlight
                        ? 'bg-primary hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                    size="lg"
                  >
                    <Link to={getCtaUrl(tier.name)}>{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Checkout is securely handled by Stripe. Stripe shows a local BDT equivalent when available.
        </p>
      </div>
    </section>
  );
}
