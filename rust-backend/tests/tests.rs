#[cfg(test)]
mod tests {
    use warp::http::StatusCode;
    use warp::test::request;
    use filters::filters;

    #[tokio::test]
    async fn try_list() {
        let api = filters::list();

        let response = request()
            .method("GET")
            .path("/plant")
            .reply(&api)
            .await;

        assert_eq!(response.status(), StatusCode::ACCEPTED);
    }
}