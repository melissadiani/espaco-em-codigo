// gera o plano.json deste projeto (a volta da Lua precisa de muitos pontos): node estudio/espaco/projetos/lua_lado/gera_plano.mjs estudio/espaco/projetos/lua_lado
import fs from 'node:fs';
const dir = process.argv[2];
const L = JSON.parse(fs.readFileSync(dir + '/linhas.json', 'utf8'));
// tempo (s) de uma referência simples "ID" / "ID.n" / "ID.fim" / "ID.n.fim"
const T = (ref) => {
  const [id, a, b] = ref.split('.');
  const f = L.linhas.find((x) => x.id === id);
  if (!a) return f.pedacos[0].t0;
  if (a === 'fim') return f.pedacos.at(-1).t1;
  const p = f.pedacos[+a - 1];
  return b === 'fim' ? p.t1 : p.t0;
};
const R = 2.6; // raio da órbita
const P = (a) => { const r = (a * Math.PI) / 180; return [+(Math.cos(r) * R).toFixed(4), 0, +(Math.sin(r) * R).toFixed(4)]; };
const rel = (base, x) => `${base}+${x.toFixed(3)}`;
const movs = [], giro = [];
// a Lua anda pela órbita de a0 a a1 entre as referências ini e fim (passos de 10°)
function anda(ini, durAte, a0, a1) {
  const t0 = T(ini), dur = typeof durAte === 'number' ? durAte : T(durAte) - t0;
  const n = Math.max(2, Math.round(Math.abs(a1 - a0) / 10));
  for (let i = 1; i <= n; i++) movs.push({ de: rel(ini, (dur * (i - 1)) / n), ate: rel(ini, (dur * i) / n), para: P(a0 + ((a1 - a0) * i) / n), curva: 'linear' });
}
// sem girar: meia volta, de "a Lua dá a volta" até o fim de "na metade do caminho"
anda('B1.2', 'B2.2.fim', 0, 180);
// rebobinar: volta pelo mesmo caminho
anda('B4', 1.3, 180, 0);
// girando junto: uma volta inteira em "o mesmo tempo da volta em torno da Terra"
anda('C3', T('C3.fim') + 0.3 - T('C3'), 0, 360);
// pergunta final: continua andando, e a marca escorrega
anda('Q1', 4.2, 0, 100);
giro.push({ de: 'C1.1', ate: 'C2.fim', para: -360, curva: 'linear' });                 // gira devagar, no lugar
giro.push({ de: 'C3', ate: rel('C3', T('C3.fim') + 0.3 - T('C3')), para: -720, curva: 'linear' }); // gira junto com a volta
giro.push({ de: 'D1.3', ate: 'D1.4.fim', para: -1800, curva: 'chega' });                // rápido no começo, freando até travar
giro.push({ de: 'Q1', ate: 'Q1+4.200', para: -1800 - 100 * 2.2, curva: 'linear' });   // um pouquinho mais rápido: a marca escorrega

