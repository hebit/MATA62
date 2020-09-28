import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class Flights {

    @PrimaryColumn()
    SG_EMPRESA_ICAO: string

    @Column()
    NR_VOO: string

    @Column()
    CODIGO_DI: string

    @Column()
    CODIGO_TIPO_LINHA: string

    @Column()
    SG_AEROPORTO_ORIGEM_ICAO: string

    @Column()
    SG_AEROPORTO_DESTINO_ICAO: string

    @Column()
    PARTIDA_PREVISTA: timestamp

    @Column()
    PARTIDA_REAL: timestamp

    @Column()
    CHEGADA_PREVISTA: timestamp

    @Column()
    CHEGADA_REAL: timestamp

    @Column()
    SITUACAO: string

    @Column()
    CODIGO_JUSTIFICATIVA: string


}
