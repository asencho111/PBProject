/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateVoteSession = /* GraphQL */ `
  subscription OnCreateVoteSession {
    onCreateVoteSession {
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
export const onUpdateVoteSession = /* GraphQL */ `
  subscription OnUpdateVoteSession {
    onUpdateVoteSession {
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
export const onDeleteVoteSession = /* GraphQL */ `
  subscription OnDeleteVoteSession {
    onDeleteVoteSession {
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
export const onCreateUserVoteSession = /* GraphQL */ `
  subscription OnCreateUserVoteSession {
    onCreateUserVoteSession {
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
export const onUpdateUserVoteSession = /* GraphQL */ `
  subscription OnUpdateUserVoteSession {
    onUpdateUserVoteSession {
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
export const onDeleteUserVoteSession = /* GraphQL */ `
  subscription OnDeleteUserVoteSession {
    onDeleteUserVoteSession {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      pid
      cost
      description
      vid
      votes
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      pid
      cost
      description
      vid
      votes
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      pid
      cost
      description
      vid
      votes
    }
  }
`;
export const onCreateResult = /* GraphQL */ `
  subscription OnCreateResult {
    onCreateResult {
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
export const onUpdateResult = /* GraphQL */ `
  subscription OnUpdateResult {
    onUpdateResult {
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
export const onDeleteResult = /* GraphQL */ `
  subscription OnDeleteResult {
    onDeleteResult {
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
