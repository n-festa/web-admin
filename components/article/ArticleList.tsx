import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

import ErrorMessage from "../common/ErrorMessage";
import LoadingSpinner from "../common/LoadingSpinner";
import { usePageState } from "../../lib/context/PageContext";
import {
  usePageCountState,
  usePageCountDispatch,
} from "../../lib/context/PageCountContext";
import useViewport from "../../lib/hooks/useViewport";
import { SERVER_BASE_URL, DEFAULT_LIMIT ,SERVER_TEST_URL,SERVER_LOCAL_URL} from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";

const ArticleList = () =>{
	const page = usePageState();
	const pageCount = usePageCountState();
	const setPageCount = usePageCountDispatch();

	//let fetchURL = `${SERVER_TEST_URL}/articles`;
	let fetchURL = `${SERVER_BASE_URL}/admin`;	
	const { data, error } = useSWR(fetchURL, fetcher);

	if (error) {
    return (
      <div className="col-md-9">
        <div className="feed-toggle">
          <ul className="nav nav-pills outline-active"></ul>
        </div>
        <ErrorMessage message="Cannot load recent articles..." />
      </div>
    );
  }

	if (!data) return <LoadingSpinner />;
	//const { data } = data;
	const users = data['data']['result'];
	if (users && users.length === 0) {
    return <div className="">No articles are here... yet.</div>;
  }
  return (
  		<>
  			{users?.map((user) => (
  				 <p>{user.email}</p> 
      	))}
      </>
  )
}

export default ArticleList;