import React from 'react';
import { Gift } from '../../helpers/types';

const GiftDescription: React.FC<Pick<Gift, 'name' | 'cost'>> = ({
  name,
  cost,
}) => {
  return (
    <p className="text-sm text-primary-500">
      Apesar da foto de <b>{name}</b>, você estará apenas nos dando{' '}
      <b>${cost}</b> reais.
    </p>
  );
};

export default GiftDescription;
