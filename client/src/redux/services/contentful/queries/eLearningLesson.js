const eLearningLessonQuery = (lessonId) => `{
    eLearningLesson (id: "${lessonId}"){
        title
        description
        eLearningPagesCollection {
          items {
            title
            image {
                url
              }
              richTextField {
                json
              }
          }
        }
      }
  }`

export default eLearningLessonQuery
