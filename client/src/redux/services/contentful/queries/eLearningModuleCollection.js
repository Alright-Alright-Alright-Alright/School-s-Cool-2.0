const eLearningModuleCollectionQuery = `{
  eLearningModuleCollection {
    items {
      title
      sys {
        id
      }
      eLearningLessonsCollection {
        items {
          title
          sys {
            id
          }
        }
      }
      
    }
  }
    }`

export default eLearningModuleCollectionQuery
