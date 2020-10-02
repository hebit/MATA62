export enum CompaniesNacionality {
  BRASILEIRA,
  ESTRANGEIRA,
  NAO_INFORMADO,
  ANTILHAS_HOLANDESAS,
  ARUBA,
}

type Initials = keyof typeof companies;

type CompanyWithInitials = {
  initials: Initials;
  name: string;
  nacionality: CompaniesNacionality;
};

export const companies = {
  AAL: {
    name: "AMERICAN AIRLINES INC",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  ABD: {
    name: "AIR ATLANTA ICELANDIC",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  ABJ: { name: "ABAETE", nacionality: CompaniesNacionality.BRASILEIRA },
  ABZ: { name: "ATA BRASIL", nacionality: CompaniesNacionality.BRASILEIRA },
  ACA: { name: "AIR CANADA", nacionality: CompaniesNacionality.ESTRANGEIRA },
  AEA: {
    name: "AIR EUROPA S/A",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  AEY: { name: "AIR ITALY SPA", nacionality: CompaniesNacionality.ESTRANGEIRA },
  AFL: {
    name: "AEROFLOT AEROLINEAS INT.RUSSIA",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  AFR: { name: "AIR FRANCE", nacionality: CompaniesNacionality.ESTRANGEIRA },
  ALV: {
    name: " ALAS DE VENEZUELA",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  AMG: { name: "AIR MINAS", nacionality: CompaniesNacionality.BRASILEIRA },
  AMX: { name: "AEROMEXICO", nacionality: CompaniesNacionality.ESTRANGEIRA },
  APP: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  APW: { name: "ARROW AIR INC", nacionality: CompaniesNacionality.ESTRANGEIRA },
  ARE: {
    name: "AIRES AEROVIAS DE INTEGRACION",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  ARG: {
    name: "AEROLINEAS ARGENTINAS",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  ARU: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  AUT: {
    name: "AUSTRAL LÖNEAS AREAS CIELOS DEL SUR S.A",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  AVA: { name: "AVIANCA", nacionality: CompaniesNacionality.ESTRANGEIRA },
  AWE: {
    name: "US AIRWAYS INC.",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  AZA: { name: "ALITALIA", nacionality: CompaniesNacionality.ESTRANGEIRA },
  AZU: { name: "AZUL", nacionality: CompaniesNacionality.BRASILEIRA },
  BAW: {
    name: "BRITISH AIRWAYS PLC",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  BCA: { name: "BRASMEX", nacionality: CompaniesNacionality.BRASILEIRA },
  BET: { name: "BETA", nacionality: CompaniesNacionality.BRASILEIRA },
  BLC: {
    name: "TAM-TRANSPORTE AEREOS MERIDIONAIS",
    nacionality: CompaniesNacionality.BRASILEIRA,
  },
  BOV: {
    name: "BOLIVIANA DE AVIACION",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  BQB: {
    name: "BQB LINEAS AEREAS",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  BRB: { name: "BRA", nacionality: CompaniesNacionality.BRASILEIRA },
  BSI: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  CCA: { name: "AIR CHINA", nacionality: CompaniesNacionality.ESTRANGEIRA },
  CDN: { name: "CANADIAN", nacionality: CompaniesNacionality.ESTRANGEIRA },
  CFG: {
    name: "CONDOR FLUGDINST",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  CIU: {
    name: "CIELOS DEL PERU",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  CKS: {
    name: "KALITTA AIR LLC",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  CLX: {
    name: "CARGOLUX AIRLINES",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  CMP: {
    name: "COPA -COMPANIA PANAMENA DE AVIACION",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  COA: {
    name: "CONTINENTAL AIRLINES INC",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  CRX: { name: "CROSSAIR LTD", nacionality: CompaniesNacionality.ESTRANGEIRA },
  CUB: {
    name: "EMP.CONSOLIDADA CUBANA",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  CWC: { name: "CHALLENGE", nacionality: CompaniesNacionality.ESTRANGEIRA },
  DAL: {
    name: "DELTA AIRLINES",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  DLH: { name: "LUFTHANSA", nacionality: CompaniesNacionality.ESTRANGEIRA },
  DRD: {
    name: "AIR MADRID LINEAS AEREAS",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  DSM: {
    name: "LAN ARGENTINA S/A",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  DTA: {
    name: "TAAG LINHAS AEREAS DE ANGOLA",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  EAE: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  EDW: {
    name: "EDELWEISS AIR AG",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  EEA: {
    name: "ECUATORIANA DE AVIACION S/A",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  EIA: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  ELY: {
    name: "EL AL ISRAEL AIRLINES LTDA",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  ETD: {
    name: "ETIHAD AIRWAYS",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  ETH: {
    name: "ETHIOPIAN AIR LINES",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  EUU: {
    name: "AIR EURO AMERICA",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  FDX: {
    name: "FEDERAL EXPRESS",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  FWI: {
    name: "AIR CARAIBES S.A.",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  FYW: { name: "FLYWAYS LINHAS", nacionality: CompaniesNacionality.BRASILEIRA },
  GEC: {
    name: "LUFTHANSA CARGO AG",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  GL0: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  GL2: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  GLO: { name: "GOL", nacionality: CompaniesNacionality.BRASILEIRA },
  GPT: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  GTI: { name: "ATLAS AIR INC", nacionality: CompaniesNacionality.ESTRANGEIRA },
  IBE: { name: "IBERIA", nacionality: CompaniesNacionality.ESTRANGEIRA },
  ICV: {
    name: "CARGOLUX ITALIA",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  INC: {
    name: "INSEL AIR INTERNATIONAL B.V.",
    nacionality: CompaniesNacionality.ANTILHAS_HOLANDESAS,
  },
  ITB: { name: "INTERBRASIL", nacionality: CompaniesNacionality.BRASILEIRA },
  ITI: {
    name: "ITAPEMIRIM TRANSPORTES REGIONAIS SA",
    nacionality: CompaniesNacionality.BRASILEIRA,
  },
  ITM: {
    name: "ITAPEMIRIM TRANSPORTES AEREOS S.A.",
    nacionality: CompaniesNacionality.BRASILEIRA,
  },
  IWD: {
    name: "IBERWORLD AIRLINES",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  JAL: {
    name: "JAPAN AIRLINES",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  JKK: { name: "SPANAIR", nacionality: CompaniesNacionality.ESTRANGEIRA },
  KAL: {
    name: "KOREAN AIRLINES",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  KLM: {
    name: "KLM ROYAL DUTCH AIRLINES",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  LAE: {
    name: "LINEA AEREA CARGUERA DE COLOMBIA S.A.",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  LAN: { name: "LAN CHILE", nacionality: CompaniesNacionality.ESTRANGEIRA },
  LAP: {
    name: "TAM TRANSP.AR.DEL.MERCOS.",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  LCO: { name: "LAN CARGO S.A", nacionality: CompaniesNacionality.ESTRANGEIRA },
  LDI: { name: "LAUDA AIR SPA", nacionality: CompaniesNacionality.ESTRANGEIRA },
  LLB: {
    name: "LLOYD AEREO BOLIVIANO",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  LPE: { name: "LAN PERU S/A", nacionality: CompaniesNacionality.ESTRANGEIRA },
  LPR: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  LRC: {
    name: "LINEAS AE.COSTARRICENCES S/A",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  LTG: { name: "ABSA", nacionality: CompaniesNacionality.BRASILEIRA },
  LVG: {
    name: "LIVINGSTON S.P.A.",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  LXP: {
    name: "TRANSPORTES AREOS(LANEXPRESS)",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  MAA: {
    name: "AEROTRANSPORTES MAS DE CARGA S.A. DE C.V.",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  MEA: {
    name: "MIDDLE EAST A.AIRLIBAN",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  MEK: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  MEL: { name: "MEGA", nacionality: CompaniesNacionality.BRASILEIRA },
  MKA: { name: "MK AIRLINE", nacionality: CompaniesNacionality.ESTRANGEIRA },
  MPH: {
    name: "MARTINAIR HOLLAND N.V.",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  MPX: { name: "AEROMEXPRESS", nacionality: CompaniesNacionality.ESTRANGEIRA },
  msq: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  MSQ: { name: "META", nacionality: CompaniesNacionality.BRASILEIRA },
  MST: { name: "MASTER TOP", nacionality: CompaniesNacionality.BRASILEIRA },
  MWM: {
    name: "MODERN TRANSPOR",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  MXA: {
    name: "COMPANHIA MEXICANA DE AVIACION S.A. DE C.V.",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  NCT: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  NES: { name: "NORDESTE", nacionality: CompaniesNacionality.BRASILEIRA },
  NHG: { name: "NHT", nacionality: CompaniesNacionality.BRASILEIRA },
  NHT: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  NLU: { name: "INSEL AIR ARUBA N.V", nacionality: CompaniesNacionality.ARUBA },
  NRA: { name: "NO AR", nacionality: CompaniesNacionality.BRASILEIRA },
  OCA: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  ONE: { name: "AVIANCA BRASIL", nacionality: CompaniesNacionality.BRASILEIRA },
  PAC: {
    name: "POLAR AIR CARGO INC.",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  PAM: {
    name: "MAP LINHAS AEREAS",
    nacionality: CompaniesNacionality.BRASILEIRA,
  },
  PEP: { name: "PENTA", nacionality: CompaniesNacionality.BRASILEIRA },
  PLI: {
    name: "AEROPERU EMP.T.A.DEL PERU",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  PLY: { name: "PUMA AIR", nacionality: CompaniesNacionality.BRASILEIRA },
  PTB: { name: "PASSAREDO", nacionality: CompaniesNacionality.BRASILEIRA },
  PTN: { name: "PANTANAL", nacionality: CompaniesNacionality.BRASILEIRA },
  PUA: { name: "PLUNA", nacionality: CompaniesNacionality.ESTRANGEIRA },
  QTR: { name: "QATAR AIRWAYS", nacionality: CompaniesNacionality.ESTRANGEIRA },
  RAM: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  RDN: {
    name: "DINAR LÖNEAS AREAS",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  RIO: {
    name: "RIO LINHAS AEREAS",
    nacionality: CompaniesNacionality.BRASILEIRA,
  },
  RLE: { name: "RICO", nacionality: CompaniesNacionality.BRASILEIRA },
  RLR: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  ROI: {
    name: "AVIOR AIRLINES CA",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  RSL: { name: "RIO SUL", nacionality: CompaniesNacionality.BRASILEIRA },
  RSU: {
    name: "CIA BOLIVIANA DE TRASNP. AEREO",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  RZO: {
    name: "SATA INTERNACIONAL - SERVIÇOS E TRANSPORTES AÉREOS S.A.",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  SAA: {
    name: "SOUTH µFRICAN AIRWAYS",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  SAB: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  SBA: { name: "SOL", nacionality: CompaniesNacionality.BRASILEIRA },
  SIA: {
    name: "SINGAPORE AIRLINES",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  SKC: { name: "SKYMASTER ", nacionality: CompaniesNacionality.BRASILEIRA },
  SKX: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  SLM: {
    name: "SURINAM AIRWAYS",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  SLX: { name: "SETE", nacionality: CompaniesNacionality.BRASILEIRA },
  STU: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  SUL: {
    name: "AMÉRICA DO SUL LINHAS AÉREAS",
    nacionality: CompaniesNacionality.BRASILEIRA,
  },
  SWR: { name: "SWISSAIR", nacionality: CompaniesNacionality.ESTRANGEIRA },
  T7B: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  T9B: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  TAB: { name: "TABA", nacionality: CompaniesNacionality.BRASILEIRA },
  TAE: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  TAM: { name: "TAM", nacionality: CompaniesNacionality.BRASILEIRA },
  TAP: {
    name: "TAP AIR PORTUGAL",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  TBA: { name: "TRANSBRASIL", nacionality: CompaniesNacionality.BRASILEIRA },
  TCJ: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  TCV: {
    name: "EMPRESA DE TRANSPORTES AEREOS DE CABO VERDE S.A.",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  THY: {
    name: "TURKISH AIRLINES INC.",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  TIB: { name: "TRIP", nacionality: CompaniesNacionality.BRASILEIRA },
  TIM: { name: "TEAM", nacionality: CompaniesNacionality.BRASILEIRA },
  TIN: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  TIO: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  TLL: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  TOB: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  TPA: { name: "TAMPA S/A", nacionality: CompaniesNacionality.ESTRANGEIRA },
  TPE: {
    name: "TRANSPORTES AEREOS PRESIDENTE S.A",
    nacionality: CompaniesNacionality.BRASILEIRA,
  },
  TPU: {
    name: "TRASAMERICA  AIRLINES-TACAPERU",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  TSD: { name: "TAF ", nacionality: CompaniesNacionality.BRASILEIRA },
  TTL: { name: "TOTAL", nacionality: CompaniesNacionality.BRASILEIRA },
  TU4: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  TU6: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  TUI: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  TUS: { name: "ABSA", nacionality: CompaniesNacionality.BRASILEIRA },
  TVJ: { name: "TAVAJ", nacionality: CompaniesNacionality.BRASILEIRA },
  UAE: { name: "EMIRATES", nacionality: CompaniesNacionality.ESTRANGEIRA },
  UAL: {
    name: "UNITED AIRLINES",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  UPS: {
    name: "UNITED PARCEL SERVICE",
    nacionality: CompaniesNacionality.ESTRANGEIRA,
  },
  UVG: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  VBR: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  VCR: { name: "CRUISER", nacionality: CompaniesNacionality.BRASILEIRA },
  VLO: { name: "VARIG LOG", nacionality: CompaniesNacionality.BRASILEIRA },
  VRG: {
    name: "VRG LINHAS AREAS",
    nacionality: CompaniesNacionality.BRASILEIRA,
  },
  VRN: {
    name: "VRG LINHAS AEREAS",
    nacionality: CompaniesNacionality.BRASILEIRA,
  },
  VSO: {
    name: "NÃO INFORMADO",
    nacionality: CompaniesNacionality.NAO_INFORMADO,
  },
  VSP: { name: "VASP", nacionality: CompaniesNacionality.BRASILEIRA },
  WEB: { name: "WEBJET", nacionality: CompaniesNacionality.BRASILEIRA },
};

export function getAllCompaniesArr(): CompanyWithInitials[] {
  return Object.entries(companies).map(([initials, data]) => ({
    ...data,
    initials: initials as Initials,
  }));
}
