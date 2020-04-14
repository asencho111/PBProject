/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createVoteSession = /* GraphQL */ `
  mutation CreateVoteSession(
    $input: CreateVoteSessionInput!
    $condition: ModelVoteSessionConditionInput
  ) {
    createVoteSession(input: $input, condition: $condition) {
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
export const updateVoteSession = /* GraphQL */ `
  mutation UpdateVoteSession(
    $input: UpdateVoteSessionInput!
    $condition: ModelVoteSessionConditionInput
  ) {
    updateVoteSession(input: $input, condition: $condition) {
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
export const deleteVoteSession = /* GraphQL */ `
  mutation DeleteVoteSession(
    $input: DeleteVoteSessionInput!
    $condition: ModelVoteSessionConditionInput
  ) {
    deleteVoteSession(input: $input, condition: $condition) {
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
export const createUserVoteSession = /* GraphQL */ `
  mutation CreateUserVoteSession(
    $input: CreateUserVoteSessionInput!
    $condition: ModelUserVoteSessionConditionInput
  ) {
    createUserVoteSession(input: $input, condition: $condition) {
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
export const updateUserVoteSession = /* GraphQL */ `
  mutation UpdateUserVoteSession(
    $input: UpdateUserVoteSessionInput!
    $condition: ModelUserVoteSessionConditionInput
  ) {
    updateUserVoteSession(input: $input, condition: $condition) {
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
export const deleteUserVoteSession = /* GraphQL */ `
  mutation DeleteUserVoteSession(
    $input: DeleteUserVoteSessionInput!
    $condition: ModelUserVoteSessionConditionInput
  ) {
    deleteUserVoteSession(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      pid
      cost
      description
      vid
      votes
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      pid
      cost
      description
      vid
      votes
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      pid
      cost
      description
      vid
      votes
    }
  }
`;
export const createResult = /* GraphQL */ `
  mutation CreateResult(
    $input: CreateResultInput!
    $condition: ModelResultConditionInput
  ) {
    createResult(input: $input, condition: $condition) {
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
export const updateResult = /* GraphQL */ `
  mutation UpdateResult(
    $input: UpdateResultInput!
    $condition: ModelResultConditionInput
  ) {
    updateResult(input: $input, condition: $condition) {
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
export const deleteResult = /* GraphQL */ `
  mutation DeleteResult(
    $input: DeleteResultInput!
    $condition: ModelResultConditionInput
  ) {
    deleteResult(input: $input, condition: $condition) {
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
