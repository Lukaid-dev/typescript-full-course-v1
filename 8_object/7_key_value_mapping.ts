/**
 * Key Value Mapping
 */

enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
};

type UserApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
};

// for DRY
type UserApiStatus2 = {
  getUser: GlobalApiStatus["getUser"];
  paginateUsers: GlobalApiStatus["paginateUsers"];
  banUser: GlobalApiStatus["banUser"];
};

// for DRY
type UserApiStatus3 = {
  // in을 활용한 루핑, **중요**
  [k in "getUser" | "paginateUsers" | "banUser"]: GlobalApiStatus[k];
};

// 고르고 싶은거 (유틸리티 타입)
type PickedUserApiStatus = Pick<
  GlobalApiStatus,
  "getUser" | "banUser" | "paginateUsers"
>;

// 제외하고 싶은거 (유틸리티 타입)
type OmitUserApiStatus = Omit<GlobalApiStatus, "getPosts">;

/**
 * keyof
 */
type AllKeys = keyof GlobalApiStatus; // 키값만 가져옴, **중요**

const key: AllKeys = "banUser"; // 'banUser' | 'getUser' | 'paginateUsers' | 'banUser'

type KeyOfUserApiStatus = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
};

type KeyOfUserApiStatus2 = {
  // 유틸리티 타입 Exclude
  [k in Exclude<keyof GlobalApiStatus, "getPosts">]: GlobalApiStatus[k];
};

type KeyOfUserApiStatus3 = {
  // 전부 옵셔널로 만들기
  [k in Exclude<keyof GlobalApiStatus, "getPosts">]?: GlobalApiStatus[k];
};

interface LoadingStatus {
  type: "loading";
  data: string[];
}

interface ErrorStatus {
  type: "error";
  message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus["type"]; // "loading" | "error"
