import Reveal from '@/components/Reveal';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import SeeItWork from '@/components/SeeItWork';
import ReliabilityCliff from '@/components/ReliabilityCliff';
import Pillars from '@/components/Pillars';
import Embeddings from '@/components/Embeddings';
import Automation from '@/components/Automation';
import MarginalAgent from '@/components/MarginalAgent';
import ConvergencePrinciple from '@/components/ConvergencePrinciple';
import CalibrationGate from '@/components/CalibrationGate';
import Capabilities from '@/components/Capabilities';
import Attention from '@/components/Attention';
import SelectedWork from '@/components/SelectedWork';
import GlobalReach from '@/components/GlobalReach';
import Engagements from '@/components/Engagements';
import Writing from '@/components/Writing';
import ContactCta from '@/components/ContactCta';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Reveal />
      <Nav />
      <Hero />
      <SeeItWork />
      <ReliabilityCliff />
      <Pillars />
      <Embeddings />
      <Automation />
      <MarginalAgent />
      <ConvergencePrinciple />
      <CalibrationGate />
      <Capabilities />
      <Attention />
      <SelectedWork />
      <GlobalReach />
      <Engagements />
      <Writing />
      <ContactCta />
      <Footer />
    </div>
  );
}
