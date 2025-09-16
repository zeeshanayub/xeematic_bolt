import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
  Clock,
  TrendingUp,
  Users,
  MessageSquare,
  Workflow,
  LineChart,
  Mic
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How quickly can we see results from AI automation?",
    answer: "Most clients start seeing measurable improvements within 2-4 weeks of implementation. Simple automations like chatbots can be deployed within days, while complex workflow automations typically take 2-6 weeks depending on scope."
  },
  {
    question: "Do we need technical expertise to use your solutions?",
    answer: "Not at all! We handle all the technical implementation and provide comprehensive training. Our solutions are designed to be user-friendly, and we offer ongoing support to ensure your team can maximize the benefits."
  },
  {
    question: "What types of businesses benefit most from AI automation?",
    answer: "Any business with repetitive tasks, customer service needs, or data processing can benefit. We've successfully helped companies in e-commerce, healthcare, finance, manufacturing, and professional services achieve significant efficiency gains."
  },
  {
    question: "How much does AI automation typically cost?",
    answer: "Investment varies based on scope and complexity. Our solutions typically pay for themselves within 3-6 months through time savings and increased productivity. We offer flexible packages starting from $2,500/month for small businesses to enterprise solutions."
  },
  {
    question: "What ongoing support do you provide?",
    answer: "We provide 24/7 monitoring, regular optimization updates, training sessions, and dedicated account management. Our goal is to ensure your automation continues to deliver value and evolves with your business needs."
  }
];

