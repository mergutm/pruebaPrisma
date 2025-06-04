# Arrancar contenedor de BD
```bash
docker compose up -d 
```

# Configuración base de Prisma

```bash
npx prisma init
```

modificar archivo .env
```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mydb?schema=public"
```

Agregar a prisma/schema.prisma
```js
model Todo {
  id          String   @id @default(uuid())
  description String
  complete    Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

# migrar
```bash
npx prisma migrate dev
```

Ya debería verse la BD actualizada usando algún visor de BD


 # crear el cliente para conectarse y hacer cambios en la BD

```bash
npx prisma generate 
```

``` 
 npx prisma generate 
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (v6.8.2) to ./node_modules/@prisma/client in 83ms

Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)

Tip: Want to turn off tips and other hints? https://pris.ly/tip-4-nohints
``` 

## Documentación para uso de prisma client
https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction#3-importing-prisma-client




## Conexion a BD


Usuario postgres se conecta a la base de datos mydb

```bash
psql -U postgres -d mydb            
```

```bash
psql -U tu_usuario -d tu_base_de_datos -h tu_host -p tu_puerto
```

## Mostrar todas las bases de datos:
```sql
\l
```

```sql
\list
```


## Conectarse a otra base de datos (una vez ya conectado a psql):


```sql
\c nombre_de_la_nueva_base_de_datos
```


## Mostrar todas las tablas en la base de datos actual:

```sql
\dt

```


## Mostrar todas las tablas, vistas y secuencias (en todos los esquemas):


```sql
\d
```


```
db=# \d  "public"."Todo" ;
                                   Table "public.Todo"
   Column    |              Type              | Collation | Nullable |      Default      
-------------+--------------------------------+-----------+----------+-------------------
 id          | text                           |           | not null | 
 description | text                           |           | not null | 
 createdAt   | timestamp(3) without time zone |           | not null | CURRENT_TIMESTAMP
 updatedAt   | timestamp(3) without time zone |           | not null | 
 completed   | boolean                        |           | not null | false
 userId      | text                           |           |          | 
Indexes:
    "Todo_pkey" PRIMARY KEY, btree (id)
```

## Mostrar la estructura (esquema) de una tabla específica:

```sql
\d nombre_de_la_tabla

```



## Salir de psql:

```sql
\q
```

## Ejecutar un comando del shell desde psql:

```sql
\! comando_del_shell
```

## Mostrar ayuda sobre sentencias SQL:

```
\h
```
