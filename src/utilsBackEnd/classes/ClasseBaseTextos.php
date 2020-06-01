<?php

class ClasseBaseTextos
{

    private $textos = [
        "defesa" => [
            "Após revisão no seu benefício, foi identificado indício de irregularidade que consiste na renda superior às regras estabelecidas do BPC, conforme informado pela correspondência enviada e devidamente recebida.",
            "Apreciada a irregularidade, restou incontroversa a renda familiar superior à permitida para o BPC. Segundo o Art. 20. Da Lei 8712/1993. Em razão do exposto, verifica-se que descumpriu o segurado a um quesito fundamental para a continuidade do benefício. Por este motivo, deve ser verificada a presente irregularidade.",
            "Como a renda per capita do grupo familiar é superior a ¼ (um quarto) do salário-mínimo, que atualmente corresponde a R$ 261,25 oportunizamos, em atenção a Ação Civil Pública nº 5044874-22.2013.4.04.7100-RS, comprovar as despesas feitas em razão de sua deficiência, incapacidade ou idade avançada, com: ",
            "a) medicamentos: comprovação de prescrição médica e comprovação do valor mensal gasto;",
            "b) alimentação especial: comprovação de prescrição médica e comprovação de valor mensal gasto;",
            "c) fraldas descartáveis: comprovação do valor mensal gasto;",
            "d) consultas na área de saúde (com profissionais de toda área de saúde): comprovação do valor mensal gasto e além da comprovação das despesas deverá demonstrar, documentalmente, que requereu e teve a prestação negada por órgão da rede pública de saúde com atribuição para fornecimento dos medicamentos, da alimentação especial, das fraldas descartáveis e das consultas na área de saúde, do seu domicílio.",
            "Apresentar certidões de casamento de todos os membros da família casados ou divorciados.",
            "Para o cumprimento apresentar defesa, se faz necessário o agendamento do serviço 'APRESENTAR DEFESA - MOB (ATENDIMENTO PRESENCIAL - AGENDAMENTO)' para o atendimento presencial na Agência. O agendamento poderá ser feito pelo Meu INSS (meu.inss.gov.br) ou Central 135 de segunda a sábado, das 7h às 22h (horário de Brasília) que será liberado para marcação após o encerramento da suspensão do atendimento presencial nas agências do INSS, inicialmente prevista, até 22/06/2020.",
            "O não atendimento desta exigência ou a ausência de manifestação após 30 dias do reinício do prazo (inicialmente previsto para 22/06/2020) poderá acarretar a cessação do presente benefício."
        ],
        "recurso" => [
            "O Instituto Nacional do Seguro Social, por intermédio de Ofício de Defesa, comunicou a V.Sa. sobre a apuração dos indícios de irregularidade no Benefício de Prestação Continuada. ",
            "Facultado o prazo de 30 (trinta) dias para apresentação de defesa escrita, da análise da defesa apresentada observa-se que não houve prova suficiente, ou novos elementos que pudessem modificar a decisão do INSS e caracterizar o direito à manutenção do benefício assistencial. ",
            "Diante do exposto, comunicamos que o benefício assistencial foi suspenso. Sendo assim, em cumprimento ao disposto no artigo 305 do Regulamento da Previdência Social, aprovado pelo Decreto n.º 3.048, de 06/05/99, facultamos a V.Sa. o prazo de 30 (trinta) dias para interposição de recurso ao Conselho de Recursos do Seguro Social, por meio do telefone 135 ou pela internet em gov.br/meuinss. ",
            "Considerando o contido nos artigos 47 e 47-A do Decreto n.º 6.214/07 e §§ 1º e 2º do artigo 41 da Portaria Conjunta n.º 1/MDS/17, em caso de interposição de recurso V.Sa. deverá apresentar os documentos comprobatórios referentes ao grupo e renda familiar, além da inscrição no CADÚnico.",
            "Diante do exposto, comunicamos que o benefício assistencial foi suspenso. Sendo assim, em cumprimento ao disposto no artigo 305 do Regulamento da Previdência Social, aprovado pelo Decreto n.º 3.048, de 06/05/99, facultamos a V.Sa. o prazo de 30 (trinta) dias para interposição de recurso ao Conselho de Recursos do Seguro Social, por meio do telefone 135 ou pela internet em gov.br/meuinss. ",
            "Considerando o contido nos artigos 47 e 47-A do Decreto n.º 6.214/07 e §§ 1º e 2º do artigo 41 da Portaria Conjunta n.º 1/MDS/17, em caso de interposição de recurso V.Sa. deverá apresentar os documentos comprobatórios referentes ao grupo e renda familiar, além da inscrição no CADÚnico.",
            "O dossiê eletrônico relativo ao assunto encontra-se disponível em gov.br/meuinss.",

        ],
        "analisePrevia" => [
            "Trata-se de apuração de indícios de irregularidade detectados em batimento contínuo de informações sobre a renda per capita do grupo familiar do Benefício de Prestação Continuada, conforme avaliação de que trata o art. 11 da Lei n.º 10.666, de 8 de maio de 2003.",
            "Foi identificado que a renda do grupo familiar do(a) titular, Sr(a). do benefício assistencial em análise, contraria o disposto no artigo 20, § 3º, da Lei n.º 8.742/1993, concomitante com o artigo 3º, inciso IV, do Decreto n.º 6.214/2007.",
            "Verificando o CadÚnico, temos que o cadastro é  e a última atualização foi em ",
            "O grupo familiar do(a) titular é composto pelo (a) titular unicamente, sendo que não há outras rendas no CadÚnico ou no CNIS, conforme telas que fizemos anexar. ",
            "Após pesquisas aos sistemas e análise do processo, concluímos pela manutenção regular do Benefício de Prestação Continuada.",
            "O grupo familiar do(a) titular é composto pelo (a) titular unicamente, sendo que não há outras rendas no CadÚnico ou no CNIS, conforme telas que fizemos anexar. ",
            "Diante do exposto, caberá emissão do ofício de regularidade ao interessado, caso tenha sido informado da revisão em momento anterior.",
            "Diante do exposto, caberá emissão do ofício de regularidade ao interessado, caso tenha sido informado da revisão em momento anterior.",
            "Por fim, propomos o arquivamento do processo, sem mais diligências."
        ]
    ];


    public function retornaTextos()
    {
        return json_encode($this->textos);
    }
}
