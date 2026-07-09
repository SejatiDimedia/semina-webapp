import {
  START_FETCHING_PARTICIPANTS,
  SUCCESS_FETCHING_PARTICIPANTS,
  ERROR_FETCHING_PARTICIPANTS,
  SET_KEYWORD,
} from "./constants";

import { getData } from "../../utils/fetchData";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";

let debouncedFetchParticipants = debounce(getData, 1000);

export const startFetchingParticipants = () => {
  return {
    type: START_FETCHING_PARTICIPANTS,
  };
};

export const successFetchingParticipants = ({ participants }) => {
  return {
    type: SUCCESS_FETCHING_PARTICIPANTS,
    participants,
  };
};

export const errorFetchingParticipants = () => {
  return {
    type: ERROR_FETCHING_PARTICIPANTS,
  };
};

export const fetchParticipants = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingParticipants());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let params = {
        keyword: getState().participants.keyword,
      };

      let res = await debouncedFetchParticipants("/cms/participants", params);

      res.data.data.forEach((res) => {
        res.avatar = res.image;
      });
      console.log(res);

      dispatch(
        successFetchingParticipants({
          participants: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingParticipants());
    }
  };
};

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  };
};
