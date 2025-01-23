import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Tooltip } from '@mui/material';
import { Check } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';

import AnimatedCard from './AnimatedCard';
import FloatingElement from './FloatingElement';
import Section from './Section';
import { MyEmail } from '../../globals/variables';
import { projects } from './helper/helperArrays';

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(MyEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient, which doesn't work apparently */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 -z-10"
        style={{ y: backgroundY }}
      />

      {/* Hero Section with floating animation */}
      <Section
        className="container px-4 pt-32 pb-16 md:pt-40 md:pb-24"
        delay={0.2}
      >
        <div className="flex flex-col md:flex-row">
          <div>
            <FloatingElement>
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Hi, I&apos;m <span className="text-primary">Zsiga</span>
              </motion.h1>
            </FloatingElement>
            <motion.div
              className="mt-8 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <motion.p
                className="mt-6 text-xl text-muted-foreground max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                I enjoy working with React and Next.js on the frontend and I
                absolutely love implementing AWS services on the backend.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Projects Section with staggered card animations */}
      <Section className="px-4 py-16 md:py-24" direction="right">
        <h2 className="text-3xl font-bold mb-12">Check out my Projects</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <AnimatedCard key={item.id} index={item.id}>
              <Card className="overflow-hidden group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.image}
                    alt={`Project ${item.id}`}
                    width={400}
                    height={300}
                    className="w-full object-cover aspect-video"
                  />
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  {item.url !== '' ? (
                    <Button variant="outlined" size="small">
                      <a href={item.url}>View Project</a>
                    </Button>
                  ) : (
                    ''
                  )}
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* About Section with fade in animation and work experience */}
      <Section
        className="px-4 py-16 md:py-24 bg-white/80 backdrop-blur-sm"
        direction="left"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-muted-foreground mb-6">
            I am a full-stack software engineer with stronger frontend skills.
            My goal is to deliver high-quality features in the shortest possible
            time during sprints while maintaining the cleanliness and
            readability of our codebase. I enjoy writing reusable components,
            functions, and other programs, as this helps ensure stability and
            makes it easier to avoid bugs. I also enjoy working with CI/CD
            processes and pipelines
          </p>
          <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ApartmentIcon className="mr-2 mt-1 text-primary" />
              <div>
                <h4 className="font-semibold">Genesys</h4>
                <p className="text-sm text-muted-foreground">
                  Medior Frontend Developer
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <ApartmentIcon className="mr-2 mt-1 text-primary" />
              <div>
                <h4 className="font-semibold">National Instruments</h4>
                <p className="text-sm text-muted-foreground">
                  Junior/Medior Full-Stack Software Engineer
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      {/* Contact Section with staggered button animations */}
      <Section className="px-4 py-16 md:py-24" direction="up">
        <h2 id="contactinfo" className="text-3xl font-bold mb-12 text-center">
          Get In Touch
        </h2>
        <motion.div
          className="flex flex-col justify-center items-center md:flex-row gap-8 "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            <Button
              href="https://github.com/zsigmondO"
              target="_blank"
              variant="outlined"
              size="large"
              className="gap-2"
            >
              <GitHubIcon className="w-5 h-5" />
              Github
            </Button>,
            <Button
              href="https://www.linkedin.com/in/zsigmond-gy%C3%B6ny%C3%B6r%C5%B1/"
              target="_blank"
              variant="outlined"
              size="large"
              className="gap-2"
            >
              <LinkedInIcon className="w-5 h-5" />
              LinkedIn
            </Button>,
            <Tooltip
              title={copied ? 'Email copied' : 'Copy email to clipboard'}
              arrow
            >
              <Button
                variant="outlined"
                size="large"
                className="gap-2"
                onClick={copyToClipboard}
                href=""
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Email Copied!
                  </>
                ) : (
                  <>
                    <EmailIcon className="w-5 h-5" />
                    Copy Email
                  </>
                )}
              </Button>
            </Tooltip>,
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
}

export default Portfolio;
