const eLearningModuleQuery = (moduleId) => `{
  eLearningModule (id: "${moduleId}"){
    title
    eLearningLessonsCollection {
      items {
        title
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
