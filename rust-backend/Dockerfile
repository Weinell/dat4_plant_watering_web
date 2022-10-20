FROM rust:1.64.0 AS builder

RUN USER=root cargo new --bin rust-backend
WORKDIR ./rust-backend
COPY ./Cargo.toml ./Cargo.toml
RUN cargo build --release
RUN rm src/*.rs

ADD . ./

RUN rm ./target/release/deps/rust_backend*
RUN cargo build --release


FROM debian:buster-slim
COPY --from=builder /rust-backend/target/release/rust-backend /usr/src/app/rust-backend

EXPOSE 8000

WORKDIR /usr/src/app

CMD ["./target/release/rust-backend"]
#CMD ["./rust-backend"]