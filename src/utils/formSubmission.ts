
import { toast } from "sonner";

export interface WorkWithUsFormData {
  name: string;
  email: string;
  phone: string;
  neighborhood: string;
  city: string;
  area: string;
  experience: string;
  otherArea: string;
  resume: File | null;
}

export async function submitWorkWithUsForm(formData: WorkWithUsFormData, endpoint: string) {
  // Create FormData object to send data including the file
  const formDataToSend = new FormData();
  
  // Append form fields to FormData
  formDataToSend.append('name', formData.name);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('phone', formData.phone);
  formDataToSend.append('neighborhood', formData.neighborhood);
  formDataToSend.append('city', formData.city);
  formDataToSend.append('area', formData.area);
  
  if (formData.area === 'outro' && formData.otherArea) {
    formDataToSend.append('otherArea', formData.otherArea);
  }
  
  if (formData.experience) {
    formDataToSend.append('experience', formData.experience);
  }
  
  // Append the file if it exists
  if (formData.resume) {
    formDataToSend.append('resume', formData.resume);
  }
  
  // Send the form data to the webhook endpoint
  const response = await fetch(endpoint, {
    method: 'POST',
    body: formDataToSend,
  });
  
  // Check if the request was successful based on HTTP status
  if (response.ok || response.status === 200) {
    return {
      success: true,
      message: 'Currículo enviado com sucesso!'
    };
  } else {
    const errorData = await response.json().catch(() => ({}));
    return {
      success: false,
      message: errorData.message || 'Erro ao enviar formulário. Tente novamente.'
    };
  }
}
