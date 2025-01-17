// hooks/useContactForm.ts
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/shemas/contactForm';
import { useRecaptcha } from '@/hooks/useRecaptcha';

interface UseContactFormReturn {
  form: ReturnType<typeof useForm<ContactFormData>>;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  onSubmit: (values: ContactFormData) => Promise<void>;
}

export function useContactForm(): UseContactFormReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { executeRecaptcha } = useRecaptcha();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      honeypot: '',
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const token = await executeRecaptcha();
      if (!token) {
        throw new Error('No se pudo verificar reCAPTCHA');
      }

      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, token }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      setIsError(true);
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    isSuccess,
    isError,
    onSubmit,
  };
}