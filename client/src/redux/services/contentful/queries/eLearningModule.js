const eLearningModuleQuery = (moduleId) => `{
    eLearningModule (id: "${moduleId}") {
        title
        description
        pagesCollection {
          items {
            title
            image {
                url
              }
            plainTextField
            richTextField {
            json
              }
            plainLongTextField
          }
        }
      }
  }`

export default eLearningModuleQuery
