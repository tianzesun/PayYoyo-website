'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  shortDescription: string;
  fullDescription: string;
  requirements: string[];
}

// Job listings data - moved outside component to avoid re-creation on every render
const jobs: Job[] = [
    {
      id: 'ai-product-manager',
      title: 'AI Product Manager',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Product',
      shortDescription: 'Lead product strategy for AI-powered autonomous payment features...',
      fullDescription: `PayYoyo is revolutionizing autonomous payments and eliminating $364B in global gift card waste annually. We're building the world's first truly autonomous payment system that uses cutting-edge AI to make intelligent financial decisions for millions of users.

## What You'll Do

As an AI Product Manager at PayYoyo, you will:
• Lead product strategy for AI-powered autonomous payment features
• Define product requirements for machine learning models in our payment optimization engine
• Collaborate with data scientists and engineers to build AI-driven payment recommendations
• Drive product roadmap for machine learning enhancements and user experience improvements
• Analyze user behavior data to identify opportunities for AI-powered features
• Partner with engineering teams to define APIs for AI model integration
• Establish metrics and KPIs for AI feature performance and user engagement

## Key Responsibilities
• Lead product development for AI-powered payment optimization features
• Work with ML engineers to translate product vision into technical requirements
• Design user experiences for AI-driven payment recommendations
• Analyze A/B test results and iterate on AI feature effectiveness
• Coordinate cross-functional efforts for AI product releases
• Build product strategy for AI adoption and user trust in automated decisions
• Drive data-driven decisions for AI model improvements and feature prioritization

## What a Typical Day Looks Like
• Review user analytics to identify AI feature opportunities
• Collaborate with data scientists on model performance and user impact
• Iterate on product requirements based on ML model capabilities
• Design wireframes and user flows for new AI-powered payment features
• Analyze competitor offerings and industry trends in AI-powered payments
• Present product roadmap and feature plans to executive leadership
• Coordinate with engineering teams on sprint planning and feature delivery

## What We're Looking For

### Required Qualifications:
• 5+ years product management experience, preferably in fintech or AI startups
• Strong technical background with understanding of AI/ML concepts
• Experience working with data science or machine learning teams
• Experience with data-driven product development and analytics
• Bachelor's degree in Computer Science, Business, or related field

### Preferred Qualifications:
• Portfolio of AI-powered product features you've launched
• Experience with autonomous systems or recommendation engines
• Knowledge of financial services and payment industry
• MBA or Product Management certification
• Experience with A/B testing and product experimentation

## Why You'll Love Working Here
• Lead product innovation at the forefront of AI-driven payments
• Impact millions of users by optimizing their payment behavior
• Work with cutting-edge AI technology in a fast-growing fintech startup
• Competitive salary, equity, and benefits package
• Flexible remote-first culture with Toronto office hub
• Opportunity to shape the future of autonomous payment systems`,
      requirements: [
        '5+ years product management experience',
        'Strong technical background in AI/ML',
        'Experience with data-driven product development',
        'Understanding of fintech and payment systems',
        'MBA or equivalent product leadership experience'
      ]
    },
    {
      id: 'senior-ai-ml-engineer',
      title: 'Senior AI/ML Engineer',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Engineering',
      shortDescription: 'Lead the development of proprietary AI algorithms powering our autonomous payment system...',
      fullDescription: `PayYoyo is on a mission to revolutionize autonomous payments and eliminate $364B in global gift card waste annually. We're building the world's first truly autonomous payment system that uses cutting-edge AI to make intelligent financial decisions for millions of users.

## What You'll Do

As a Senior AI/ML Engineer at PayYoyo, you will:
• Architect and develop proprietary AI algorithms that power our autonomous payment optimization engine
• Build and optimize machine learning models trained on 50+ million real-world transactions
• Design recommendation systems that dynamically optimize spending patterns and merchant selection
• Collaborate with cross-functional teams including Product, Data Science, and Engineering
• Implement MLOps practices for scalable model deployment and monitoring
• Research and prototype cutting-edge AI techniques for payment prediction and fraud prevention
• Take ownership of AI model performance, ensuring sub-200ms prediction times at enterprise scale

## Key Responsibilities
• Lead AI/ML architecture decisions and technical strategy
• Develop and maintain large-scale ML pipelines processing billions of transactions
• Optimize model performance across CPU/GPU/TPU environments
• Mentor junior ML engineers and establish AI development best practices
• Drive AI innovation initiatives and conduct research on emerging techniques
• Ensure AI system reliability, scalability, and compliance with financial regulations

## What a Typical Day Looks Like
• Architect solutions for complex payment optimization problems using deep learning
• Implement and deploy machine learning models to production environments
• Collaborate with data scientists on model validation and performance metrics
• Debug and optimize AI systems processing real-time payment transactions
• Participate in cross-team standups and agile development ceremonies
• Review code and provide technical leadership to the engineering team

## What We're Looking For

### Required Qualifications:
• 8+ years of software engineering experience with focus on AI/ML
• PhD or Master's in Computer Science, Mathematics, or related quantitative field
• Expertise in Python, TensorFlow, PyTorch, and deep learning frameworks
• Strong background in statistics, probability, and machine learning algorithms
• 5+ years experience with recommendation systems and predictive analytics
• Proven track record of deploying ML models to production at scale
• Experience with large-scale data processing (Spark, Hadoop, BigQuery)
• Knowledge of MLOps, model monitoring, and A/B testing
• Understanding of payment systems, fintech, or financial data

### Preferred Qualifications:
• Experience with reinforcement learning and autonomous systems
• Background in time-series forecasting and anomaly detection
• Knowledge of PCI DSS compliance and financial system security
• Experience with geospatial data and location-based algorithms
• Publications in top-tier AI/ML conferences

## Why You'll Love Working Here
• Work on AI that impacts millions of users and saves them $720 annually
• Be part of a pioneering fintech company revolutionizing autonomous payments
• Collaborate with talented engineers, data scientists, and product managers
• Competitive salary, equity, and comprehensive benefits
• Flexible remote-first culture with Toronto office hub
• Work at the intersection of AI and financial services innovation`,
      requirements: [
        '8+ years software engineering experience with AI/ML focus',
        'PhD/MS in Computer Science, Mathematics, or related field',
        'Expertise in Python, TensorFlow, PyTorch, deep learning',
        'Strong background in statistics and machine learning algorithms',
        '5+ years experience with recommendation systems',
        'Track record of deploying ML models to production at scale',
        'Experience with large-scale data processing platforms',
        'Knowledge of MLOps and model monitoring',
        'Understanding of payment systems and fintech data'
      ]
    },
    {
      id: 'ai-research-scientist',
      title: 'AI Research Scientist',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Engineering',
      shortDescription: 'Conduct cutting-edge AI research to advance autonomous payment optimization...',
      fullDescription: `PayYoyo is pioneering the world's first truly autonomous payment system, leveraging advanced AI to eliminate $364B in global gift card waste. We're seeking a groundbreaking AI Research Scientist to push the boundaries of what's possible in payment intelligence and behavioral economics.

## What You'll Do

As an AI Research Scientist at PayYoyo, you will:
• Conduct fundamental research in reinforcement learning and behavioral economics for payment optimization
• Develop novel algorithms for transaction pattern recognition and anomalous behavior detection
• Design predictive models that anticipate user payment behavior and optimize cash flow predictions
• Collaborate with engineering teams to prototype and validate breakthrough AI approaches
• Publish research findings in top-tier AI/ML conferences and journals
• Establish PayYoyo as a thought leader in AI-driven financial services innovation

## Key Responsibilities
• Lead research initiatives exploring advanced neural architectures for financial prediction
• Develop mathematical models for optimizing payment scheduling and cash management
• Create simulation environments for testing AI-driven payment strategies at scale
• Mentor junior researchers and establish AI research best practices
• Collaborate with cross-functional teams on AI product integration
• Stay at the forefront of AI research and adapt emerging techniques to our domain

## What a Typical Day Looks Like
• Start with literature review of latest advances in reinforcement learning for financial applications
• Implement and test novel algorithms for payment behavior modeling using our transaction dataset
• Collaborate with data scientists on model validation and performance analysis
• Present research findings to engineering and product teams for potential integration
• Prototype new approaches in our dedicated research environment
• Document research methodologies and contribute to knowledge base

## What We're Looking For

### Required Qualifications:
• PhD in AI/ML, Computer Science, Mathematics, or equivalent research experience
• Strong publication record in top-tier conferences (ICML, NeurIPS, ICASSP, etc.)
• Expertise in deep learning, reinforcement learning, and natural language processing
• Proven experience with large-scale data processing and distributed computing
• Advanced mathematical modeling skills for time-series and behavioral analysis
• 5+ years research experience in AI/ML, preferably in fintech or financial domains
• Proficiency in Python, TensorFlow/PyTorch, and statistical analysis tools

### Preferred Qualifications:
• Background in behavioral economics or consumer finance research
• Experience with financial time-series forecasting and anomaly detection
• Knowledge of reinforcement learning applications in real-world systems
• Familiarity with PCI DSS compliance and financial data security
• Experience with patent applications or IP development in AI

## Why You'll Love Working Here
• Work on AI research that impacts millions of users and saves $364B annually
• Be part of a pioneering fintech startup at the forefront of AI innovation
• Access to unique transaction datasets for groundbreaking research
• Competitive salary, equity, and research budget for conferences/publications
• Flexible remote-first culture with Toronto AI research hub
• Opportunity to shape the future of AI in financial services`,
      requirements: [
        'PhD in AI/ML, Computer Science, Mathematics, or equivalent research experience',
        'Strong publication record in top-tier conferences (ICML, NeurIPS, ICASSP, etc.)',
        'Expertise in deep learning, reinforcement learning, natural language processing',
        'Proven experience with large-scale data processing and distributed computing',
        'Advanced mathematical modeling skills for time-series and behavioral analysis',
        '5+ years research experience in AI/ML, preferably in fintech or financial domains',
        'Proficiency in Python, TensorFlow/PyTorch, and statistical analysis tools'
      ]
    },
    {
      id: 'marketing-manager',
      title: 'Marketing Manager',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Marketing',
      shortDescription: 'Drive marketing strategies to accelerate PayYoyo&#39;s growth in the autonomous payment space...',
      fullDescription: 'Drive comprehensive marketing strategies to accelerate PayYoyo&#39;s growth in the autonomous payment space. Develop brand awareness campaigns, content marketing, and go-to-market strategies for our zero-waste payment platform. Build marketing funnels that convert awareness into platform adoption.',
      requirements: [
        '5+ years marketing experience in fintech/B2B SaaS',
        'Digital marketing and growth marketing expertise',
        'Content creation and brand strategy experience',
        'Marketing automation and analytics skills',
        'Experience with fintech or financial services marketing'
      ]
    },
    {
      id: 'sales-director',
      title: 'Sales Director',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Sales',
      shortDescription: 'Lead sales team to capture the $364B global gift card market through strategic partnerships...',
      fullDescription: 'Lead high-performing sales team to capture the $364B global gift card market through strategic partnerships. Build enterprise sales pipeline, negotiate complex deals with financial institutions and merchants, and drive revenue growth for our autonomous payment platform.',
      requirements: [
        '7+ years enterprise sales experience',
        'Track record of closing large fintech/B2B deals',
        'Strong relationship building and negotiation skills',
        'Experience selling to financial institutions',
        'MBA or equivalent business leadership experience'
      ]
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Engineering',
      shortDescription: 'Build beautiful, responsive interfaces for our autonomous payment platform...',
      fullDescription: 'Build beautiful, responsive interfaces for our autonomous payment platform. Work with React, TypeScript, and cutting-edge fintech user experiences. Create intuitive dashboards, payment flows, and mobile-first designs that serve millions of users in our zero-waste payment ecosystem.',
      requirements: [
        '5+ years React/Next.js experience',
        'Expert in TypeScript and modern CSS',
        'Experience with fintech or payment platforms',
        'Strong design system and UX skills',
        'Passion for user-centered design'
      ]
    },
    {
      id: 'backend-engineer',
      title: 'Backend Engineer',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Engineering',
      shortDescription: 'Build scalable backend systems for high-performance payment processing...',
      fullDescription: 'Build scalable backend systems for high-performance payment processing. Design APIs, databases, and microservices that handle billions in transactions annually. Work with modern cloud technologies to ensure 99.99% uptime for our autonomous payment platform serving millions of users.',
      requirements: [
        '6+ years backend development experience',
        'Expert in Node.js, Python, or Go',
        'Experience with microservices architecture',
        'Strong database design skills (PostgreSQL, Redis)',
        'Knowledge of payment systems and PCI compliance'
      ]
    },
    {
      id: 'mobile-developer',
      title: 'Mobile Developer (React Native)',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Engineering',
      shortDescription: 'Develop cross-platform mobile apps for our autonomous payment system...',
      fullDescription: 'Develop cross-platform mobile apps for our autonomous payment system using React Native. Create seamless mobile experiences that integrate with our AI-powered payment optimization engine. Focus on performance, security, and user experience for iOS and Android platforms serving millions of users.',
      requirements: [
        '4+ years React Native or Flutter experience',
        'Strong JavaScript/TypeScript skills',
        'Experience with mobile app deployment',
        'Understanding of mobile security best practices',
        'Portfolio of published mobile applications'
      ]
    },

    {
      id: 'investment-relations-manager',
      title: 'Investment Relations Manager',
      location: 'Toronto',
      type: 'Full-time',
      department: 'Investor Relations',
      shortDescription: 'Drive our Series A investment process and manage investor relationships...',
      fullDescription: 'Drive our Series A investment process and manage investor relationships. Prepare pitch materials, financial models, and investor updates. Connect with institutional investors and venture capital firms throughout Canada and internationally. Be the voice of PayYoyo in the investment community.',
      requirements: [
        '3+ years investment banking or VC experience',
        'Strong financial modeling and analysis skills',
        'Excellent communication and presentation abilities',
        'Experience with early-stage startups',
        'Network in fintech investment community'
      ]
    },
    {
      id: 'business-development-manager',
      title: 'Business Development Manager',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Business Development',
      shortDescription: 'Drive partnerships and business growth in the payments ecosystem...',
      fullDescription: 'Drive strategic partnerships and business growth in the payments ecosystem. Identify new market opportunities, negotiate partnership deals with merchants and financial institutions, and expand our autonomous payment platform. Build relationships that accelerate PayYoyo\'s path to capturing the $364B global gift card market.',
      requirements: [
        '5+ years business development experience',
        'Experience in fintech or payments industry',
        'Strong relationship building and negotiation skills',
        'Track record of driving partnership deals',
        'Understanding of financial services and merchant ecosystems'
      ]
    }
  ];

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      const foundJob = jobs.find(j => j.id === params.id);
      setJob(foundJob || null);
      setLoading(false);
    }
  }, [params?.id]);

  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    portfolioUrl: '',
    coverLetter: '',
    resume: null as File | null,
    additionalDocs: null as File | null,
  });

  const handleApplyNow = () => {
    setShowApplicationForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setApplicationData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmitApplication = () => {
    // In a real application, this would submit to an API
    // For now, we'll just show a success message
    alert(`Thank you for applying for ${job?.title}!\n\nOur HR team will review your application within 5 business days and get back to you.\n\nApplication submitted successfully!`);
    setShowApplicationForm(false);
    setApplicationData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      linkedinUrl: '',
      portfolioUrl: '',
      coverLetter: '',
      resume: null,
      additionalDocs: null,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E40AF]"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Position Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The job position you&apos;re looking for doesn&apos;t exist or has been closed.</p>
            <Button
              onClick={() => router.push('/careers')}
              className="bg-[#1E40AF] hover:bg-[#1D4ED8] text-white"
            >
              View All Positions
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Application Form Modal */}
      {showApplicationForm && job && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Apply for {job.title}</h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleSubmitApplication(); }} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={applicationData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF]"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={applicationData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF]"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={applicationData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF]"
                      placeholder="(416) 123-4567"
                    />
                  </div>
                </div>

                {/* Professional Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedinUrl"
                      value={applicationData.linkedinUrl}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF]"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio/GitHub</label>
                    <input
                      type="url"
                      name="portfolioUrl"
                      value={applicationData.portfolioUrl}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF]"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF]"
                    placeholder="Tell us why you're interested in this position and why you're a great fit..."
                  />
                </div>

                {/* File Uploads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF]"
                    />
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Documents</label>
                    <input
                      type="file"
                      name="additionalDocs"
                      accept=".pdf,.doc,.docx,.zip"
                      onChange={handleFileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF]"
                    />
                    <p className="text-xs text-gray-500 mt-1">Portfolio, certifications, etc.</p>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
                  <Button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    variant="outline"
                    className="px-6 py-2"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#1E40AF] hover:bg-[#1D4ED8] text-white px-8 py-2"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-[#1E40AF]/10 text-[#1E40AF] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0l-4 6m-6 0l-4-6m6 0v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6" />
              </svg>
              {job.department}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {job.title}
            </h1>
            <div className="flex justify-center gap-4 mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">{job.location}</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">{job.type}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Job Description</h2>


{/* Job descriptions will be replaced with expanded versions */}
              <div className="text-lg text-gray-700">
                Job description coming soon - being expanded to match professional standard.
              </div>
              <div className="text-lg text-gray-700">
                Comprehensive job description coming soon - expanding all positions to match the professional Senior AI/ML Engineer format.
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Key Qualifications:</h4>
                <ul className="space-y-3">
                  {job.requirements.map((req, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="w-2 h-2 bg-[#1E40AF] rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                      <span className="text-gray-700">{req}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application CTA */}
            <div className="text-center bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-2xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Apply for this Position</h3>
              <p className="text-lg opacity-90 mb-8">
                Ready to join our team and shape the future of autonomous payments?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 border border-[#1E40AF] hover:border-[#1D4ED8]"
                  onClick={handleApplyNow}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => router.push('/careers')}
                  className="border-white text-white hover:bg-white hover:text-[#1E40AF] px-8 py-4"
                >
                  Back to Careers
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
