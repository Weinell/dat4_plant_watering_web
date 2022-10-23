use warp::{Filter, Rejection, Reply};

type Result<T> = std::result::Result<T, Rejection>;

#[tokio::main]
async fn main() {
    let health_route = warp::path!("").and_then(health_handler);

    let routes = health_route.with(warp::cors().allow_any_origin());

    println!("Started server at localhost:8080");
    warp::serve(routes).run(([0, 0, 0, 0], 8080)).await;
}

async fn health_handler() -> Result<impl Reply> {
    Ok("Server Works")
}
