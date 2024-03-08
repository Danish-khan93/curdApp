import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../feature/store";
import { PAGINATIONTYPE, POSTTYPE } from "../types/postType";
import { postsFetch } from "../feature/slice/postSllice";
import { Box, Pagination } from "@mui/material";
import { Card } from "../component";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [bool, setBool] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const paginationRef = useRef<PAGINATIONTYPE>({
    skip: 0,
    limit: 10,
  });

  const postData = useSelector((state: RootState) => state?.post?.post);

  useEffect(() => {
    if (!bool && postData.length === 0) {
      dispatch(postsFetch(paginationRef?.current));
    }

    return () => {
      setBool(true);
    };
  }, []);
  // on page change handle the skip and limit by useRef hook to handle previous and next page

  const pageChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    console.log(p, e);
    if (p * paginationRef.current.limit >= postData.length) {
      paginationRef.current.skip =
        paginationRef?.current?.limit * p - paginationRef?.current?.limit;
      dispatch(postsFetch(paginationRef?.current));
    } else if (p * paginationRef.current.limit <= postData.length) {
      return postData.slice(
        p * paginationRef.current.limit - 10,
        p * paginationRef.current.limit
      );
    }
  };

  return (
    <Box className="flex flex-col items-center">
      <Box className="flex justify-evenly flex-wrap gap-10 mx-[10px] my-[30px]">
        {postData
          .slice(
            page * paginationRef.current.limit - 10,
            page * paginationRef.current.limit
          )
          .map((value: POSTTYPE) => {
            return <Card key={value?.id} value={value} />;
          })}
      </Box>
      <Box className="my-5">
        <Pagination count={10} onChange={pageChange} />
      </Box>
    </Box>
  );
};

export default Home;
