import './App.css'

function App() {
  return (
    <div className="app">
      {/* Hero / Landing Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="sdg-badge">UN SDG #8</div>
          <h1 className="hero-title">The Future of Work: Progress at a Human Cost?</h1>
          <h2 className="hero-subtitle">AI, Employment, and Decent Work</h2>
          <p className="hero-author">Alan Tsai</p>
        </div>
      </section>

      {/* Letter to the Reader */}
      <section className="section letter-section">
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
            <p className="repetend-highlight">
              <strong>Progress should not come at the cost of people.</strong>
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

      {/* Informative Essay */}
      <section className="section essay-section">
        <div className="container">
          <h2 className="section-title">Artificial Intelligence and the Future of Work</h2>
          
          <div className="essay-content">
            <h3 className="subsection-title">Job Displacement</h3>
            <p>
              The rise of artificial intelligence has brought with it a wave of automation that threatens 
              to displace millions of workers across various industries. From manufacturing to customer 
              service, from data entry to even creative fields, AI systems are increasingly capable of 
              performing tasks once thought to be exclusively human.
            </p>
            <blockquote className="pull-quote">
              "By 2030, up to 800 million jobs could be lost to automation globally."
            </blockquote>
            <p>
              This displacement is not uniform. Low-skilled and routine jobs are most vulnerable, creating 
              a divide between those who can adapt and those who cannot. The consequences extend beyond 
              individual livelihoods to entire communities and economies.
            </p>

            <h3 className="subsection-title">New Opportunities</h3>
            <p>
              However, AI also creates new opportunities. Emerging fields in AI development, data science, 
              and human-AI collaboration require new skills and offer new career paths. The challenge lies 
              in ensuring that these opportunities are accessible to all, not just those with advanced 
              education or resources.
            </p>
            <p>
              The future of work will likely involve humans and AI working together, with humans focusing 
              on creativity, empathy, critical thinking, and complex problem-solving—skills that remain 
              uniquely human.
            </p>

            <h3 className="subsection-title">Education & Reskilling</h3>
            <p>
              The rapid pace of technological change demands a fundamental shift in how we approach 
              education and workforce development. Traditional education systems, designed for industrial 
              economies, must evolve to prepare students for an AI-driven world.
            </p>
            <blockquote className="pull-quote">
              "Lifelong learning is no longer optional—it is essential for economic survival."
            </blockquote>
            <p>
              Reskilling programs must be accessible, affordable, and aligned with emerging job markets. 
              Governments, educational institutions, and employers share responsibility for creating pathways 
              that allow workers to transition into new roles rather than being left behind.
            </p>

            <h3 className="subsection-title">Ethical Responsibility</h3>
            <p>
              As we develop and deploy AI systems, we bear an ethical responsibility to consider their 
              impact on human dignity, economic security, and social equity. Technology should enhance 
              human capabilities and create shared prosperity, not concentrate wealth and power in the 
              hands of a few.
            </p>
            <p>
              This requires thoughtful regulation, corporate accountability, and a commitment to ensuring 
              that the benefits of AI are distributed equitably. We must ask not only what AI can do, 
              but what it should do—and for whom.
            </p>
          </div>
        </div>
      </section>

      {/* Business Email */}
      <section className="section email-section">
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

      {/* Advertisement */}
      <section className="section ad-section">
        <div className="container">
          <h2 className="section-title">Public Message</h2>
          <div className="ad-container">
            <div className="ad-content">
              <h3 className="ad-headline">The Future Belongs to Those Who Adapt</h3>
              <p className="ad-text">
                AI is changing the world of work. Don't be left behind. 
                Invest in your future today.
              </p>
              <div className="ad-buttons">
                <button className="cta-button">Learn New Skills</button>
                <button className="cta-button secondary">Support Fair AI</button>
              </div>
              <p className="ad-tagline">
                Building a future where technology serves everyone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Poem */}
      <section className="section poem-section">
        <div className="container">
          <h2 className="section-title">The Human Cost</h2>
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
              <div className="empty-workplace">
                <p className="image-placeholder">Empty Workplace</p>
                <p className="image-caption">A reminder of what we must preserve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monologue */}
      <section className="section monologue-section">
        <div className="container">
          <h2 className="section-title">A Worker's Voice</h2>
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

      {/* Repetends Section */}
      <section className="section repetends-section">
        <div className="container">
          <h2 className="section-title">Refrains of Progress</h2>
          <div className="repetends-grid">
            <div className="repetend-card">
              <p className="repetend-text">Progress should not come at the cost of people</p>
            </div>
            <div className="repetend-card">
              <p className="repetend-text">Technology should serve humanity—not replace it</p>
            </div>
            <div className="repetend-card">
              <p className="repetend-text">Decent work is a human right, not a privilege</p>
            </div>
            <div className="repetend-card">
              <p className="repetend-text">Education and adaptation are pathways to dignity</p>
            </div>
            <div className="repetend-card">
              <p className="repetend-text">The future of work must include all workers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion & Reflection */}
      <section className="section conclusion-section">
        <div className="container">
          <h2 className="section-title">Final Reflection</h2>
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
