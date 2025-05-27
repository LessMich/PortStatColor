import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="https://images.pexels.com/photos/8728386/pexels-photo-8728386.jpeg" alt="Audio Engineering" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title gradient-text-hero-title">Michele Tedeschi</h1>
          <h2 className="hero-subtitle gradient-text-hero-subtitle">Sound Designer & Multimedia Audio Specialist</h2>
          <p className="hero-description body-text">
            Crafting immersive audio experiences across films, advertisements, interactive media, and multimedia projects
          </p>
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <div className="container">
          <h2 className="section-title gradient-text-section-title">Featured Work</h2>
          
          <div className="project-grid">
            {/* Project 1 - YouTube Embed */}
            <div className="project-card">
              <div className="project-media">
                <div className="youtube-embed">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Commercial Sound Design Project"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title gradient-text-project-title-1">Commercial Advertisement - Brand Campaign</h3>
                <p className="project-description body-text">
                  Complete sound design and audio post-production for a major brand campaign. Responsibilities included 
                  foley recording, ambient sound design, music selection, and final mix engineering.
                </p>
                <div className="project-tags">
                  <span className="tag">Sound Design</span>
                  <span className="tag">Post-Production</span>
                  <span className="tag">Mixing</span>
                </div>
              </div>
            </div>

            {/* Project 2 - Audio Player */}
            <div className="project-card">
              <div className="project-media">
                <div className="audio-player-container">
                  <img src="https://images.pexels.com/photos/8512209/pexels-photo-8512209.jpeg" alt="Music Production" className="audio-artwork" />
                  <div className="audio-controls">
                    <audio controls className="custom-audio">
                      <source src="#" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title gradient-text-project-title-2">Film Score Composition - "Echoes"</h3>
                <p className="project-description body-text">
                  Original composition and orchestration for an independent film. Created atmospheric themes using 
                  hybrid orchestral and electronic elements, providing emotional depth to key narrative moments.
                </p>
                <div className="project-tags">
                  <span className="tag">Composition</span>
                  <span className="tag">Orchestration</span>
                  <span className="tag">Film Scoring</span>
                </div>
              </div>
            </div>

            {/* Project 3 - YouTube Embed */}
            <div className="project-card">
              <div className="project-media">
                <div className="youtube-embed">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Interactive Media Project"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title gradient-text-project-title-3">Interactive Installation - "Sonic Landscapes"</h3>
                <p className="project-description body-text">
                  Multi-channel audio design for an interactive art installation. Developed reactive soundscapes 
                  that respond to visitor movement, creating an immersive 360-degree audio environment.
                </p>
                <div className="project-tags">
                  <span className="tag">Interactive Audio</span>
                  <span className="tag">Spatial Audio</span>
                  <span className="tag">Installation</span>
                </div>
              </div>
            </div>

            {/* Project 4 - Audio Player */}
            <div className="project-card">
              <div className="project-media">
                <div className="audio-player-container">
                  <img src="https://images.pexels.com/photos/972377/pexels-photo-972377.jpeg" alt="Live Performance" className="audio-artwork" />
                  <div className="audio-controls">
                    <audio controls className="custom-audio">
                      <source src="#" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title gradient-text-project-title-4">Podcast Series Production</h3>
                <p className="project-description body-text">
                  Complete audio production pipeline for a weekly podcast series. Handled recording, editing, 
                  noise reduction, dynamic processing, and final mastering for broadcast distribution.
                </p>
                <div className="project-tags">
                  <span className="tag">Podcast Production</span>
                  <span className="tag">Audio Editing</span>
                  <span className="tag">Mastering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title gradient-text-about-title">About Michele</h2>
              <p className="about-paragraph body-text">
                With over a decade of experience in audio production and sound design, I specialize in creating 
                compelling sonic experiences that enhance storytelling across multiple media formats.
              </p>
              <p className="about-paragraph body-text">
                My work spans from intimate podcast productions to large-scale film soundtracks, always focusing 
                on the emotional impact of sound and its ability to transport listeners into new worlds.
              </p>
              <p className="about-paragraph body-text">
                I believe that great audio design is invisible—it should feel natural and effortless while 
                subtly guiding the audience's emotional journey through expertly crafted sonic landscapes.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1536656930057-9252abf296a5" alt="Professional Audio Equipment" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title gradient-text-17">Services & Expertise</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎬</div>
              <h3 className="service-title gradient-text-18">Film & Video Sound Design</h3>
              <p className="service-description gradient-text-19">
                Complete audio post-production including foley, ambient design, dialogue editing, and final mix
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎵</div>
              <h3 className="service-title gradient-text-20">Music Composition & Production</h3>
              <p className="service-description gradient-text-21">
                Original compositions, arrangements, and full production from concept to final master
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎙️</div>
              <h3 className="service-title gradient-text-22">Podcast & Voice Production</h3>
              <p className="service-description gradient-text-23">
                Professional recording, editing, and post-production for podcasts and voice-over projects
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎮</div>
              <h3 className="service-title gradient-text-24">Interactive & Game Audio</h3>
              <p className="service-description gradient-text-25">
                Dynamic audio systems and immersive soundscapes for games and interactive installations
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎭</div>
              <h3 className="service-title gradient-text-26">Live Performance Audio</h3>
              <p className="service-description gradient-text-27">
                Live sound engineering, mixing, and technical production for events and performances
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📺</div>
              <h3 className="service-title gradient-text-28">Commercial & Advertising</h3>
              <p className="service-description gradient-text-29">
                Brand-focused audio design and production for commercials, promotional content, and marketing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title gradient-text-30">Let's Create Something Amazing</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-text gradient-text-31">
                Ready to elevate your project with professional audio design? Let's discuss how we can bring 
                your vision to life through sound.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label gradient-text-32">Email:</span>
                  <span className="contact-value gradient-text-33">michele@audiodesign.studio</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label gradient-text-34">Phone:</span>
                  <span className="contact-value gradient-text-35">+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label gradient-text-36">Location:</span>
                  <span className="contact-value gradient-text-37">Los Angeles, CA</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Project Type" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Tell me about your project..." className="form-textarea"></textarea>
                </div>
                <button type="submit" className="form-submit gradient-text-38">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text gradient-text-39">
            © 2025 Michele Tedeschi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;