import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [videoPosition, setVideoPosition] = useState({ x: 20, y: 20 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [videoState, setVideoState] = useState('open') // 'open' | 'closed'
  const [adImageError, setAdImageError] = useState(false)
  const videoPlayerRef = useRef(null)

  useEffect(() => {
    // Set initial position to bottom left
    const setInitialPosition = () => {
      setVideoPosition({
        x: 20,
        y: window.innerHeight - 200
      })
    }
    setInitialPosition()
    window.addEventListener('resize', setInitialPosition)
    return () => window.removeEventListener('resize', setInitialPosition)
  }, [])

  const handleMouseDown = (e) => {
    if (e.target.closest('.video-drag-grip') && videoPlayerRef.current) {
      const rect = videoPlayerRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
      setIsDragging(true)
      e.preventDefault()
      e.stopPropagation()
    }
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging && videoPlayerRef.current) {
        const newX = e.clientX - dragOffset.x
        const newY = e.clientY - dragOffset.y
        
        // Keep video within viewport bounds
        const videoWidth = videoPlayerRef.current.offsetWidth || 320
        const videoHeight = videoPlayerRef.current.offsetHeight || 180
        const maxX = window.innerWidth - videoWidth
        const maxY = window.innerHeight - videoHeight
        
        setVideoPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setSidebarOpen(false)
    }
  }

  const navigationItems = [
    { id: 'hero', title: 'Home' },
    { id: 'letter', title: 'Letter to the Reader' },
    { id: 'repetend1', title: 'Repetend 1' },
    { id: 'essay', title: 'Informative Essay' },
    { id: 'repetend2', title: 'Repetend 2' },
    { id: 'email', title: 'Professional Advocacy' },
    { id: 'repetend3', title: 'Repetend 3' },
    { id: 'ad', title: 'Public Message' },
    { id: 'repetend4', title: 'Repetend 4' },
    { id: 'poem', title: 'Free Verse Poem' },
    { id: 'repetend5', title: 'Repetend 5' },
    { id: 'monologue', title: "Monologue / Dialogue" },
    { id: 'conclusion', title: 'Concluding Essay / Explanation' },
    { id: 'related-news', title: 'Related News' },
    { id: 'works-cited', title: 'Works Cited' },
  ]

  return (
    <div className="app">
      {/* Navigation Toggle Button */}
      <button 
        className={`nav-toggle ${sidebarOpen ? 'open' : ''}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle navigation"
      >
        <span className="arrow-icon">{sidebarOpen ? '←' : '→'}</span>
      </button>

      {/* Sidebar Navigation */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h3 className="sidebar-title">Navigation</h3>
          <nav className="sidebar-nav">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.title}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Draggable Video Player */}
      {videoState === 'closed' ? (
        <button
          className="video-reopen-btn"
          onClick={() => setVideoState('open')}
          style={{ left: `${videoPosition.x}px`, top: `${videoPosition.y}px` }}
          aria-label="Show video"
        >
          ▶ Video
        </button>
      ) : (
        <div 
          className={`fixed-video-player ${isDragging ? 'dragging' : ''}`}
          ref={videoPlayerRef}
          style={{
            left: `${videoPosition.x}px`,
            bottom: 'auto',
            top: `${videoPosition.y}px`
          }}
        >
          <div className="video-drag-handle" onMouseDown={handleMouseDown}>
            <span className="video-drag-grip">⋮⋮</span>
            <button
              type="button"
              className="video-btn video-close-btn"
              onClick={(e) => { e.stopPropagation(); setVideoState('closed') }}
              aria-label="Close video"
              title="Close"
            >
              ×
            </button>
          </div>
          <div className="fixed-video-wrapper">
            <div className="fixed-video-embed">
              <iframe
                width="320"
                height="180"
                src="https://www.youtube.com/embed/zRlIFn0ZIlU"
                title="AI and the Future of Work"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="sdg-badge">UN SDG #8</div>
          <h1 className="hero-title">The Future of Work: Progress at a Human Cost?</h1>
          <h2 className="hero-subtitle">AI, Employment, and Decent Work</h2>
          <p className="hero-author">Alan Tsai</p>
        </div>
      </section>
      <section id="letter" className="section letter-section">
        <div className="container">
          <h2 className="section-title">Letter to the Reader</h2>
          <div className="letter-content">
            <p>
              Dear Reader,
            </p>
            <p>
              Welcome to this exploration of artificial intelligence and its impact on the future of work. 
              As we stand at the threshold of unprecedented technological advancement, it is crucial that 
              we examine not only the benefits but also the human costs of progress.
            </p>
            <p>
              This multi-genre project brings together different forms of communication—essays, emails, 
              advertisements, poetry, and personal narratives—to create a comprehensive understanding of 
              how AI is reshaping our workplaces and our lives. Each genre serves a unique purpose in 
              illuminating different facets of this complex issue.
            </p>
            <p>
              Through this journey, we will explore job displacement, new opportunities, the need for 
              education and reskilling, and our ethical responsibility to ensure that technological 
              advancement serves humanity rather than replacing it.
            </p>
            <p>
              Sincerely,<br />
              Alan Tsai
            </p>
          </div>
        </div>
      </section>
            {/* Repetend 1 */}
      <section id="repetend1" className="section repetend-section">
        <div className="container">
          <div className="repetend-single">
            <p className="repetend-text-large">Progress should not come at the cost of people</p>
          </div>
        </div>
      </section>
      <section id="essay" className="section essay-section">
        <div className="container">
          <h2 className="section-title">Artificial Intelligence and the Future of Work</h2>
          
          <div className="essay-content">
              <div className="essay-header">
                <p className="essay-author">Alan Tsai</p>
                <p className="essay-class">G10P ELA</p>
                <p className="essay-date">January 19, 2026</p>
              </div>
              
              <div className="essay-image-wrap">
              <img
                src="/images/factory-automation.png"
                alt="Automated factory floor with robotic arms performing welding and manufacturing, no human workers visible"
                className="essay-image"
              />
              <p className="essay-image-caption">Automation in manufacturing</p>
            </div>
            <p>
              Technological advancements have always reshaped the way people work, and artificial intelligence (AI) represents one of the most significant transformations of the modern era. Unlike earlier machines that required constant human control, AI systems can learn, analyze data, and make decisions independently. As a result, many workers fear that AI will replace human labor on a massive scale. While AI has the potential to increase productivity and economic growth, it also raises serious concerns about unemployment, inequality, and the future of decent work. Without responsible planning, AI-driven automation could undermine United Nations Sustainable Development Goal #8, which promotes decent work and sustainable economic growth. Therefore, the impact of AI on employment depends on how societies address job displacement, invest in education and reskilling, and regulate technology ethically.
            </p>

            <p>
              One of the most pressing concerns surrounding AI is large-scale job displacement. Jobs that involve routine, repetitive, or predictable tasks are especially vulnerable to automation. According to Nexford University, industries such as manufacturing, transportation, customer service, and administrative work have already experienced workforce reductions due to AI-powered systems ("How Will AI Affect Jobs?"). Similarly, analysts cited by <em>Fortune</em> warn that continued AI adoption could impact hundreds of millions of workers worldwide, comparing human labor displacement to how horses became obsolete during the Industrial Revolution (Kolakowski, 2026). These predictions highlight the economic risk of unchecked automation, particularly for workers without access to retraining opportunities. When job losses occur without support systems, displaced workers may face long-term unemployment and financial instability, directly contradicting the goals of decent work and inclusive growth.
            </p>

            <p>
              Despite these risks, AI is not solely a threat to the labor market. It is also reshaping work by creating new opportunities that require advanced skills. The International Monetary Fund explains that AI increases demand for jobs in technology, data analysis, problem-solving, and system oversight, even as it reduces demand for routine labor (IMF, 2026). Likewise, the World Economic Forum reports that careers in data science, cybersecurity, healthcare technology, and AI ethics are expected to grow as automation expands ("AI Jobs Replacement Data Careers"). These findings suggest that AI-driven growth can support economic development if workers are prepared to transition into emerging fields. However, without deliberate investment in education, the benefits of AI will remain limited to a small, highly skilled segment of the population.
            </p>

            <p>
              Education and reskilling are essential to ensuring AI supports SDG #8 rather than undermines it. The IMF urges governments and employers to fund reskilling programs that allow displaced workers to move into newly created jobs instead of being pushed into low-wage or unstable employment (IMF, 2026). CNN similarly reports that economies that fail to adapt their education systems risk widening inequality as automation accelerates ("AI, Jobs, and the Economy"). By expanding access to training and lifelong learning, societies can protect workers while still embracing technological progress.
            </p>

            <p>
              Beyond education, ethical development and regulation of AI play a crucial role in protecting workers. Businesses must balance efficiency with social responsibility, and policymakers must establish regulations that safeguard workers' rights while encouraging innovation. When ethical oversight, education, and economic planning work together, AI can enhance productivity without sacrificing human dignity.
            </p>

            <p>
              In conclusion, AI presents both challenges and opportunities for the global workforce. While automation threatens certain jobs, it also creates new possibilities for growth and innovation. Whether AI strengthens or weakens decent work depends on the choices made by governments, businesses, and individuals. By prioritizing education, reskilling, and ethical policy, societies can ensure that technological progress benefits everyone rather than leaving workers behind.
            </p>
          </div>
        </div>
      </section>
            {/* Repetend 2 */}
      <section id="repetend2" className="section repetend-section">
        <div className="container">
          <div className="repetend-single">
            <p className="repetend-text-large">Technology should serve humanity—not replace it</p>
          </div>
        </div>
      </section>
      <section id="email" className="section email-section">
        <div className="container">
          <h2 className="section-title">Professional Advocacy</h2>
          <div className="email-container">
            <div className="email-header">
              <div className="email-field">
                <span className="email-label">From:</span>
                <span className="email-value">Alan Tsai &lt;alan.tsai@student.edu&gt;</span>
              </div>
              <div className="email-field">
                <span className="email-label">To:</span>
                <span className="email-value">Policy Committee &lt;policy@government.gov&gt;</span>
              </div>
              <div className="email-field">
                <span className="email-label">Subject:</span>
                <span className="email-value">Proposal: Comprehensive AI Workforce Transition Program</span>
              </div>
              <div className="email-field">
                <span className="email-label">Date:</span>
                <span className="email-value">February 10, 2026</span>
              </div>
            </div>
            <div className="email-body">
              <p>Dear Policy Committee Members,</p>
              <p>
                I am writing to advocate for the implementation of a comprehensive workforce transition 
                program to address the challenges posed by AI-driven automation. As artificial intelligence 
                continues to transform our economy, we must ensure that no worker is left behind.
              </p>
              <p>
                I propose the following initiatives:
              </p>
              <ul>
                <li>Universal access to reskilling programs for workers in at-risk industries</li>
                <li>Partnerships between educational institutions and employers to align training with market needs</li>
                <li>Support for small businesses adapting to AI technologies</li>
                <li>Social safety nets for workers during transition periods</li>
                <li>Ethical guidelines for AI deployment in the workplace</li>
              </ul>
              <p>
                <strong>Progress should not come at the cost of people.</strong> We have the opportunity 
                to shape an AI-driven future that creates decent work and economic growth for all, in 
                alignment with UN Sustainable Development Goal #8.
              </p>
              <p>
                I look forward to discussing this proposal further and working together to build a future 
                where technology serves humanity.
              </p>
              <p>
                Respectfully,<br />
                Alan Tsai
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Repetend 3 */}
      <section id="repetend3" className="section repetend-section">
        <div className="container">
          <div className="repetend-single">
            <p className="repetend-text-large">Decent work is a human right, not a privilege</p>
          </div>
        </div>
      </section>
      <section id="ad" className="section ad-section">
        <div className="container">
          <h2 className="section-title">Public Message</h2>
          <div className="ad-banner-container">
            {!adImageError ? (
              <img
                src="/images/ai-jobs-banner.png"
                alt="Will AI Take Your Job or Help You Grow? - Information about AI impact on jobs with call to action"
                className="ad-banner-image"
                onError={() => setAdImageError(true)}
              />
            ) : (
              <div className="ad-banner-fallback">
                <p className="ad-fallback-title">Will AI Take Your Job or Help You Grow?</p>
                <p className="ad-fallback-text">Support policies that protect workers. Learn new skills. Demand decent work in the age of AI.</p>
              </div>
            )}
          </div>
        </div>
      </section>
            {/* Repetend 4 */}
      <section id="repetend4" className="section repetend-section">
        <div className="container">
          <div className="repetend-single">
            <p className="repetend-text-large">Education and adaptation are pathways to dignity</p>
          </div>
        </div>
      </section>
      <section id="poem" className="section poem-section">
        <div className="container">
          <h2 className="section-title">Free Verse Poem</h2>
          <div className="poem-container">
            <div className="poem-text">
              <div className="poem-stanza">
                <p>Empty desks where workers sat,</p>
                <p>Silent screens, the click-clack gone,</p>
                <p>Machines now do what humans did,</p>
                <p>Progress marches, but at what cost?</p>
              </div>
              <div className="poem-stanza">
                <p>Faces that once filled this space,</p>
                <p>Stories, laughter, daily grace,</p>
                <p>Replaced by algorithms cold,</p>
                <p>Efficiency over human soul.</p>
              </div>
              <div className="poem-stanza">
                <p>We build the future, step by step,</p>
                <p>But who pays the price we've kept?</p>
                <p>Progress should not come at the cost of people,</p>
                <p>Yet here we stand, the evidence clear.</p>
              </div>
              <div className="poem-stanza">
                <p>Let us remember, as we advance,</p>
                <p>That work is more than circumstance—</p>
                <p>It's dignity, it's purpose, it's life,</p>
                <p>And no machine can take its place.</p>
              </div>
            </div>
            <div className="poem-image">
              <img 
                src="/images/empty-office.png" 
                alt="Empty office with one worker at a computer, surrounded by vacant workstations"
                className="poem-image-img"
              />
              <p className="image-caption">A reminder of what we must preserve</p>
            </div>
          </div>
        </div>
      </section>
            {/* Repetend 5 */}
      <section id="repetend5" className="section repetend-section">
        <div className="container">
          <div className="repetend-single">
            <p className="repetend-text-large">The future of work must include all workers</p>
          </div>
        </div>
      </section>
      <section id="monologue" className="section monologue-section">
        <div className="container">
          <h2 className="section-title">Monologue / Dialogue</h2>
          <div className="monologue-image-wrap">
            <img
              src="/images/worker-portrait.png"
              alt="Woman in workwear seated in a workshop, thoughtful expression"
              className="monologue-image"
            />
            <p className="monologue-image-caption">A worker’s reflection</p>
          </div>
          <div className="monologue-content">
            <blockquote className="monologue-text">
              <p>
                "I've been working at this factory for twenty years. Twenty years of getting up at five 
                in the morning, coming here, doing my job, going home. I know every machine, every sound, 
                every rhythm of this place. It's not just a job—it's part of who I am.
              </p>
              <p>
                Last month, they told us the robots are coming. More efficient, they said. More productive. 
                Cheaper. They said some of us might be retrained, but most of us... well, we'll have to 
                find something else. At my age? With my skills? What else is there?
              </p>
              <p>
                I'm not against progress. I understand that things change. But when I look around at my 
                coworkers—people who've given their lives to this company, who've raised families on these 
                wages, who've built communities around this work—I wonder: is this really progress if it 
                leaves us behind?
              </p>
              <p>
                <strong>Progress should not come at the cost of people.</strong> That's what I keep 
                thinking. We built this economy together. Shouldn't we all benefit from what comes next?"
              </p>
              <p>
                — Maria, Manufacturing Worker, Age 52"
              </p>
            </blockquote>
          </div>
        </div>
      </section>
            {/* Works Cited */}
      
      

      <section id="conclusion" className="section conclusion-section">
        <div className="container">
          <h2 className="section-title">Concluding Essay / Explanation</h2>
          <div className="conclusion-image-wrap">
            <img
              src="/images/conclusion-meeting.png"
              alt="Professional meeting in a conference room with SDG 8 Decent Work and Economic Growth displayed"
              className="conclusion-image"
            />
            <p className="conclusion-image-caption">Decent work and economic growth—a shared goal</p>
          </div>
          <div className="conclusion-content">
            <p>
              This multi-genre project has explored the complex relationship between artificial intelligence 
              and the future of work through various forms of communication, each serving a distinct purpose 
              in illuminating different aspects of this critical issue.
            </p>
            <p>
              The <strong>informative essay</strong> provided factual analysis and academic perspective, 
              establishing the foundation of understanding. The <strong>business email</strong> demonstrated 
              professional advocacy and civic engagement, showing how individuals can take action. The 
              <strong>advertisement</strong> reached a broader audience with a clear call to action, 
              emphasizing the urgency of adaptation.
            </p>
            <p>
              The <strong>poem</strong> brought emotional depth and human perspective, reminding us of the 
              personal cost of technological change. The <strong>monologue</strong> gave voice to those 
              directly affected, creating empathy and connection. The <strong>repetends</strong> throughout 
              the project reinforced key messages, creating unity and emphasis.
            </p>
            <p>
              This order was chosen to guide readers from understanding to action, from facts to feelings, 
              from analysis to empathy. Each genre builds upon the previous, creating a comprehensive 
              narrative that addresses both the intellectual and emotional dimensions of AI's impact on work.
            </p>
            <p className="conclusion-statement">
              <strong>Technology should serve humanity—not replace it.</strong> As we move forward into an 
              AI-driven future, we must ensure that progress aligns with UN Sustainable Development Goal 
              #8: promoting decent work and economic growth for all. The choices we make today will shape 
              the world of tomorrow. Let us choose wisely, with humanity at the center of our vision.
            </p>
          </div>
        </div>
      </section>

      <section id="related-news" className="section related-news-section">
        <div className="container">
          <h2 className="section-title">Related News</h2>
          <div className="related-news-content">
            <p className="related-news-intro">
              Stay informed about the latest developments in AI and employment. Here are recent news articles 
              that explore the ongoing impact of artificial intelligence on the workforce:
            </p>
            
            <div className="news-item">
              <h3 className="news-title">
                <a href="https://fortune.com/2026/02/12/mass-unemployment-10-percent-feel-like-depression-ai-identity-crisis/" target="_blank" rel="noopener noreferrer">
                  Khan Academy CEO warns even a 10% workforce reduction due to AI 'will feel like a depression'
                </a>
              </h3>
              <p className="news-source">Fortune • February 12, 2026</p>
              <p className="news-summary">
                Salman Khan warns that even a 10% reduction in white-collar jobs due to AI could create 
                widespread economic and psychological impacts, potentially causing identity crises for 
                displaced professionals.
              </p>
            </div>

            <div className="news-item">
              <h3 className="news-title">
                <a href="https://www.resume-now.com/job-resources/careers/ai-job-security-outlook" target="_blank" rel="noopener noreferrer">
                  60% of U.S. Workers Expect AI to Eliminate More Jobs Than It Creates in 2026
                </a>
              </h3>
              <p className="news-source">Resume Now • 2026</p>
              <p className="news-summary">
                A majority of American workers are pessimistic about AI's impact on employment, with 60% 
                believing job losses will outweigh job creation, and 51% personally worried about losing 
                their jobs to AI.
              </p>
            </div>

            <div className="news-item">
              <h3 className="news-title">
                <a href="https://www.theguardian.com/technology/2026/feb/11/big-ai-job-swap-white-collar-workers-ditching-their-careers" target="_blank" rel="noopener noreferrer">
                  The big AI job swap: why white-collar workers are ditching their careers
                </a>
              </h3>
              <p className="news-source">The Guardian • February 11, 2026</p>
              <p className="news-summary">
                Many writers and content creators are being forced to switch careers as AI displaces their 
                roles, with some accepting lower-paying editing positions reviewing AI-generated content.
              </p>
            </div>

            <div className="news-item">
              <h3 className="news-title">
                <a href="https://hbr.org/2026/01/companies-are-laying-off-workers-because-of-ais-potential-not-its-performance" target="_blank" rel="noopener noreferrer">
                  Companies Are Laying Off Workers Because of AI's Potential—Not Its Performance
                </a>
              </h3>
              <p className="news-source">Harvard Business Review • January 2026</p>
              <p className="news-summary">
                Research reveals that many companies are making workforce reductions based on AI's potential 
                rather than proven performance, affecting entry-level workers, customer service, and 
                programming positions.
              </p>
            </div>

            <div className="news-item">
              <h3 className="news-title">
                <a href="https://news.cognizant.com/2026-01-15-AI-Can-Unlock-4-5-Trillion-in-U-S-Labor-Productivity-Today,-Reveals-Cognizants-Latest-New-Work,-New-World-2026-Report" target="_blank" rel="noopener noreferrer">
                  AI Can Unlock $4.5 Trillion in U.S. Labor Productivity Today
                </a>
              </h3>
              <p className="news-source">Cognizant • January 15, 2026</p>
              <p className="news-summary">
                A new report estimates that AI could unlock $4.5 trillion in U.S. labor productivity, 
                highlighting both the economic potential and the scale of transformation ahead.
              </p>
            </div>

            <div className="news-item">
              <h3 className="news-title">
                <a href="https://www.hiringlab.org/2026/01/22/january-labor-market-update-jobs-mentioning-ai-are-growing-amid-broader-hiring-weakness/" target="_blank" rel="noopener noreferrer">
                  Jobs Mentioning AI Are Growing Amid Broader Hiring Weakness
                </a>
              </h3>
              <p className="news-source">Indeed Hiring Lab • January 22, 2026</p>
              <p className="news-summary">
                While overall hiring shows weakness, AI-related job postings continue to surge, with nearly 
                45% of data & analytics jobs now mentioning AI, demonstrating the shifting job market landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="works-cited" className="section works-cited-section">
        <div className="container">
          <h2 className="section-title">Works Cited</h2>
          <div className="works-cited-content">
            <p className="works-cited-title"><strong>Works Cited (APA Format)</strong></p>
            
            <div className="citation-item">
              <p>CNN. (2025, December 18). <em>AI, jobs, and the economy</em>.</p>
              <a href="https://edition.cnn.com/2025/12/18/business/ai-jobs-economy" target="_blank" rel="noopener noreferrer" className="citation-url">https://edition.cnn.com/2025/12/18/business/ai-jobs-economy</a>
            </div>

            <div className="citation-item">
              <p>International Monetary Fund. (2026, January 14). <em>New skills and AI are reshaping the future of work</em>.</p>
              <a href="https://www.imf.org/en/blogs/articles/2026/01/14/new-skills-and-ai-are-reshaping-the-future-of-work" target="_blank" rel="noopener noreferrer" className="citation-url">https://www.imf.org/en/blogs/articles/2026/01/14/new-skills-and-ai-are-reshaping-the-future-of-work</a>
            </div>

            <div className="citation-item">
              <p>Kolakowski, N. (2026, January 13). <em>Humans could go the way of horses: Goldman warns of AI job apocalypse</em>. <em>Fortune</em>.</p>
              <a href="https://fortune.com/2026/01/13/humans-could-go-the-way-of-horses-goldman-ai-job-apocalypse-unemployment/" target="_blank" rel="noopener noreferrer" className="citation-url">https://fortune.com/2026/01/13/humans-could-go-the-way-of-horses-goldman-ai-job-apocalypse-unemployment/</a>
            </div>

            <div className="citation-item">
              <p>Nexford University. (n.d.). <em>How will AI affect jobs?</em></p>
              <a href="https://www.nexford.edu/insights/how-will-ai-affect-jobs" target="_blank" rel="noopener noreferrer" className="citation-url">https://www.nexford.edu/insights/how-will-ai-affect-jobs</a>
            </div>

            <div className="citation-item">
              <p>World Economic Forum. (2025, August). <em>AI jobs replacement data and future careers</em>.</p>
              <a href="https://www.weforum.org/stories/2025/08/ai-jobs-replacement-data-careers/" target="_blank" rel="noopener noreferrer" className="citation-url">https://www.weforum.org/stories/2025/08/ai-jobs-replacement-data-careers/</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            This project supports United Nations Sustainable Development Goal #8: 
            Decent Work and Economic Growth
          </p>
          <p className="footer-author">Alan Tsai — Multi-Genre Project 2026</p>
        </div>
      </footer>
    </div>
  )
}

export default App
