import React from 'react'
import { Helmet } from 'react-helmet'

import './../styles/buttons.css'

export const Donate = () => (
  <>
    <Helmet>
      <title>Donate | SaaS Metrics</title>
    </Helmet>

    <div className="page page-about">
      <div className="heading-wrapper">
        <h1 className="mt-4 mb-4">Donate</h1>
      </div>

      <div className="row justify-content-center text-center">
        <div className="col-md-8 col-lg-6">
          <p className="mb-4">This app is completely free. If you want to support us, do a one-time donation, or just be me a coffee, you can use one of the options below.</p>
          <ul>
            <li>
              <a
                href="https://www.buymeacoffee.com/alexdevero"
                target="_blank"
                className="donate-button buy-me-a-coffee-button"
                rel="noopener noreferrer"
              >
                <img src="https://i1.wp.com/cdn.buymeacoffee.com/buttons/default-orange.png?w=640&amp;ssl=1" alt="Buy Me A Coffee" />
              </a>
            </li>

            <li className="mt-2">
              <a href="https://www.patreon.com/alexdevero" target="_blank" className="donate-button patreon-button" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <defs />
                  <path fill="#f96854" d="M0 0h256v256H0V0m60.83 64.01c-.01 42.66-.01 85.32 0 127.98 7.78.01 15.56.01 23.34 0 .01-42.66.01-85.32 0-127.98-7.78-.01-15.56-.02-23.34 0m79.58.42c-13.94 1.58-26.97 9.75-34.5 21.59-7.56 11.29-9.59 25.91-5.99 38.94 2.37 8.89 7.73 16.78 14.38 23.04 11.7 10.33 28.69 14.62 43.78 10.28 11.29-2.7 21-10.25 27.53-19.7 6.58-9.75 9.14-22.01 7.46-33.62-1.75-10.59-6.85-20.75-14.86-27.98-9.86-9.64-24.18-14.02-37.8-12.55z"/>
                  <path fill="#052d49" d="M60.83 64.01c7.78-.02 15.56-.01 23.34 0 .01 42.66.01 85.32 0 127.98-7.78.01-15.56.01-23.34 0-.01-42.66-.01-85.32 0-127.98z"/>
                  <path fill="#fff" d="M140.41 64.43c13.62-1.47 27.94 2.91 37.8 12.55 8.01 7.23 13.11 17.39 14.86 27.98 1.68 11.61-.88 23.87-7.46 33.62-6.53 9.45-16.24 17-27.53 19.7-15.09 4.34-32.08.05-43.78-10.28-6.65-6.26-12.01-14.15-14.38-23.04-3.6-13.03-1.57-27.65 5.99-38.94 7.53-11.84 20.56-20.01 34.5-21.59z"/>
                </svg>
                Become a Patron
              </a>
            </li>

            <li className="mt-2">
              <a
                href="http://paypal.me/alexdevero?utm_source=unp&amp;utm_medium=email&amp;utm_campaign=PPC000628&amp;utm_unptid=63dc3b5a-8e0e-11ea-ba86-b875c05e71f5&amp;ppid=PPC000628&amp;cnac=CZ&amp;rsta=en_AD&amp;cust=PTDKFX49UKXUE&amp;unptid=63dc3b5a-8e0e-11ea-ba86-b875c05e71f5&amp;calc=ec311ad9b1bab&amp;unp_tpcid=ppme-social-user-profile-created&amp;page=main:email:PPC000628:::&amp;pgrp=main:email&amp;e=cl&amp;mchn=em&amp;s=ci&amp;mail=sys&amp;xt=Ctrl_EmailConfirmation_FooterUpdate"
                target="_blank"
                className="donate-button paypal-button"
                rel="noopener noreferrer"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>PayPal icon</title>
                  <path d="M6.908 24H3.804c-.664 0-1.086-.529-.936-1.18l.149-.674h2.071c.666 0 1.336-.533 1.482-1.182l1.064-4.592c.15-.648.816-1.18 1.48-1.18h.883c3.789 0 6.734-.779 8.84-2.34s3.16-3.6 3.16-6.135c0-1.125-.195-2.055-.588-2.789 0-.016-.016-.031-.016-.046l.135.075c.75.465 1.32 1.064 1.711 1.814.404.75.598 1.68.598 2.791 0 2.535-1.049 4.574-3.164 6.135-2.1 1.545-5.055 2.324-8.834 2.324h-.9c-.66 0-1.334.525-1.484 1.186L8.39 22.812c-.149.645-.81 1.17-1.47 1.17L6.908 24zm-2.677-2.695H1.126c-.663 0-1.084-.529-.936-1.18L4.563 1.182C4.714.529 5.378 0 6.044 0h6.465c1.395 0 2.609.098 3.648.289 1.035.189 1.92.519 2.684.99.736.465 1.322 1.072 1.697 1.818.389.748.584 1.68.584 2.797 0 2.535-1.051 4.574-3.164 6.119-2.1 1.561-5.056 2.326-8.836 2.326h-.883c-.66 0-1.328.524-1.478 1.169L5.7 20.097c-.149.646-.817 1.172-1.485 1.172l.016.036zm7.446-17.369h-1.014c-.666 0-1.332.529-1.48 1.178l-.93 4.02c-.15.648.27 1.179.93 1.179h.766c1.664 0 2.97-.343 3.9-1.021.929-.686 1.395-1.654 1.395-2.912 0-.83-.301-1.445-.9-1.84-.6-.404-1.5-.605-2.686-.605l.019.001z" />
                </svg>
                Donate via Paypal
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
)
