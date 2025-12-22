
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProfessionalInfoFieldsProps {
  area: string;
  otherArea: string;
  experience: string;
  showOtherField: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (value: string) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfessionalInfoFields: React.FC<ProfessionalInfoFieldsProps> = ({
  area,
  otherArea,
  experience,
  showOtherField,
  handleChange,
  handleSelectChange,
  handleFileChange
}) => {
  return (
    <>
      <div>
        <Label htmlFor="area" className="text-brand-darkblue">Área de Interesse</Label>
        <Select value={area} onValueChange={handleSelectChange}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Selecione uma área" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vendas">Vendas</SelectItem>
            <SelectItem value="administrativo">Administrativo</SelectItem>
            <SelectItem value="outro">Outro</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {showOtherField && (
        <div>
          <Label htmlFor="otherArea" className="text-brand-darkblue">Qual área?</Label>
          <Input 
            id="otherArea" 
            name="otherArea" 
            value={otherArea} 
            onChange={handleChange}
            required
            className="mt-1"
            placeholder="Digite a área de interesse"
          />
        </div>
      )}
      
      <div>
        <Label htmlFor="experience" className="text-brand-darkblue">Fale um pouco sobre suas experiências</Label>
        <Textarea 
          id="experience" 
          name="experience" 
          value={experience} 
          onChange={handleChange}
          className="mt-1 min-h-[80px]"
        />
      </div>
      
      <div>
        <Label htmlFor="resume" className="text-brand-darkblue">Currículo ou Foto (PDF, DOC, DOCX, JPEG, PNG)</Label>
        <Input 
          id="resume" 
          name="resume" 
          type="file" 
          onChange={handleFileChange}
          required
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          className="mt-1"
        />
        <p className="text-xs text-gray-500 mt-1">Tamanho máximo: 5MB</p>
      </div>
    </>
  );
};

export default ProfessionalInfoFields;
