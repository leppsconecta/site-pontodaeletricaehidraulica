
import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <Button 
      type="submit" 
      className="w-full bg-brand-darkblue hover:bg-brand-darkblue/90 text-white"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      ) : 'Enviar Currículo'}
    </Button>
  );
};

export default SubmitButton;
