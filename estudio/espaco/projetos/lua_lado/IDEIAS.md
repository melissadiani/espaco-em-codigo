# Por que a gente nunca vê o outro lado da Lua?

**Pergunta-mãe:** Por que a gente nunca vê o outro lado da Lua?

**A resposta que qualquer pessoa repete:** a Lua gira, sim, mas leva o mesmo tempo para girar em torno de si e para dar a volta na Terra (uns vinte e sete dias). Por isso ela fica sempre com a mesma cara virada para cá. Foi a própria Terra que freou a Lua até ela travar assim.

**O erro que o vídeo desfaz:** "a Lua não gira". É o contrário: se ela não girasse, a gente veria o outro lado.

## Palco (um só)

A Terra embaixo e a Lua em cima, no mesmo quadro do primeiro ao último segundo. Na Lua, uma **marca** (um pino curto e uma mancha na face) que aponta para a Terra. A órbita é um anel fino em volta da Terra. A direção da tela é fixa: a Terra fica sempre embaixo e a câmera nunca troca de lado.

A hipótese "a Lua não gira" é mostrada e desfeita no mesmo palco, com o evento `rebobinar` entre as duas versões.

## Corrente de perguntas

- Mãe (abre em A1, fecha em C3): por que nunca o outro lado?
- A3 abre "será que ela não gira?" → B3 mostra que, sem girar, o outro lado apareceria → C1 responde "gira, sim".
- C3 abre "e por que os dois tempos são iguais?" (gancho "Isso não é sorte") → D1 responde (a Terra freou a Lua).
- Q1 deixa a última no ar: e se ela girasse um pouco mais rápido?

## Três curiosidades reais (com fonte no `roteiro.json`)

1. A Lua gira em torno de si em uns vinte e sete dias, o mesmo tempo da volta em torno da Terra (27,3 dias). **Entra no vídeo.**
2. O travamento veio do puxão de maré da Terra, que freou o giro da Lua no começo da história dela. **Entra no vídeo.**
3. O outro lado só foi fotografado em 1959, pela sonda soviética Luna 3, e ele não é escuro: pega sol igual a este. **Fica fora** (pediria uma sonda e o Sol no palco; serve para um vídeo próprio sobre o "lado escuro").

Bônus honesto, fora da fala: por causa da libração, daqui da Terra a gente chega a ver uns 59% da superfície ao longo do mês, não exatamente 50%.

## Roteiro de imagens (cada linha acrescenta uma coisa ao palco)

| Fala | O que entra na tela | O que a pessoa entende |
|---|---|---|
| A1 "Por que a gente nunca vê o outro lado da Lua?" | a Terra embaixo, a Lua grande em cima | a pergunta, com os dois objetos dela |
| A2 "Ela mostra sempre esta mesma cara, virada pra Terra." | a marca acende na face da Lua, apontando para a Terra | a "cara" é a marca |
| A3 "Muita gente acha que ela nem gira." | a Lua fica quieta, a câmera recua e o anel da órbita aparece | a hipótese |
| B1 "Então vamos fazer isso: a Lua dá a volta sem girar." | a Lua anda pela órbita, e a marca continua apontando para o mesmo lado da tela | a Lua sem girar |
| B2 "Olha a marca: na metade do caminho, ela aponta pra fora," | a Lua no outro lado da órbita, com a marca apontando para longe da Terra | a marca fugiu |
| B3 "e a gente ia ver o outro lado." | a face escondida (com outra textura e mais crateras) acende, virada para a Terra | sem girar, o outro lado aparece |
| B4 "Mas não é isso que acontece." | rebobina: a Lua volta para o começo (plim) | a hipótese está errada |
| C1 "A Lua gira, sim, só que bem devagar:" | uma seta curva em volta da Lua mostra o giro | ela gira |
| C2 "uma volta em torno de si a cada vinte e sete dias," | a seta dá uma volta inteira | o tempo do giro |
| C3 "o mesmo tempo da volta em torno da Terra." | a Lua anda pela órbita girando junto, e a marca aponta sempre para a Terra | os dois tempos iguais = mesma cara |
| D1 "E isso não é sorte. A Terra puxou a Lua e foi freando o giro dela até travar assim." | gancho com plim; uma seta da Terra até a Lua; a seta do giro, rápida no começo (rebobinar até o passado), vai desacelerando até ficar igual à órbita | quem travou foi a Terra |
| Q1 "E se ela girasse só um pouquinho mais rápido?" | a marca começa a escorregar para fora da Terra; a câmera continua andando | a pergunta fica no ar |

## Honestidade

- A Terra e a Lua estão fora de escala de tamanho e de distância (é um diagrama). A órbita aparece bem menor do que a real.
- "Freou até travar" resume o travamento por maré: aconteceu cedo, na história da Lua, e não é preciso dizer "bilhões de anos" para não trocar a idade do travamento.
- "Vinte e sete dias" é o período sideral (27,3 dias). O mês das fases da Lua (29,5 dias) é outra conta e não entra na fala.
- "Nunca vê o outro lado": por causa da libração, a gente vê uns 59% ao longo do tempo. A fala não diz "exatamente metade".

## Rascunho

`npm run video -- rascunho lua_lado` (voz-guia espeak-ng). 43,8 s, 15 planos longos num palco só, **0 alertas e 0 avisos** na conferência. O plano é gerado por `gera_plano.mjs` (a volta da Lua é feita de pontos a cada 10° na órbita, e o giro da Lua acompanha o ângulo para a marca apontar sempre para a Terra).

A conferir no vídeo: o último segundo da cauda deixa a Lua encostando na borda direita, e as duas trocas de vista (de lado para de cima, em A3 e D1.4) precisam ser vistas em movimento.
