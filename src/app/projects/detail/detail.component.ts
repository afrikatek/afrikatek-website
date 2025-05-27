import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string[];
  image: string;
  features: string[];
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  testimonial?: Testimonial;
  websiteUrl?: string;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  project: Project | undefined;

  // Sample project data
  private projects: Project[] = [
    {
      id: 'titanium-shield',
      name: 'Titanium Shield',
      description: 'A comprehensive security solution designed to protect businesses from cyber threats.',
      fullDescription: [
        'Titanium Shield is a state-of-the-art cybersecurity platform that provides real-time monitoring, threat detection, and automated response capabilities to safeguard your digital assets.',
        'Developed with enterprise-grade security in mind, this solution integrates advanced machine learning algorithms to identify potential threats before they can cause damage, while providing an intuitive dashboard for security teams to monitor and manage their security posture.',
        'The platform is designed to scale with your business, offering modular components that can be deployed based on your specific security needs and infrastructure requirements.'
      ],
      image: './img/projects/titanium-shield.jpg',
      features: [
        'Real-time threat monitoring and detection',
        'Automated incident response',
        'Advanced machine learning algorithms',
        'Comprehensive security dashboard',
        'Customizable security policies',
        'Detailed audit logs and reporting'
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'Kubernetes',
        'Docker',
        'React',
        'Node.js',
        'PostgreSQL',
        'Redis'
      ],
      challenges: [
        'Developing algorithms capable of detecting sophisticated and previously unknown threats',
        'Creating a system that minimizes false positives while ensuring no genuine threats are missed',
        'Building a solution that can scale to handle millions of security events per second',
        'Designing an intuitive interface that provides comprehensive information without overwhelming users'
      ],
      solutions: [
        'Implemented ensemble machine learning models that combine multiple detection techniques',
        'Created a multi-stage verification system to reduce false positives',
        'Designed a distributed architecture using Kubernetes for horizontal scaling',
        'Developed a customizable dashboard with role-based access control and configurable views'
      ],
      results: [
        '99.8% threat detection rate in independent testing',
        '75% reduction in false positives compared to industry average',
        'Successfully deployed to over 50 enterprise clients',
        'Prevented 15 major security breaches within the first year of deployment'
      ],
      testimonial: {
        quote: "Titanium Shield has transformed our security operations. The platform's ability to detect and respond to threats automatically has significantly reduced our incident response time and allowed our team to focus on strategic security initiatives.",
        author: "Sarah Johnson",
        position: "CISO at Global Financial Services Inc."
      },
      websiteUrl: 'https://titanium.shield.afrikatek.co.za/'
    },
    {
      id: 'ecommerce-platform',
      name: 'E-Commerce Platform',
      description: 'A fully-featured online shopping platform with secure payment processing, inventory management, and customer analytics.',
      fullDescription: [
        'Our E-Commerce Platform is a comprehensive solution designed to help businesses establish and grow their online presence. The platform combines a user-friendly storefront with powerful backend management tools to streamline operations and enhance the customer experience.',
        'Built with scalability in mind, the platform can handle everything from small boutique shops to large enterprises with thousands of products and high transaction volumes. The modular architecture allows businesses to start with essential features and add more advanced capabilities as they grow.',
        'The platform includes advanced analytics and reporting tools that provide valuable insights into customer behavior, sales trends, and inventory performance, enabling data-driven decision making.'
      ],
      image: './img/projects/ecommerce-system.jpg',
      features: [
        'Responsive, customizable storefront',
        'Secure payment processing with multiple gateway options',
        'Comprehensive inventory management',
        'Customer account management and loyalty programs',
        'Advanced search and filtering capabilities',
        'Marketing tools including promotions and discount management',
        'Detailed analytics and reporting'
      ],
      technologies: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Redis',
        'Stripe API',
        'PayPal API',
        'AWS S3',
        'Elasticsearch'
      ],
      challenges: [
        'Creating a platform that balances feature richness with ease of use',
        'Ensuring high performance and reliability during peak shopping periods',
        'Implementing robust security measures to protect customer and payment data',
        'Designing a system that can be easily customized for different business needs'
      ],
      solutions: [
        'Adopted a user-centered design approach with extensive usability testing',
        'Implemented caching strategies and auto-scaling infrastructure',
        'Developed a comprehensive security framework with regular penetration testing',
        'Created a modular architecture with a powerful theming and extension system'
      ],
      results: [
        'Average 35% increase in online sales for client businesses',
        '99.99% uptime during high-traffic shopping events',
        '40% reduction in cart abandonment rates',
        'Successfully processed over $10 million in transactions'
      ],
      testimonial: {
        quote: "The e-commerce platform developed by Afrikatek has been a game-changer for our business. The intuitive interface made it easy for our team to manage products and orders, while the customer-facing features have significantly improved our conversion rates.",
        author: "Michael Chen",
        position: "CEO of Urban Lifestyle Brands"
      }
    },
    {
      id: 'healthcare-management',
      name: 'Healthcare Management System',
      description: 'An integrated system for healthcare providers to manage patient records, appointments, billing, and medical inventory.',
      fullDescription: [
        'Our Healthcare Management System is a comprehensive solution designed to streamline operations for healthcare facilities of all sizes. The system integrates electronic health records (EHR), appointment scheduling, billing, and inventory management into a single, cohesive platform.',
        'With a focus on security and compliance, the system adheres to international healthcare standards and regulations, ensuring patient data is protected while remaining accessible to authorized personnel when needed.',
        'The platform features an intuitive interface designed specifically for healthcare professionals, minimizing training time and maximizing efficiency in fast-paced medical environments.'
      ],
      image: './img/projects/health-system.jpg',
      features: [
        'Electronic Health Records (EHR) management',
        'Appointment scheduling and reminders',
        'Billing and insurance claim processing',
        'Prescription management',
        'Medical inventory tracking',
        'Laboratory results integration',
        'Secure patient portal',
        'Reporting and analytics'
      ],
      technologies: [
        'Angular',
        'Java Spring Boot',
        'PostgreSQL',
        'FHIR API',
        'Docker',
        'Kubernetes',
        'RabbitMQ',
        'Elasticsearch'
      ],
      challenges: [
        'Ensuring compliance with healthcare regulations and standards (HIPAA, GDPR, etc.)',
        'Integrating with existing healthcare systems and equipment',
        'Balancing comprehensive functionality with ease of use for medical staff',
        'Maintaining high performance and reliability for critical healthcare operations'
      ],
      solutions: [
        'Implemented a security-first architecture with end-to-end encryption',
        'Developed standardized APIs for integration with third-party systems',
        'Conducted extensive user research with healthcare professionals',
        'Utilized microservices architecture for scalability and resilience'
      ],
      results: [
        '40% reduction in administrative time for medical staff',
        '60% decrease in billing errors and claim rejections',
        '30% improvement in appointment adherence',
        'Successfully deployed in 15 healthcare facilities serving over 100,000 patients'
      ],
      testimonial: {
        quote: "This system has revolutionized how we manage patient care. The integration between different departments has eliminated data silos, reduced errors, and allowed our staff to focus more on patient care rather than administrative tasks.",
        author: "Dr. Elizabeth Mwangi",
        position: "Medical Director at Nairobi Community Health Center"
      }
    },
    {
      id: 'educational-platform',
      name: 'Educational Platform',
      description: 'A comprehensive learning management system with course creation tools, student progress tracking, and interactive assessments.',
      fullDescription: [
        'Our Educational Platform is a versatile learning management system designed to support educational institutions, corporate training programs, and independent educators. The platform provides powerful tools for creating engaging courses, managing student enrollment, and tracking learning progress.',
        'With support for various content types including video, interactive quizzes, documents, and live sessions, the platform enables educators to create rich, multimedia learning experiences that cater to different learning styles and preferences.',
        'The system includes advanced analytics that provide insights into student engagement and performance, helping educators identify areas for improvement and tailor their teaching approaches to maximize learning outcomes.'
      ],
      image: './img/projects/education-system.jpg',
      features: [
        'Intuitive course creation and management',
        'Support for various content types (video, documents, quizzes)',
        'Student enrollment and progress tracking',
        'Interactive assessments and grading',
        'Discussion forums and collaboration tools',
        'Live virtual classroom integration',
        'Mobile learning support',
        'Certification management'
      ],
      technologies: [
        'React',
        'Node.js',
        'GraphQL',
        'MongoDB',
        'WebRTC',
        'AWS S3',
        'Redis',
        'TensorFlow'
      ],
      challenges: [
        'Creating an intuitive platform that works for educators with varying levels of technical expertise',
        'Ensuring engaging learning experiences across different devices and connection speeds',
        'Developing robust assessment tools that support various question types and grading methods',
        'Building a scalable system that can handle thousands of concurrent users'
      ],
      solutions: [
        'Implemented a user-centered design process with extensive educator feedback',
        'Developed adaptive content delivery based on device capabilities and network conditions',
        'Created a flexible assessment engine with support for multiple question types and automated grading',
        'Utilized a microservices architecture with auto-scaling capabilities'
      ],
      results: [
        '25% improvement in course completion rates',
        '40% increase in student engagement metrics',
        'Successfully deployed to 30 educational institutions serving over 50,000 students',
        '90% positive feedback from educators regarding ease of use and functionality'
      ],
      testimonial: {
        quote: "This platform has transformed how we deliver education. The intuitive interface makes it easy for our teachers to create engaging content, while the analytics provide valuable insights into student performance. It's been a game-changer for our institution.",
        author: "Professor James Ouma",
        position: "Dean of Digital Learning at East African University"
      }
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the project ID from the route parameters
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('id');
      if (projectId) {
        // Find the project with the matching ID
        this.project = this.projects.find(p => p.id === projectId);
      }
    });
  }
}
