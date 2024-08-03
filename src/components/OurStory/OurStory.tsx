import React from 'react';

const OurStory = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center p-4 lg:p-8 space-y-4 lg:space-y-0 lg:space-x-8">
      <div className="w-full lg:w-2/3 text-center lg:text-left space-y-4 lg:space-y-6">
        <h2 className="text-4xl lg:text-6xl font-secondary text-secondary-500">
          Nossa história
        </h2>
        <p className="text-md font-primary text-primary-700">
          {`Começou no dia 24 de junho de 2017. Os chuchus se conheceram na formatura da Carol. Renatinha era convidada e Rodrigo era Bartender. Rodrigo passou o telefone dele para Déborah, outra amiga da Renatinha, mas ela ficou com vergonha de ligar.`}
        </p>
        <p className="text-md font-primary text-primary-700">
          {`No dia seguinte, Deh mandou mensagem para o Rodrigo e passou o telefone da Renatinha pra ele. Aí sim, marcaram de sair e no dia 27 deram o primeiro Beijo!`}
        </p>
        <p className="text-md font-primary text-primary-700">
          {`O namoro demorou um pouco (quase 11 meses) para engatar. Depois de muita insistência do Rodrigo, Renata finalmente aceitou o pedido (aham... tá bom!) Foi um relacionamento recheado de carinho e baranguice desde sempre. No início era o professor de cursinho com a estagiária de arquitetura e hoje é o programador com a arquiteta sênior chique master maravilhosa que constroi os melhores prédios!`}
        </p>
        <p className="text-md font-primary text-primary-700">
          {`O pedido de casamento veio em Janeiro de 2023. Os chuchus viajaram pra Ubatuba e, nos moldes da série favorita da Renatinha, Rodrigo fez o pedido num farol a beira-mar.`}
        </p>
        <p className="text-md font-primary text-primary-700">
          {`E agora, nós estamos oficializando tudo nos preparando pra mais uma linda etapa em nossas vidas: vamos nos mudar pra Portugal e construir nossa vida lá!`}
        </p>
      </div>
      <img
        src={require('../../assets/img/ourStoryPhoto.png')}
        alt="Foto romântica dos chuchus"
        className="w-full lg:w-1/3 h-auto"
      />
    </div>
  );
};

export default OurStory;
