// hooks/useRecaptcha.ts
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface UseRecaptchaReturn {
  executeRecaptcha: () => Promise<string | null>;
  isVerifying: boolean;
  error: Error | null;
}

export function useRecaptcha(): UseRecaptchaReturn {
  const { executeRecaptcha: executeGoogleRecaptcha } = useGoogleReCaptcha();
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const executeRecaptcha = async (): Promise<string | null> => {
    if (!executeGoogleRecaptcha) {
      setError(new Error('reCAPTCHA no está disponible'));
      return null;
    }

    setIsVerifying(true);
    setError(null);

    try {
      const token = await executeGoogleRecaptcha('submit');
      return token;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error al verificar reCAPTCHA'));
      return null;
    } finally {
      setIsVerifying(false);
    }
  };

  return { executeRecaptcha, isVerifying, error };
}