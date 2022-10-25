use warp::{Filter, Rejection, Reply};

type Result<T> = std::result::Result<T, Rejection>;

#[tokio::main]
async fn main() {

    //let root_route = warp::path::end().map(|| "Welcome :)");

    let api_route = warp::path!("api").and_then(health_handler);

    // let second = warp::path!("second").and_then(second_endpoint);

    let routes = api_route.with(warp::cors().allow_any_origin());
    /*let routes = warp::get()
    .and(root_route
        .or(api_route)
    );*/

    println!("Started server at localhost:8080");
    warp::serve(routes).run(([0, 0, 0, 0], 8080)).await;
}

async fn health_handler() -> Result<impl Reply> {
    Ok("Healthy!")
}
