#[cfg(test)]
mod tests {
    use warp::http::StatusCode;
    use warp::test::request;
    use super::filters;

    #[tokio::test]
    async fn try_list() {
        let api = filters::list();

        let response = request()
            .method("GET")
            .path("/holodeck")
            .reply(&api)
            .await;

        assert_eq!(response.status(), StatusCode::ACCEPTED);
    }
}