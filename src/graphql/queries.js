/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(username: $username) {
      username
      area
      voteSessions {
        items {
          uvsid
          username
          vid
          start
          end
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $username: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        username
        area
        voteSessions {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getVoteSession = /* GraphQL */ `
  query GetVoteSession($vid: ID!) {
    getVoteSession(vid: $vid) {
      vid
      budget
      description
      area
      votingMethod
      users {
        items {
          uvsid
          username
          vid
          start
          end
        }
        nextToken
      }
      projects {
        items {
          pid
          cost
          description
          vid
          votes
        }
        nextToken
      }
      start
      end
      result {
        rid
        vid
        description
        winningProjects {
          pid
          cost
          description
          vid
          votes
        }
        date
      }
    }
  }
`;
export const listVoteSessions = /* GraphQL */ `
  query ListVoteSessions(
    $vid: ID
    $filter: ModelVoteSessionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listVoteSessions(
      vid: $vid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        vid
        budget
        description
        area
        votingMethod
        users {
          nextToken
        }
        projects {
          nextToken
        }
        start
        end
        result {
          rid
          vid
          description
          date
        }
      }
      nextToken
    }
  }
`;
export const getUserVoteSession = /* GraphQL */ `
  query GetUserVoteSession($id: ID!) {
    getUserVoteSession(id: $id) {
      uvsid
      username
      vid
      start
      end
      user {
        username
        area
        voteSessions {
          nextToken
        }
      }
      votesession {
        vid
        budget
        description
        area
        votingMethod
        users {
          nextToken
        }
        projects {
          nextToken
        }
        start
        end
        result {
          rid
          vid
          description
          date
        }
      }
    }
  }
`;
export const listUserVoteSessions = /* GraphQL */ `
  query ListUserVoteSessions(
    $filter: ModelUserVoteSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserVoteSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        uvsid
        username
        vid
        start
        end
        user {
          username
          area
        }
        votesession {
          vid
          budget
          description
          area
          votingMethod
          start
          end
        }
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($pid: ID!) {
    getProject(pid: $pid) {
      pid
      cost
      description
      vid
      votes
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $pid: ID
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProjects(
      pid: $pid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        pid
        cost
        description
        vid
        votes
      }
      nextToken
    }
  }
`;
export const getResult = /* GraphQL */ `
  query GetResult($rid: ID!) {
    getResult(rid: $rid) {
      rid
      vid
      description
      winningProjects {
        pid
        cost
        description
        vid
        votes
      }
      date
    }
  }
`;
export const listResults = /* GraphQL */ `
  query ListResults(
    $rid: ID
    $filter: ModelResultFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listResults(
      rid: $rid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        rid
        vid
        description
        winningProjects {
          pid
          cost
          description
          vid
          votes
        }
        date
      }
      nextToken
    }
  }
`;
