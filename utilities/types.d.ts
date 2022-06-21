import React from 'react';
import { Url } from 'url';

export interface NavLink {
  link: Url;
  label: string;
  icon?: React.ReactNode;
  selected?: boolean;
  nested?: NavLink[];
}

export interface User {
  name: string;
  email: string;
  photoUrl?: string;
}
