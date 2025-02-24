import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

export const AppForms = ({children}: Props) => {
  return (
    <form>
      {/* Inputs */}
      {children}
    </form>
  )
}