
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Alert, AlertDescription } from '@/components/ui/alert';
import PersonalInfoFields from '@/components/work-with-us/PersonalInfoFields';
import ProfessionalInfoFields from '@/components/work-with-us/ProfessionalInfoFields';
import SubmitButton from '@/components/work-with-us/SubmitButton';
import SuccessScreen from '@/components/work-with-us/SuccessScreen';
import { submitWorkWithUsForm, WorkWithUsFormData } from '@/utils/formSubmission';

// Updated webhook endpoint
const FORM_ENDPOINT = 'https://webhook.leppsconecta.com.br/webhook/63d9f294-b2d3-473f-8862-36e4add72aad';

const WorkWithUs = () => {
  const [formData, setFormData] = useState<WorkWithUsFormData>({
    name: '',
    email: '',
    phone: '',
    neighborhood: '',
    city: '',
    area: '',
    experience: '',
    otherArea: '',
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherField, setShowOtherField] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, area: value }));
    setShowOtherField(value === 'outro');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const result = await submitWorkWithUsForm(formData, FORM_ENDPOINT);
      
      if (result.success) {
        setShowSuccess(true);
      } else {
        setSubmitError(result.message || 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        toast.error(result.message || 'Ocorreu um erro ao enviar o formulário.');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitError('Ocorreu um erro ao enviar o formulário. Por favor, verifique sua conexão e tente novamente.');
      toast.error('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return <SuccessScreen />;
  }

  return (
    <section className="py-8 bg-brand-lightblue/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="transparent-card rounded-lg p-6 shadow-lg">
            {submitError && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{submitError}</AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <PersonalInfoFields
                name={formData.name}
                email={formData.email}
                phone={formData.phone}
                neighborhood={formData.neighborhood}
                city={formData.city}
                handleChange={handleChange}
              />
              
              <ProfessionalInfoFields
                area={formData.area}
                otherArea={formData.otherArea}
                experience={formData.experience}
                showOtherField={showOtherField}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
                handleFileChange={handleFileChange}
              />
              
              <div>
                <SubmitButton isSubmitting={isSubmitting} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
