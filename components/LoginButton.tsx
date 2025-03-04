"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LoginButton() {
  const supabase = createClientComponentClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
        scopes: "instagram_basic,instagram_content_publish,pages_show_list",
        queryParams: {
          prompt: "consent",
        },
      },
    });
  };

  return (
    <button
      onClick={handleLogin}
      className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
    >
      Sign in with Facebook
    </button>
  );
}
