"use client";

import Script from "next/script";

export default function FacebookSDK() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.fbAsyncInit = function() {
              FB.init({
                appId: '${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}',
                cookie: true,
                xfbml: true,
                version: 'v18.0'
              });
              FB.AppEvents.logPageView();
            };
          `,
        }}
      />
      <Script
        strategy="lazyOnload"
        src="https://connect.facebook.net/en_US/sdk.js"
      />
    </>
  );
}
