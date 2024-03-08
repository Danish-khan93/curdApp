export type INITIALSTATE = {
  post: [] | POSTTYPE[];
  isLoading: boolean;
  isError: null | string;
};

export type PAGINATIONTYPE = {
  skip: number;
  limit: number;
};

export type POSTTYPE = {
  userId: number;
  id: number;
  title: string;
  body: string;
};


export type POSTDATATYPE ={
    title:string,
    body:string,
    
}