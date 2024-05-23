import React from 'react'
import "./videoPage.css"
const VideoPage = () => {
  return (
    <div>
      <section 
        id="shopify-section-template--15090753830955__bf7bf20b-a98f-4fa9-8082-98b59829364a" 
        className="shopify-section section"
        style={{
          '--section-padding-top': '80px',
          '--section-padding-bottom': '80px',
          '--color-overlay-opacity': '0.0',
          '--color-overlay': '0, 0, 0',
          '--color-foreground': '255, 255, 255',
          '--color-link': 'var(--color-foreground)',
          '--color-border': 'var(--color-foreground)',
          '--color-heading': 'var(--color-foreground)',
          '--color-button-text': 'var(--color-overlay)',
          '--color-button-border': 'var(--color-foreground)',
          '--color-button-background': 'var(--color-foreground)',
          '--color-shadow': 'var(--color-foreground)',
          '--shadow-opacity': '0.3',
        }}
      >
        <style data-shopify="">
          {`@media (max-width:767px) {
            #shopify-section-template--15090753830955__bf7bf20b-a98f-4fa9-8082-98b59829364a .section--padding {
              --section-padding-top: 34px;
              --section-padding-bottom: 36px;
            }
          }`}
        </style>
        <link 
          rel="stylesheet" 
          href="//www.pebblecart.com/cdn/shop/t/56/assets/section-image-banner.css?v=179376742138879475861676546112" 
          as="style" 
          onLoad="this.onload=null;this.rel='stylesheet'" 
        />
        <link 
          rel="stylesheet" 
          href="//www.pebblecart.com/cdn/shop/t/56/assets/section-video-hero.css?v=120825481057891155841676546111" 
          as="style" 
          onLoad="this.onload=null;this.rel='stylesheet'" 
        />
  
        <div className="video--wrap-hero section--padding">
          <div className="page-width">
            <div className="title-wrapper">
              <h3>EJ Luxury Edition</h3>
            </div>
            <div id="Banner-template--15090753830955__bf7bf20b-a98f-4fa9-8082-98b59829364a" className="banner banner--mobile-bottom video-interactable">
              <div className="banner__media">
                <use-animate 
                  data-animate="zoom-fade" 
                  className="media-wrapper media-wrapper--large" 
                  loaded="true" 
                  animate=""
                >
                  <div className="image-animate media media--100vh media-mobile--250px">
                    <video-section 
                      data-type="youtube" 
                      data-video-id="KV6hyaNrbsc?feature=shared" 
                      controls=""
                    >
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen="" 
                        allow="accelerometer; &autoplay = 1; mute = 1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        title="Electronic Junction Presents: Game of Thrones-Inspired Limited Edition Smartwatch" 
                        width="640" 
                        height="360" 
                        src="https://www.youtube.com/embed/KV6hyaNrbsc?feature=shared?autoplay=1&mute=1&loop=1&color=white&controls=0&fs=false&rel=0&height=100%25&width=100%25&iv_load_policy=3&html5=1&loop=1&playsinline=1&modestbranding=1&disablekb=1&enablejsapi=1&origin=https%3A%2F%2Fwww.pebblecart.com&widgetid=1&autoplay=1&mute=1&loop=1autoplay=0&showinfo=0&controls=0" 
                        id="widget2" 
                        data-gtm-yt-inspected-22="true" 
                        tabIndex="-1"
                      />
                    </video-section>
                  </div>
                </use-animate>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VideoPage
