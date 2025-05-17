import React from 'react';
import {Textarea} from '@/components/ui/textarea';
import {ThemeTextareaProps} from '@/interfaces/form';

export default function ThemeTextarea({
  name,
  label,
  placeholder,
  className,
}: ThemeTextareaProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="name" className="text-sm font-medium text-black">
        {label}
      </label>
      <Textarea name={name} placeholder={placeholder} />
    </div>
  );
}
