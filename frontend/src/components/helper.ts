import Cookies from "js-cookie";

export const transformCandidates = (candidates: Array<Record<any, any>>) => {
  let names = candidates.map((candidate) => candidate.name).join(", ");
  return names;
};

export const isUserPoll = (poll: any, user: string | null) => {
  if (poll.createdBy === user) return true;
  return false;
};

export const hasUserLiked = (poll: any, user: string | null) => {
  if (!isUserPoll(poll, user)) return false;
  return poll.likes.includes(user);
};

export const getUserId = () => {
  return Cookies.get("user_id") || null;
};

export const getToken = () => {
  return Cookies.get("token");
};

export const logoutUser = () => {
  Cookies.remove("token");
  Cookies.remove("user_id");
};

export const getVoteResult = (poll: Record<string, any>) => {
  var counts = poll.votes.reduce((p: any, c: any) => {
    var name = c.candidate;
    if (!p.hasOwnProperty(name)) {
      p[name] = 0;
    }
    p[name]++;
    return p;
  }, {});

  var result = Object.keys(counts).map((k) => {
    if (!poll.candidates.find((i: any) => i.id === Number(k)).name) return;
    return {
      candidate: poll.candidates
        .find((i: any) => i.id === Number(k))
        .name.toUpperCase(),
      votes: counts[k],
    };
  });

  return result;
};