function App() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll contact you within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-10 w-10 mr-2 text-blue-500">
                  <path d="M12 8V4H8"></path>
                  <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
                Xeematic
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-blue-500 transition-colors">Services</a>
              <a href="#process" className="text-gray-300 hover:text-blue-500 transition-colors">Process</a>
              <a href="#testimonials" className="text-gray-300 hover:text-blue-500 transition-colors">Testimonials</a>
              <a href="#faq" className="text-gray-300 hover:text-blue-500 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors">Contact</a>
            </div>
            <a href="#services" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {' '}AI Automation
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Eliminate repetitive tasks, boost productivity by 300%, and scale your operations with cutting-edge AI automation solutions tailored for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#transform" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Automate Your Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">300%</div>
                  <div className="text-sm text-gray-400">Productivity Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">50+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">24/7</div>
                  <div className="text-sm text-gray-400">Automation Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-700/50 transition-colors">
                    <Zap className="h-8 w-8 text-yellow-500 mb-3" />
                    <h3 className="font-semibold mb-2">Lightning Fast</h3>
                    <p className="text-sm text-gray-400">Deploy automations in days, not months</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-700/50 transition-colors">
                    <TrendingUp className="h-8 w-8 text-green-500 mb-3" />
                    <h3 className="font-semibold mb-2">Proven ROI</h3>
                    <p className="text-sm text-gray-400">Average 400% return on investment</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-700/50 transition-colors">
                    <Users className="h-8 w-8 text-blue-500 mb-3" />
                    <h3 className="font-semibold mb-2">Expert Team</h3>
                    <p className="text-sm text-gray-400">Certified AI specialists</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-700/50 transition-colors">
                    <Clock className="h-8 w-8 text-purple-500 mb-3" />
                    <h3 className="font-semibold mb-2">Save Time</h3>
                    <p className="text-sm text-gray-400">Free up 20+ hours per week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">The Modern Business Challenge</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Are you drowning in repetitive tasks, losing customers due to slow response times, or struggling to scale your operations efficiently?
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-red-400 mb-4">Common Pain Points:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Employees spending 60% of time on repetitive tasks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Delayed customer responses leading to lost sales</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Manual data entry errors costing thousands</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Inability to scale without hiring more staff</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Our AI Solution:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <span className="text-gray-300">Automate repetitive processes with 99.9% accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <span className="text-gray-300">24/7 instant customer support with AI chatbots</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <span className="text-gray-300">Intelligent data processing and real-time analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <span className="text-gray-300">Scale operations without proportional cost increases</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">AI Automation Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI automation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-12 w-12 mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Chatbots</h3>
              <p className="text-gray-300 mb-4">We create conversational AI agents for customer support, lead generation, and user engagement.</p>
              <div className="text-sm text-blue-400 font-medium">24/7 Support • Lead Generation • Smart Responses</div>
            </div>

            <div className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-12 w-12 mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Workflow className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Workflow Automation</h3>
              <p className="text-gray-300 mb-4">We build custom AI solutions to automate repetitive tasks, improving efficiency and accuracy.</p>
              <div className="text-sm text-purple-400 font-medium">Process Automation • Task Management • Custom Workflows</div>
            </div>

            <div className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-12 w-12 mb-4 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <LineChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Analytics & Insights</h3>
              <p className="text-gray-300 mb-4">We use AI to analyze your business data and provide actionable insights to inform your strategy.</p>
              <div className="text-sm text-green-400 font-medium">Predictive Analytics • Business Intelligence • Data Visualization</div>
            </div>

            <div className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-12 w-12 mb-4 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Voice Automation</h3>
              <p className="text-gray-300 mb-4">We develop AI-powered voice bots for customer support, call routing, and more, providing instant, 24/7 assistance.</p>
              <div className="text-sm text-yellow-400 font-medium">Voice Recognition • Call Routing • Automated Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Simple 3-Step Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From discovery to deployment, we make AI automation seamless and stress-free for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-semibold">Discovery Call</h3>
              <p className="text-gray-300">We analyze your current processes, identify automation opportunities, and understand your business goals in a comprehensive consultation.</p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-sm text-blue-400 font-medium mb-2">What we cover:</div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Process audit and pain point identification</li>
                  <li>• ROI potential assessment</li>
                  <li>• Timeline and budget discussion</li>
                </ul>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-semibold">Solution Blueprint</h3>
              <p className="text-gray-300">Our experts design a custom automation strategy tailored to your specific needs, complete with detailed implementation roadmap.</p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-sm text-purple-400 font-medium mb-2">Deliverables:</div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Custom automation architecture</li>
                  <li>• Implementation timeline</li>
                  <li>• Success metrics and KPIs</li>
                </ul>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="bg-gradient-to-br from-green-600 to-green-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-semibold">Implementation & Support</h3>
              <p className="text-gray-300">We deploy your AI automation solutions with minimal disruption to your operations and provide ongoing optimization and support.</p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-sm text-green-400 font-medium mb-2">Ongoing support:</div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 24/7 monitoring and maintenance</li>
                  <li>• Regular performance optimization</li>
                  <li>• Team training and documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Our Clients Are Saying</h2>
            <p className="text-xl text-gray-300">Real results from real businesses that transformed with AI automation</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-300 mb-6">
                "Xeematic transformed our customer service completely. Our response time went from hours to seconds, and customer satisfaction increased by 250%. The ROI was evident within the first month."
              </blockquote>
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Mitchell</div>
                  <div className="text-sm text-gray-400">CEO, TechFlow Solutions</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-300 mb-6">
                "The workflow automation saved us 35 hours per week on manual data processing. Our team can now focus on strategic initiatives instead of repetitive tasks. Absolutely game-changing!"
              </blockquote>
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-green-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">MR</span>
                </div>
                <div>
                  <div className="font-semibold">Marcus Rodriguez</div>
                  <div className="text-sm text-gray-400">Operations Director, DataPro Inc</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-green-500/50 transition-colors">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-300 mb-6">
                "Their personalized marketing automation increased our conversion rates by 180%. The AI perfectly targets our ideal customers at the right moments. Revenue has never been better."
              </blockquote>
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">LC</span>
                </div>
                <div>
                  <div className="font-semibold">Lisa Chen</div>
                  <div className="text-sm text-gray-400">Marketing Head, E-Commerce Plus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">About Xeematic</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Founded by a team of AI specialists and business strategists, Xeematic is dedicated to democratizing AI automation for businesses of all sizes. With over a decade of combined experience in machine learning, process optimization, and business transformation, we've helped hundreds of companies achieve unprecedented efficiency gains.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              Our mission is simple: to eliminate the mundane so businesses can focus on what truly matters - innovation, growth, and creating exceptional value for their customers. We believe that AI automation shouldn't be a luxury for enterprise giants, but an accessible tool for any business ready to embrace the future.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
                <div className="text-gray-400">Processes Automated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">50M+</div>
                <div className="text-gray-400">Hours Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">15+</div>
                <div className="text-gray-400">Industry Verticals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about AI automation for your business</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronDown className="h-5 w-5 text-blue-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="transform" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't let your competitors get ahead while you're stuck with manual processes. Join the AI automation revolution today and unlock your business's true potential. Schedule a free consultation and discover how we can save you thousands of hours and dramatically increase your productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/xeematic/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <button className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Download Case Study
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">✅ No commitment required • ✅ 30-minute strategy session • ✅ Custom automation roadmap</p>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Ready to automate your business processes? Contact us for a free consultation and custom automation strategy.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-300">hello@xeematic.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                    placeholder="Tell us about your automation needs..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-8 w-8 mr-2 text-blue-500">
                    <path d="M12 8V4H8"></path>
                    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                    <path d="M2 14h2"></path>
                    <path d="M20 14h2"></path>
                    <path d="M15 13v2"></path>
                    <path d="M9 13v2"></path>
                  </svg>
                  Xeematic
                </span>
              </div>
              
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="text-center text-gray-400 text-sm mt-6">
              © 2024 Xeematic. All rights reserved. | Transforming businesses through AI automation.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;