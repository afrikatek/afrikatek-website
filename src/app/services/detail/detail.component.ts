import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  fullDescription: string[];
  image: string;
  features: string[];
  benefits: string[];
  process: string[];
  technologies?: string[];
  testimonial?: Testimonial;
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  service: Service | undefined;

  // Sample service data
  private services: Service[] = [
    {
      id: 'website-development',
      name: 'Website Development',
      description: 'We create responsive, user-friendly websites that engage visitors and drive conversions.',
      fullDescription: [
        'Our website development service focuses on creating modern, responsive websites that not only look great but also perform exceptionally well. We combine aesthetic design with technical expertise to deliver websites that represent your brand effectively and provide an excellent user experience.',
        'Each website we build is optimized for search engines, ensuring that your business gains visibility online. We also implement analytics tools to help you track performance and make data-driven decisions about your online presence.',
        'Whether you need a simple informational website or a complex e-commerce platform, our team has the skills and experience to deliver a solution that meets your specific requirements and business objectives.'
      ],
      image: './img/services/web-development.jpg',
      features: [
        'Custom website design and development',
        'E-commerce solutions',
        'Content management systems',
        'Website maintenance and support',
        'Responsive design for all devices',
        'SEO optimization',
        'Performance optimization',
        'Security implementation'
      ],
      benefits: [
        'Increased online visibility and brand awareness',
        'Improved user engagement and conversion rates',
        'Enhanced credibility and professional image',
        'Streamlined content management',
        'Competitive advantage in your industry',
        'Scalable solution that grows with your business'
      ],
      process: [
        'Discovery and requirements gathering',
        'Planning and information architecture',
        'Design mockups and prototyping',
        'Development and coding',
        'Content integration',
        'Testing and quality assurance',
        'Deployment and launch',
        'Ongoing support and maintenance'
      ],
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'Angular',
        'Node.js',
        'WordPress',
        'Shopify'
      ],
      testimonial: {
        quote: "Afrikatek transformed our online presence with a stunning website that perfectly captures our brand identity. The site is not only visually appealing but also user-friendly and performs exceptionally well on all devices.",
        author: "David Mwangi",
        position: "Marketing Director at East African Breweries"
      }
    },
    {
      id: 'web-application-development',
      name: 'Web Application Development',
      description: 'We develop powerful, scalable web applications that streamline business processes and enhance productivity.',
      fullDescription: [
        'Our web application development service is designed to help businesses automate processes, improve efficiency, and provide better services to their customers. We build custom web applications that address specific business challenges and create new opportunities for growth and innovation.',
        'Our team of experienced developers uses modern frameworks and best practices to create robust, scalable, and secure applications. We focus on creating intuitive user interfaces that make complex tasks simple and enjoyable for users.',
        'From concept to deployment, we work closely with you to ensure that the final product aligns perfectly with your business goals and exceeds your expectations in terms of functionality and performance.'
      ],
      image: './img/services/web-application.jpg',
      features: [
        'Custom web application development',
        'Progressive web apps (PWAs)',
        'API development and integration',
        'Database design and optimization',
        'Real-time data processing',
        'User authentication and authorization',
        'Cloud deployment and scaling',
        'Automated testing and CI/CD'
      ],
      benefits: [
        'Streamlined business processes and improved efficiency',
        'Enhanced data management and analysis capabilities',
        'Improved customer experience and satisfaction',
        'Reduced operational costs',
        'Increased competitive advantage',
        'Scalable solutions that adapt to changing business needs'
      ],
      process: [
        'Business analysis and requirements gathering',
        'System architecture design',
        'UI/UX design and prototyping',
        'Iterative development and testing',
        'Quality assurance and performance optimization',
        'Deployment and integration',
        'User training and documentation',
        'Ongoing support and enhancements'
      ],
      technologies: [
        'JavaScript/TypeScript',
        'React',
        'Angular',
        'Node.js',
        'Express',
        'MongoDB',
        'PostgreSQL',
        'AWS/Azure/GCP'
      ],
      testimonial: {
        quote: "The web application developed by Afrikatek has revolutionized how we manage our operations. It's intuitive, powerful, and has significantly improved our team's productivity. The custom features perfectly address our unique business needs.",
        author: "Sarah Ochieng",
        position: "Operations Manager at Savannah Logistics"
      }
    },
    {
      id: 'custom-software',
      name: 'Custom Software Development',
      description: 'We build tailored software solutions that address your unique business challenges and scale with your growth.',
      fullDescription: [
        'Our custom software development service provides businesses with bespoke solutions designed specifically for their unique requirements. We develop software that automates complex processes, integrates disparate systems, and provides valuable insights through data analysis.',
        'Unlike off-the-shelf products, our custom software is built to align perfectly with your existing workflows and can be adapted as your business evolves. This ensures maximum efficiency and return on investment over the long term.',
        'Our development process emphasizes collaboration, transparency, and quality, resulting in robust, scalable, and maintainable software solutions that provide lasting value to your organization.'
      ],
      image: './img/services/custom-software.jpg',
      features: [
        'Bespoke software development',
        'Legacy system modernization',
        'System integration',
        'Desktop application development',
        'Mobile application development',
        'Data migration and transformation',
        'Business intelligence and reporting',
        'Automated testing and quality assurance'
      ],
      benefits: [
        'Solutions tailored to your specific business needs',
        'Improved operational efficiency and productivity',
        'Competitive advantage through unique capabilities',
        'Seamless integration with existing systems',
        'Scalability to accommodate business growth',
        'Full ownership and control of your software'
      ],
      process: [
        'Comprehensive business analysis',
        'Solution architecture and planning',
        'Iterative development with regular feedback',
        'Rigorous testing and quality assurance',
        'Deployment and integration',
        'User training and knowledge transfer',
        'Post-launch support',
        'Continuous improvement and updates'
      ],
      technologies: [
        'Java',
        'C#/.NET',
        'Python',
        'JavaScript/TypeScript',
        'SQL/NoSQL databases',
        'Docker/Kubernetes',
        'CI/CD pipelines',
        'Cloud services'
      ],
      testimonial: {
        quote: "The custom software developed by Afrikatek has been a game-changer for our business. It automated our most complex processes and integrated seamlessly with our existing systems. The ROI has been exceptional.",
        author: "James Kimani",
        position: "CTO at Pan-African Financial Services"
      }
    },
    {
      id: 'email-solutions',
      name: 'Email & Office 365 Solutions',
      description: 'We provide comprehensive email and Office 365 solutions to enhance communication and collaboration.',
      fullDescription: [
        'Our Email and Office 365 Solutions service helps businesses implement and optimize Microsoft\'s productivity suite to improve communication, collaboration, and efficiency. We provide end-to-end services from planning and migration to ongoing support and optimization.',
        'We understand that effective communication is essential for business success, which is why we ensure that your email and collaboration tools are reliable, secure, and aligned with your specific needs. Our solutions include email hosting, data migration, security configuration, and user training.',
        'Whether you\'re moving from an on-premises solution to the cloud or optimizing your existing Office 365 environment, our team has the expertise to ensure a smooth transition and maximum value from your investment.'
      ],
      image: './img/services/email-solutions.jpg',
      features: [
        'Office 365 implementation and migration',
        'Email hosting and management',
        'SharePoint configuration and customization',
        'Teams setup and optimization',
        'Security and compliance configuration',
        'Data backup and recovery',
        'User training and adoption support',
        'Ongoing maintenance and support'
      ],
      benefits: [
        'Enhanced communication and collaboration',
        'Improved productivity and efficiency',
        'Secure access to emails and documents from anywhere',
        'Reduced IT infrastructure costs',
        'Simplified license management',
        'Regular updates with the latest features'
      ],
      process: [
        'Assessment of current environment and needs',
        'Planning and solution design',
        'Tenant setup and configuration',
        'Data migration and validation',
        'Security and compliance implementation',
        'User onboarding and training',
        'Go-live support',
        'Ongoing management and optimization'
      ],
      technologies: [
        'Microsoft 365',
        'Exchange Online',
        'SharePoint Online',
        'Microsoft Teams',
        'OneDrive for Business',
        'Azure Active Directory',
        'Microsoft Intune',
        'Power Platform'
      ],
      testimonial: {
        quote: "Afrikatek's Office 365 implementation transformed how our team works. The migration was smooth, and their training ensured our staff could immediately take advantage of all the new features. Our productivity has increased significantly.",
        author: "Grace Muthoni",
        position: "HR Director at East African Manufacturing"
      }
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      description: 'We help businesses increase their online visibility and attract more customers through strategic campaigns.',
      fullDescription: [
        'Our Digital Marketing service is designed to help businesses establish a strong online presence, reach their target audience, and achieve their marketing objectives. We develop comprehensive strategies that combine various digital channels to maximize reach and impact.',
        'Our approach is data-driven, focusing on measurable results and continuous optimization. We analyze performance metrics to refine campaigns and ensure the best possible return on investment for our clients.',
        'From search engine optimization to social media marketing, our team has the expertise to create and execute effective digital marketing campaigns that drive traffic, generate leads, and increase conversions.'
      ],
      image: './img/services/digital-marketing.jpg',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click (PPC) advertising',
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Conversion Rate Optimization',
        'Analytics and Reporting',
        'Marketing Automation'
      ],
      benefits: [
        'Increased online visibility and brand awareness',
        'Targeted reach to potential customers',
        'Higher website traffic and engagement',
        'Improved conversion rates and lead generation',
        'Better ROI compared to traditional marketing',
        'Data-driven insights for continuous improvement'
      ],
      process: [
        'Market research and competitor analysis',
        'Strategy development and goal setting',
        'Campaign planning and setup',
        'Content creation and optimization',
        'Campaign execution and management',
        'Performance monitoring and analysis',
        'Optimization and refinement',
        'Reporting and strategic recommendations'
      ],
      technologies: [
        'Google Analytics',
        'Google Ads',
        'Facebook Ads Manager',
        'SEMrush/Ahrefs',
        'Mailchimp/SendGrid',
        'HubSpot',
        'Hootsuite/Buffer',
        'WordPress'
      ],
      testimonial: {
        quote: "Afrikatek's digital marketing strategies have significantly increased our online visibility and lead generation. Their data-driven approach ensures we get the best return on our marketing investment. We've seen a 200% increase in qualified leads since working with them.",
        author: "Michael Otieno",
        position: "Marketing Manager at Nairobi Real Estate Group"
      }
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'We provide expert IT consulting services to help businesses make informed technology decisions.',
      fullDescription: [
        'Our IT Consulting service offers strategic guidance to help businesses leverage technology effectively to achieve their objectives. We work closely with clients to understand their challenges and goals, then develop tailored recommendations and implementation plans.',
        'Our consultants bring deep expertise across various technology domains, including infrastructure, security, cloud computing, and digital transformation. We provide objective advice that considers both technical requirements and business constraints.',
        'Whether you\'re planning a major technology initiative, addressing specific challenges, or seeking to optimize your existing IT environment, our consulting services provide the insights and expertise you need to make informed decisions and achieve successful outcomes.'
      ],
      image: './img/services/it-consulting.jpg',
      features: [
        'IT strategy development',
        'Technology assessment and roadmapping',
        'Digital transformation planning',
        'IT infrastructure optimization',
        'Cybersecurity assessment and planning',
        'Cloud migration strategy',
        'Vendor selection and management',
        'IT governance and compliance'
      ],
      benefits: [
        'Strategic alignment of IT with business objectives',
        'Reduced risk in technology decisions and investments',
        'Optimized IT spending and resource allocation',
        'Access to specialized expertise and industry best practices',
        'Improved operational efficiency and effectiveness',
        'Enhanced competitive advantage through technology'
      ],
      process: [
        'Initial consultation and needs assessment',
        'Current state analysis and documentation',
        'Future state definition and gap analysis',
        'Strategy and roadmap development',
        'Recommendations and implementation planning',
        'Stakeholder presentations and feedback',
        'Implementation support and guidance',
        'Review and continuous improvement'
      ],
      technologies: [
        'Enterprise Architecture frameworks',
        'ITIL/ITSM methodologies',
        'Cloud platforms (AWS, Azure, GCP)',
        'Security frameworks (NIST, ISO 27001)',
        'Business analysis tools',
        'Project management methodologies',
        'Risk assessment frameworks',
        'TCO/ROI analysis tools'
      ],
      testimonial: {
        quote: "Afrikatek's IT consulting services provided us with the clarity and direction we needed for our digital transformation initiative. Their recommendations were practical, aligned with our business goals, and have already delivered significant improvements in our operations.",
        author: "Robert Ndegwa",
        position: "CEO at East African Distributors Ltd"
      }
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the service ID from the route parameters
    this.route.paramMap.subscribe(params => {
      const serviceId = params.get('id');
      if (serviceId) {
        // Find the service with the matching ID
        this.service = this.services.find(s => s.id === serviceId);
      }
    });
  }
}
