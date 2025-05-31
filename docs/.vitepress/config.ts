import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ayush Srivastava',
  description: 'DevOps Engineer - Cloud Computing, CI/CD, Infrastructure Automation',
  base: '/my-website/',
  lastUpdated: true,
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Contact', link: '/contact/' },
    ],
    
    sidebar: {
      '/about/': [
        {
          text: 'About Me',
          items: [
            { text: 'Biography', link: '/about/' },
            { text: 'Experience', link: '/about/experience' },
            { text: 'Education', link: '/about/education' },
          ]
        }
      ],
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'Overview', link: '/projects/' },
            { text: 'DevOps Projects', link: '/projects/devops' },
            { text: 'Security Projects', link: '/projects/security' },
          ]
        }
      ],
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ayushshivaji' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/ayush-shivaji/' },
    ],
    
    footer: {
      message: 'Built with VitePress',
      copyright: '© 2024 Ayush Srivastava. All rights reserved.'
    },
    
    search: {
      provider: 'local'
    },
    
    // Dark mode support
    appearance: true,
  }
}) 