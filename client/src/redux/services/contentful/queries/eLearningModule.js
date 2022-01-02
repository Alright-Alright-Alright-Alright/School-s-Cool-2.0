const eLearningModuleQuery = (moduleId) => `{
  eLearningModule (id: "${moduleId}"){
    title
    eLearningLessonsCollection {
      items {
        title 
        sys {
          id
        }
        eLearningPagesCollection {
          items {
            title
          }
        }
      }
    }
  }
}`

export default eLearningModuleQuery
