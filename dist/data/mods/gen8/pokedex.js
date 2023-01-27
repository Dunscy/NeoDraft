"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var pokedex_exports = {};
__export(pokedex_exports, {
  Pokedex: () => Pokedex
});
module.exports = __toCommonJS(pokedex_exports);
const Pokedex = {
  growlithehisui: {
    inherit: true,
    abilities: { 0: "Intimidate", 1: "Flash Fire", H: "Justified" }
  },
  arcaninehisui: {
    inherit: true,
    abilities: { 0: "Intimidate", 1: "Flash Fire", H: "Justified" }
  },
  typhlosionhisui: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Flash Fire" }
  },
  sneaselhisui: {
    inherit: true,
    abilities: { 0: "Inner Focus", 1: "Keen Eye", H: "Poison Touch" }
  },
  gallade: {
    inherit: true,
    abilities: { 0: "Steadfast", H: "Justified" }
  },
  giratinaorigin: {
    inherit: true,
    requiredItem: "Griseous Orb"
  },
  cresselia: {
    inherit: true,
    baseStats: { hp: 120, atk: 70, def: 120, spa: 75, spd: 130, spe: 85 }
  },
  samurotthisui: {
    inherit: true,
    abilities: { 0: "Torrent", H: "Shell Armor" }
  },
  zoroarkhisui: {
    inherit: true,
    baseStats: { hp: 55, atk: 100, def: 60, spa: 125, spd: 60, spe: 110 }
  },
  braviaryhisui: {
    inherit: true,
    abilities: { 0: "Keen Eye", 1: "Sheer Force", H: "Defiant" }
  },
  spewpa: {
    inherit: true,
    evos: ["Vivillon"]
  },
  vivillonfancy: {
    inherit: true,
    abilities: { 0: "Shield Dust", 1: "Compound Eyes" },
    prevo: void 0,
    evoLevel: void 0
  },
  sliggoohisui: {
    inherit: true,
    abilities: { 0: "Sap Sipper", 1: "Overcoat", H: "Gooey" }
  },
  goodrahisui: {
    inherit: true,
    abilities: { 0: "Sap Sipper", 1: "Overcoat", H: "Gooey" }
  },
  decidueyehisui: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Long Reach" }
  },
  zacian: {
    inherit: true,
    baseStats: { hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138 }
  },
  zaciancrowned: {
    inherit: true,
    baseStats: { hp: 92, atk: 170, def: 115, spa: 80, spd: 115, spe: 148 }
  },
  zamazenta: {
    inherit: true,
    baseStats: { hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138 }
  },
  zamazentacrowned: {
    inherit: true,
    baseStats: { hp: 92, atk: 130, def: 145, spa: 80, spd: 145, spe: 128 }
  },
  kubfu: {
    inherit: true,
    abilities: { 0: "Inner Focus" }
  },
  kleavor: {
    inherit: true,
    baseStats: { hp: 70, atk: 135, def: 95, spa: 45, spd: 70, spe: 85 },
    abilities: { 0: "Swarm", 1: "Sheer Force", H: "Steadfast" }
  },
  basculegion: {
    inherit: true,
    abilities: { 0: "Rattled", 1: "Adaptability", H: "Mold Breaker" }
  },
  basculegionf: {
    inherit: true,
    abilities: { 0: "Rattled", 1: "Adaptability", H: "Mold Breaker" }
  },
  sneasler: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Poison Touch" },
    evoType: "useItem",
    evoItem: "Razor Claw",
    evoCondition: "during the day"
  },
  enamorus: {
    inherit: true,
    abilities: { 0: "Healer", H: "Contrary" }
  }
};
//# sourceMappingURL=pokedex.js.map
