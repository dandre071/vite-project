-- Table: public.registro

-- DROP TABLE IF EXISTS public.registro;

CREATE TABLE IF NOT EXISTS public.registro
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    fecha_recibido character varying(512) COLLATE pg_catalog."default",
    fecha_entrega character varying(512) COLLATE pg_catalog."default",
    nombre character varying(512) COLLATE pg_catalog."default",
    nit bigint,
    telefono bigint,
    email character varying(512) COLLATE pg_catalog."default",
    trabajo text[] COLLATE pg_catalog."default",
    recibe character varying(512) COLLATE pg_catalog."default",
    realiza character varying(512) COLLATE pg_catalog."default",
    total integer,
    abono1 integer,
    abono2 text COLLATE pg_catalog."default",
    resta integer,
    estado character varying(512) COLLATE pg_catalog."default",
    observaciones character varying(512) COLLATE pg_catalog."default",
    invoice_data jsonb,
    tipo_cliente text COLLATE pg_catalog."default",
    tipo_recibo text COLLATE pg_catalog."default",
    CONSTRAINT registro_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.registro
    OWNER to postgres;