
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface PersonalInfoFieldsProps {
  name: string;
  email: string;
  phone: string;
  neighborhood: string;
  city: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalInfoFields: React.FC<PersonalInfoFieldsProps> = ({
  name,
  email,
  phone,
  neighborhood,
  city,
  handleChange
}) => {
  return (
    <>
      <div>
        <Label htmlFor="name" className="text-brand-darkblue">Nome Completo</Label>
        <Input 
          id="name" 
          name="name" 
          value={name} 
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <Label htmlFor="email" className="text-brand-darkblue">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email"
            value={email} 
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-brand-darkblue">Telefone</Label>
          <Input 
            id="phone" 
            name="phone" 
            value={phone} 
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <Label htmlFor="neighborhood" className="text-brand-darkblue">Bairro</Label>
          <Input 
            id="neighborhood" 
            name="neighborhood" 
            value={neighborhood} 
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="city" className="text-brand-darkblue">Cidade</Label>
          <Input 
            id="city" 
            name="city" 
            value={city} 
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfoFields;
