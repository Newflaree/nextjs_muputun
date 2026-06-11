# Postgres local

Base local para desarrollo. No usar credenciales productivas ni dumps reales.

Comandos utiles:

```bash
docker compose up -d
docker compose logs -f postgres
docker compose ps
docker compose exec postgres psql -U muputun -d muputun_dev
docker compose down
docker compose down -v
```

Datos para TablePlus:

```text
Host: localhost
Port: 5433
User: muputun
Password: muputun_dev_password
Database: muputun_dev
SSL: Disabled
```

URL local esperada por Next:

```bash
DATABASE_URL=postgresql://muputun:muputun_dev_password@localhost:5433/muputun_dev
```
