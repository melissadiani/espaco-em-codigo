# Conferência: Por que a gente nunca vê o outro lado da Lua?

Análise de 525 quadros a 12 qps (43.8 s).

## Frase → imagem

| fala | pedaço | pede | visto | |
|---|---|---|---|---|
| A1.1 | Por que a gente nunca vê | lua, terra | lua 100%, terra 100% | ok |
| A1.2 | o outro lado da Lua? | lua, terra | lua 100%, terra 100% | ok |
| A2.1 | Ela mostra sempre | lua, marca | lua 100%, marca 92% | ok |
| A2.2 | esta mesma cara, | marca | marca 100% | ok |
| A2.3 | virada pra Terra. | marca, terra | marca 100%, terra 100% | ok |
| A3.1 | Muita gente acha | lua | lua 100% | ok |
| A3.2 | que ela nem gira. | lua, orbita | lua 100%, orbita 100% | ok |
| B1.1 | Então vamos fazer isso: | lua, orbita | lua 100%, orbita 100% | ok |
| B1.2 | a Lua dá a volta | lua, orbita | lua 100%, orbita 100% | ok |
| B1.3 | sem girar. | lua, marca | lua 100%, marca 100% | ok |
| B2.1 | Olha a marca: | marca | marca 100% | ok |
| B2.2 | na metade do caminho, | marca, orbita | marca 100%, orbita 100% | ok |
| B2.3 | ela aponta pra fora, | marca | marca 100% | ok |
| B3.1 | e a gente ia ver | ladoOculto, terra | ladoOculto 100%, terra 100% | ok |
| B3.2 | o outro lado. | ladoOculto | ladoOculto 100% | ok |
| B4.1 | Mas não é isso | lua, terra | lua 100%, terra 100% | ok |
| B4.2 | que acontece. | lua, terra | lua 100%, terra 100% | ok |
| C1.1 | A Lua gira, sim, | lua, giro | lua 100%, giro 80% | ok |
| C1.2 | só que bem devagar: | giro | giro 100% | ok |
| C2.1 | uma volta em torno de si | giro, lua | giro 100%, lua 100% | ok |
| C2.2 | a cada vinte e sete dias, | giro | giro 100% | ok |
| C3.1 | o mesmo tempo | giro, orbita | giro 100%, orbita 100% | ok |
| C3.2 | da volta | orbita, lua | orbita 100%, lua 100% | ok |
| C3.3 | em torno da Terra. | orbita, terra, marca | orbita 100%, terra 100%, marca 100% | ok |
| D1.1 | E isso não é sorte. | lua, terra | lua 100%, terra 100% | ok |
| D1.2 | A Terra puxou a Lua | puxao, lua | puxao 83%, lua 100% | ok |
| D1.3 | e foi freando o giro dela | puxao, giro | puxao 100%, giro 100% | ok |
| D1.4 | até travar assim. | marca, terra | marca 100%, terra 100% | ok |
| Q1.1 | E se ela girasse | lua, giro | lua 100%, giro 100% | ok |
| Q1.2 | só um pouquinho | giro, marca | giro 100%, marca 0% | ALERTA |
| Q1.3 | mais rápido? | giro, marca | giro 100%, marca 22% | ALERTA |

## Planos

| plano | de | dura | novo | herói | |
|---|---|---|---|---|---|
| p01 | 0.00 | 3.50 | a Lua grande e a Terra embaixo | lua 16% da altura | herói cortado pela borda |
| p02 | 3.50 | 3.83 | a marca acende na cara da Lua, apontando para a Terra | — | ok |
| p03 | 7.33 | 4.33 | a câmera sobe; o anel da órbita aparece | — | ok |
| p04 | 11.67 | 3.42 | a Lua anda pela órbita sem girar | — | ok |
| p05 | 15.08 | 3.25 | na metade da volta, a marca aponta para fora | — | ok |
| p06 | 18.33 | 2.58 | o outro lado (rosa) fica virado para a Terra | — | ok |
| p07 | 20.92 | 2.42 | rebobina: a Lua volta pelo mesmo caminho | — | ok |
| p08 | 23.33 | 3.17 | perto da Lua: ela gira no lugar, a marca dá a volta | lua 9% da altura | ok |
| p09 | 26.50 | 1.50 | a volta inteira em torno de si | lua 13% da altura | ok |
| p10 | 28.00 | 1.92 | recua até ver a órbita de novo | — | ok |
| p11 | 29.92 | 3.25 | a Lua dá a volta girando junto, a marca sempre na Terra | — | ok |
| p12 | 33.17 | 2.58 | a Terra e a Lua de lado, o fio do puxão | — | ok |
| p13 | 35.75 | 3.33 | o giro rápido vai freando até travar | lua 13% da altura | ok |
| p14 | 39.08 | 4.67 | a Lua volta a andar e a marca escorrega para fora | — | ok |

## Resultado

**2 alerta(s)** (corrija antes de mostrar):

- Q1.2 "só um pouquinho": pede "marca" e a tela mostra só 0% do tempo
- Q1.3 "mais rápido?": pede "marca" e a tela mostra só 22% do tempo

5 aviso(s) (confira no quadro):

- p01 (0.0 s): herói cortado pela borda
- p01: "terra" fica atrás da legenda (faixa de 58% a 68% da altura) por 2.9 s. Suba a imagem com "compo": {"y": 0.34}, afaste a câmera, ou, se for de propósito, ponha "veu": true (escurece embaixo) ou "faixa": false nesse plano
- p02: "terra" fica atrás da legenda (faixa de 58% a 68% da altura) por 3.5 s. Suba a imagem com "compo": {"y": 0.34}, afaste a câmera, ou, se for de propósito, ponha "veu": true (escurece embaixo) ou "faixa": false nesse plano
- p03: "terra" fica atrás da legenda (faixa de 58% a 68% da altura) por 0.6 s. Suba a imagem com "compo": {"y": 0.34}, afaste a câmera, ou, se for de propósito, ponha "veu": true (escurece embaixo) ou "faixa": false nesse plano
- p06: "lua" fica atrás da legenda (faixa de 58% a 68% da altura) por 0.8 s. Suba a imagem com "compo": {"y": 0.34}, afaste a câmera, ou, se for de propósito, ponha "veu": true (escurece embaixo) ou "faixa": false nesse plano

Folha de contato (1 quadro por segundo): `saida/folha.jpg`
