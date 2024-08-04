import React from 'react';
import { Gift } from '../../helpers/types';

const GiftDescription: React.FC<Pick<Gift, 'name' | 'cost'>> = ({
  name,
  cost,
}) => {
  return cost !== 'custom' ? (
    <p className="text-sm text-primary-500">
      Escolhendo <b>{name}</b>, você nos fará um PIX de <b>${cost}</b> reais.
    </p>
  ) : (
    <p className="text-sm text-primary-500">
      Personalize o valor do seu presente nas configurações de pix do seu banco
    </p>
  );
};

export default GiftDescription;
