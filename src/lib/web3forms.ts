/**
 * Web3Forms Client Integration Helper
 * Official API documentation: https://docs.web3forms.com
 */

export interface Web3FormsPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Web3FormsResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

// Configured Web3Forms Access Key with environment variable fallback
export const WEB3FORMS_ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ||
  "a2281c1b-17d6-4480-b3bd-b984e1a1311f";

/**
 * Submit contact form data to Web3Forms API
 */
export const submitWeb3Form = async (
  payload: Web3FormsPayload
): Promise<Web3FormsResponse> => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        message: payload.message,
        from_name: `PortfolioVerse - ${payload.name}`,
      }),
    });

    const data: Web3FormsResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Web3Forms submission network error:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Unable to reach the submission server. Please check your network connection and try again.",
    };
  }
};
