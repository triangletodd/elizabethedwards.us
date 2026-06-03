import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, MapPin, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';
import './index.css';

function App() {
  const profile = {
    name: "Elizabeth (Liz) Edwards",
    headline: "Information Technology Project Manager",
    location: "Fuquay-Varina, North Carolina",
    about: "IT Project Manager and Program Delivery leader with extensive experience managing complex, regulatory-driven initiatives across financial services, insurance, and public sector environments. Proven expertise delivering enterprise-scale programs including IFRS 17 implementations, SOC 2 Type II audits, and large-scale IT transformation initiatives.\n\nCurrently focused on bridging regulatory compliance, technology delivery, and operational execution, with a strong record of translating regulatory, audit, and business requirements into actionable project and program plans. Experienced in portfolio management, governance, risk and issue management (RAID), executive reporting, and cross-functional stakeholder engagement.",
    experience: [
      {
        id: 1,
        title: "IT Project Manager",
        company: "FRG | Financial Risk Group",
        duration: "Dec 2022 - Dec 2025",
        description: "Remote IT Project Manager focused on large-scale program delivery and risk management."
      },
      {
        id: 2,
        title: "Information Technology Project Manager",
        company: "Town of Cary",
        duration: "Dec 2020 - Oct 2022",
        description: "Managed Scrum and Government Contracts."
      },
      {
        id: 3,
        title: "Project Manager",
        company: "Highlight Technologies",
        duration: "May 2020 - Dec 2020",
        description: "Ensured the efficient, accurate execution of goals for government client in the disaster recovery program. Managed performance monitoring, developed metrics to track trends, and reported weekly status to Sr. Management."
      },
      {
        id: 4,
        title: "Various Roles (Project Coordinator, Tier 2 Support, Assistant to CTO)",
        company: "VitalSource",
        duration: "Jul 2014 - Jul 2019",
        description: "Progressed through multiple roles including Assistant to the Chief Technology Officer, Project Coordinator, and Tier 2 Customer Support."
      }
    ],
    education: [
      {
        id: 1,
        degree: "Culinary Arts, Culinary Arts/Chef Training",
        school: "International Culinary Center",
        duration: "2001 - 2002"
      }
    ],
    certifications: [
      {
        id: 1,
        name: "Scrum Master Certified (SMC)",
        issuer: "Scrum Alliance",
        date: "Sep 2021"
      },
      {
        id: 2,
        name: "Certified Associate in Project Management (CAPM)",
        issuer: "Project Management Institute",
        date: "Dec 2019"
      }
    ],
    skills: [
      "Program & Portfolio Management",
      "Regulatory & Compliance Delivery",
      "IT Project Management",
      "PMO & Governance Frameworks",
      "Risk & Issue Management",
      "Stakeholder Communication",
      "Platform Administration",
      "Jira Administration"
    ]
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="app-wrapper">
      {/* Dynamic Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      {/* Hero Section */}
      <section className="hero container">
        <motion.div
          className="hero-grid"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="hero-text" variants={fadeInUp}>
            <div className="badge">
              <MapPin size={14} className="icon-mr" />
              {profile.location}
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Liz</span>.
            </h1>
            <h2 className="hero-subtitle">{profile.headline}</h2>
            <div className="hero-actions">
              <button className="btn btn-primary">
                <Mail size={18} className="icon-mr" />
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div className="hero-visual" variants={fadeInUp}>
            <div className="profile-image-container glass-panel">
              <img
                src="/profile.jpg"
                alt="Elizabeth Edwards"
                className="profile-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400";
                  console.log("Fallback image loaded, waiting for local profile.jpg");
                }}
              />
              <div className="decorative-ring"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section (Bento Box style) */}
      <section className="container">
        <motion.div
          className="bento-box glass-panel"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="bento-header">
            <div className="icon-box"><Briefcase size={24} /></div>
            <h2 className="section-title">About Me</h2>
          </div>
          <p className="about-text">{profile.about}</p>
        </motion.div>
      </section>

      {/* Main Content Split Layout */}
      <section className="container split-layout">

        {/* Left Column: Experience */}
        <div className="left-column">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="section-header">
              <Briefcase className="text-gradient" size={28} />
              <h2 className="section-title">Experience</h2>
            </div>

            <div className="timeline">
              {profile.experience.map(exp => (
                <motion.div key={exp.id} variants={fadeInUp} className="experience-card glass-panel hover-lift">
                  <div className="card-header">
                    <h3 className="job-title">{exp.title}</h3>
                    <span className="job-duration">{exp.duration}</span>
                  </div>
                  <div className="company-name">
                    <ChevronRight size={16} className="icon-mr" />
                    {exp.company}
                  </div>
                  <p className="job-description">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Education & Skills */}
        <div className="right-column">

          {/* Skills */}
          <motion.div
            className="skills-section mb-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="section-header">
              <Award className="text-gradient" size={28} />
              <h2 className="section-title">Core Competencies</h2>
            </div>
            <div className="skills-grid">
              {profile.skills.map((skill, index) => (
                <motion.div key={index} variants={fadeInUp} className="skill-tag glass-panel hover-lift">
                  <CheckCircle2 size={16} className="skill-icon" />
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certs */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="section-header">
              <GraduationCap className="text-gradient" size={28} />
              <h2 className="section-title">Education & Certifications</h2>
            </div>

            <div className="timeline">
              {profile.education.map(edu => (
                <motion.div key={`edu-${edu.id}`} variants={fadeInUp} className="experience-card glass-panel hover-lift">
                  <h3 className="job-title">{edu.degree}</h3>
                  <div className="company-name">{edu.school}</div>
                  <div className="job-duration">{edu.duration}</div>
                </motion.div>
              ))}
              {profile.certifications.map(cert => (
                <motion.div key={`cert-${cert.id}`} variants={fadeInUp} className="experience-card glass-panel hover-lift">
                  <h3 className="job-title">{cert.name}</h3>
                  <div className="company-name">{cert.issuer}</div>
                  <div className="job-duration">Issued: {cert.date}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <p>© {new Date().getFullYear()} Elizabeth Edwards. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
