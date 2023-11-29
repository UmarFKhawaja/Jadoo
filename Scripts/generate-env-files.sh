#!/usr/bin/env bash

pushd .. >/dev/null || exit

cat << EOF > Services/jadoo/.env
DATABASE_HOST="localhost"
DATABASE_PORT="43306"
DATABASE_USERNAME="jadoo"
DATABASE_PASSWORD="Jadoo123"
DATABASE_DATABASE="jadoo"

CACHE_HOST="localhost"
CACHE_PORT="46379"
CACHE_PASSWORD="Jadoo123"
CACHE_USE_TLS="false"

AUTH_HTTP_PORT="43592"
AUTH_GRPC_PORT="43593"
EOF

cat << EOF > Modules/data-module/.env
DATABASE_HOST="localhost"
DATABASE_PORT="43306"
DATABASE_USERNAME="jadoo"
DATABASE_PASSWORD="Jadoo123"
DATABASE_DATABASE="jadoo"

CACHE_HOST="localhost"
CACHE_PORT="46379"
CACHE_PASSWORD="Jadoo123"
CACHE_USE_TLS="false"

AUTH_HTTP_PORT="43592"
AUTH_GRPC_PORT="43593"
EOF

cat << EOF > Apps/browser-app/.env
BROWSER_PORT="5080"
BROWSER_CRT_FILE="../../Keys/localhost.crt"
BROWSER_KEY_FILE="../../Keys/localhost.key"

SERVER_URL="https://localhost:4180"
EOF

cat << EOF > Apps/server-app/.env
CORS_ORIGIN="https://localhost:4080"

SERVER_PORT="4180"
SERVER_CRT_FILE="../../Keys/localhost.crt"
SERVER_KEY_FILE="../../Keys/localhost.key"

SESSION_DOMAIN="localhost"
SESSION_SECRET="the quick brown fox jumped over the lazy dog"

DATABASE_HOST="localhost"
DATABASE_PORT="43306"
DATABASE_USERNAME="jadoo"
DATABASE_PASSWORD="Jadoo123"
DATABASE_DATABASE="jadoo"

CACHE_HOST="localhost"
CACHE_PORT="46379"
CACHE_PASSWORD="Jadoo123"
CACHE_USE_TLS="false"

AUTH_HTTP_PORT="43592"
AUTH_GRPC_PORT="43593"
EOF

cat << EOF > Tools/helper-tool/.env
DATABASE_HOST="localhost"
DATABASE_PORT="43306"
DATABASE_USERNAME="jadoo"
DATABASE_PASSWORD="Jadoo123"
DATABASE_DATABASE="jadoo"

CACHE_HOST="localhost"
CACHE_PORT="46379"
CACHE_PASSWORD="Jadoo123"
CACHE_USE_TLS="false"

AUTH_HTTP_PORT="43592"
AUTH_GRPC_PORT="43593"
EOF

popd >/dev/null || exit
