// Contact form utilities for mailto functionality
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const createMailtoLink = (
  formData: ContactFormData,
  recipientEmail: string
): string => {
  const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
  const body = encodeURIComponent(
    `Hi Pratik,

I'm reaching out through your portfolio website.
${formData.message}

---
Best regards,
${formData.name}

Sent from: ${window.location.origin}
Date: ${new Date().toLocaleString()}
`
  );

  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
};

export const openEmailClient = (
  formData: ContactFormData,
  recipientEmail: string
): void => {
  const mailtoLink = createMailtoLink(formData, recipientEmail);
  window.open(mailtoLink, '_blank');
};

// Form validation
export const validateContactForm = (formData: ContactFormData): string[] => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('Name is required');
  }

  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!isValidEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.subject.trim()) {
    errors.push('Subject is required');
  }

  if (!formData.message.trim()) {
    errors.push('Message is required');
  }

  if (formData.message.length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return errors;
};

// Email validation helper
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
