import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  serviceId: 'service_lqn6pjf',
  templateId: 'template_6kikmoc',
  publicKey: 'e4SFhahlqo1bWOVHP',
};

// Initialize EmailJS with public key
emailjs.init(EMAILJS_CONFIG.publicKey);

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Send contact form email via EmailJS
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};
