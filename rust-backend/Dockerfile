# Stage 1
FROM rust:1.64.0 AS planner

WORKDIR /app

RUN cargo install cargo-chef

COPY . .

RUN cargo chef prepare --recipe-path recipe.json


# Stage 2
FROM rust:1.64.0 AS cacher

WORKDIR /app

RUN cargo install cargo-chef

COPY --from=planner /app/recipe.json recipe.json

RUN cargo chef cook --release --recipe-path recipe.json


# Stage 3
FROM rust:1.64.0 AS builder

COPY . /app
WORKDIR /app

COPY --from=cacher /app/target target
COPY --from=cacher /usr/local/cargo  /usr/local/cargo

RUN cargo build --release

FROM debian:buster-slim
COPY --from=builder /app/target/release/rust-backend /app

EXPOSE 5000

LABEL traefik.enable="true"
LABEL traefik.http.routers.backend.rule=Host(`weinell.dk`)
LABEL traefik.http.routers.backend.rule=PathPrefix(`/api/`)
LABEL traefik.http.routers.backend.entrypoints="web,websecure"
LABEL traefik.http.routers.backend.tls="true"
LABEL traefik.http.routers.backend.tls.certresolver="production"

ENTRYPOINT ["./app"]
