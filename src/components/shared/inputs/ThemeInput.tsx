import React from 'react';
import {Input} from '@/components/ui/input';
import {ThemeInputProps} from '@/interfaces/form';

export default function ThemeInput({
  name,
  label,
  placeholder,
  className,
}: ThemeInputProps) {
  return (
    <div className="space-y-5">
      {label && (
        <label htmlFor="name" className="text-sm font-medium text-black">
          {label}
        </label>
      )}
      <Input id={name} type="text" placeholder={placeholder} />
    </div>
  );
}