const topo = (o = {}) => ({ enquadrar: ['orbita'], ocupa: 0.4, az: 0, el: 72, mm: 35, roll: 90, so_altura: true, ...o });
const lado = (o = {}) => ({ enquadrar: ['terra', 'lua'], ocupa: 0.58, az: 0, el: 8, mm: 35, roll: 90, so_altura: true, ...o });
const plano = {
  titulo: 'Por que a gente nunca vê o outro lado da Lua?',
  estilo: 'vivo',
  luz: 'camera',
  cauda: 1.7,
  objetos: {
    terra: { corpo: 'terra', pos: [0, 0, 0], raio: 1, girar: 0.12 },
    lua: { corpo: 'lua', pos: P(0), raio: 0.6, giro_inicial: 0, giro, movimentos: movs, entra: 'cresce' },
    marca: { tipo: 'pino', em: 'lua', lat: 0, lon: -90, tamanho: 0.17, cor: '#7FE8FF', cor_alta: '#7FE8FF', aparece: 'A2:mostra-0.1' },
    ladoOculto: { tipo: 'pino', em: 'lua', lat: 0, lon: 90, tamanho: 0.17, cor: '#FF8BD8', cor_alta: '#FF8BD8', mostrar: [['B3-0.1', 'B4+0.3']] },
    orbita: { tipo: 'orbita', em: 'terra', raio: R, tracejada: true, destaque: true, aparece: 'A3.2-0.1' },
    giro: { tipo: 'orbita', em: 'lua', raio: 1.0, cor: '#7FE8FF', largura: 2.2, mostrar: [['C1:gira-0.1', 'C3.3'], ['D1.3-0.1', 'D1.4.fim'], ['Q1-0.1', null]] },
    puxao: { tipo: 'seta', de: 'terra', para: 'lua', pos: P(0).map((v) => v / 2), raio: R / 2, largura: 0.07, cor: '#FFFFFF', desenha: ['D1.2', 'D1.2+0.6'], mostrar: [['D1.2', 'D1.4.fim']] },
    bojoLua: { tipo: 'casca', em: 'lua', raio: 0.66, esticar: 1.25, aponta: 'terra', cor: '#FFFFFF', opacidade: 0.18, mostrar: [['D1.2:puxou', 'D1.4.fim']] },
  },
  planos: [
    { de: 'inicio', novo: 'a Lua grande e a Terra embaixo', heroi: 'lua', longo: true, compo: { x: 0.5, y: 0.3 },
      camera: { de: lado({ ocupa: 0.54 }), para: lado({ ocupa: 0.5, az: 4 }), curva: 'suave' } },
    { de: 'A2', novo: 'a marca acende na cara da Lua, apontando para a Terra', longo: true, continuo: true, compo: { x: 0.5, y: 0.3 },
      camera: { de: lado({ ocupa: 0.5, az: 4 }), para: lado({ ocupa: 0.5, az: 12, el: 18 }), curva: 'suave' } },
    { de: 'A3', novo: 'a câmera sobe; o anel da órbita aparece', longo: true, continuo: true, compo: { x: 0.5, y: 0.31 },
      camera: { de: lado({ ocupa: 0.5, az: 12, el: 18 }), para: topo(), curva: 'suave' } },
    { de: 'B1.2', novo: 'a Lua anda pela órbita sem girar', longo: true, continuo: true, compo: { x: 0.5, y: 0.31 },
      camera: { de: topo(), para: topo({ az: -8, el: 76 }), curva: 'meio' } },
    { de: 'B2.2', novo: 'na metade da volta, a marca aponta para fora', longo: true, continuo: true, compo: { x: 0.5, y: 0.31 },
      camera: { de: topo({ az: -8, el: 76 }), para: topo({ az: -4, el: 70, ocupa: 0.4 }), curva: 'meio' } },
    { de: 'B3', novo: 'o outro lado (rosa) fica virado para a Terra', longo: true, continuo: true, compo: { x: 0.5, y: 0.31 },
      camera: { de: topo({ az: -4, el: 70, ocupa: 0.4 }), para: topo({ az: 0, el: 66, ocupa: 0.38 }), curva: 'meio' } },
    { de: 'B4', novo: 'rebobina: a Lua volta pelo mesmo caminho', longo: true, continuo: true, compo: { x: 0.5, y: 0.31 },
      camera: { de: topo({ az: 0, el: 66, ocupa: 0.38 }), para: topo({ az: 6, el: 72 }), curva: 'meio' } },
    { de: 'C1', novo: 'perto da Lua: ela gira no lugar, a marca dá a volta', heroi: 'lua', longo: true, continuo: true, compo: { x: 0.5, y: 0.32 },
      camera: { de: topo({ az: 6, el: 72 }), para: topo({ enquadrar: ['giro', 'terra'], ocupa: 0.5, az: 4, el: 84 }), curva: 'suave' } },
    { de: 'C2', novo: 'a volta inteira em torno de si', heroi: 'lua', longo: true, continuo: true, compo: { x: 0.5, y: 0.32 },
      camera: { de: topo({ enquadrar: ['giro', 'terra'], ocupa: 0.5, az: 4, el: 84 }), para: topo({ enquadrar: ['giro', 'terra'], ocupa: 0.52, az: -4, el: 82 }), curva: 'meio' } },
    { de: 'C2.2', novo: 'recua até ver a órbita de novo', longo: true, continuo: true, compo: { x: 0.5, y: 0.31 },
      camera: { de: topo({ enquadrar: ['giro', 'terra'], ocupa: 0.52, az: -4, el: 82 }), para: topo({ az: 4, el: 74 }), curva: 'suave' } },
    { de: 'C3', novo: 'a Lua dá a volta girando junto, a marca sempre na Terra', longo: true, continuo: true, compo: { x: 0.5, y: 0.31 },
      camera: { de: topo({ az: 4, el: 74 }), para: topo({ az: 8, el: 74 }), curva: 'meio' } },
    { de: 'D1', novo: 'a Terra e a Lua de lado, o fio do puxão', longo: true, continuo: true, compo: { x: 0.5, y: 0.3 },
      camera: { de: topo({ az: 8, el: 74 }), para: lado({ ocupa: 0.5, az: 14, el: 22 }), curva: 'suave' } },
    { de: 'D1.3', novo: 'o giro rápido vai freando até travar', heroi: 'lua', longo: true, continuo: true, compo: { x: 0.5, y: 0.33 },
      camera: { de: lado({ ocupa: 0.5, az: 14, el: 22 }), para: lado({ ocupa: 0.48, az: 20, el: 30 }), curva: 'meio' } },
    { de: 'D1.4', novo: 'a câmera sobe: a Lua travada, a marca na Terra', longo: true, continuo: true, compo: { x: 0.5, y: 0.31 },
      camera: { de: lado({ ocupa: 0.48, az: 20, el: 30 }), para: topo({ az: 10, el: 76 }), curva: 'suave' } },
    { de: 'Q1', novo: 'a Lua volta a andar e a marca escorrega para fora', longo: true, continuo: true, compo: { x: 0.5, y: 0.31 },
      camera: { de: topo({ az: 10, el: 76 }), para: topo({ az: 16, el: 70, ocupa: 0.43 }), curva: 'meio' } },
  ],
  eventos: [
    { tipo: 'som', em: 'A2:cara', nota: 'tique' },
    { tipo: 'som', em: 'B3.2', nota: 'grave' },
    { tipo: 'rebobinar', em: 'B4', ate: 'B4+1.3' },
    { tipo: 'som', em: 'B4', nota: 'plim' },
    { tipo: 'som', em: 'D1', nota: 'plim' },
  ],
};
fs.writeFileSync(dir + '/plano.json', JSON.stringify(plano, null, 1) + '\n');
console.log('movimentos', movs.length, 'planos', plano.planos.length);
