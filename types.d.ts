import React from 'react';

export interface NavLink {
  link: string;
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

export interface TabItem {
  label: string;
  component: React.ReactNode;
}

export interface HomeTabListItem {
  label: string;
  link: string;
}
