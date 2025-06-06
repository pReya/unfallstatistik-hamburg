import { column, defineDb, defineTable } from "astro:db";

const accidents = defineTable({
  columns: {
    LfNr: column.number(),
    Datum: column.text(),
    Zeit: column.text(),
    Tag: column.number(),
    "Koord.x": column.text(),
    "Koord.y": column.text(),
    Kl: column.number(),
    NrBu: column.text(),
    Zif: column.number(),
    Gemeinde: column.text(),
    OL: column.number(),
    Gt: column.number(),
    Sv: column.number(),
    Lv: column.number(),
    Bet: column.number(),
    Art: column.number(),
    Char1: column.number(),
    Char2: column.number(),
    Char3: column.number(),
    Beso1: column.number(),
    Beso2: column.number(),
    Beso3: column.number(),
    LZ: column.number(),
    L: column.number(),
    SZ: column.number(),
    AH: column.number(),
    Kat: column.number(),
    Typ: column.number(),
    Urs01: column.number(),
    Urs02: column.number(),
    Urs03: column.number(),
    AV1: column.number(),
    AV2: column.number(),
    Jahr: column.number(),
    Mt: column.number(),
    Licht: column.text(),
    Str_Zus: column.text(),
    Bet_01: column.text(),
    Bet_02: column.text(),
    Geschl_01: column.text(),
    Geschl_02: column.text(),
    Alter_01: column.number({ optional: true }),
    Alter_02: column.number({ optional: true }),
    Unf_Typ: column.text(),
    Kz_Bet1: column.text(),
    Kz_Bet2: column.text(),
    BAB_Km: column.number(),
    M: column.number(),
    OrdNr: column.number(),
    Fahrtrichtung: column.text(),
    "TagebuchNr.": column.text(),
    WoTag: column.text(),
    GlobalId: column.text({ primaryKey: true }),
  },
});


// https://astro.build/db/config
export default defineDb({
  tables: { accidents },
});
